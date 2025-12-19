import ShowCard from './ShowCard';
import type { ShowsData } from '@/constants';

export default function ShowsSection({ data }: { data: ShowsData }) {
  return (
    <section className="mt-20">
      <h2 className="text-4xl font-extrabold text-yellow-400 mb-12 text-center">
        Live Shows & Appearances
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* UPCOMING */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            🔥 Upcoming Shows
          </h3>

          {data.upcoming.length === 0 ? (
            <p className="text-gray-400 italic">
              New shows will be announced soon.
            </p>
          ) : (
            <div className="space-y-6">
              {data.upcoming.map((show, idx) => (
                <ShowCard key={idx} show={show} />
              ))}
            </div>
          )}
        </div>

        {/* PREVIOUS */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            🕰️ Previous Shows
          </h3>

          <div className="space-y-6">
            {data.previous.map((show, idx) => (
              <ShowCard key={idx} show={show} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
