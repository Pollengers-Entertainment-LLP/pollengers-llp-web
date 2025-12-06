import Link from 'next/link';
import Image from 'next/image';
import { artists } from '@/constants';

export default function ArtistsPage() {
  return (
    <main className="min-h-screen bg-gray-900 pt-20 pb-16 text-white">
      <div className="max-w-7xl mx-auto px-4">

        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-yellow-400">
            Our Artists
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Explore the Pollengers Entertainment LLP roster
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {artists.map((artist) => (
            <Link
              key={artist.slug}
              href={artist.profileUrl}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:scale-[1.02] transition"
            >
              {artist.heroImage && (
                <div className="h-48 relative">
                  <Image
                    src={artist.heroImage}
                    alt={artist.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="p-5">
                <h2 className="text-2xl font-bold text-white">
                  {artist.name}
                </h2>

                <p className="text-yellow-400 text-sm">
                  {artist.location}
                </p>

                <p className="mt-2 text-gray-300 text-sm">
                  {artist.shortBio}
                </p>

                <div className="flex flex-wrap gap-1 mt-3">
                  {artist.genres.map((genre) => (
                    <span
                      key={genre}
                      className="bg-yellow-500 text-black text-xs px-2 py-0.5 rounded-full"
                    >
                      {genre}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-yellow-400 font-semibold">
                  View Profile →
                </p>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </main>
  );
}
