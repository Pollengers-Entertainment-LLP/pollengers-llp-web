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

// ===========================================
// VIDEO PLAYLISTS
// ===========================================
export type Video = {
  videoId: string;
  title: string;
  subtitle: string;
};

export type Playlist = {
  id: string;
  name: string;
  description: string;
  videos: Video[];
};

export const PLAYLISTS: Playlist[] = [
  {
    id: 'live_shows',
    name: 'Live Performance Highlights',
    description:
      'See the band in action, featuring high-energy originals and covers from major venues across Northeast India.',
    videos: [
      {
        videoId: '4FNIf9JTQMs',
        title: 'Aalo Winter Fest',
        subtitle: 'Aalo Winter Fest Arunachal Pradesh',
      },
      {
        videoId: 'fsjF5XS_EMs',
        title: 'Siang River Festival Pasighat',
        subtitle: 'Pollengers Live Performances',
      },
      {
        videoId: 'LpG2bl62jlY',
        title: 'Bodoland Riders Meet 2020',
        subtitle: 'Pollengers Live Performances',
      },
      {
        videoId: 'NUXjWEqO7ik',
        title: 'PPIF 2025',
        subtitle: 'Pollengers Live Performances',
      },
      {
        videoId: 'vlR51iEK5tE',
        title: 'MOH MOL 2025',
        subtitle: 'Pollengers Live Performances',
      }
    ],
  },
  {
    id: 'band_originals',
    name: 'The Originals: Studio & Live Tracks',
    description:
      "The heart of Pollengers: our self-penned songs that define our signature blend of blues, funk, and hard rock. Featuring official music videos and live original cuts.",
    videos: [
      {
        videoId: 'oDma147ebLE',
        title: 'Balighar - Pollengers OST',
        subtitle: 'Assamese original song by Pollengers',
      },
      {
        videoId: 'gPX98ia5qaQ',
        title: 'Ubhoti Nahu Ghuri - Pollengers OST',
        subtitle: 'Assamese original song by Pollengers',
      },
      {
        videoId: '4L1pqhNECkA',
        title: 'Mukoli Mon Mukto Aakaax - Pollengers OST',
        subtitle: 'Assamese original song by Pollengers',
      },
    ],
  },
  {
    id: 'jam_sessions',
    name: 'Behind the Scenes: Jam Sessions',
    description:
      'Unfiltered, candid footage showcasing our raw creative process, musical chemistry, and spontaneous improvisations during band practice and studio warm-ups.',
    videos: [
      {
        videoId: 'QRRZ1gj4GZY',
        title: 'Soku meli saute - Zubeen Garg Cover',
        subtitle: 'The Great Zubeen Da',
      },
      {
        videoId: '1ApT_CT0Ys8',
        title: 'Voodoo Child - Jimi Hendrix Cover',
        subtitle: 'Jimi Hendrix Experience',
      },
      {
        videoId: 'twiqbENWdDI',
        title: 'I wanna hold your hand - The Beatles Cover',
        subtitle: 'The Beatles',
      }
    ],
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
    href: '/images/pollengers-band-hires.jpg',
    color: 'bg-gray-600 hover:bg-gray-700',
    icon: Zap,
    download: true,
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
};

export const bandMembers: BandMember[] = [
  {
    name: 'John Phukan',
    role: 'Lead Vocals & Guitar',
    bio: 'Founder, Lead Vocalist, and Principal Guitarist. John anchors the band as its dual-threat performer, handling both lead vocals and complex guitar duties alone. Renowned for his searing guitar work and dynamic vocals.',
    icon: Mic,
    focus: 'Lead, Vocals',
  },
  {
    name: 'Aditya Dutta',
    role: 'Drums & Percussions',
    bio: 'Master of rhythm specializing in Classic Rock, Hard Rock, Alternative Rock, and Reggae. Has extensively toured North East India, playing for literally thousands of people.',
    icon: Drum,
    focus: 'Rhythm, Groove',
  },
  {
    name: 'Vishal Thapa',
    role: 'Keyboards & Synth',
    bio: "Classically trained pianist known for his dynamic fusion of progressive metal, jazz, blues, and pop. His improvisational skills are key to the band's versatility.",
    icon: Zap,
    focus: 'Synth, Improv',
  },
  {
    name: 'Prasenjit Das',
    role: 'Bass',
    bio: 'Driving groove anchor known for locked-in basslines and high-energy stage presence.',
    icon: Guitar,
    focus: 'Bass, Energy',
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
// ROTATING / GUEST MUSICIANS
// ===========================================
export type RotatingPlayer = {
  name: string;
  instrument: 'Guitar' | 'Bass';
  tag?: string; // e.g. "Guest Lead Guitar"
  description: string;
};

export const rotatingPlayers: RotatingPlayer[] = [
  {
    name: 'Sunny Jaz',
    instrument: 'Bass',
    description:
      'Infuses rhythm with magnetic energy and thunderous chops.',
  },
  {
    name: 'Buman Kashyap',
    instrument: 'Bass',
    description:
      'Versatile bassist delivering tight, locked-in rhythms with strong pocket feel.',
  },
  {
    name: 'Derrick Correia',
    instrument: 'Guitar',
    tag: 'Guest Lead Guitar',
    description:
      'Virtuoso guitarist who injects electrifying intricacies into every performance.',
  },
  {
    name: 'Gytartha',
    instrument: 'Guitar',
    tag: 'Guest Lead Guitar',
    description:
      'Session lead guitarist, playing with multiple top-notch artists across Assam.',
  },
  {
    name: 'Louis Sunil',
    instrument: 'Guitar',
    tag: 'Guest Lead Guitar',
    description:
      'Melodic guitarist with soulful tone and expressive phrasing.',
  },
];

