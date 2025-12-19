// src/app/the-band/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Film } from 'lucide-react';

import VideoSection from './VideoSection';
import { fetchYouTubePlaylist } from '@/lib/youtube';

import ShowsSection from './ShowsSection';
import { fetchShows } from '@/lib/shows';

import {
  bandBio,
  repertoire,
  actionItems,
  bandMembers,
  achievements,
  techSummary,
  rotatingPlayers,
  YOUTUBE_PLAYLISTS,
  type RepertoireItem,
} from '@/constants';

/* -------------------------------------------------------------------------- */
/*                                  PAGE                                      */
/* -------------------------------------------------------------------------- */

export default async function TheBandPage() {
  /**
   * Fetch all YouTube playlists on the SERVER.
   * Visibility is controlled by YouTube privacy (public only).
   */
  const playlists = await Promise.all(
    YOUTUBE_PLAYLISTS.map(async (config) => {
      const data = await fetchYouTubePlaylist(config.playlistId);

      return {
        id: config.id,
        name: config.name,
        description: config.description,
        videos: data.videos, // already public-only
        defaultOpen: config.defaultOpen ?? false,
      };
    })
  );

  /** Fetch Shows **/

  const shows = await fetchShows();

  return (
    <main className="min-h-screen bg-gray-900 text-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= HEADER ================= */}
        <header className="text-center py-12">
          <h1 className="text-6xl font-extrabold text-yellow-400">
            Pollengers
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto italic mt-3">
            Assam-based blues, funk & hard rock band electrifying stages since 2015.
          </p>
        </header>

        {/* ================= DOWNLOAD HUB ================= */}
        <section className="grid md:grid-cols-3 gap-6 mt-10">
          {actionItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`p-6 rounded-xl shadow-xl transition
                          hover:scale-[1.02] ${item.color}`}
            >
              <item.icon className="mb-2 w-6 h-6" />
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm text-gray-200">{item.description}</p>
            </Link>
          ))}
        </section>

        <hr className="my-16 border-gray-700" />

        {/* ================= VIDEOS ================= */}
        <section>
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-6 flex items-center">
            <Film className="mr-3" />
            Official Video Demos
          </h2>

          {/* Client Component */}
          <VideoSection playlists={playlists} />
        </section>

        <hr className="my-16 border-gray-700" />

        {/* ====================== SHOWS ================ */}

        <ShowsSection data={shows} />


        <hr className="my-16 border-gray-700" />

        {/* ================= BIO ================= */}
        <section className="grid lg:grid-cols-3 gap-12">
          <div>
            <h2 className="text-4xl font-extrabold text-yellow-400">
              Core Bio
            </h2>
            <p className="text-sm text-gray-400">Founded 2015</p>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <p className="whitespace-pre-line text-gray-300">
              {bandBio}
            </p>

            <div className="flex flex-wrap gap-3">
              {repertoire.map((item: RepertoireItem) => (
                <span
                  key={item.title}
                  className="bg-yellow-600 text-black px-3 py-1 rounded-full
                             flex items-center text-sm font-medium"
                >
                  <item.icon className="w-4 h-4 mr-1" />
                  {item.title}
                </span>
              ))}
            </div>
          </div>
        </section>

        <hr className="my-16 border-gray-700" />

        {/* ================= BAND MEMBERS ================= */}
        <section>
          <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-10">
            Meet The Band
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bandMembers.filter(m => m.enabled).map((m) => (
              <div
                key={m.name}
                className="bg-gray-800 rounded-xl overflow-hidden
                           shadow-xl transition
                           hover:-translate-y-1 hover:scale-[1.02]
                           hover:shadow-yellow-500/30"
              >
                <Image
                  src={`/images/members/${m.name.toLowerCase().replace(/\s/g, '-')}.jpg`}
                  alt={m.name}
                  width={400}
                  height={400}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="font-bold text-white">{m.name}</h3>
                  <p className="text-yellow-400 text-sm">{m.role}</p>
                  <p className="text-sm text-gray-300 mt-2">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-16 border-gray-700" />

        {/* ROTATING & GUEST MUSICIANS */}
<section>
  <h2 className="text-3xl font-extrabold text-yellow-400 text-center mb-10">
    Rotating & Guest Musicians
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* 🎸 Guitar Players */}
    <div>
      <h3 className="text-xl font-semibold text-gray-100 mb-4 border-b border-gray-700 pb-2">
        Guitar Players
      </h3>

      <div className="space-y-4">
        {rotatingPlayers
          .filter(
            (p) => p.enabled && p.instrument === 'Guitar'
          )
          .sort((a, b) => a.order - b.order)
          .map((p) => (
            <div
              key={p.name}
              className="bg-gray-800 p-4 rounded-lg border border-gray-700/60
                         hover:border-yellow-500/50 transition"
            >
              <p className="font-semibold text-white">
                {p.name}
                {p.tag && (
                  <span className="ml-2 text-xs text-yellow-400 uppercase tracking-wide">
                    ({p.tag})
                  </span>
                )}
              </p>
              <p className="text-sm text-gray-300 mt-1">
                {p.description}
              </p>
            </div>
          ))}
      </div>
    </div>

    {/* 🎸 Bass Players */}
    <div>
      <h3 className="text-xl font-semibold text-gray-100 mb-4 border-b border-gray-700 pb-2">
        Bass Players
      </h3>

      <div className="space-y-4">
        {rotatingPlayers
          .filter(
            (p) => p.enabled && p.instrument === 'Bass'
          )
          .sort((a, b) => a.order - b.order)
          .map((p) => (
            <div
              key={p.name}
              className="bg-gray-800 p-4 rounded-lg border border-gray-700/60
                         hover:border-yellow-500/50 transition"
            >
              <p className="font-semibold text-white">
                {p.name}
                 {p.tag && (
                  <span className="ml-2 text-xs text-yellow-400 uppercase tracking-wide">
                    ({p.tag})
                  </span>
                )}
              </p>
              <p className="text-sm text-gray-300 mt-1">
                {p.description}
              </p>
            </div>
          ))}
      </div>
    </div>

  </div>
</section>


        <hr className="my-16 border-gray-700" />

        {/* ================= ACHIEVEMENTS + TECH ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-extrabold text-yellow-400 mb-6">
              Achievements & Notable Performances
            </h2>

            <ul className="list-disc list-inside space-y-3 text-gray-300">
              {achievements.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-yellow-400 mb-6">
              Technical Rider Summary
            </h2>

            <div className="space-y-4">
              {techSummary.map(t => (
                <div
                  key={t.label}
                  className="bg-gray-800 p-4 rounded-lg
                             hover:shadow-yellow-500/20 transition"
                >
                  <p className="text-xs uppercase text-gray-400">
                    {t.label} ({t.detail})
                  </p>
                  <p className="text-lg text-white">{t.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="my-16 border-gray-700" />

        {/* ================= CTA ================= */}
        <section className="text-center">
          <h2 className="text-3xl font-extrabold text-yellow-400">
            Ready to Book Pollengers?
          </h2>
          <p className="mt-2 text-gray-300">
            Gigs • Festivals • Corporate • Private Shows
          </p>

          <Link
            href="/contact"
            className="inline-block mt-6 px-10 py-4
                       bg-yellow-500 text-black
                       rounded-full font-bold uppercase tracking-wide
                       shadow-xl transition
                       hover:bg-yellow-600 hover:scale-105
                       hover:shadow-yellow-500/40"
          >
            👉 Click Here To Book
          </Link>
        </section>

      </div>
    </main>
  );
}
