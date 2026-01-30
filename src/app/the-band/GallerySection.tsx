'use client';

import GalleryCard from './GalleryCard';
import type { GalleryImage } from '@/constants';

//Fix: Add "images = []" to handle undefined cases safely
export default function GallerySection({ images = [] }: { images?: GalleryImage[] }) {
  
  // Safe check for length
  const hasImages = images && images.length > 0;

  return (
    <div className="relative group">
      <div className="flex gap-6 overflow-x-auto pb-8 px-2 scrollbar-hide scroll-smooth">
        {!hasImages ? (
          <div className="w-full text-center py-10">
            <p className="text-gray-400 italic">Gallery updates coming soon...</p>
          </div>
        ) : (
          images.map((img) => (
            <GalleryCard key={img.id} img={img} />
          ))
        )}
      </div>
      
      {/* Right fade effect */}
      <div className="absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
    </div>
  );
}