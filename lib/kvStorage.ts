import { Redis } from '@upstash/redis';
import { GameState } from '@/types/game';

const redis = Redis.fromEnv();
const ROOMS_KEY = 'rooms:all';
const ROOM_PREFIX = 'room:';
const ROOM_TTL = 2 * 60 * 60; // 2 hours in seconds

export const kvStorage = {
  async getRoom(code: string): Promise<GameState | null> {
    try {
      const room = await redis.get<GameState>(`${ROOM_PREFIX}${code}`);
      return room;
    } catch (error) {
      console.error('Redis get error:', error);
      return null;
    }
  },

  async setRoom(code: string, gameState: GameState): Promise<void> {
    try {
      await redis.set(`${ROOM_PREFIX}${code}`, gameState, { ex: ROOM_TTL });
      // Add to rooms list
      await redis.sadd(ROOMS_KEY, code);
    } catch (error) {
      console.error('Redis set error:', error);
    }
  },

  async deleteRoom(code: string): Promise<void> {
    try {
      await redis.del(`${ROOM_PREFIX}${code}`);
      await redis.srem(ROOMS_KEY, code);
    } catch (error) {
      console.error('Redis delete error:', error);
    }
  },

  async getAllRooms(): Promise<GameState[]> {
    try {
      const roomCodes = await redis.smembers(ROOMS_KEY);
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
      console.error('Redis get all rooms error:', error);
      return [];
    }
  },
};
