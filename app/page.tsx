// app/page.tsx
'use client';

import NavBar from './components/NavBar';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="px-6 py-8">
        {/* Hero Section */}
        <section className="text-center my-8">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
            Diplomacy: Europe&apos;s Greatest Strategy Board Game
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            A thrilling game of negotiation, alliances, and cunning moves. 
            Conquer the map of Europe and outsmart your opponents. Forge friendships, 
            betray foes, and strive for total domination.
          </p>
        </section>

        {/* Game Info / Gallery Section */}
        <section className="max-w-5xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">
            About the Game
          </h2>
          <p className="text-gray-300 text-center mb-8">
            Diplomacy is a turn-based strategy board game set in Europe just before 
            World War I. Players negotiate, form alliances, and secretly plan moves 
            to expand their empires. Communication and strategy are key to success.
          </p>

          {/* Image Gallery (Replace with your own images) */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
              <Image
                src="/images/landing_1.png"
                alt="Diplomacy Screenshot 1"
                width={400}
                height={300}
                className="rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">Classic Board</h3>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
              <Image
                src="/images/landing_2.png"
                alt="Diplomacy Screenshot 2"
                width={400}
                height={300}
                className="rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">Gameplay</h3>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
