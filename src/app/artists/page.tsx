'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, Music } from 'lucide-react';
import { ARTIST_CATEGORIES, artistsDirectory, type ArtistCategory } from '@/constants';


export default function ArtistsPage() {
  const [openCategories, setOpenCategories] = useState<
    Partial<Record<ArtistCategory, boolean>>
  >({});

  function toggle(category: ArtistCategory) {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* ================= HEADER ================= */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-yellow-400">
            Artists Roster
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Book bands, DJs, singers and live performers curated by
            Pollengers Entertainment LLP.
          </p>
        </header>

        {/* ================= CATEGORY PANELS ================= */}
        <div className="space-y-6">

          {ARTIST_CATEGORIES.map((category) => {
            const artists = artistsDirectory
              .filter(
                (artist) =>
                  artist.category === category &&
                  artist.enabled === true
              )
              .sort((a, b) => a.order - b.order);

            if (!artists.length) return null;

            const isOpen = !!openCategories[category];

            return (
              <div
                key={category}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700/40"
              >

                {/* Panel Header */}
                <button
                  onClick={() => toggle(category)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <Music className="w-6 h-6 text-yellow-400" />

                    <h2 className="text-2xl font-bold text-white">
                      {category}
                    </h2>

                    <span className="text-sm text-gray-400 ml-2">
                      ({artists.length})
                    </span>
                  </div>

                  {isOpen ? (
                    <ChevronUp className="w-6 h-6 text-yellow-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-yellow-400" />
                  )}
                </button>

                {/* Collapsible Content */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen
                      ? 'max-h-[900px] opacity-100 p-5 pt-0'
                      : 'max-h-0 opacity-0 p-0'
                  }`}
                >
                  <div className="space-y-4">

                    {artists.map((artist) => (
                      <div
                        key={artist.slug}
                        className="bg-gray-900 border border-gray-700/50 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div>

                          <h3 className="text-xl font-bold text-yellow-400">
                            {artist.name}
                          </h3>

                          <p className="text-gray-300 mt-1 text-sm max-w-2xl">
                            {artist.shortBio}
                          </p>

                          {/* Genres */}
                          <div className="flex flex-wrap gap-1 mt-2">
                            {artist.genres.map((genre) => (
                              <span
                                key={genre}
                                className="bg-yellow-600 text-black text-xs font-semibold px-2 py-0.5 rounded-full"
                              >
                                {genre}
                              </span>
                            ))}
                          </div>

                        </div>

                        {/* Optional Profile Link */}
                        {artist.profileUrl && (
                          <Link
                            href={artist.profileUrl}
                            className="mt-3 sm:mt-0 inline-block text-yellow-400 font-semibold hover:text-yellow-300"
                          >
                            View Profile →
                          </Link>
                        )}
                      </div>
                    ))}

                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </main>
  );
}
