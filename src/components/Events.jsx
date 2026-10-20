
import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    id: "1",
    name: "THE CULTURE CLUB",
    category: "MUSIC & CULTURE",
    location: "Mumbai, India",
    description:
      "An electric gathering of music, art and people. Experience the energy of India's next generation of live culture.",
    date: "15 NOV 2026",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "2",
    name: "CITY AFTER DARK",
    category: "NIGHTLIFE",
    location: "Bengaluru, India",
    description:
      "A night built around sound, lights and unforgettable moments. Meet your people and experience the city differently.",
    date: "22 NOV 2026",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "3",
    name: "THE CREATIVE MEET",
    category: "COMMUNITY",
    location: "Delhi, India",
    description:
      "A space for creators, dreamers and curious minds to connect, exchange ideas and make something happen.",
    date: "06 DEC 2026",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=90",
  },
];

function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-white/15 py-4">
      <div className="events-marquee flex w-max items-center gap-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="flex items-center gap-5 text-xs font-bold tracking-widest"
          >
            MADE FOR REAL-LIFE MOMENTS
            <span className="text-[#a8ff00]">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Events() {
  const pageRef = useRef(null);
  const revealRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".events-hero-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
      });

      gsap.to(revealRef.current, {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".events-reveal-section",
          start: "top 75%",
          end: "top top",
          scrub: 1,
        },
      });

      gsap.utils.toArray(".event-row").forEach((row) => {
        const image = row.querySelector(".event-image");
        const content = row.querySelector(".event-copy");

        gsap.from(image, {
          y: 90,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 82%",
          },
        });

        gsap.from(content, {
          x: row.classList.contains("event-row-reverse") ? 70 : -70,
          opacity: 0,
          duration: 0.9,
          delay: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 78%",
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="overflow-hidden bg-black text-white">
      {/* HERO */}
      <section className="flex min-h-[85vh] flex-col justify-center px-5 pb-20 pt-32 sm:px-10 lg:px-20">
        <Marquee />

        <div className="mx-auto mt-14 max-w-[1200px] text-center">
          <p className="mb-6 text-xs font-bold tracking-[0.25em] text-white/65">
            FIND YOUR NEXT EXPERIENCE
          </p>

          <h1 className="font-display text-[clamp(3.2rem,9.5vw,9rem)] leading-[0.86] tracking-tight">
            <span className="events-hero-line block">YOUR NEXT GREAT</span>
            <span className="events-hero-line block text-[#a8ff00]">
              EXPERIENCE
            </span>
            <span className="events-hero-line block">STARTS HERE.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
            Discover the people, places and experiences worth stepping out for.
            Find your next story with Togro.
          </p>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-white/20 pt-5 text-xs uppercase tracking-wider text-white/60">
          <span>Explore what's happening</span>
          <span>India · 2026</span>
        </div>
      </section>

      {/* FULL-SCREEN IMAGE REVEAL */}
      <section className="events-reveal-section relative flex h-[115vh] items-center justify-center bg-black">
        <div
          ref={revealRef}
          className="relative h-[55vh] w-[76vw] overflow-hidden rounded-md"
        >
          <img
            src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=2200&q=90"
            alt="Crowd enjoying a live music event"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute bottom-8 left-6 sm:bottom-12 sm:left-12">
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-[#a8ff00]">
              THIS IS YOUR SIGN
            </p>
            <h2 className="font-display text-5xl leading-[0.9] sm:text-7xl lg:text-8xl">
              GET OUT.
              <br />
              FEEL MORE.
            </h2>
          </div>
        </div>
      </section>

      {/* EVENTS LIST */}
      <section className="px-5 py-24 sm:px-10 lg:px-20 lg:py-32">
        <Marquee />

        <div className="mb-20 mt-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.82]">
            WHAT'S
            <br />
            <span className="text-[#a8ff00]">HAPPENING.</span>
          </h2>

          <p className="max-w-xs text-sm leading-relaxed text-white/65 md:pb-2">
            Good people. Great energy. Real-life experiences you won't get
            scrolling at home.
          </p>
        </div>

        <div className="space-y-28 md:space-y-40">
          {events.map((event, index) => (
            <article
              key={event.id}
              className={`event-row grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12 ${
                index % 2 === 1 ? "event-row-reverse" : ""
              }`}
            >
              <div
                className={`event-image group relative md:col-span-7 ${
                  index % 2 === 1 ? "md:col-start-6 md:row-start-1" : ""
                }`}
              >
                <div className="aspect-[1.12/1] overflow-hidden rounded-sm bg-white/5 sm:aspect-[1.25/1]">
                  <img
                    src={event.image}
                    alt={event.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <span className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-black">
                  <span className="mr-2 text-[#8c2cff]">●</span>
                  {event.category}
                </span>

                <span className="absolute right-4 top-4 bg-[#a8ff00] px-3 py-2 text-xs font-bold text-black">
                  {event.date}
                </span>
              </div>

              <div
                className={`event-copy md:col-span-5 ${
                  index % 2 === 1
                    ? "md:col-start-1 md:row-start-1 md:pl-4"
                    : ""
                }`}
              >
                <p className="mb-5 text-xs font-bold tracking-[0.2em] text-[#a8ff00]">
                  EVENT 0{index + 1}
                </p>

                <h3 className="font-display text-5xl leading-[0.92] sm:text-6xl lg:text-7xl">
                  {event.name}
                </h3>

                <p className="mt-6 max-w-md text-base leading-relaxed text-white/65">
                  {event.description}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/20 pt-5 text-sm">
                  <span className="text-white/85">⌖ {event.location}</span>
                  <span className="text-white/50">{event.date}</span>
                </div>

                <Link
                  to={`/events/${event.id}`}
                  className="mt-8 inline-flex items-center gap-4 rounded-sm border border-white/60 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-[#a8ff00] hover:bg-[#a8ff00] hover:text-black"
                >
                  VIEW DETAILS
                  <span className="text-[#a8ff00] transition-colors group-hover:text-black">
                    ↗
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="border-t border-white/15 px-5 py-24 text-center sm:px-10 lg:py-36">
        <p className="mb-6 text-xs font-bold tracking-[0.25em] text-white/60">
          YOUR NEXT STORY IS OUT THERE
        </p>

        <h2 className="font-display text-[clamp(3.5rem,11vw,10rem)] leading-[0.85]">
          LESS SCROLL.
          <br />
          <span className="text-[#a8ff00]">MORE LIFE.</span>
        </h2>

        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-3 rounded-sm bg-white px-6 py-4 font-semibold text-black transition-colors hover:bg-[#a8ff00]"
        >
          BACK TO HOME <span>↗</span>
        </Link>
      </section>
    </main>
  );
}
