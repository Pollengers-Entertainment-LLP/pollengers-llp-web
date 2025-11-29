// src/app/the-band/page.tsx

import Link from 'next/link';
import Image from 'next/image';
import { Download, Mic, Guitar, Drum, Zap, MapPin } from 'lucide-react';
import { CONTACT_EMAIL } from '@/constants'; // Assuming you centralized constants

// --- Download Action Items (Retaining your functional links) ---
const actionItems = [
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
    href: '/images/stage-map.png', // Assumes path from previous steps
    color: 'bg-indigo-600 hover:bg-indigo-700',
    icon: MapPin,
    download: false,
  },
  {
    title: 'Download High-Res Band Photo',
    description: 'Print-ready image for posters, flyers, and promotional use.',
    href: '/images/pollengers-band-hires.jpg', // Assumes path from previous steps
    color: 'bg-gray-600 hover:bg-gray-700',
    icon: Zap,
    download: true,
  },
];

// --- Band Lineup Data (from EPK Page 3 & 4) ---
const bandMembers = [
  {
    name: 'John Phukan',
    role: 'Lead Vocals & Guitar',
    bio: 'Founder, Lead Vocalist, and Principal Guitarist. John anchors the band as its dual-threat performer, handling both lead vocals and complex guitar duties alone. Renowned for his searing guitar work and dynamic vocals.',
    // NOTE: Requires image: '/images/members/john-phukan.jpg'
    icon: Mic,
    focus: 'Lead, Vocals',
  },
  {
    name: 'Aditya Dutta',
    role: 'Drums & Percussions',
    bio: 'Master of rhythm specializing in Classic Rock, Hard Rock, Alternative Rock, and Reggae. Has extensively toured North East India, playing for literally thousands of people.',
    // NOTE: Requires image: '/images/members/aditya-dutta.jpg'
    icon: Drum,
    focus: 'Rhythm, Groove',
  },
  {
    name: 'Vishal Thapa',
    role: 'Keyboards & Synth',
    bio: 'Classically trained pianist known for his dynamic fusion of progressive metal, jazz, blues, and pop. His improvisational skills are key to the band\'s versatility.',
    // NOTE: Requires image: '/images/members/vishal-thapa.jpg'
    icon: Zap,
    focus: 'Synth, Improv',
  },
  {
    name: 'Prasenjit Das',
    role: 'Bass',
    bio: 'Driving groove anchor known for locked-in basslines and high-energy stage presence.',
    // NOTE: Requires image: '/images/members/prasenjit-das.jpg'
    icon: Guitar,
    focus: 'Bass, Energy',
  },
];

// --- Technical Rider Summary (from EPK Page 5) ---
const techSummary = [
    { label: 'Configuration', value: '5-piece Band (Drums, Bass, Keyboards, 2 Guitars, Vocals)', detail: 'Format' },
    { label: 'Minimum Stage Size', value: '16 ft (width) x 12 ft (depth)', detail: 'Dimensions' },
    { label: 'Minimum Input Channels', value: '17 dedicated XLR channels', detail: 'Patch List' },
    { label: 'Key Backline Requirement', value: 'Professional Tube Guitar Amps & 300W+ Bass Amp (4x10")', detail: 'Amps' },
]


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
            "Assam-based blues, funk & hard rock band electrifying stages with originals & classic covers since 2015."
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
        
        {/* 3. Detailed Biography & Sound */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
                <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">Biography</h2>
                <p className="text-sm text-gray-400">Founded in 2015</p>
            </div>
            <div className="lg:col-span-2 space-y-6 text-gray-300">
                <p className="text-lg font-medium">
                    Pollengers is an Assam-based quartet formed in 2015 by founder John Phukan.
                </p>
                <p>
                    The band plays music primarily based on the dynamic and groove-heavy genres of blues, funk and hard rock covering both originals and classics. Their signature sound is characterized by face-melting solos and heart-pounding rhythms, making every show an unforgettable experience.
                </p>

                {/* --- NEW GENRE BLOCK --- */}
                <div className="pt-4 pb-2 border-t border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Versatile Repertoire</h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-1 bg-yellow-600 text-black font-medium rounded-full text-sm">Bollywood</span>
                        <span className="px-3 py-1 bg-yellow-600 text-black font-medium rounded-full text-sm">Retro Classic Rock</span>
                        <span className="px-3 py-1 bg-yellow-600 text-black font-medium rounded-full text-sm">Assamese</span>
                        <span className="px-3 py-1 bg-yellow-600 text-black font-medium rounded-full text-sm">Funk Fusion</span>
                    </div>
                </div>
                {/* --- END NEW GENRE BLOCK --- */}
                <p className="italic text-sm text-gray-400">
                    Diverse Repertoire includes covers by giants like Johnny Lang, Buddy Guy, Eric Clapton, Deep Purple, ZZ Top, Neil Young, and The Beatles.
                </p>
            </div>
        </section>

        <hr className="my-16 border-gray-700" />
        
        {/* 4. Band Lineup and Profiles */}
        <section>
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-10 text-center">Meet The Band</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bandMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition duration-300">
                {/* Placeholder Image - Needs to be replaced with actual image */}
                <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-gray-500 font-bold">
                    <Image
                      src={`/images/members/${member.name.toLowerCase().replace(/\s/g, '-')}.jpg`}
                      alt={member.name}
                      width={400} 
                      height={400} 
                      className="w-full h-48 object-cover" // object-cover ensures it fills the container
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-2xl font-bold text-white leading-tight">{member.name}</h3>
                  <p className="text-yellow-400 text-sm font-semibold mb-3 uppercase tracking-wider">{member.role}</p>
                  <p className="text-sm text-gray-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-16 border-gray-700" />
        
        {/* 5. Achievements and Technical Rider Summary */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Achievements */}
            <div>
                <h2 className="text-3xl font-bold text-yellow-400 mb-6">Achievements & Selected Performances</h2>
                <ul className="space-y-3 text-gray-300 list-disc list-inside">
                    <li className="font-semibold">Hornbill Festival (Nagaland)</li>
                    <li>Pangsau Pass International Festival (PPIF 2025)</li>
                    <li>Tangsa Moh Mol 2025 (Arunachal Pradesh)</li>
                    <li>Siang River Festival (2023)</li>
                    <li>Cherry Blossom Festival (Shillong)</li>
                    <li>Major Venues: Hard Rock Cafe, Freemason's Brew Works, Café Hendrix</li>
                    <li>Shared the stage with renowned blues group Soulmate.</li>
                </ul>
            </div>
            
            {/* Technical Summary */}
            <div>
                <h2 className="text-3xl font-bold text-yellow-400 mb-6">Technical Rider Summary</h2>
                <div className="space-y-4">
                    {techSummary.map((item) => (
                        <div key={item.label} className="p-4 bg-gray-800 rounded-lg">
                            <p className="text-xs font-semibold uppercase text-gray-400">{item.label} ({item.detail})</p>
                            <p className="text-lg font-medium text-white">{item.value}</p>
                        </div>
                    ))}
                    <p className="mt-4 text-sm text-gray-400 italic">
                        Full detailed rider is available for download above, including the 17-channel Input List.
                    </p>
                </div>
            </div>

        </section>

      </div>
    </main>
  );
}