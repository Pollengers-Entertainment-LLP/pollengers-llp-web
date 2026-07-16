// src/app/live/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Film, Users, BookOpen, Download, FileText, Calendar, Image as ImageIcon } from 'lucide-react';

import VideoSection from '../the-band/VideoSection';
import { fetchYouTubePlaylist } from '@/lib/youtube';

import GallerySection from './GallerySection';
import { fetchGallery } from '@/lib/gallery';

import ShowsSection from './ShowsSection';
import { fetchShows } from '@/lib/shows';
import ShowCard from './ShowCard';

import {
    bandBio,
    bandMembers,
    repertoire,
    YOUTUBE_PLAYLISTS,
    type RepertoireItem,
} from '@/constants';

// Forces Next.js to fetch fresh live data at request time instead of crashing during static compilation
export const dynamic = 'force-dynamic';

/** Fetch Gallery Data**/

const galleryData = await fetchGallery();

/** Fetch Shows **/

const { upcoming, previous } = await fetchShows();
const MAX_VISIBLE = 100;
const upcomingVisible = upcoming.slice(0, MAX_VISIBLE);
const previousVisible = previous.slice(0, MAX_VISIBLE);


export default async function LiveBookingPage() {
    /** Fetch Playlists safely & sort "Showcase" to the absolute top */
    // src/app/live/page.tsx (and your the-band page block)

    let playlists: Array<{
        id: string;
        name: string;
        description: string;
        videos: any[];
        defaultOpen: boolean;
    }> = [];

    try {
        const rawPlaylists = await Promise.all(
            YOUTUBE_PLAYLISTS.map(async (config) => {
                try {
                    // ✅ FIX: Use the distinct playlistId from the configuration loop
                    const data = await fetchYouTubePlaylist("PLcMdos3kcdbA");

                    return {
                        id: config.id,
                        name: config.name,
                        description: config.description,
                        videos: data?.videos || [],
                        defaultOpen: config.defaultOpen ?? false,
                    };
                } catch (err) {
                    console.error(`Bypassing playlist error for ${config.id}:`, err);
                    return {
                        id: config.id,
                        name: config.name,
                        description: config.description,
                        videos: [],
                        defaultOpen: config.defaultOpen ?? false,
                    };
                }
            })
        );

        // ✅ Sort to ensure the explicitly flagged defaultOpen playlist renders first
        playlists = [...rawPlaylists].sort((a, b) => {
            if (a.defaultOpen) return -1;
            if (b.defaultOpen) return 1;
            return 0;
        });
    } catch (globalE) {
        console.error("Failed to load playlist array:", globalE);
    }
    return (
        <main className="min-h-screen bg-gray-950 text-white pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-4 space-y-16">

                {/* 1. HERO HEADER */}
                <header className="text-center space-y-3">
                    <h1 className="text-5xl md:text-6xl font-black text-yellow-400 tracking-tight">
                        Pollengers
                    </h1>
                    <p className="text-lg text-gray-300 font-medium">
                        Assam-Based Blues, Funk & Hard Rock
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 pt-2">
                        {repertoire.map((item: RepertoireItem) => (
                            <span key={item.title} className="bg-gray-900 border border-gray-800 text-yellow-500/90 text-xs px-3 py-1 rounded-full font-medium">
                                {item.title}
                            </span>
                        ))}
                    </div>
                </header>

                {/* 2. SHOWCASE PLAYLIST FIRST */}
                <section className="bg-gray-900/60 p-4 md:p-6 rounded-xl border border-gray-800 shadow-xl">
                    <h2 className="text-xl font-bold flex items-center gap-2 mb-4 text-yellow-400">
                        <Film className="w-5 h-5" /> Showcase Videos
                    </h2>
                    <VideoSection playlists={playlists.length > 0 ? [playlists[0]] : []} />
                </section>

                {/* 3. BRIEF BIO */}
                <section className="space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2 text-gray-200 border-b border-gray-900 pb-2">
                        <BookOpen className="w-5 h-5 text-yellow-500" /> About the Band
                    </h2>
                    <p className="whitespace-pre-line text-sm text-gray-400 leading-relaxed pl-1">
                        {bandBio}
                    </p>
                </section>

                {/* 4. COMPACT LINEUP */}
                <section className="space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2 text-gray-200 border-b border-gray-900 pb-2">
                        <Users className="w-5 h-5 text-yellow-500" /> Lineup
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {bandMembers.filter(m => m.enabled).map((m) => (
                            <div key={m.name} className="bg-gray-900/40 border border-gray-800/80 p-4 rounded-lg flex flex-col justify-center">
                                <span className="font-bold text-white text-base">{m.name}</span>
                                <span className="text-xs text-yellow-500 font-mono mt-0.5">{m.role}</span>
                                {m.bio && <p className="text-xs text-gray-400 mt-1.5 line-clamp-2">{m.bio}</p>}
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. IMAGE GALLERY */}
                <section className="space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2 text-gray-200 border-b border-gray-900 pb-2">
                        <ImageIcon className="w-5 h-5 text-yellow-500" /> Images & Words
                    </h2>

                    {/* Client Component */}
                    <GallerySection images={galleryData} />

                </section>

                {/* 6. PAST PERFORMANCES LOG */}

                <section>
                    <h2 className="text-4xl font-extrabold text-yellow-400 mb-10 text-center">
                        Live Shows
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* UPCOMING SHOWS */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Upcoming Shows
                            </h3>

                            <div className="max-h-[520px] overflow-y-auto pr-2 space-y-4
                                              scrollbar-thin scrollbar-thumb-gray-700">
                                {upcomingVisible.length ? (
                                    upcomingVisible.map(show => (
                                        <ShowCard
                                            key={`${show.date}-${show.venue}`}
                                            show={show}
                                        />
                                    ))
                                ) : (
                                    <p className="text-gray-400 italic">
                                        No upcoming shows announced yet.
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* PAST SHOWS */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Past Shows
                            </h3>

                            <div className="max-h-[250px] md:max-h-[520px] overflow-y-auto pr-2 space-y-4
                                              scrollbar-thin scrollbar-thumb-gray-700">
                                {previousVisible.length ? (
                                    previousVisible.map(show => (
                                        <ShowCard
                                            key={`${show.date}-${show.venue}`}
                                            show={show}
                                        />
                                    ))
                                ) : (
                                    <p className="text-gray-400 italic">
                                        No past shows available.
                                    </p>
                                )}
                            </div>
                        </div>

                    </div>
                </section>
                {/* 7. EPK/ASSETS DOWNLOAD */}
                <section className="bg-gray-900/20 border border-gray-900 p-6 rounded-xl space-y-4">
                    <h2 className="text-lg font-bold flex items-center gap-2 text-gray-200">
                        <FileText className="w-5 h-5 text-yellow-500" /> Event Assets
                    </h2>
                    <p className="text-xs text-gray-400">
                        Download high-resolution photos, posters, and the technical stage layout for sound engineers.
                    </p>
                    <div className="pt-2">
                        <a
                            href="/documents/epk/pollengers-epk-2025-low-res.pdf"
                            download
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-gray-850 text-white rounded-lg text-xs font-semibold border border-gray-800 transition"
                        >
                            <Download className="w-4 h-4 text-yellow-500" />
                            Download Press Kit PDF
                        </a>
                    </div>
                </section>

                {/* 8. INSTANT CONTACT HOOK */}
                <section className="text-center bg-gradient-to-r from-yellow-500/10 to-amber-500/5 p-8 rounded-2xl border border-yellow-500/20 shadow-lg space-y-4">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-black text-white">Book Pollengers</h2>
                        <p className="text-xs text-gray-400">Available for clubs, festivals, corporate events, and private shows across the Northeast.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full text-xs font-bold tracking-wider uppercase transition shadow-md"
                        >
                            Send Booking Inquiry
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}