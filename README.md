# 🎭 Word Impostor Game

A multiplayer social deduction word game where players try to identify the impostor among them!

## Features

- 🎮 Real-time multiplayer gameplay
- 📱 Mobile and desktop responsive
- 👥 Create and join rooms with codes
- 🎭 Interactive game phases (waiting, playing, voting)
- 💾 Profile persistence with cookies
- 🎨 Beautiful gradient UI design
- 🌐 Internet-based multiplayer

## How to Play

1. **Create a Profile**: Enter your name and choose an avatar
2. **Create or Join a Room**: Start a new game or join with a 6-letter code
3. **Get Your Word**: Most players get the same word, one impostor gets different
4. **Give Clues**: Take turns giving one-word clues about your word
5. **Vote**: Discuss and vote for who you think is the impostor
6. **Win**: Civilians win if they catch the impostor, impostor wins if they avoid detection!

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Persistence**: Cookies + LocalStorage
- **Deployment**: Vercel (optimized)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
