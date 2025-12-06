import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Facebook, Instagram, Youtube } from 'lucide-react';

import { artistsDirectory } from '@/constants';

type ArtistPageProps = {
  params: {
    slug: string;
  };
};

export default function ArtistProfilePage({ params }: ArtistPageProps) {
  const artist = artistsDirectory.find(
    (a) => a.slug === params.slug && a.enabled === true
  );

  if (!artist) {
    return notFound();
  }

  const { name, shortBio, genres, heroImage, social } = artist;

  return (
    <main className="min-h-screen bg-gray-900 text-white pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4">

        <Link
          href="/artists"
          className="text-sm text-gray-400 hover:text-yellow-400"
        >
          ← Back to Artists
        </Link>

        <section className="flex flex-col md:flex-row gap-8 items-center mt-6">

          <div className="w-40 h-40 rounded-2xl overflow-hidden bg-gray-800 flex items-center justify-center text-4xl font-bold text-yellow-400 flex-shrink-0">
            {heroImage ? (
              <Image
                src={heroImage}
                alt={name}
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            ) : (
              <span>{name.charAt(0)}</span>
            )}
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400">
              {name}
            </h1>

            <p className="mt-3 text-gray-300 max-w-2xl">
              {shortBio}
            </p>

            <div className="flex gap-2 flex-wrap mt-4">
              {genres.map((g) => (
                <span
                  key={g}
                  className="bg-yellow-600 text-black text-xs px-3 py-1 rounded-full font-semibold"
                >
                  {g}
                </span>
              ))}
            </div>

            {social && (
              <div className="flex gap-5 mt-6">

                {social.facebook && (
                  <Link
                    href={social.facebook}
                    target="_blank"
                    className="text-gray-300 hover:text-yellow-400 flex items-center gap-2"
                  >
                    <Facebook size={18} />
                    Facebook
                  </Link>
                )}

                {social.instagram && (
                  <Link
                    href={social.instagram}
                    target="_blank"
                    className="text-gray-300 hover:text-yellow-400 flex items-center gap-2"
                  >
                    <Instagram size={18} />
                    Instagram
                  </Link>
                )}

                {social.youtube && (
                  <Link
                    href={social.youtube}
                    target="_blank"
                    className="text-gray-300 hover:text-yellow-400 flex items-center gap-2"
                  >
                    <Youtube size={18} />
                    YouTube
                  </Link>
                )}

              </div>
            )}

          </div>

        </section>

      </div>
    </main>
  );
}
