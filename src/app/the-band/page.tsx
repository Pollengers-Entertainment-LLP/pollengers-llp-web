
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Film, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';


import {
  bandBio,
  repertoire,
  PLAYLISTS,
  actionItems,
  bandMembers,
  techSummary,
  type Video,
  type Playlist,
  type RepertoireItem,
  rotatingPlayers,
  type RotatingPlayer, 
} from '@/constants';

// --- Components for Video Section ---

const VideoCard = ({ videoId, title, subtitle }: Video) => (
  <div className="flex-shrink-0 w-full snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] bg-gray-900 rounded-lg shadow-xl overflow-hidden hover:scale-[1.02] transition duration-300">
    <div className="aspect-video">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
        className="w-full h-full"
      ></iframe>
    </div>
    <div className="p-4">
      <h4 className="text-lg font-semibold text-yellow-400 truncate">{title}</h4>
      <p className="text-gray-400 text-sm mt-1">{subtitle}</p>
    </div>
  </div>
);

const PlaylistPanel = ({ playlist }: { playlist: Playlist }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Check scroll position to toggle arrows
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateScrollState = () => {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    updateScrollState();
    el.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const handleArrowClick = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = direction === 'left' ? -el.clientWidth : el.clientWidth;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <div className="mb-6 bg-gray-800 rounded-xl shadow-2xl transition-shadow duration-300 hover:shadow-yellow-500/30">
      {/* Header / Collapse Trigger */}
      <button
        className="w-full flex justify-between items-center p-5 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-left">
          <h3 className="text-2xl font-bold text-white">{playlist.name}</h3>
          <p className="text-gray-400 text-sm mt-1 hidden sm:block">
            {playlist.description}
          </p>
        </div>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-yellow-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-yellow-400 flex-shrink-0" />
        )}
      </button>

      {/* Content Container (Collapsible) */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[600px] opacity-100 p-5 pt-0' : 'max-h-0 opacity-0 p-0'
        }`}
      >
        <div className="relative">
          {/* Horizontal Scrolling Video Cards */}
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto p-2 pb-4 snap-x snap-mandatory scroll-smooth"
          >
            {playlist.videos.map((video, index) => (
              <VideoCard
                key={index}
                videoId={video.videoId}
                title={video.title}
                subtitle={video.subtitle}
              />
            ))}
            {/* Invisible div to ensure the scrollbar has space */}
            <div className="flex-shrink-0 w-2" />
          </div>

          {/* Left fade + arrow */}
          {canScrollLeft && (
            <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-12">
              <button
                type="button"
                onClick={() => handleArrowClick('left')}
                className="pointer-events-auto ml-1 rounded-full bg-black/70 p-2 hover:bg-yellow-500/80 transition"
              >
                <ChevronLeft className="w-6 h-6 text-yellow-400" />
              </button>
            </div>
          )}


          {/* Right fade + arrow */}
          {canScrollRight && (
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-12 flex justify-end">
            <button
              type="button"
              onClick={() => handleArrowClick('right')}
              className="pointer-events-auto mr-1 rounded-full bg-black/70 p-2 hover:bg-yellow-500/80 transition"
            >
              <ChevronRight className="w-6 h-6 text-yellow-400" />
            </button>
          </div>
        )}
        </div>

        <p className="text-center text-gray-500 text-sm mt-2">
          Tap the arrows or swipe sideways to see more demos.
        </p>
      </div>
    </div>
  );
};


export default function TheBandPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Band Title and Bio Section */}
        <header className="text-center py-12">
          <h1 className="text-6xl font-extrabold text-yellow-400 mb-4 tracking-tighter">
            Pollengers
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto italic">
            "Assam-based blues, funk & hard rock band electrifying stages with
            originals & classic covers since 2015."
          </p>
          <div className="mt-8 h-1 w-24 bg-yellow-400 mx-auto rounded-full" />
        </header>

        {/* 2. Download Hub for Promoters */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-200">
            For Promoters, Media, and Technical Teams
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {actionItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                {...(item.download && { download: true })}
                target={item.download ? '_self' : '_blank'}
                className={`p-6 rounded-xl shadow-2xl transition duration-300 transform hover:scale-[1.02] ${item.color} flex flex-col justify-between`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <item.icon className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-200">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <hr className="my-16 border-gray-700" />

        {/* 3: Video Demos (Interactive Hub) */}
        <section className="mb-10 mt-16">
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-6 border-b border-gray-700 pb-2 flex items-center">
            <Film className="w-8 h-8 mr-3 text-yellow-400" />
            Official Video Demos & Playlists
          </h2>

          {PLAYLISTS.map((playlist) => (
            <PlaylistPanel key={playlist.id} playlist={playlist} />
          ))}
        </section>

        <hr className="my-16 border-gray-700" />

        {/* 4: Detailed Biography & Sound */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">
              Core Bio
            </h2>
            <p className="text-sm text-gray-400">Founded in 2015</p>
          </div>
          <div className="lg:col-span-2 space-y-6 text-gray-300">
            <p className="text-lg font-medium whitespace-pre-line">{bandBio}</p>

            {/* Dynamic Repertoire Block */}
            <div className="pt-4 pb-2 border-t border-gray-700">
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                Versatile Repertoire
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {repertoire.map((item: RepertoireItem) => (
                  <span
                    key={item.title}
                    className="px-3 py-1 bg-yellow-600 text-black font-medium rounded-full text-sm flex items-center"
                  >
                    <item.icon className="w-4 h-4 mr-1" />
                    {item.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="my-16 border-gray-700" />

        {/* 5: Band Lineup and Profiles */}
        <section>
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-10 text-center">
            Meet The Band
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bandMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition duration-300"
              >
                <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-gray-300 font-bold text-3xl">
                  <Image
                    src={`/images/members/${member.name
                      .toLowerCase()
                      .replace(/\s/g, '-')}.jpg`}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-yellow-400 text-sm font-semibold mb-3 uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-16 border-gray-700" />

        {/* 5b: Rotating & Guest Musicians */}
        <section>
          <h2 className="text-3xl font-extrabold text-yellow-400 mb-8 text-center">
            Rotating &amp; Guest Musicians
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Guitar Players */}
            <div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                Guitar Players
              </h3>
              <div className="space-y-3">
                {rotatingPlayers
                  .filter((player) => player.instrument === 'Guitar')
                  .map((player) => (
                    <div
                      key={player.name}
                      className="bg-gray-800 rounded-lg p-4 border border-gray-700/60"
                    >
                      <p className="font-semibold text-white">
                        {player.name}
                        {player.tag && (
                          <span className="text-xs text-yellow-400 uppercase tracking-wider ml-2">
                            ({player.tag})
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-gray-300 mt-1">
                        {player.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Bass Players */}
            <div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                Bass Players
              </h3>
              <div className="space-y-3">
                {rotatingPlayers
                  .filter((player) => player.instrument === 'Bass')
                  .map((player) => (
                    <div
                      key={player.name}
                      className="bg-gray-800 rounded-lg p-4 border border-gray-700/60"
                    >
                      <p className="font-semibold text-white">
                        {player.name}
                      </p>
                      <p className="text-sm text-gray-300 mt-1">
                        {player.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="my-16 border-gray-700" />


        {/* 6: Achievements and Technical Rider Summary */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              Achievements & Selected Performances
            </h2>
            <ul className="space-y-3 text-gray-300 list-disc list-inside">
              <li className="font-semibold">Hornbill Festival (Nagaland)</li>
              <li>Pangsau Pass International Festival (PPIF 2025)</li>
              <li>Tangsa Moh Mol 2025 (Arunachal Pradesh)</li>
              <li>Siang River Festival (2023)</li>
              <li>Cherry Blossom Festival (Shillong)</li>
              <li>
                Major Venues: Hard Rock Cafe, Freemason&apos;s Brew Works, Café
                Hendrix
              </li>
              <li>Shared the stage with renowned blues group Soulmate.</li>
            </ul>
          </div>

          {/* Technical Summary */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              Technical Rider Summary
            </h2>
            <div className="space-y-4">
              {techSummary.map((item) => (
                <div key={item.label} className="p-4 bg-gray-800 rounded-lg">
                  <p className="text-xs font-semibold uppercase text-gray-400">
                    {item.label} ({item.detail})
                  </p>
                  <p className="text-lg font-medium text-white">{item.value}</p>
                </div>
              ))}
              <p className="mt-4 text-sm text-gray-400 italic">
                Full detailed rider is available for download above, including
                the 17-channel Input List.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-16 border-gray-700" />

        {/* FINAL CTA: BOOKING BUTTON */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-extrabold text-yellow-400 mb-4">
            Ready to Book Pollengers?
          </h2>

          <p className="text-gray-300 mb-6">
            Gigs • Festivals • Corporate Events • Private Shows
          </p>

          <Link
            href="/contact"
            className="inline-block px-10 py-4 text-lg font-bold uppercase tracking-wide
                       bg-yellow-500 text-black rounded-full shadow-xl
                       hover:bg-yellow-600 hover:scale-105 transform transition"
          >
            👉 Click Here To Book
          </Link>
        </section>


      </div>
    </main>
  );
}
