'use client';

import { useEffect, useState, use, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { getProfile, clearCurrentRoom } from '@/lib/storage';
import { GameState, Profile } from '@/types/game';
import * as S from '../styles-new';

export default function RoomPage({ params }: { params: Promise<{ code: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [myWord, setMyWord] = useState<string>('');
  const [isImpostor, setIsImpostor] = useState(false);
  const [selectedVote, setSelectedVote] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [revealTimeLeft, setRevealTimeLeft] = useState(0);

  const fetchGameState = useCallback(async () => {
    try {
      const res = await fetch(`/api/rooms?code=${resolvedParams.code}`);
      if (res.ok) {
        const data = await res.json();
        setGameState(data);
      } else {
        router.push('/');
      }
    } catch (error) {
      console.error('Failed to fetch game state:', error);
    } finally {
      setLoading(false);
    }
  }, [resolvedParams.code, router]);

  const checkRevealPhase = useCallback(async () => {
    if (!profile) return;
    
    await fetch('/api/game', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'checkRevealPhase',
        code: resolvedParams.code,
        playerId: profile.id,
      }),
    });
    
    fetchGameState();
  }, [profile, resolvedParams.code, fetchGameState]);

  useEffect(() => {
    const existingProfile = getProfile();
    if (!existingProfile) {
      router.push('/');
      return;
    }
    setProfile(existingProfile);
    
    fetchGameState();
    const interval = setInterval(fetchGameState, 3000);
    return () => clearInterval(interval);
  }, [resolvedParams.code, router, fetchGameState]);

  useEffect(() => {
    // Countdown timer for reveal phase
    if (gameState?.room.status === 'revealing' && gameState.room.revealEndTime) {
      const timer = setInterval(() => {
        const timeLeft = Math.max(0, gameState.room.revealEndTime! - Date.now());
        setRevealTimeLeft(Math.ceil(timeLeft / 1000));
        
        if (timeLeft <= 0) {
          clearInterval(timer);
          checkRevealPhase();
        }
      }, 100);
      
      return () => clearInterval(timer);
    }
  }, [gameState?.room.status, gameState?.room.revealEndTime, checkRevealPhase]);

  useEffect(() => {
    // Update word and impostor status from game state when available
    if (profile && gameState?.wordAssignments && gameState.wordAssignments[profile.id]) {
      const assignment = gameState.wordAssignments[profile.id];
      setMyWord(assignment.word);
      setIsImpostor(assignment.isImpostor);
    }
  }, [profile, gameState?.wordAssignments]);

  const toggleReady = async () => {
    if (!profile || !gameState) return;
    
    const player = gameState.room.players.find(p => p.id === profile.id);
    const newReadyState = !player?.isReady;
    
    await fetch('/api/game', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'ready',
        code: resolvedParams.code,
        playerId: profile.id,
        data: { ready: newReadyState },
      }),
    });
    
    fetchGameState();
  };

  const startGame = async () => {
    if (!profile) return;
    
    try {
      await fetch('/api/game', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'start',
          code: resolvedParams.code,
          playerId: profile.id,
        }),
      });
      
      fetchGameState();
    } catch {
      alert('Failed to start game');
    }
  };

  const markTurnDone = async () => {
    if (!profile) return;
    
    await fetch('/api/game', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'markTurnDone',
        code: resolvedParams.code,
        playerId: profile.id,
      }),
    });
    
    fetchGameState();
  };

  const submitVote = async (targetId: string | null = null) => {
    if (!profile) return;
    
    await fetch('/api/game', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'vote',
        code: resolvedParams.code,
        playerId: profile.id,
        data: { targetId },
      }),
    });
    
    fetchGameState();
  };

  const leaveRoom = async () => {
    if (!profile) return;
    
    await fetch('/api/game', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'leave',
        code: resolvedParams.code,
        playerId: profile.id,
      }),
    });
    
    clearCurrentRoom();
    router.push('/');
  };

  if (loading || !gameState || !profile) {
    return (
      <S.LoadingContainer>
        <S.LoadingContent>
          <S.LoadingIcon>🎮</S.LoadingIcon>
          <S.LoadingText>Loading...</S.LoadingText>
        </S.LoadingContent>
      </S.LoadingContainer>
    );
  }

  const isHost = gameState.room.host === profile.id;
  const myPlayer = gameState.room.players.find(p => p.id === profile.id);
  const allReady = gameState.room.players.every(p => p.isReady);
  const canStart = isHost && gameState.room.players.length >= 3 && allReady;
  const currentTurnPlayer = gameState.room.players[gameState.room.currentTurnIndex || 0];
  const isMyTurn = currentTurnPlayer?.id === profile.id;

  return (
    <S.RoomContainer>
      <S.RoomContent>
        {/* Header */}
        <S.RoomHeader>
          <S.RoomInfo>
            <h1>Room: <S.RoomCode>{gameState.room.code}</S.RoomCode></h1>
            <p>
              {gameState.room.players.length}/{gameState.room.settings?.maxPlayers || 8} players
              {gameState.room.status !== 'waiting' && gameState.room.currentRound > 0 && (
                <> • Round {gameState.room.currentRound}/{gameState.room.settings?.totalRounds || 3}</>
              )}
            </p>
          </S.RoomInfo>
          <S.LeaveButton onClick={leaveRoom}>
            <span>🚪</span>
            <span>Leave</span>
          </S.LeaveButton>
        </S.RoomHeader>

        {/* Waiting Lobby */}
        {gameState.room.status === 'waiting' && (
          <S.LobbyCard>
            <h2>Waiting Lobby</h2>
            
            <S.PlayersGrid>
              {gameState.room.players.map((player) => (
                <S.PlayerCard key={player.id} $ready={player.isReady}>
                  <S.PlayerAvatar>{player.avatar}</S.PlayerAvatar>
                  <S.PlayerName>{player.name}</S.PlayerName>
                  {player.isHost && (
                    <S.HostBadge>
                      <span>👑</span>
                      <span>HOST</span>
                    </S.HostBadge>
                  )}
                  {player.isReady && (
                    <S.ReadyBadge>✓ READY</S.ReadyBadge>
                  )}
                </S.PlayerCard>
              ))}
            </S.PlayersGrid>

            <S.ActionRow>
              <S.ReadyButton
                onClick={toggleReady}
                $ready={myPlayer?.isReady}
              >
                {myPlayer?.isReady ? '❌ Not Ready' : '✓ Ready'}
              </S.ReadyButton>
              
              {isHost && (
                <S.StartButton
                  onClick={startGame}
                  disabled={!canStart}
                >
                  🎮 Start Game
                </S.StartButton>
              )}
            </S.ActionRow>

            {isHost && !canStart && (
              <S.InfoText>
                Need at least 3 players and everyone ready to start
              </S.InfoText>
            )}
          </S.LobbyCard>
        )}

        {/* Revealing Phase - 15 second countdown */}
        {gameState.room.status === 'revealing' && (
          <S.GameSection>
            <S.CountdownCard>
              <h2>🎮 Game Starting!</h2>
              <S.CountdownNumber>{revealTimeLeft}</S.CountdownNumber>
              <p>Memorize your word or role...</p>
            </S.CountdownCard>

            <S.WordCard $impostor={isImpostor}>
              {isImpostor ? (
                <>
                  <S.ImpostorBadge>
                    <span>🎭</span>
                    <span>You are the IMPOSTOR!</span>
                  </S.ImpostorBadge>
                  <S.InfoText style={{ marginTop: '1rem', textAlign: 'center' }}>
                    Blend in with the other players without knowing their word!
                  </S.InfoText>
                </>
              ) : (
                <>
                  <h2>Your Word:</h2>
                  <S.Word>{myWord}</S.Word>
                  <S.InfoText style={{ marginTop: '1rem', textAlign: 'center' }}>
                    Remember this word!
                  </S.InfoText>
                </>
              )}
            </S.WordCard>
          </S.GameSection>
        )}

        {/* Playing Phase - Turn-based */}
        {gameState.room.status === 'playing' && (
          <S.GameSection>
            {/* Current Turn Indicator */}
            <S.TurnCard>
              <h2>🎯 Current Turn</h2>
              <S.TurnPlayer>
                <S.TurnAvatar>{currentTurnPlayer?.avatar}</S.TurnAvatar>
                <S.TurnName>
                  {isMyTurn ? "It's your turn!" : `${currentTurnPlayer?.name}'s turn`}
                </S.TurnName>
              </S.TurnPlayer>
              {isMyTurn && !myPlayer?.hasDoneTurn && !myPlayer?.isEliminated && (
                <>
                  <S.InfoText style={{ marginTop: '1rem', textAlign: 'center' }}>
                    Think about the word and click Done when ready
                  </S.InfoText>
                  <S.DoneButton onClick={markTurnDone}>
                    ✓ Done
                  </S.DoneButton>
                </>
              )}
            </S.TurnCard>

            {/* Player Progress */}
            <S.Card style={{ padding: '1.5rem', marginTop: '1rem' }}>
              <h3 style={{ marginBottom: '1rem', color: '#5b4b8a' }}>Players</h3>
              <S.PlayersGrid>
                {gameState.room.players.map((player) => (
                  <S.PlayerCard 
                    key={player.id} 
                    $ready={player.hasDoneTurn} 
                    $eliminated={player.isEliminated}
                  >
                    <S.PlayerAvatar>{player.avatar}</S.PlayerAvatar>
                    <S.PlayerName>{player.name}</S.PlayerName>
                    {player.isEliminated && (
                      <S.EliminatedBadge>ELIMINATED</S.EliminatedBadge>
                    )}
                    {player.hasDoneTurn && !player.isEliminated && (
                      <S.ReadyBadge>✓ DONE</S.ReadyBadge>
                    )}
                  </S.PlayerCard>
                ))}
              </S.PlayersGrid>
            </S.Card>
          </S.GameSection>
        )}

        {/* Voting Phase */}
        {gameState.room.status === 'voting' && (
          <S.VotingCard>
            <h2>
              <span>🗳️</span>
              <span>Vote for the Impostor</span>
            </h2>
            
            {gameState.eliminationResult && (
              <S.EliminationResult>
                <p>
                  <strong>{gameState.eliminationResult.playerName}</strong> was eliminated!
                </p>
                <p>
                  They were {gameState.eliminationResult.wasImpostor ? '🎭 an IMPOSTOR' : '✅ a REGULAR player'}
                </p>
              </S.EliminationResult>
            )}

            {myPlayer?.isEliminated ? (
              <S.InfoText style={{ textAlign: 'center', padding: '2rem', fontSize: '1.125rem' }}>
                You were eliminated. Watch as others vote!
              </S.InfoText>
            ) : (
              <>
                <S.VoteGrid>
                  {gameState.room.players
                    .filter(p => !p.isEliminated)
                    .map((player) => (
                    <S.VoteButton
                      key={player.id}
                      onClick={() => setSelectedVote(player.id)}
                      disabled={myPlayer?.hasVoted || player.id === profile.id}
                      $selected={selectedVote === player.id}
                    >
                      <S.VoteContent>
                        <S.VoteAvatar>{player.avatar}</S.VoteAvatar>
                        <S.VoteInfo>
                          <S.VoteName>{player.name}</S.VoteName>
                          {player.hasVoted && (
                            <S.VoteStatus>Voted</S.VoteStatus>
                          )}
                        </S.VoteInfo>
                      </S.VoteContent>
                    </S.VoteButton>
                  ))}
                </S.VoteGrid>

                {!myPlayer?.hasVoted && (
                  <S.ActionRow>
                    <S.SkipButton onClick={() => submitVote(null)}>
                      ⏭️ Skip Vote
                    </S.SkipButton>
                    <S.CastVoteButton
                      onClick={() => submitVote(selectedVote)}
                      disabled={!selectedVote}
                    >
                      Cast Vote
                    </S.CastVoteButton>
                  </S.ActionRow>
                )}
              </>
            )}
          </S.VotingCard>
        )}

        {/* Game Over */}
        {gameState.room.status === 'finished' && gameState.revealed && (
          <S.GameOverCard>
            <S.WinnerBanner $impostersWon={gameState.winner === 'impostors'}>
              {gameState.winner === 'impostors' ? '🎭 IMPOSTORS WIN!' : '✅ REGULARS WIN!'}
            </S.WinnerBanner>
            
            <h2>Final Results</h2>
            
            <S.ResultsList>
              {gameState.room.players.map((player) => (
                <S.ResultCard key={player.id}>
                  <S.ResultPlayer>
                    <S.ResultAvatar>{player.avatar}</S.ResultAvatar>
                    <S.ResultName>{player.name}</S.ResultName>
                  </S.ResultPlayer>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <S.ResultStatus>
                      {player.isImpostor ? '🎭 IMPOSTOR' : '✅ REGULAR'}
                    </S.ResultStatus>
                    {player.isEliminated && (
                      <span style={{ color: '#dc2626', fontSize: '0.875rem', fontWeight: 600 }}>
                        (Eliminated)
                      </span>
                    )}
                  </div>
                </S.ResultCard>
              ))}
            </S.ResultsList>

            <S.HomeButton onClick={() => router.push('/')}>
              <span>🏠</span>
              <span>Back to Home</span>
            </S.HomeButton>
          </S.GameOverCard>
        )}
      </S.RoomContent>
    </S.RoomContainer>
  );
}
