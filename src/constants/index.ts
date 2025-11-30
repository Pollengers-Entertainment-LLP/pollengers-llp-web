import { Mic, Guitar, Zap, BookOpen, Music, Clapperboard, type LucideIcon } from 'lucide-react';

// ===========================================
// GLOBAL CONTACT & SOCIAL LINKS
// ===========================================
/**
 * Central hub for globally used website text and values.
 * Change values here to update them across the entire site.
 */
export const CONTACT_EMAIL = 'hello@pollengers.com';
export const MANAGER_JOHN_NAME = 'John Phukan';
export const MANAGER_ADITYA_NAME = 'Aditya Dutta';
export const PHONE_JOHN = '+91-91013-76196';
export const PHONE_ADITYA = '+91-70022-18406';
export const BASE_LOCATION = 'Guwahati, Assam · India';

// Social Links
export const LINKTREE_URL = 'https://linktr.ee/pollengers';
export const YOUTUBE_URL = 'https://www.youtube.com/@pollengersRockBand';
export const FACEBOOK_URL = 'https://www.facebook.com/pollengers';
export const INSTAGRAM_URL = 'https://instagram.com/pollengers';

// ===========================================
// TYPE DEFINITIONS
// ===========================================
export interface RepertoireItem {
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface Video {
    videoId: string;
    title: string;
    subtitle: string;
}

export interface Playlist {
    id: string;
    name: string;
    description: string;
    videos: Video[];
}

// ===========================================
// BAND PROFILE CONTENT
// ===========================================

// --- 1. Band Biography ---
export const bandBio = `
Pollengers is an Assam-based quartet formed in 2015 by founder John Phukan. The band plays music that is primarily based on the dynamic and groove-heavy genres of blues, funk, and hard rock, covering both originals and classics. Their signature sound is characterized by face-melting solos and heart-pounding rhythms, making every show an unforgettable experience.
`;

// --- 2. Repertoire Details ---
export const repertoire: RepertoireItem[] = [
    { title: "Bollywood / Hindi Pop", description: "High-energy rock arrangements of popular Hindi film music hits, perfect for corporate and large social events.", icon: Clapperboard },
    { title: "Retro Rock", description: "Classic covers by influential bands such as The Beatles, appealing to broad audiences.", icon: Music },
    { title: "Blues / Hard Rock", description: "Covers by giants like Johnny Lang, Buddy Guy, Eric Clapton, Deep Purple, ZZ Top, and Neil Young.", icon: Guitar },
    { title: "Funk Fusion", description: "Focus on dynamic and groove-heavy fusion pieces, ensuring high energy on the dance floor.", icon: Zap },
    { title: "Assamese Covers", description: "Powerful arrangements of popular regional hits, maintaining strong local connection.", icon: Mic },
    { title: "Originals", description: "Performing their own compositions, showcasing their unique voice and songwriting.", icon: BookOpen }
];

// --- 3. YouTube Playlist Data ---
// IMPORTANT: Replace the 'videoId' with the actual YouTube video ID from your channel.
export const PLAYLISTS: Playlist[] = [
    {
        id: 'live',
        name: 'Live Gigs & Festival Footage',
        description: 'See the energy we bring to major stages, showcasing performance quality and crowd response.',
        videos: [
            { videoId: 'E-LqV2Ww9nQ', title: 'Hornbill Festival 2023 Set Excerpt', subtitle: 'Signature hard rock energy.' },
            { videoId: 'dQw4w9WgXcQ', title: 'Jaipur Literature Fest Performance', subtitle: 'Acoustic-electric blues jam.' },
            { videoId: 'wYg4b1zL_dM', title: 'Metropolis Asia Festival (Guwahati)', subtitle: 'Funk-driven cover set.' },
            { videoId: 'E-LqV2Ww9nQ', title: 'Red FM Band Stand Showcase', subtitle: 'High-production original rock.' },
        ],
    },
    {
        id: 'originals',
        name: 'Original Compositions & Studio Demos',
        description: 'Hear our unique voice in the blues/funk/rock fusion scene with our latest compositions.',
        videos: [
            { videoId: 'dQw4w9WgXcQ', title: 'The Storm (Official Demo)', subtitle: 'Hard Rock Original.' },
            { videoId: 'wYg4b1zL_dM', title: 'River Flow (Studio Session)', subtitle: 'Assamese Blues Fusion.' },
            { videoId: 'E-LqV2Ww9nQ', title: 'City Lights (Acoustic Mix)', subtitle: 'Melodic soft rock piece.' },
            { videoId: 'dQw4w9WgXcQ', title: 'Midnight Groove (Full Mix)', subtitle: 'Classic funk composition.' },
        ],
    },
    {
        id: 'jamming',
        name: 'Band Jamming & Practice Sessions',
        description: 'Behind-the-scenes look at the band’s chemistry, showing raw talent and musical synergy.',
        videos: [
            { videoId: 'wYg4b1zL_dM', title: 'Blues Scale Jam (Feb 2024)', subtitle: 'Improvisation & technique.' },
            { videoId: 'E-LqV2Ww9nQ', title: 'Funk Riff Warmup', subtitle: 'Tight rhythm section practice.' },
            { videoId: 'dQw4w9WgXcQ', title: 'New Song Idea Sketch', subtitle: 'Unedited creative session.' },
            { videoId: 'wYg4b1zL_dM', title: 'Classic Rock Cover Rehearsal', subtitle: 'Pre-gig run-through.' },
        ],
    },
];