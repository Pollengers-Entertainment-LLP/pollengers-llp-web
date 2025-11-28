// src/app/about/page.tsx

import Link from 'next/link';
import { CONTACT_EMAIL, BASE_LOCATION } from '@/constants'; // Import constants
import { Megaphone, Zap, Music, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <header className="text-center py-12">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-2">
            About Pollengers Entertainment LLP
          </h1>
          <p className="text-xl text-gray-300 italic">
            Professionalism, Passion, and Performance since 2015.
          </p>
          <div className="mt-6 h-1 w-20 bg-yellow-400 mx-auto rounded-full" />
        </header>

        <section className="space-y-12 text-gray-300 text-lg">
          
          {/* 1. Mission Statement */}
          <div className="p-6 bg-gray-800 rounded-xl shadow-2xl border-l-4 border-yellow-500">
            <h2 className="text-3xl font-bold text-white flex items-center mb-4">
                <Megaphone className="w-6 h-6 mr-3 text-yellow-400" />
                Our Mission
            </h2>
            <p>
              Pollengers Entertainment LLP is dedicated to delivering high-caliber musical performances across India. Our mission is to blend the raw energy of blues, funk, and hard rock with the cultural richness of **Bollywood, Retro Classic Rock, and Assamese music**, providing a unique and unforgettable entertainment experience for all promoters and audiences.
            </p>
          </div>

          {/* 2. History and Structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* History */}
            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 border-b border-gray-700 pb-2 mb-4">
                Our History
              </h3>
              <p>
                The LLP was established around the core musical group, **The Pollengers**, founded in 2015 by John Phukan. What started as a collective of passionate musicians quickly evolved into a professional entity focused on large-scale events, festival circuits (including Hornbill and Siang River Festival), and corporate bookings.
              </p>
            </div>
            
            {/* Structure */}
            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 border-b border-gray-700 pb-2 mb-4">
                Our Structure (LLP)
              </h3>
              <p>
                Operating as a Limited Liability Partnership (LLP) ensures legal clarity, professionalism, and streamlined processes for all contractual and financial matters. This structure guarantees reliability and protects all parties involved in booking, management, and performance agreements.
              </p>
            </div>
          </div>
          
          {/* 3. Core Values */}
          <div>
            <h3 className="text-2xl font-semibold text-yellow-400 border-b border-gray-700 pb-2 mb-4">
              Core Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                    <Music className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <p className="font-bold text-white">Musical Excellence</p>
                    <p className="text-sm text-gray-400">Commitment to sound quality and performance mastery.</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                    <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <p className="font-bold text-white">Reliable Execution</p>
                    <p className="text-sm text-gray-400">Professional contracts, timely delivery, and clear technical communication.</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                    <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <p className="font-bold text-white">Cultural Connect</p>
                    <p className="text-sm text-gray-400">Proudly representing the music scene of North East India.</p>
                </div>
            </div>
          </div>

          {/* 4. Call to Action */}
          <div className="text-center pt-8">
            <p className="text-xl font-medium mb-4">
              Ready to book The Pollengers for your next event?
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-black bg-yellow-400 hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
            >
              Get in Touch with Management
            </Link>
            <p className="text-sm text-gray-400 mt-3">
                Or email us directly at: <a href={`mailto:${CONTACT_EMAIL}`} className="text-yellow-400 underline">{CONTACT_EMAIL}</a>
            </p>
          </div>

        </section>
      </div>
    </main>
  );
}