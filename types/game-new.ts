export interface Player {
  id: string;
  name: string;
  avatar: string;
  isReady: boolean;
  isHost: boolean;
  hasSubmittedClue?: boolean;
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
  status: 'waiting' | 'revealing' | 'playing' | 'voting' | 'finished';
  createdAt: number;
  settings: RoomSettings;
  currentRound: number;
  currentTurnIndex?: number;
  revealEndTime?: number;
}

export interface GameState {
  room: Room;
  word?: string;
  isImpostor?: boolean;
  clues: { playerId: string; clue: string; round: number }[];
  votes: { voterId: string; targetId: string }[];
  revealed?: boolean;
  winner?: 'impostors' | 'civilians' | null;
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

// Pakistani Culture Word Categories
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
    name: '🎉 Festivals & Celebrations',
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
    id: 'vehicles',
    name: '🚗 Transport & Vehicles',
    words: [
      { normal: 'Rickshaw', impostor: 'Qingqi' },
      { normal: 'Chingchi', impostor: 'Auto' },
      { normal: 'Suzuki Van', impostor: 'Hiace' },
      { normal: 'Tonga', impostor: 'Horse Cart' },
      { normal: 'Motorbike', impostor: 'Scooty' },
      { normal: 'Bus', impostor: 'Daewoo' },
      { normal: 'Truck', impostor: 'Mazda' },
      { normal: 'Taxi', impostor: 'Cab' },
      { normal: 'Train', impostor: 'Metro' },
      { normal: 'Airplane', impostor: 'PIA' },
      { normal: 'Tractor', impostor: 'Trolley' },
      { normal: 'Loader', impostor: 'Pickup' },
      { normal: 'Careem', impostor: 'Uber' },
      { normal: 'Bykea', impostor: 'Bike Taxi' },
      { normal: 'Wagon', impostor: 'Coach' },
      { normal: 'Coaster', impostor: 'Mini Bus' },
      { normal: 'Railway', impostor: 'Green Line' },
      { normal: 'Orange Line', impostor: 'Metro Bus' },
      { normal: 'Donkey Cart', impostor: 'Rehri' },
      { normal: 'Cycle', impostor: 'Bicycle' },
    ]
  },
  {
    id: 'entertainment',
    name: '🎬 Entertainment & Media',
    words: [
      { normal: 'Drama', impostor: 'Serial' },
      { normal: 'Film', impostor: 'Movie' },
      { normal: 'Lollywood', impostor: 'Pakistani Cinema' },
      { normal: 'PTV', impostor: 'State TV' },
      { normal: 'ARY', impostor: 'Geo' },
      { normal: 'Coke Studio', impostor: 'Nescafe Basement' },
      { normal: 'Comedy Nights', impostor: 'Hasb e Haal' },
      { normal: 'Morning Show', impostor: 'Jago Pakistan' },
      { normal: 'Naat', impostor: 'Hamd' },
      { normal: 'Desi Music', impostor: 'Folk Song' },
      { normal: 'Mehfil', impostor: 'Mushaira' },
      { normal: 'Theater', impostor: 'Stage Drama' },
      { normal: 'Punjabi Film', impostor: 'Urdu Film' },
      { normal: 'Comedian', impostor: 'Mazahiya' },
      { normal: 'Singer', impostor: 'Gayak' },
      { normal: 'Actor', impostor: 'Hero' },
      { normal: 'Actress', impostor: 'Heroine' },
      { normal: 'Director', impostor: 'Producer' },
      { normal: 'News', impostor: 'Current Affairs' },
      { normal: 'Talk Show', impostor: 'Debate' },
    ]
  },
  {
    id: 'market',
    name: '🛍️ Market & Shopping',
    words: [
      { normal: 'Bazaar', impostor: 'Market' },
      { normal: 'Darzi', impostor: 'Tailor' },
      { normal: 'Dukaan', impostor: 'Shop' },
      { normal: 'Kiryana', impostor: 'Grocery Store' },
      { normal: 'Karkhana', impostor: 'Factory' },
      { normal: 'Mandi', impostor: 'Sabzi Mandi' },
      { normal: 'Mall', impostor: 'Shopping Center' },
      { normal: 'Sunday Bazaar', impostor: 'Weekly Market' },
      { normal: 'Anarkali', impostor: 'Liberty' },
      { normal: 'Tariq Road', impostor: 'Saddar' },
      { normal: 'Cloth Market', impostor: 'Kapra Market' },
      { normal: 'Electronics', impostor: 'Mobile Market' },
      { normal: 'Utensils', impostor: 'Bartan' },
      { normal: 'Furniture', impostor: 'Lakdi' },
      { normal: 'Gold', impostor: 'Jewelry' },
      { normal: 'Shoes', impostor: 'Chappal' },
      { normal: 'Books', impostor: 'Kitab' },
      { normal: 'Toys', impostor: 'Khiloné' },
      { normal: 'Flowers', impostor: 'Phool' },
      { normal: 'Fruits', impostor: 'Mewa' },
    ]
  },
  {
    id: 'education',
    name: '📚 Education & Work',
    words: [
      { normal: 'School', impostor: 'Madrasa' },
      { normal: 'College', impostor: 'University' },
      { normal: 'Teacher', impostor: 'Ustad' },
      { normal: 'Student', impostor: 'Talib Ilm' },
      { normal: 'Exam', impostor: 'Imtihan' },
      { normal: 'Homework', impostor: 'Assignment' },
      { normal: 'Notebook', impostor: 'Copy' },
      { normal: 'Pen', impostor: 'Pencil' },
      { normal: 'Bag', impostor: 'Basta' },
      { normal: 'Uniform', impostor: 'Dress' },
      { normal: 'Principal', impostor: 'Headmaster' },
      { normal: 'Class', impostor: 'Jamaat' },
      { normal: 'Degree', impostor: 'Certificate' },
      { normal: 'Matric', impostor: 'SSC' },
      { normal: 'Inter', impostor: 'HSSC' },
      { normal: 'Graduation', impostor: 'Bachelors' },
      { normal: 'Masters', impostor: 'Postgraduate' },
      { normal: 'Scholarship', impostor: 'Wazifa' },
      { normal: 'Tuition', impostor: 'Private' },
      { normal: 'Result', impostor: 'Marks' },
    ]
  },
  {
    id: 'nature',
    name: '🌳 Nature & Places',
    words: [
      { normal: 'Mountain', impostor: 'Pahaar' },
      { normal: 'River', impostor: 'Darya' },
      { normal: 'Garden', impostor: 'Baagh' },
      { normal: 'Park', impostor: 'Maidan' },
      { normal: 'Forest', impostor: 'Jungle' },
      { normal: 'Lake', impostor: 'Jheel' },
      { normal: 'Desert', impostor: 'Registaan' },
      { normal: 'Valley', impostor: 'Wadi' },
      { normal: 'Beach', impostor: 'Sahil' },
      { normal: 'Village', impostor: 'Gaon' },
      { normal: 'Farm', impostor: 'Khet' },
      { normal: 'Field', impostor: 'Maidan' },
      { normal: 'Tree', impostor: 'Darakht' },
      { normal: 'Flower', impostor: 'Phool' },
      { normal: 'Fruit', impostor: 'Mewa' },
      { normal: 'Bird', impostor: 'Parinda' },
      { normal: 'Animal', impostor: 'Janwar' },
      { normal: 'Fish', impostor: 'Machli' },
      { normal: 'Sky', impostor: 'Aasmaan' },
      { normal: 'Moon', impostor: 'Chaand' },
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

// Helper function to get words from a category
export function getWordsFromCategory(categoryId: string): Array<{ normal: string; impostor: string }> {
  const category = WORD_CATEGORIES.find(cat => cat.id === categoryId);
  return category ? category.words : WORD_CATEGORIES[WORD_CATEGORIES.length - 1].words;
}

// Helper function to get a random word pair from a category
export function getRandomWordPair(categoryId: string): { normal: string; impostor: string } {
  const words = getWordsFromCategory(categoryId);
  return words[Math.floor(Math.random() * words.length)];
}
