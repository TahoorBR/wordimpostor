import { Room, GameState, Player, RoomSettings } from '@/types/game';

// In-memory storage for rooms (in production, use a database)
const rooms = new Map<string, GameState>();
const roomExpiry = new Map<string, NodeJS.Timeout>();

export const createRoom = (host: Player, code: string, settings: RoomSettings): GameState => {
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

  rooms.set(code, gameState);
  
  // Auto-delete room after 2 hours of inactivity
  setRoomExpiry(code);
  
  return gameState;
};

export const getRoom = (code: string): GameState | undefined => {
  return rooms.get(code);
};

export const getAllRooms = (): GameState[] => {
  return Array.from(rooms.values())
    .filter(game => game.room.status === 'waiting')
    .sort((a, b) => b.room.createdAt - a.room.createdAt)
    .slice(0, 10);
};

export const updateRoom = (code: string, gameState: GameState): void => {
  rooms.set(code, gameState);
  setRoomExpiry(code);
};

export const deleteRoom = (code: string): void => {
  const timeout = roomExpiry.get(code);
  if (timeout) {
    clearTimeout(timeout);
    roomExpiry.delete(code);
  }
  rooms.delete(code);
};

const setRoomExpiry = (code: string): void => {
  const existing = roomExpiry.get(code);
  if (existing) clearTimeout(existing);
  
  const timeout = setTimeout(() => {
    deleteRoom(code);
  }, 2 * 60 * 60 * 1000); // 2 hours
  
  roomExpiry.set(code, timeout);
};

export const addPlayerToRoom = (code: string, player: Player): GameState | null => {
  const game = getRoom(code);
  if (!game) return null;
  
  if (game.room.players.length >= game.room.settings.maxPlayers) {
    return null;
  }
  
  const existingPlayer = game.room.players.find(p => p.id === player.id);
  if (existingPlayer) {
    return game;
  }
  
  game.room.players.push(player);
  updateRoom(code, game);
  return game;
};

export const removePlayerFromRoom = (code: string, playerId: string): void => {
  const game = getRoom(code);
  if (!game) return;
  
  game.room.players = game.room.players.filter(p => p.id !== playerId);
  
  if (game.room.players.length === 0) {
    deleteRoom(code);
  } else {
    // Transfer host if needed
    if (game.room.host === playerId) {
      game.room.host = game.room.players[0].id;
      game.room.players[0].isHost = true;
    }
    updateRoom(code, game);
  }
};
