import Link from 'next/link';
import { Briefcase, Mic2, GraduationCap, Code, Speaker, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Pollengers Entertainment LLP',
  description: 'Explore the full range of services offered by Pollengers Entertainment LLP: Artist Management, Jingle/Audio Production, Music Education, Software, and Audio Solutions.',
};

// Define the 5 business verticals with expanded descriptions
const servicesData = [
  { 
    title: '1. Artist Management', 
    icon: Mic2, 
    description: 'We offer full-spectrum management services covering booking, PR, contract negotiation, and tour logistics. We focus on building sustainable careers for musicians and artists across diverse genres. This is where you can see our roster.', 
    href: '/services/artist-management',
    bgClass: 'bg-red-900/40 hover:bg-red-800/60'
  },
  { 
    title: '2. Jingle/Audio Production', 
    icon: Speaker, 
    description: 'Our in-house production team specializes in creating memorable jingles, background scores, and premium audio branding for corporate clients, media campaigns, and films. We cover mixing, mastering, and sound design.', 
    href: '/services/audio-production',
    bgClass: 'bg-yellow-900/40 hover:bg-yellow-800/60'
  },
  { 
    title: '3. Music Education', 
    icon: GraduationCap, 
    description: 'We run structured, modern music programs for all skill levels. From instrumental training (Guitar, Keyboard, Drums) to advanced music theory and audio engineering classes, we aim to nurture the next generation of professionals.', 
    href: '/services/music-education',
    bgClass: 'bg-green-900/40 hover:bg-green-800/60'
  },
  { 
    title: '4. Software Solutions', 
    icon: Code, 
    description: 'Leveraging technology to advance the music industry, we develop custom e-learning platforms, music-related applications, and software tools designed to streamline production and education processes.', 
    href: '/services/softwares',
    bgClass: 'bg-blue-900/40 hover:bg-blue-800/60'
  },
  { 
    title: '5. Audio Solutions', 
    icon: Briefcase, 
    description: 'Providing comprehensive technical consulting for sound installations, acoustic treatment design, and supply of professional audio equipment for live venues, studios, schools, and corporate spaces.', 
    href: '/services/audio-solutions',
    bgClass: 'bg-purple-900/40 hover:bg-purple-800/60'
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-900 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white">
            Our <span className="text-yellow-400">Services</span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Pollengers Entertainment LLP is a diverse corporate entity with five distinct verticals driving professional excellence in the music and entertainment sector.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              className={`p-8 rounded-xl shadow-2xl transition duration-300 ${service.bgClass} border-l-4 border-yellow-500`}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-yellow-500 mr-4">
                  <service.icon className="w-6 h-6 text-gray-900" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  {service.title}
                </h2>
              </div>
              
              <p className="mt-4 text-lg text-gray-300">
                {service.description}
              </p>
              
              <div className="mt-6">
                <Link 
                  href={service.href} 
                  className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition duration-150"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 p-10 text-center bg-gray-800 rounded-xl shadow-inner">
          <h3 className="text-3xl font-bold text-white">Ready to Partner?</h3>
          <p className="mt-2 text-gray-400">
            Contact the LLP management for inquiries related to any of our services.
          </p>
          <Link 
            href="/contact" 
            className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Contact Pollengers LLP
          </Link>
        </div>
      </div>
    </div>
  );
} 