import { NextResponse } from 'next/server';
import { getRoom, updateRoom, removePlayerFromRoom } from '@/lib/gameManager';
import { getRandomWordPair } from '@/types/game';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, code, playerId, data } = body;

    const game = await getRoom(code);
    if (!game) {
      return NextResponse.json({ error: 'Room not found' }, { status: 404 });
    }

    switch (action) {
      case 'ready': {
        const player = game.room.players.find(p => p.id === playerId);
        if (player) {
          player.isReady = data.ready;
          await updateRoom(code, game);
        }
        return NextResponse.json(game);
      }

      case 'start': {
        if (game.room.host !== playerId) {
          return NextResponse.json({ error: 'Only host can start' }, { status: 403 });
        }
        
        // Select random word pair from the chosen category
        const wordPair = getRandomWordPair(game.room.settings.category);
        
        // Select random impostors based on settings
        const impostorIndices = new Set<number>();
        while (impostorIndices.size < game.room.settings.impostorCount) {
          const idx = Math.floor(Math.random() * game.room.players.length);
          impostorIndices.add(idx);
        }
        
        game.room.status = 'revealing';
        game.room.currentRound = 1;
        game.room.currentTurnIndex = 0;
        game.room.revealEndTime = Date.now() + 15000; // 15 seconds from now
        
        // Reset player states and assign roles
        game.room.players.forEach((p, idx) => {
          p.hasSubmittedClue = false;
          p.hasVoted = false;
          p.votes = 0;
          p.isImpostor = impostorIndices.has(idx);
          p.isEliminated = false;
          p.hasDoneTurn = false;
        });
        
        // Store word assignments in game state
        game.wordAssignments = {};
        game.room.players.forEach((p, idx) => {
          game.wordAssignments![p.id] = {
            word: impostorIndices.has(idx) ? '' : wordPair.normal,
            isImpostor: impostorIndices.has(idx),
          };
        });
        
        await updateRoom(code, game);
        
        return NextResponse.json(game);
      }

      case 'checkRevealPhase': {
        // Auto-transition from revealing to playing after 15 seconds
        if (game.room.status === 'revealing' && game.room.revealEndTime && Date.now() >= game.room.revealEndTime) {
          game.room.status = 'playing';
          game.room.revealEndTime = undefined;
          await updateRoom(code, game);
        }
        return NextResponse.json(game);
      }

      case 'markTurnDone': {
        const player = game.room.players.find(p => p.id === playerId);
        if (player && !player.isEliminated) {
          player.hasDoneTurn = true;
          
          // Move to next non-eliminated player
          const nonEliminatedPlayers = game.room.players.filter(p => !p.isEliminated);
          const allDoneTurn = nonEliminatedPlayers.every(p => p.hasDoneTurn);
          
          if (allDoneTurn) {
            // All players done, move to voting
            game.room.status = 'voting';
          } else {
            // Find next player who hasn't done their turn
            let nextIndex = (game.room.currentTurnIndex || 0) + 1;
            while (nextIndex < game.room.players.length && 
                   (game.room.players[nextIndex].isEliminated || game.room.players[nextIndex].hasDoneTurn)) {
              nextIndex++;
            }
            if (nextIndex >= game.room.players.length) {
              nextIndex = 0;
              while (nextIndex < game.room.players.length && 
                     (game.room.players[nextIndex].isEliminated || game.room.players[nextIndex].hasDoneTurn)) {
                nextIndex++;
              }
            }
            game.room.currentTurnIndex = nextIndex;
          }
          
          await updateRoom(code, game);
        }
        return NextResponse.json(game);
      }

      case 'submitClue': {
        const player = game.room.players.find(p => p.id === playerId);
        if (player && !player.isEliminated) {
          player.hasSubmittedClue = true;
          game.clues.push({
            playerId,
            clue: data.clue,
            round: game.room.currentRound || 1,
          });
          
          await updateRoom(code, game);
        }
        return NextResponse.json(game);
      }

      case 'vote': {
        const voter = game.room.players.find(p => p.id === playerId);
        
        if (voter && !voter.isEliminated) {
          voter.hasVoted = true;
          
          // Allow skip vote (null targetId)
          if (data.targetId) {
            game.votes.push({ voterId: playerId, targetId: data.targetId });
          }
          
          // Check if all non-eliminated players voted
          const nonEliminatedPlayers = game.room.players.filter(p => !p.isEliminated);
          const allVoted = nonEliminatedPlayers.every(p => p.hasVoted);
          
          if (allVoted) {
            // Count votes
            const voteCounts = new Map<string, number>();
            game.votes.forEach(v => {
              voteCounts.set(v.targetId, (voteCounts.get(v.targetId) || 0) + 1);
            });
            
            game.room.players.forEach(p => {
              p.votes = voteCounts.get(p.id) || 0;
            });
            
            // Find player with most votes
            let maxVotes = 0;
            let eliminatedPlayer = null;
            for (const player of game.room.players) {
              if (!player.isEliminated && (player.votes || 0) > maxVotes) {
                maxVotes = player.votes || 0;
                eliminatedPlayer = player;
              }
            }
            
            // Eliminate player with most votes (if there are any votes)
            if (eliminatedPlayer && maxVotes > 0) {
              eliminatedPlayer.isEliminated = true;
              game.eliminationResult = {
                playerId: eliminatedPlayer.id,
                playerName: eliminatedPlayer.name,
                wasImpostor: eliminatedPlayer.isImpostor || false,
                voteCount: maxVotes,
              };
            }
            
            // Check win conditions
            const remainingPlayers = game.room.players.filter(p => !p.isEliminated);
            const remainingImpostors = remainingPlayers.filter(p => p.isImpostor);
            
            if (remainingImpostors.length === 0) {
              // All impostors eliminated - regulars win
              game.room.status = 'finished';
              game.revealed = true;
              game.winner = 'regulars';
            } else if (game.room.currentRound >= game.room.settings.totalRounds) {
              // All rounds finished - impostors win if still alive
              game.room.status = 'finished';
              game.revealed = true;
              game.winner = 'impostors';
            } else {
              // Continue to next round
              game.room.currentRound++;
              game.room.status = 'playing';
              game.room.currentTurnIndex = 0;
              
              // Reset turn flags for next round
              game.room.players.forEach(p => {
                p.hasDoneTurn = false;
                p.hasVoted = false;
                p.votes = 0;
              });
              
              // Clear votes for next round
              game.votes = [];
            }
          }
          
          await updateRoom(code, game);
        }
        return NextResponse.json(game);
      }

      case 'leave': {
        await removePlayerFromRoom(code, playerId);
        const updatedGame = await getRoom(code);
        return NextResponse.json(updatedGame || { deleted: true });
      }

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
