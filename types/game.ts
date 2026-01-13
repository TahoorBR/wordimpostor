export interface Player {
  id: string;
  name: string;
  avatar: string;
  isReady: boolean;
  isHost: boolean;
  hasVoted?: boolean;
  votes?: number;
  isImpostor?: boolean;
  isEliminated?: boolean;
  hasDoneTurn?: boolean;
}

export interface RoomSettings {
  maxPlayers: number;
  impostorCount: number;
  category: string;
  totalRounds: number;
}

export interface Room {
  id: string;
  code: string;
  host: string;
  players: Player[];
  status: 'waiting' | 'revealing' | 'playing' | 'voting' | 'elimination_result' | 'impostor_count' | 'finished';
  createdAt: number;
  settings: RoomSettings;
  currentRound: number;
  currentTurnIndex?: number;
  revealEndTime?: number;
  eliminationResultEndTime?: number;
  impostorCountEndTime?: number;
}

export interface GameState {
  room: Room;
  word?: string;
  isImpostor?: boolean;
  wordAssignments?: { [playerId: string]: { word: string; isImpostor: boolean } };
  votes: { voterId: string; targetId: string }[];
  revealed?: boolean;
  winner?: 'impostors' | 'regulars' | null;
  eliminationResult?: {
    playerId: string;
    playerName: string;
    wasImpostor: boolean;
    voteCount: number;
  };
}

export interface Profile {
  id: string;
  name: string;
  avatar: string;
  gamesPlayed: number;
  gamesWon: number;
}

export const AVATARS = ['🦊', '🐼', '🦁', '🐯', '🐸', '🐵', '🦄', '🐙', '🦋', '🐝', '🦖', '🐺'];

export interface WordCategory {
  id: string;
  name: string;
  words: Array<{ normal: string; impostor: string }>;
}

// Pakistani Culture Word Categories - 11 categories with 20+ words each
export const WORD_CATEGORIES: WordCategory[] = [
  {
    id: 'food',
    name: '🍛 Pakistani Food',
    words: [
      { normal: 'Biryani', impostor: 'Pulao' },
      { normal: 'Nihari', impostor: 'Paya' },
      { normal: 'Samosa', impostor: 'Pakora' },
      { normal: 'Chapati', impostor: 'Naan' },
      { normal: 'Haleem', impostor: 'Hareesa' },
      { normal: 'Karahi', impostor: 'Korma' },
      { normal: 'Seekh Kabab', impostor: 'Shami Kabab' },
      { normal: 'Paratha', impostor: 'Poori' },
      { normal: 'Lassi', impostor: 'Doodh Patti' },
      { normal: 'Jalebi', impostor: 'Gulab Jamun' },
      { normal: 'Kheer', impostor: 'Firni' },
      { normal: 'Chaat', impostor: 'Gol Gappa' },
      { normal: 'Aloo Tikki', impostor: 'Cutlet' },
      { normal: 'Halwa Puri', impostor: 'Cholay Bhature' },
      { normal: 'Daal Chawal', impostor: 'Khichdi' },
      { normal: 'Saag', impostor: 'Palak' },
      { normal: 'Chicken Tikka', impostor: 'Malai Boti' },
      { normal: 'Zarda', impostor: 'Kheer' },
      { normal: 'Rooh Afza', impostor: 'Sharbat' },
      { normal: 'Falooda', impostor: 'Kulfi' },
    ]
  },
  {
    id: 'cities',
    name: '🏙️ Pakistani Cities',
    words: [
      { normal: 'Karachi', impostor: 'Lahore' },
      { normal: 'Islamabad', impostor: 'Rawalpindi' },
      { normal: 'Faisalabad', impostor: 'Multan' },
      { normal: 'Peshawar', impostor: 'Quetta' },
      { normal: 'Sialkot', impostor: 'Gujranwala' },
      { normal: 'Hyderabad', impostor: 'Sukkur' },
      { normal: 'Murree', impostor: 'Nathia Gali' },
      { normal: 'Gilgit', impostor: 'Skardu' },
      { normal: 'Swat', impostor: 'Hunza' },
      { normal: 'Bahawalpur', impostor: 'Rahimyar Khan' },
      { normal: 'Gwadar', impostor: 'Pasni' },
      { normal: 'Abbottabad', impostor: 'Mansehra' },
      { normal: 'Sahiwal', impostor: 'Okara' },
      { normal: 'Mardan', impostor: 'Charsadda' },
      { normal: 'Kasur', impostor: 'Sheikhupura' },
      { normal: 'Larkana', impostor: 'Shikarpur' },
      { normal: 'Dera Ghazi Khan', impostor: 'Dera Ismail Khan' },
      { normal: 'Mirpur', impostor: 'Kotli' },
      { normal: 'Taxila', impostor: 'Hasan Abdal' },
      { normal: 'Chitral', impostor: 'Dir' },
    ]
  },
  {
    id: 'culture',
    name: '🎭 Cultural Items',
    words: [
      { normal: 'Shalwar Kameez', impostor: 'Kurta Pajama' },
      { normal: 'Dupatta', impostor: 'Shawl' },
      { normal: 'Jinnah Cap', impostor: 'Topi' },
      { normal: 'Mehndi', impostor: 'Henna' },
      { normal: 'Bangles', impostor: 'Churiyan' },
      { normal: 'Khussay', impostor: 'Chappals' },
      { normal: 'Dhol', impostor: 'Tabla' },
      { normal: 'Rabab', impostor: 'Sitar' },
      { normal: 'Truck Art', impostor: 'Rickshaw Art' },
      { normal: 'Ajrak', impostor: 'Sindhi Topi' },
      { normal: 'Peshawari Chappal', impostor: 'Kohlapuri' },
      { normal: 'Phulkari', impostor: 'Embroidery' },
      { normal: 'Mujra', impostor: 'Kathak' },
      { normal: 'Qawwali', impostor: 'Ghazal' },
      { normal: 'Hookah', impostor: 'Sheesha' },
      { normal: 'Charpai', impostor: 'Manjaa' },
      { normal: 'Angithi', impostor: 'Heater' },
      { normal: 'Paan', impostor: 'Supari' },
      { normal: 'Sehra', impostor: 'Turban' },
      { normal: 'Lunghi', impostor: 'Dhoti' },
    ]
  },
  {
    id: 'sports',
    name: '⚽ Sports & Games',
    words: [
      { normal: 'Cricket', impostor: 'Hockey' },
      { normal: 'Squash', impostor: 'Badminton' },
      { normal: 'Kabaddi', impostor: 'Kushti' },
      { normal: 'Polo', impostor: 'Horse Racing' },
      { normal: 'Football', impostor: 'Volleyball' },
      { normal: 'Ludo', impostor: 'Carrom' },
      { normal: 'Gulli Danda', impostor: 'Pitthu Garam' },
      { normal: 'Kite Flying', impostor: 'Patang Bazi' },
      { normal: 'Snooker', impostor: 'Pool' },
      { normal: 'Tennis', impostor: 'Table Tennis' },
      { normal: 'Wrestling', impostor: 'Boxing' },
      { normal: 'Chess', impostor: 'Checkers' },
      { normal: 'Marbles', impostor: 'Goli' },
      { normal: 'Hide & Seek', impostor: 'Chor Police' },
      { normal: 'Kho Kho', impostor: 'Pakdam Pakdai' },
      { normal: 'Stapu', impostor: 'Hopscotch' },
      { normal: 'Kanche', impostor: 'Marbles' },
      { normal: 'Barf Pani', impostor: 'Ice Water' },
      { normal: 'Rassi Jump', impostor: 'Skipping' },
      { normal: 'Tug of War', impostor: 'Rassi Kassi' },
    ]
  },
  {
    id: 'festivals',
    name: '🎉 Festivals',
    words: [
      { normal: 'Eid ul Fitr', impostor: 'Eid ul Adha' },
      { normal: 'Ramadan', impostor: 'Shawwal' },
      { normal: 'Basant', impostor: 'Mela' },
      { normal: 'Mehndi', impostor: 'Barat' },
      { normal: 'Walima', impostor: 'Reception' },
      { normal: 'Milad', impostor: 'Shab e Barat' },
      { normal: 'Qul', impostor: 'Chehlum' },
      { normal: 'Muharram', impostor: 'Ashura' },
      { normal: 'Shab e Qadr', impostor: 'Shab e Miraj' },
      { normal: 'Independence Day', impostor: 'Pakistan Day' },
      { normal: 'Jashn e Baharan', impostor: 'Spring Festival' },
      { normal: 'Lohri', impostor: 'Maghi' },
      { normal: 'Holi', impostor: 'Diwali' },
      { normal: 'Chaand Raat', impostor: 'Eid Night' },
      { normal: 'Bara Wafat', impostor: 'Milad un Nabi' },
      { normal: 'Chelum', impostor: 'Soyem' },
      { normal: 'Urs', impostor: 'Mela' },
      { normal: 'Sehri', impostor: 'Iftar' },
      { normal: 'Qurbani', impostor: 'Sacrifice' },
      { normal: 'Shaadi', impostor: 'Nikah' },
    ]
  },
  {
    id: 'random',
    name: '🎲 Random Mix',
    words: [
      { normal: 'Dhaba', impostor: 'Restaurant' },
      { normal: 'Chai Wala', impostor: 'Tea Stall' },
      { normal: 'Desi Ghee', impostor: 'Butter' },
      { normal: 'Atta', impostor: 'Maida' },
      { normal: 'Thanda Pani', impostor: 'Cold Water' },
      { normal: 'Garam Chai', impostor: 'Hot Tea' },
      { normal: 'Mithai', impostor: 'Sweets' },
      { normal: 'Namkeen', impostor: 'Snacks' },
      { normal: 'Eid ka Chand', impostor: 'Moon' },
      { normal: 'Imran Khan', impostor: 'PM' },
      { normal: 'Jinnah', impostor: 'Quaid' },
      { normal: 'Iqbal', impostor: 'Poet' },
      { normal: 'K2', impostor: 'Mountain' },
      { normal: 'Indus', impostor: 'River' },
      { normal: 'Minar e Pakistan', impostor: 'Monument' },
      { normal: 'Badshahi Mosque', impostor: 'Faisal Mosque' },
      { normal: 'Mohatta Palace', impostor: 'Frere Hall' },
      { normal: 'Clifton', impostor: 'Sea View' },
      { normal: 'Mausoleum', impostor: 'Mazaar' },
      { normal: 'Fort', impostor: 'Qila' },
    ]
  }
];

// Helper functions
export function getWordsFromCategory(categoryId: string): Array<{ normal: string; impostor: string }> {
  // For Random Mix, return all words from all categories
  if (categoryId === 'random') {
    const allWords: Array<{ normal: string; impostor: string }> = [];
    WORD_CATEGORIES.forEach(cat => {
      if (cat.id !== 'random') {
        allWords.push(...cat.words);
      }
    });
    return allWords;
  }
  
  const category = WORD_CATEGORIES.find(cat => cat.id === categoryId);
  return category ? category.words : [];
}

export function getRandomWordPair(categoryId: string): { normal: string; impostor: string } {
  const words = getWordsFromCategory(categoryId);
  return words[Math.floor(Math.random() * words.length)];
}
