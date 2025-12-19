import type { Show } from '@/constants';

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default function ShowCard({ show }: { show: Show }) {
  return (
    <div className="relative pl-10">
      {/* Timeline dot */}
      <span className="absolute left-1 top-2 w-3 h-3 rounded-full bg-yellow-400" />

      {/* Timeline line */}
      <span className="absolute left-[7px] top-6 bottom-0 w-px bg-gray-700" />

      <div
        className="bg-gray-800 rounded-lg p-4 border border-gray-700
                   hover:border-yellow-500/40 transition"
      >
        {/* Date */}
        <p className="text-xs text-gray-400">
          {formatDate(show.date)}
        </p>

        {/* Event name */}
        <h4 className="text-lg font-bold text-yellow-400 mt-1">
          {show.eventName}
        </h4>

        {/* Private marker */}
        {show.isPrivate && (
          <p className="text-xs text-gray-400 italic mt-0.5">
            Private Event
          </p>
        )}

        {/* Venue */}
        <p className="text-sm text-gray-300 mt-2">
          📍 {show.venue}
        </p>
      </div>
    </div>
  );
}
