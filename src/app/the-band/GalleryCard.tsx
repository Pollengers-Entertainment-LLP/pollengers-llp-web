//GalleryCard.tsx
'use client';
import { useState } from 'react';
import { MapPin, Calendar, Maximize2, X } from 'lucide-react';
import type { GalleryImage } from '@/constants';

export default function GalleryCard({ img }: { img: GalleryImage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => img.hasImage && setIsOpen(true)}
        className="flex-shrink-0 w-72 bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-yellow-500/20 transition group cursor-pointer"
      >
        {/* IMAGE CONTAINER */}
        <div className="relative aspect-video bg-gray-900 flex items-center justify-center overflow-hidden">
          {img.hasImage ? (
            <>
              <img 
                src={img.url} 
                alt={img.location} 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="text-yellow-400 w-8 h-8" />
              </div>
            </>
          ) : (
            <span className="text-gray-500 text-xs italic">Image Not Available</span>
          )}
        </div>

        {/* DETAILS (Matches ShowCard Style) */}
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <MapPin className="w-4 h-4 text-yellow-400" />
            <span className="font-semibold text-white truncate">{img.location}</span>
          </div>
          
          <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
            <Calendar className="w-3 h-3" />
            <span>{img.dateOrYear || 'N/A'}</span>
          </div>
        </div>
      </div>

      {/* EXPANDED VIEW POPUP */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-yellow-400 transition">
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={img.url} 
              className="w-full h-auto max-h-[85vh] object-contain rounded shadow-2xl" 
              alt={img.location} 
            />
            <div className="mt-4 flex flex-col items-center">
               <h3 className="text-xl font-bold text-yellow-400">{img.location}</h3>
               <p className="text-gray-400">{img.dateOrYear}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}