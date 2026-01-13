import { kv } from '@vercel/kv';
import { GameState } from '@/types/game';

const ROOMS_KEY = 'rooms:all';
const ROOM_PREFIX = 'room:';
const ROOM_TTL = 2 * 60 * 60; // 2 hours in seconds

export const kvStorage = {
  async getRoom(code: string): Promise<GameState | null> {
    try {
      const room = await kv.get<GameState>(`${ROOM_PREFIX}${code}`);
      return room;
    } catch (error) {
      console.error('KV get error:', error);
      return null;
    }
  },

  async setRoom(code: string, gameState: GameState): Promise<void> {
    try {
      await kv.set(`${ROOM_PREFIX}${code}`, gameState, { ex: ROOM_TTL });
      // Add to rooms list
      await kv.sadd(ROOMS_KEY, code);
    } catch (error) {
      console.error('KV set error:', error);
    }
  },

  async deleteRoom(code: string): Promise<void> {
    try {
      await kv.del(`${ROOM_PREFIX}${code}`);
      await kv.srem(ROOMS_KEY, code);
    } catch (error) {
      console.error('KV delete error:', error);
    }
  },

  async getAllRooms(): Promise<GameState[]> {
    try {
      const roomCodes = await kv.smembers(ROOMS_KEY);
      if (!roomCodes || roomCodes.length === 0) return [];

      const rooms: GameState[] = [];
      for (const code of roomCodes) {
        const room = await this.getRoom(code as string);
        if (room && room.room.status === 'waiting') {
          rooms.push(room);
        }
      }

      return rooms
        .sort((a, b) => b.room.createdAt - a.room.createdAt)
        .slice(0, 10);
    } catch (error) {
      console.error('KV get all rooms error:', error);
      return [];
    }
  },
};
