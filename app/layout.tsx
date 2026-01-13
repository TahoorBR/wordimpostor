import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Word Impostor - Find the Impostor!",
  description: "A multiplayer social deduction word game. Play with friends online, give clues, and find the impostor!",
  keywords: ["word game", "impostor", "multiplayer", "party game", "online game"],
  authors: [{ name: "Word Impostor" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
