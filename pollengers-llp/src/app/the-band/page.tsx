// src/app/the-band/page.tsx

import Link from 'next/link';
import Image from 'next/image';

// Define the action cards/buttons for the promoter
const actionItems = [
  {
    title: 'Download EPK & Technical Rider',
    description: 'Complete band bio, press materials, and technical requirements.',
    href: '/documents/epk/Pollengers-EPK-Low-Res-28112025.pdf', // Path to the PDF in public/documents
    color: 'bg-yellow-600 hover:bg-yellow-700',
    download: true, // Indicates a download action
  },
  {
    title: 'View Stage Plot (JPEG)',
    description: 'Visual diagram of the stage setup, input list, and dimensions.',
    href: '/images/stage-map.jpg', // Path to the Stage Map in public/images
    color: 'bg-indigo-600 hover:bg-indigo-700',
    download: false, // Indicates a view/preview action
  },
  {
    title: 'Download High-Res Band Photo',
    description: 'Print-ready image for posters, flyers, and promotional use.',
    href: '#', // Placeholder for the high-res photo URL
    color: 'bg-gray-600 hover:bg-gray-700',
    download: true,
  },
];

export default function TheBandPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Band Title and Bio Section */}
        <header className="text-center py-12">
          <h1 className="text-6xl font-extrabold text-yellow-400 mb-4 tracking-tighter">
            The Pollengers
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto italic">
            "Assam-based blues, funk & hard rock band electrifying stages with originals & classic covers since 2015."
          </p>
          <div className="mt-8 h-1 w-24 bg-yellow-400 mx-auto rounded-full" />
        </header>

        {/* 2. Key Action Items for Promoters */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-200">
            For Promoters, Media, and Technical Teams
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {actionItems.map((item) => (
              <Link 
                key={item.title} 
                href={item.href} 
                // Use the download attribute if it's a file download
                {...(item.download && { download: true })}
                target={item.download ? '_self' : '_blank'} // Open viewable files in a new tab
                className={`p-6 rounded-xl shadow-2xl transition duration-300 transform hover:scale-[1.03] ${item.color} flex flex-col justify-between`}
              >
                <div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
                <div className="mt-4 text-sm font-semibold flex items-center">
                  {item.download ? 'Click to Download ↓' : 'Click to View →'}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 3. Placeholder for future content */}
        <section className="mt-20 text-center">
             <h3 className="text-xl text-gray-400">Booking: Contact Pollengers LLP for availability and rates.</h3>
        </section>

      </div>
    </main>
  );
}