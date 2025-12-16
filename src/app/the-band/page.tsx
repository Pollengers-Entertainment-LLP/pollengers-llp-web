'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Film,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

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
} from '@/constants';

/* ================= VIDEO CARD ================= */

const VideoCard = ({
  videoId,
  title,
  subtitle,
}: Pick<Video, 'videoId' | 'title' | 'subtitle'>) => (
  <div className="flex-shrink-0 w-full snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] bg-gray-900 rounded-lg shadow-xl overflow-hidden hover:scale-[1.02] transition duration-300">
    <div className="aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        allowFullScreen
        title={title}
        className="w-full h-full"
      />
    </div>
    <div className="p-4">
      <h4 className="text-lg font-semibold text-yellow-400 truncate">
        {title}
      </h4>
      <p className="text-gray-400 text-sm mt-1">{subtitle}</p>
    </div>
  </div>
);

/* ================= PLAYLIST PANEL ================= */

const PlaylistPanel = ({
  playlist,
  defaultOpen = false,
}: {
  playlist: Playlist;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    update();
    el.addEventListener('scroll', update);
    window.addEventListener('resize', update);

    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir === 'left' ? -el.clientWidth : el.clientWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className="mb-6 bg-gray-800 rounded-xl shadow-2xl">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <div>
          <h3 className="text-2xl font-bold text-white">
            {playlist.name}
          </h3>
          <p className="hidden sm:block text-gray-400 text-sm mt-1">
            {playlist.description}
          </p>
        </div>

        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-yellow-400" />
        ) : (
          <ChevronDown className="w-6 h-6 text-yellow-400" />
        )}
      </button>

      {/* Content */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen
            ? 'max-h-[700px] opacity-100 p-5 pt-0'
            : 'max-h-0 opacity-0 p-0'
        }`}
      >
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
          >
            {playlist.videos
              .filter((v) => v.enabled)
              .sort((a, b) => a.order - b.order)
              .map((video) => (
                <VideoCard
                  key={video.videoId}
                  videoId={video.videoId}
                  title={video.title}
                  subtitle={video.subtitle}
                />
              ))}
          </div>

          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/70 p-2 rounded-full"
            >
              <ChevronLeft className="text-yellow-400" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/70 p-2 rounded-full"
            >
              <ChevronRight className="text-yellow-400" />
            </button>
          )}
        </div>

        <p className="text-center text-gray-500 text-sm mt-2">
          Swipe or use arrows to view more videos
        </p>
      </div>
    </div>
  );
};

/* ================= PAGE ================= */

export default function TheBandPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <header className="text-center py-12">
          <h1 className="text-6xl font-extrabold text-yellow-400">
            Pollengers
          </h1>
          <p className="text-xl text-gray-300 italic mt-3">
            Assam-based blues, funk & hard rock band since 2015
          </p>
        </header>

        {/* Videos */}
        <section className="mt-16">
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-6 flex items-center">
            <Film className="mr-3" /> Official Video Demos
          </h2>

          {PLAYLISTS.map((playlist, index) => (
            <PlaylistPanel
              key={playlist.id}
              playlist={playlist}
              defaultOpen={index === 1}
            />
          ))}
        </section>

        {/* CTA */}
        <section className="text-center py-16">
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-600"
          >
            👉 Click Here To Book
          </Link>
        </section>

      </div>
    </main>
  );
}
