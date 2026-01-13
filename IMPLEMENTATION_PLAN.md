# Word Impostor Game - Implementation Summary

## ✅ COMPLETED

### 1. Pastel Color Scheme
- Created new pastel-themed styles in `app/styles-new.tsx`
- Created new room styles in `app/room/styles-new.tsx`
- Color palette: Soft lavender, mint green, peach, coral, periwinkle
- Light backgrounds (#fef3e2, #fae8d4, #e8f5e9)
- Readable text colors (#5b4b8a, #7a6f9e)

### 2. Pakistani Culture Word Categories
- Created 11 comprehensive categories in `types/game-new.ts`:
  1. 🍛 Pakistani Food (20 words) - Biryani/Pulao, Nihari/Paya, etc.
  2. 🏙️ Pakistani Cities (20 words) - Karachi/Lahore, Islamabad/Rawalpindi, etc.
  3. 🎭 Cultural Items (20 words) - Shalwar Kameez/Kurta, Dhol/Tabla, etc.
  4. ⚽ Sports & Games (20 words) - Cricket/Hockey, Kabaddi/Kushti, etc.
  5. 🎉 Festivals (20 words) - Eid ul Fitr/Eid ul Adha, Mehndi/Barat, etc.
  6. 🚗 Transport (20 words) - Rickshaw/Qingqi, Tonga/Horse Cart, etc.
  7. 🎬 Entertainment (20 words) - PTV/ARY, Coke Studio/Nescafe Basement, etc.
  8. 🛍️ Market (20 words) - Bazaar/Market, Darzi/Tailor, etc.
  9. 📚 Education (20 words) - School/Madrasa, Teacher/Ustad, etc.
  10. 🌳 Nature (20 words) - Mountain/Pahaar, River/Darya, etc.
  11. 🎲 Random Mix (20 words) - Mixed cultural references

### 3. Updated Type Definitions
New interfaces in `types/game-new.ts`:
- `RoomSettings`: maxPlayers, impostorCount, category, totalRounds
- Updated `Player`: Added isImpostor, isEliminated, hasDoneTurn
- Updated `Room`: status includes 'revealing', added settings, currentTurnIndex, revealEndTime
- Updated `GameState`: eliminationResult tracking

## 🚧 TO IMPLEMENT

### Phase 1: Core Game Mechanics

#### A. Game Settings (Home Page)
**Files to modify**: `app/page.tsx`

Add settings modal with:
```tsx
- Max Players: Select 3-10 (default 6)
- Impostor Count: Select 1-3 (default 1)
- Word Category: Dropdown of 11 categories
- Number of Rounds: Select 1-5 (default 3)
```

#### B. Word Reveal Phase (15 seconds)
**Files to modify**: `app/room/[code]/page.tsx`, `app/api/game/route.ts`

Flow:
1. Host clicks "Start Game"
2. Game status → 'revealing'
3. All players see their word/IMPOSTOR label simultaneously
4. 15-second countdown timer
5. After 15s, status → 'playing'

#### C. Turn-Based System
**Files to modify**: `app/room/[code]/page.tsx`, `app/api/game/route.ts`

Flow:
1. Players take turns sequentially
2. Current player highlighted with large avatar/name
3. Current player clicks "Done" button after speaking word
4. Next player's turn begins
5. Continue until all non-eliminated players complete turn

#### D. Voting with Skip Option
**Files to modify**: `app/room/[code]/page.tsx`, `app/api/game/route.ts`

Features:
- "Skip Vote" button (yellow/amber pastel)
- "Vote" button for each player
- Player with most votes gets eliminated
- If tie or all skip, no elimination
- Show if eliminated player was impostor
- Eliminated players stay in room (grayed out, can't vote/play)

#### E. Multi-Round System
**Files to modify**: `app/api/game/route.ts`, `lib/gameManager.ts`

Flow:
1. After voting, check win conditions
2. If game not over, start new round with new word from same category
3. Only non-eliminated players participate
4. Repeat for totalRounds or until win condition met

#### F. Win Conditions
**Files to modify**: `app/api/game/route.ts`

Check after each voting phase:
- **Impostors Win**: All impostors remain, last round finished
- **Civilians Win**: All impostors eliminated
- Display winner banner with appropriate color scheme

### Phase 2: File Replacements

Replace old implementations:
```bash
# Types
types/game.ts → types/game-new.ts

# Styles  
app/styles.tsx → app/styles-new.tsx
app/room/styles.tsx → app/room/styles-new.tsx

# Then update all imports
```

### Phase 3: API Routes Updates

**`app/api/rooms/route.ts`**:
- Add settings to room creation
- Validate impostor count ≤ player count

**`app/api/game/route.ts`**:
- Add 'startRevealing' action
- Add 'markTurnDone' action
- Add 'skipVote' action
- Update 'vote' to handle elimination
- Update 'start' for next round
- Add win condition checks

### Phase 4: UI Components

**Home Page** (`app/page.tsx`):
- Settings accordion/modal
- Category preview
- Settings validation

**Room Page** (`app/room/[code]/page.tsx`):
- Revealing countdown component
- Turn indicator component
- Eliminated player styling
- Skip vote button
- Round counter
- Winner announcement

## 📝 Implementation Priority

1. **CRITICAL**: Replace type files and update imports
2. **HIGH**: Implement settings UI on home page
3. **HIGH**: Implement 15-second reveal phase
4. **HIGH**: Implement turn-based system
5. **MEDIUM**: Add skip vote and elimination
6. **MEDIUM**: Multi-round logic
7. **MEDIUM**: Win condition checking
8. **LOW**: Polish UI with new pastel styles

## 🎨 Design Philosophy

- **Voice-First**: Game assumes external voice chat
- **Turn-Based**: Clear visual indicators for whose turn
- **Inclusive**: Eliminated players remain as spectators
- **Cultural**: All words relatable to Pakistani players
- **Pastel & Friendly**: Soft colors, rounded corners, smooth animations

## 🔧 Quick Start Next Steps

1. Stop dev server
2. Replace files (types, styles)
3. Update imports across all files
4. Implement settings modal
5. Update game flow in API routes
6. Update room page UI
7. Test complete game loop
8. Deploy to Vercel

Would you like me to continue with specific implementation of any phase?
