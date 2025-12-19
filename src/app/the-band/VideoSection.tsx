'use client';

import { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import type { YouTubePlaylist, YouTubeVideo } from '@/constants';

/* ----------------------------- VIDEO CARD ----------------------------- */

function VideoCard({
  videoId,
  title,
  subtitle,
}: YouTubeVideo) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="
        flex-shrink-0 w-full snap-start
        sm:w-[calc(50%-12px)]
        lg:w-[calc(33.33%-16px)]
        bg-gray-900 rounded-lg shadow-xl
        overflow-hidden
      "
    >
      <div className="aspect-video bg-black relative">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
            Loading…
          </div>
        )}

        <iframe
          loading="lazy"
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setLoaded(true)}
        />
      </div>

      <div className="p-4">
        <h4 className="text-lg font-semibold text-yellow-400 truncate">
          {title}
        </h4>
        <p className="text-gray-400 text-sm mt-1">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

/* --------------------------- PLAYLIST PANEL ---------------------------- */

function PlaylistPanel({
  playlist,
  defaultOpen = false,
}: {
  playlist: YouTubePlaylist;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => {
      setCanLeft(el.scrollLeft > 0);
      setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
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
    scrollRef.current?.scrollBy({
      left: dir === 'left' ? -400 : 400,
      behavior: 'smooth',
    });
  };

  return (
    <div className="mb-6 bg-gray-800 rounded-xl shadow-xl">
      <button
        className="w-full flex justify-between items-center p-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-left">
          <h3 className="text-2xl font-bold text-white">
            {playlist.name}
          </h3>
          <p className="text-sm text-gray-400 hidden sm:block">
            {playlist.description}
          </p>
        </div>

        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-yellow-400" />
        ) : (
          <ChevronDown className="w-6 h-6 text-yellow-400" />
        )}
      </button>

      {isOpen && (
        <div className="relative p-5 pt-0">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth"
          >
            {playlist.videos.map((video) => (
              <VideoCard
                key={video.videoId}
                {...video}
              />
            ))}
          </div>

          {canLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2
                         bg-black/70 p-2 rounded-full"
            >
              <ChevronLeft className="text-yellow-400" />
            </button>
          )}

          {canRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2
                         bg-black/70 p-2 rounded-full"
            >
              <ChevronRight className="text-yellow-400" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

/* ----------------------------- SECTION ----------------------------- */

export default function VideoSection({
  playlists,
}: {
  playlists: YouTubePlaylist[];
}) {
  return (
    <>
      {playlists.map((p) => (
        <PlaylistPanel
          key={p.id}
          playlist={p}
          defaultOpen={p.defaultOpen}
        />
      ))}
    </>
  );
}
