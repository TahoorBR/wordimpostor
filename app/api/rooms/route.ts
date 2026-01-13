import { NextResponse } from 'next/server';
import { createRoom, getAllRooms, getRoom, addPlayerToRoom } from '@/lib/gameManager';
import { generateRoomCode } from '@/lib/storage';
import { Player, RoomSettings } from '@/types/game';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  
  if (code) {
    const room = getRoom(code);
    if (!room) {
      return NextResponse.json({ error: 'Room not found' }, { status: 404 });
    }
    return NextResponse.json(room);
  }
  
  const rooms = getAllRooms();
  return NextResponse.json(rooms);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, player, code, settings } = body;

    if (action === 'create') {
      const roomCode = generateRoomCode();
      const host: Player = {
        ...player,
        isHost: true,
        isReady: false,
      };
      
      // Default settings if not provided
      const roomSettings: RoomSettings = settings || {
        maxPlayers: 6,
        impostorCount: 1,
        category: 'random',
        totalRounds: 3,
      };
      
      const gameState = createRoom(host, roomCode, roomSettings);
      return NextResponse.json(gameState);
    }

    if (action === 'join' && code) {
      const playerData: Player = {
        ...player,
        isHost: false,
        isReady: false,
      };
      const gameState = addPlayerToRoom(code, playerData);
      if (!gameState) {
        return NextResponse.json({ error: 'Room not found or full' }, { status: 400 });
      }
      return NextResponse.json(gameState);
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
