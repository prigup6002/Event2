import { Link } from "react-router-dom";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

export default function EventCard({ event, index }) {
  return (
    <Link
      to={`/events/${event.id}`}
      className="event-card group block min-w-0"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-neutral-900">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10 transition-colors group-hover:from-black/90" />

        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-black">
          <span className="mr-2 text-[#922BFF]">●</span>
          {event.category}
        </span>

        <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white transition group-hover:border-[#922BFF] group-hover:bg-[#922BFF]">
          <FiArrowUpRight size={20} />
        </span>

        <div className="absolute bottom-0 left-0 w-full p-5 text-white md:p-6">
          <p className="mb-2 text-xs font-medium text-white/75">
            {event.date} · {event.time}
          </p>

          <h3 className="font-display text-3xl uppercase leading-[0.95] md:text-4xl">
            {event.title}
          </h3>

          <p className="mt-4 flex items-center gap-2 text-sm text-white/80">
            <FiMapPin className="shrink-0 text-[#B9FF00]" />
            {event.city}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 py-4">
        <div>
          <p className="text-xs text-neutral-500">Starting from</p>
          <p className="mt-1 text-lg font-bold text-black">
            ₹{event.price.toLocaleString("en-IN")}
          </p>
        </div>

        <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600 transition group-hover:text-[#922BFF]">
          Explore event ↗
        </span>
      </div>
    </Link>
  );
}