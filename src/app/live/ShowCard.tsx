import { MapPin, Lock } from 'lucide-react';
import type { Show } from '@/constants';

export default function ShowCard({ show }: { show: Show }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-yellow-500/20 transition">
      
      {/* DATE */}
      <p className="text-xs text-gray-400 mb-1">
        {show.date ? new Date(show.date).toDateString() : 'Unknown date'}
      </p>

      {/* EVENT NAME + PRIVATE TAG */}
      <div className="flex items-center gap-2">
        <h4 className="text-lg font-semibold text-white">
          {show.eventName || 'Private Party'}
        </h4>

        {show.isPrivate && (
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <Lock className="w-3 h-3" />
            Private Event
          </span>
        )}
      </div>

      {/* VENUE */}
      <div className="flex items-center gap-2 mt-1 text-sm text-gray-300">
        <MapPin className="w-4 h-4 text-yellow-400" />
        <span>{show.venue}</span>
      </div>
    </div>
  );
}
