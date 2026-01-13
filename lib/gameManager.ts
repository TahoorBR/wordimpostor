import { Room, GameState, Player, RoomSettings } from '@/types/game';
import { kvStorage } from './kvStorage';

export const createRoom = async (host: Player, code: string, settings: RoomSettings): Promise<GameState> => {
  const room: Room = {
    id: code,
    code,
    host: host.id,
    players: [host],
    status: 'waiting',
    createdAt: Date.now(),
    settings,
    currentRound: 0,
    currentTurnIndex: 0,
    revealEndTime: undefined,
  };

  const gameState: GameState = {
    room,
    clues: [],
    votes: [],
  };

  await kvStorage.setRoom(code, gameState);
  
  return gameState;
};

export const getRoom = async (code: string): Promise<GameState | null> => {
  return await kvStorage.getRoom(code);
};

export const getAllRooms = async (): Promise<GameState[]> => {
  return await kvStorage.getAllRooms();
};

export const updateRoom = async (code: string, gameState: GameState): Promise<void> => {
  await kvStorage.setRoom(code, gameState);
};

export const deleteRoom = async (code: string): Promise<void> => {
  await kvStorage.deleteRoom(code);
};

export const addPlayerToRoom = async (code: string, player: Player): Promise<GameState | null> => {
  const game = await getRoom(code);
  if (!game) return null;
  
  if (game.room.players.length >= game.room.settings.maxPlayers) {
    return null;
  }
  
  const existingPlayer = game.room.players.find(p => p.id === player.id);
  if (existingPlayer) {
    return game;
  }
  
  game.room.players.push(player);
  await updateRoom(code, game);
  return game;
};

export const removePlayerFromRoom = async (code: string, playerId: string): Promise<void> => {
  const game = await getRoom(code);
  if (!game) return;
  
  game.room.players = game.room.players.filter(p => p.id !== playerId);
  
  if (game.room.players.length === 0) {
    await deleteRoom(code);
  } else {
    // Transfer host if needed
    if (game.room.host === playerId) {
      game.room.host = game.room.players[0].id;
      game.room.players[0].isHost = true;
    }
    await updateRoom(code, game);
  }
};
