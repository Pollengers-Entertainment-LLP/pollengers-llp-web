    // src/constants/index.ts
import {
  Mic,
  Guitar,
  Zap,
  BookOpen,
  Music,
  Clapperboard,
  Drum,
  Globe,
  Download,
  MapPin,
  Disc,
  type LucideIcon,
} from 'lucide-react';

// ===========================================
// GLOBAL CONTACT & SOCIAL LINKS
// ===========================================
export const CONTACT_EMAIL = 'hello@pollengers.com';
export const MANAGER_JOHN_NAME = 'John Phukan';
export const MANAGER_ADITYA_NAME = 'Aditya Dutta';
export const PHONE_JOHN = '+91-91013-76196';
export const PHONE_ADITYA = '+91-70022-18406';
export const BASE_LOCATION = 'Guwahati, Assam · India';

export const LINKTREE_URL = 'https://linktr.ee/pollengers';
export const YOUTUBE_URL = 'https://www.youtube.com/@pollengersRockBand';
export const FACEBOOK_URL = 'https://www.facebook.com/pollengers';
export const INSTAGRAM_URL = 'https://instagram.com/pollengers';

// ===========================================
// BAND EPK: BIO & REPERTOIRE
// ===========================================
export const bandBio = `Pollengers is an Assam-based quartet formed in 2015 by founder John Phukan. The band plays music primarily based on the dynamic and groove-heavy genres of blues, funk and hard rock covering both originals and classics. Their signature sound is characterized by face-melting solos and heart-pounding rhythms, making every show an unforgettable experience.

They are one of the most exciting bands to emerge from the Northeast, known for their powerful live shows and ability to seamlessly blend different genres, from classic rock to regional Bollywood tunes.`;

export type RepertoireItem = {
  title: string;
  icon: LucideIcon;
};

export const repertoire: RepertoireItem[] = [
  { title: 'Bollywood', icon: Music },
  { title: 'Retro Classic Rock', icon: Disc },
  { title: 'Assamese', icon: Globe },
  { title: 'Funk Fusion', icon: Zap },
  { title: 'Blues Ballads', icon: Drum },
  { title: 'Hard Rock Anthems', icon: Guitar },
];

// VIDEO TYPES (YouTube driven)

// CONFIG (input)
export type PlaylistConfig = {
  id: string;
  name: string;
  description: string;
  playlistId: string;
  defaultOpen?: boolean;
};

// RUNTIME DATA (output)
export type YouTubeVideo = {
  videoId: string;
  title: string;
  subtitle: string;
};

export type YouTubePlaylist = {
  id: string;
  name: string;
  description: string;
  videos: YouTubeVideo[];
  defaultOpen?: boolean;
};




export const YOUTUBE_PLAYLISTS: PlaylistConfig[] = [
  {
    id: 'band_promos',
    name: 'Band Promo & Press Reels',
    description:
      'Short-form promotional videos for festivals, venues, and media teams.',
    playlistId: 'PLx6_nfwfN8h0GyXAntvhyFmRXdpQpOZbb',
    defaultOpen: false,
  },
  {
    id: 'live_shows',
    name: 'Live Performance Highlights',
    description:
      'High-energy live performances from festivals and major venues.',
    playlistId: 'PLx6_nfwfN8h3XLE98i6jMMXxX2DIZmWQM',
    defaultOpen: true,
  },
  {
    id: 'band_originals',
    name: 'The Originals: Studio & Live Tracks',
    description:
      'Original compositions that define the Pollengers sound.',
    playlistId: 'PLx6_nfwfN8h3jT-HiQaf1L4Jkt6o87Dna',
    defaultOpen: false,
  },
  {
    id: 'jam_sessions',
    name: 'Behind the Scenes: Jam Sessions',
    description:
      'Raw rehearsals, jams, and candid musical moments.',
    playlistId: 'PLx6_nfwfN8h3alJzX_nq5AyBf70qoP2xm',
    defaultOpen: false,
  },
];


// ===========================================
// DOWNLOAD ACTION ITEMS
// ===========================================
export type ActionItem = {
  title: string;
  description: string;
  href: string;
  color: string;
  icon: LucideIcon;
  download: boolean;
};

export const actionItems: ActionItem[] = [
  {
    title: 'Download EPK & Technical Rider',
    description: 'Complete band bio, press materials, and technical requirements.',
    href: '/documents/epk/pollengers-epk-2025-low-res.pdf',
    color: 'bg-yellow-600 hover:bg-yellow-700',
    icon: Download,
    download: true,
  },
  {
    title: 'View Stage Plot (JPEG)',
    description: 'Visual diagram of the stage setup, input list, and dimensions.',
    href: '/images/stage-map.png',
    color: 'bg-indigo-600 hover:bg-indigo-700',
    icon: MapPin,
    download: false,
  },
  {
    title: 'Download High-Res Band Photo',
    description: 'Print-ready image for posters, flyers, and promotional use.',
    href: '/documents/pollengers-high-res.pdf',
    color: 'bg-gray-600 hover:bg-gray-700',
    icon: Zap,
    download: true,
  },
];


// ===========================================
// TECHNICAL RIDER SUMMARY
// ===========================================
export type TechSummaryItem = {
  label: string;
  value: string;
  detail: string;
};

export const techSummary: TechSummaryItem[] = [
  {
    label: 'Configuration',
    value: '5-piece Band (Drums, Bass, Keyboards, 2 Guitars, Vocals)',
    detail: 'Format',
  },
  {
    label: 'Minimum Stage Size',
    value: '16 ft (width) x 12 ft (depth)',
    detail: 'Dimensions',
  },
  {
    label: 'Minimum Input Channels',
    value: '17 dedicated XLR channels',
    detail: 'Patch List',
  },
  {
    label: 'Key Backline Requirement',
    value: 'Professional Tube Guitar Amps & 300W+ Bass Amp (4x10")',
    detail: 'Amps',
  },
];

// ===========================================
// BAND LINEUP
// ===========================================
export type BandMember = {
  name: string;
  role: string;
  bio: string;
  icon: LucideIcon;
  focus: string;
  enabled: boolean;
  order: number;  
};

export const bandMembers: BandMember[] = [
  {
    name: 'John Phukan',
    role: 'Lead Vocals & Guitar',
    bio: 'Founder, Lead Vocalist, and Principal Guitarist. John anchors the band as its dual-threat performer, handling both lead vocals and complex guitar duties alone. Renowned for his searing guitar work and dynamic vocals.',
    icon: Mic,
    focus: 'Lead, Vocals',
    enabled: true,
    order: 1,
  },
  {
    name: 'Aditya Dutta',
    role: 'Drums & Percussions',
    bio: 'Master of rhythm specializing in Classic Rock, Hard Rock, Alternative Rock, and Reggae. Has extensively toured North East India, playing for literally thousands of people.',
    icon: Drum,
    focus: 'Rhythm, Groove',
    enabled: true,
    order: 2,
  },
  {
    name: 'Vishal Thapa',
    role: 'Keyboards & Synth',
    bio: "Classically trained pianist known for his dynamic fusion of progressive metal, jazz, blues, and pop. His improvisational skills are key to the band's versatility.",
    icon: Zap,
    focus: 'Synth, Improv',
    enabled: true,
    order: 3,
  },
  {
    name: 'Prasenjit Das',
    role: 'Bass',
    bio: 'Driving groove anchor known for locked-in basslines and high-energy stage presence.',
    icon: Guitar,
    focus: 'Bass, Energy',
    enabled: true,
    order: 4,
  },
];

// ===========================================
// ROTATING / GUEST MUSICIANS
// ===========================================
export type RotatingPlayer = {
  name: string;
  instrument: 'Guitar' | 'Bass';
  tag?: string; // e.g. "Guest Lead Guitar"
  description: string;
  enabled: boolean;
  order : number;
};

export const rotatingPlayers: RotatingPlayer[] = [
  {
    name: 'Sunny Jaz',
    instrument: 'Bass',
    tag : 'Guest Bass Player',
    description:
      'Infuses rhythm with magnetic energy and thunderous chops.',
    enabled: true,
    order: 5,
  },
  {
    name: 'Buman Kashyap',
    instrument: 'Bass',
    tag : 'Guest Bass Player',
    description:
      'Versatile bassist delivering tight, locked-in rhythms with strong pocket feel.',
    enabled: true,
    order: 6,
  },
  {
    name: 'Derrick Correia',
    instrument: 'Guitar',
    tag: 'Guest Lead Guitar',
    description:
      'Virtuoso guitarist who injects electrifying intricacies into every performance.',
    enabled: true,
    order: 7,
  },
  {
    name: 'Gytartha',
    instrument: 'Guitar',
    tag: 'Guest Lead Guitar',
    description:
      'Session lead guitarist, playing with multiple top-notch artists across Assam.',
    enabled: true,
    order: 8,
  },
  {
    name: 'Louis Sunil',
    instrument: 'Guitar',
    tag: 'Guest Lead Guitar',
    description:
      'Melodic guitarist with soulful tone and expressive phrasing.',
    enabled: true,
    order: 9,
  },
];


// ===========================================
// ACHIEVEMENTS & NOTABLE PERFORMANCES
// ===========================================

export const achievements: string[] = [
  'Hornbill Festival (Nagaland)',
  'Pangsau Pass International Festival (PPIF 2025)',
  'Siang River Festival (Arunachal Pradesh)',
  'Cherry Blossom Festival (Shillong)',
  'Major Venues: Hard Rock Cafe, Freemason\'s Brew Works, Café Hendrix',
  'Shared the stage with renowned blues group Soulmate.',

];

//=========================
// PAST & UPCOMING SHOWS
//=========================

export type Show = {
  date: string;            // YYYY-MM-DD
  eventName: string;       // defaults to "Private Party" at runtime
  venue: string;           // mandatory
  isPrivate: boolean;      // defaults to true at runtime
};

export type ShowsData = {
  upcoming: Show[];
  previous: Show[];
};


//======================
// IMAGE GALLERY
//=======================

export interface GalleryImage {
  id: string;
  url: string;
  location: string;
  dateOrYear: string;
  hasImage: boolean;
}



