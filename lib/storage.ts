import Cookies from 'js-cookie';
import { Profile } from '@/types/game';

const PROFILE_KEY = 'word_impostor_profile';
const ROOM_KEY = 'word_impostor_current_room';

export const saveProfile = (profile: Profile): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
    Cookies.set(PROFILE_KEY, JSON.stringify(profile), { expires: 365 });
  }
};

export const getProfile = (): Profile | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(PROFILE_KEY) || Cookies.get(PROFILE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

export const saveCurrentRoom = (roomCode: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(ROOM_KEY, roomCode);
    Cookies.set(ROOM_KEY, roomCode, { expires: 1 });
  }
};

export const getCurrentRoom = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(ROOM_KEY) || Cookies.get(ROOM_KEY) || null;
};

export const clearCurrentRoom = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(ROOM_KEY);
    Cookies.remove(ROOM_KEY);
  }
};

export const generateId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const generateRoomCode = (): string => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};
