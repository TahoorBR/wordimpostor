'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProfile, saveProfile, generateId, saveCurrentRoom } from '@/lib/storage';
import { Profile, AVATARS, GameState, WORD_CATEGORIES, RoomSettings } from '@/types/game';
import * as S from './styles-new';

export default function Home() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [name, setName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[0]);
  const [roomCode, setRoomCode] = useState('');
  const [rooms, setRooms] = useState<GameState[]>([]);
  const [loading, setLoading] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // Room Settings
  const [settings, setSettings] = useState<RoomSettings>({
    maxPlayers: 6,
    impostorCount: 1,
    category: 'random',
    totalRounds: 3,
  });

  useEffect(() => {
    const existingProfile = getProfile();
    if (existingProfile) {
      setProfile(existingProfile);
      setName(existingProfile.name);
      setSelectedAvatar(existingProfile.avatar);
    } else {
      setShowNameModal(true);
    }
    
    fetchRooms();
    const interval = setInterval(fetchRooms, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchRooms = async () => {
    try {
      const res = await fetch('/api/rooms');
      const data = await res.json();
      setRooms(data);
    } catch (error) {
      console.error('Failed to fetch rooms:', error);
    }
  };

  const createProfile = () => {
    if (!name.trim()) return;
    
    const newProfile: Profile = {
      id: generateId(),
      name: name.trim(),
      avatar: selectedAvatar,
      gamesPlayed: 0,
      gamesWon: 0,
    };
    
    saveProfile(newProfile);
    setProfile(newProfile);
    setShowNameModal(false);
  };

  const createRoom = async () => {
    if (!profile) return;
    
    // Validate settings
    if (settings.impostorCount >= settings.maxPlayers) {
      alert('Impostor count must be less than max players!');
      return;
    }
    
    setLoading(true);
    try {
      const res = await fetch('/api/rooms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create',
          player: {
            id: profile.id,
            name: profile.name,
            avatar: profile.avatar,
          },
          settings,
        }),
      });
      
      const data = await res.json();
      if (data.room) {
        saveCurrentRoom(data.room.code);
        router.push(`/room/${data.room.code}`);
      }
    } catch {
      alert('Failed to create room');
    } finally {
      setLoading(false);
    }
  };

  const joinRoom = async (code: string) => {
    if (!profile) return;
    
    setLoading(true);
    try {
      const res = await fetch('/api/rooms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'join',
          code: code.toUpperCase(),
          player: {
            id: profile.id,
            name: profile.name,
            avatar: profile.avatar,
          },
        }),
      });
      
      if (res.ok) {
        await res.json();
        saveCurrentRoom(code.toUpperCase());
        router.push(`/room/${code.toUpperCase()}`);
      } else {
        alert('Failed to join room');
      }
    } catch {
      alert('Failed to join room');
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Container>
      <S.MaxWidth>
        {/* Header */}
        <S.Header>
          <S.TitleContainer>
            <S.TitleEmoji>🎭</S.TitleEmoji>
            <S.Title>Word Impostor</S.Title>
          </S.TitleContainer>
          <S.Subtitle>Find the impostor among you!</S.Subtitle>
          {profile && (
            <S.ProfileBadge>
              <S.ProfileAvatar>{profile.avatar}</S.ProfileAvatar>
              <S.ProfileName>{profile.name}</S.ProfileName>
              <S.EditButton
                onClick={() => setShowNameModal(true)}
                title="Edit profile"
              >
                ✏️
              </S.EditButton>
            </S.ProfileBadge>
          )}
        </S.Header>

        {/* Main Content */}
        <S.Grid>
          {/* Create/Join Section */}
          <S.Card>
            <S.CardTitle>Quick Start</S.CardTitle>
            
            <S.Button
              onClick={() => setShowSettings(!showSettings)}
              variant="secondary"
              style={{ marginBottom: '1rem' }}
            >
              <S.ButtonIcon>⚙️</S.ButtonIcon>
              <span>{showSettings ? 'Hide Settings' : 'Game Settings'}</span>
            </S.Button>

            {showSettings && (
              <div style={{ marginBottom: '1.5rem' }}>
                <S.SettingsGrid>
                  <S.FormGroup>
                    <S.Label>Max Players</S.Label>
                    <S.Select
                      value={settings.maxPlayers}
                      onChange={(e) => setSettings({ ...settings, maxPlayers: parseInt(e.target.value) })}
                    >
                      {[3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <option key={num} value={num}>{num} Players</option>
                      ))}
                    </S.Select>
                  </S.FormGroup>

                  <S.FormGroup>
                    <S.Label>Impostors</S.Label>
                    <S.Select
                      value={settings.impostorCount}
                      onChange={(e) => setSettings({ ...settings, impostorCount: parseInt(e.target.value) })}
                    >
                      {[1, 2, 3].map(num => (
                        <option key={num} value={num} disabled={num >= settings.maxPlayers}>
                          {num} Impostor{num > 1 ? 's' : ''}
                        </option>
                      ))}
                    </S.Select>
                  </S.FormGroup>

                  <S.FormGroup>
                    <S.Label>Word Category</S.Label>
                    <S.Select
                      value={settings.category}
                      onChange={(e) => setSettings({ ...settings, category: e.target.value })}
                    >
                      {WORD_CATEGORIES.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </S.Select>
                  </S.FormGroup>

                  <S.FormGroup>
                    <S.Label>Number of Rounds</S.Label>
                    <S.Select
                      value={settings.totalRounds}
                      onChange={(e) => setSettings({ ...settings, totalRounds: parseInt(e.target.value) })}
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num} Round{num > 1 ? 's' : ''}</option>
                      ))}
                    </S.Select>
                  </S.FormGroup>
                </S.SettingsGrid>
              </div>
            )}
            
            <S.Button
              onClick={createRoom}
              disabled={loading || !profile}
              variant="primary"
            >
              <S.ButtonIcon>🎮</S.ButtonIcon>
              <span>Create New Room</span>
            </S.Button>

            <S.Divider>
              <S.DividerLine />
              <S.DividerText>
                <span>OR</span>
              </S.DividerText>
            </S.Divider>

            <S.InputGroup>
              <S.Input
                type="text"
                placeholder="ENTER CODE"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                maxLength={6}
              />
              <S.Button
                onClick={() => joinRoom(roomCode)}
                disabled={loading || !profile || roomCode.length !== 6}
                variant="secondary"
              >
                <S.ButtonIcon>🚪</S.ButtonIcon>
                <span>Join Room</span>
              </S.Button>
            </S.InputGroup>
          </S.Card>

          {/* Available Rooms */}
          <S.Card>
            <S.CardTitle>Available Rooms</S.CardTitle>
            <S.RoomList>
              {rooms.length === 0 ? (
                <S.EmptyState>
                  <S.EmptyIcon>👻</S.EmptyIcon>
                  <S.EmptyText>No rooms available</S.EmptyText>
                  <S.EmptySubtext>Create one to get started!</S.EmptySubtext>
                </S.EmptyState>
              ) : (
                rooms.map((game) => (
                  <S.RoomCard
                    key={game.room.code}
                    onClick={() => joinRoom(game.room.code)}
                  >
                    <S.RoomHeader>
                      <S.RoomCode>{game.room.code}</S.RoomCode>
                      <S.PlayerCount>
                        {game.room.players.length}/{game.room.settings?.maxPlayers || 6}
                      </S.PlayerCount>
                    </S.RoomHeader>
                    <S.PlayerList>
                      {game.room.players.map((player) => (
                        <S.PlayerBadge key={player.id} title={player.name}>
                          <S.PlayerAvatar>{player.avatar}</S.PlayerAvatar>
                          <S.PlayerName>{player.name}</S.PlayerName>
                        </S.PlayerBadge>
                      ))}
                    </S.PlayerList>
                  </S.RoomCard>
                ))
              )}
            </S.RoomList>
          </S.Card>
        </S.Grid>

        {/* How to Play */}
        <S.InfoSection>
          <S.InfoTitle>
            <span>📖</span>
            <span>How to Play</span>
          </S.InfoTitle>
          <S.InfoGrid>
            <S.InfoCard>
              <S.InfoCardTitle color="#10b981">1. Get Your Word</S.InfoCardTitle>
              <S.InfoCardText>Most players get the same word, but one impostor gets a different word!</S.InfoCardText>
            </S.InfoCard>
            <S.InfoCard>
              <S.InfoCardTitle color="#60a5fa">2. Give Clues</S.InfoCardTitle>
              <S.InfoCardText>Take turns giving one-word clues about your word without being too obvious.</S.InfoCardText>
            </S.InfoCard>
            <S.InfoCard>
              <S.InfoCardTitle color="#a78bfa">3. Vote & Win</S.InfoCardTitle>
              <S.InfoCardText>Discuss and vote for who you think is the impostor. Impostor wins if not caught!</S.InfoCardText>
            </S.InfoCard>
          </S.InfoGrid>
        </S.InfoSection>
      </S.MaxWidth>

      {/* Name Modal */}
      {showNameModal && (
        <S.Modal>
          <S.ModalContent>
            <S.ModalTitle>
              <span>👋</span>
              <span>Welcome!</span>
            </S.ModalTitle>
            
            <S.FormGroup>
              <S.Label>Your Name</S.Label>
              <S.TextInput
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                maxLength={20}
                onKeyPress={(e) => e.key === 'Enter' && createProfile()}
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label>Choose Avatar</S.Label>
              <S.AvatarGrid>
                {AVATARS.map((avatar) => (
                  <S.AvatarButton
                    key={avatar}
                    onClick={() => setSelectedAvatar(avatar)}
                    selected={selectedAvatar === avatar}
                  >
                    {avatar}
                  </S.AvatarButton>
                ))}
              </S.AvatarGrid>
            </S.FormGroup>

            <S.Button
              onClick={createProfile}
              disabled={!name.trim()}
              variant="primary"
            >
              <S.ButtonIcon>🎮</S.ButtonIcon>
              <span>Start Playing!</span>
            </S.Button>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.Container>
  );
}
