
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3, MapPin, Ticket } from "lucide-react";
import { gsap } from "gsap";

const events = [
  {
    id: "1",
    name: "The Neon Social",
    category: "MUSIC & NIGHTLIFE",
    date: "24 OCTOBER 2026",
    time: "6:00 PM onwards",
    location: "CyberHub, Gurugram",
    city: "GURUGRAM, INDIA",
    price: "₹799",
    description:
      "One night. Great music. Better people. Experience an electric evening with live DJs, immersive lighting, food, and a crowd ready to make memories.",
    about:
      "The Neon Social brings together music lovers, creators, and the city's nightlife community for an unforgettable evening. Come with friends or show up solo and meet your people.",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Live DJ sets", "Food & drinks", "Immersive light show"],
  },
  {
    id: "2",
    name: "Sunday Flea Club",
    category: "ARTS & CULTURE",
    date: "31 OCTOBER 2026",
    time: "11:00 AM – 8:00 PM",
    location: "JLN Stadium, New Delhi",
    city: "NEW DELHI, INDIA",
    price: "₹299",
    description:
      "A lively flea market celebrating independent brands, handmade finds, street food, music, and the people who make the city interesting.",
    about:
      "Explore homegrown labels, meet local artists, discover unique accessories, and spend your Sunday surrounded by good food and creative energy.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Independent brands", "Street food", "Local artists"],
  },
  {
    id: "3",
    name: "The Creative Meetup",
    category: "COMMUNITY & NETWORKING",
    date: "7 NOVEMBER 2026",
    time: "4:00 PM – 7:00 PM",
    location: "WeWork, Bengaluru",
    city: "BENGALURU, INDIA",
    price: "₹499",
    description:
      "A room full of ideas, ambitious people, and conversations that go beyond small talk. Meet the creatives shaping what's next.",
    about:
      "Designed for designers, founders, developers, and curious minds. Share what you are building, exchange ideas, and leave with new connections.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Creative networking", "Community talks", "New connections"],
  },
];

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((item) => item.id === id);

  useEffect(() => {
    if (!event) return;

    const ctx = gsap.context(() => {
      gsap.from(".event-reveal", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".event-cover", {
        clipPath: "inset(15% 10% 15% 10% round 12px)",
        scale: 0.94,
        duration: 1.1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, [event]);

  if (!event) {
    return (
      <main className="min-h-screen bg-black px-6 text-white flex flex-col items-center justify-center">
        <h1 className="font-display text-5xl text-lime-400">EVENT NOT FOUND.</h1>
        <button
          onClick={() => navigate("/events")}
          className="mt-8 rounded-md bg-lime-400 px-6 py-3 font-bold text-black hover:bg-white transition"
        >
          BACK TO EVENTS
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-10 lg:px-16">
        <button
          onClick={() => navigate("/events")}
          className="flex items-center gap-2 text-sm font-semibold transition hover:text-lime-400"
        >
          <ArrowLeft size={18} />
          ALL EVENTS
        </button>

        <button
          onClick={() => navigate("/events")}
          className="font-display text-2xl tracking-tight sm:text-3xl"
        >
          MDNT<span className="text-lime-400">.</span>
        </button>

        <span className="hidden text-xs font-semibold tracking-widest text-white/50 sm:block">
          EXPERIENCES THAT STAY.
        </span>
      </nav>

      {/* Hero */}
      <section className="px-5 pt-12 sm:px-10 sm:pt-16 lg:px-16 lg:pt-20">
        <div className="event-reveal mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-white/60">
          <span className="h-2 w-2 rounded-full bg-lime-400" />
          {event.category}
          <span>/</span>
          {event.city}
        </div>

        <h1 className="event-reveal max-w-6xl font-display text-5xl leading-[0.92] tracking-tight sm:text-7xl lg:text-[clamp(5rem,10vw,10rem)]">
          {event.name.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 === 1 ? "text-lime-400" : "text-white"}
            >
              {word}{" "}
            </span>
          ))}
          <span className="text-lime-400">.</span>
        </h1>

        <div className="mt-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <p className="event-reveal max-w-xl text-base leading-7 text-white/65 sm:text-lg">
            {event.description}
          </p>

          <button
            onClick={() => navigate(`/booking/${event.id}`)}
            className="event-reveal inline-flex w-fit items-center gap-4 rounded-md bg-lime-400 px-6 py-4 font-bold text-black transition hover:bg-white"
          >
            BOOK YOUR SPOT
            <ArrowUpRight size={20} />
          </button>
        </div>
      </section>

      {/* Large event image */}
      <section className="px-3 pt-12 sm:px-6 sm:pt-16 lg:px-10 lg:pt-20">
        <div className="event-cover relative h-[55vh] min-h-[340px] overflow-hidden rounded-md sm:h-[72vh] lg:h-[85vh]">
          <img
            src={event.image}
            alt={event.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
            <span className="rounded-full bg-lime-400 px-4 py-2 text-xs font-bold tracking-wider text-black">
              ● FEATURED EVENT
            </span>
            <span className="font-display text-3xl sm:text-5xl">
              {event.price}
              <span className="font-sans text-sm font-normal text-white/70"> / person</span>
            </span>
          </div>
        </div>
      </section>

      {/* Event information */}
      <section className="grid gap-12 px-5 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 lg:px-16">
        <div>
          <p className="event-reveal mb-5 text-xs font-bold tracking-[0.2em] text-lime-400">
            THE EXPERIENCE
          </p>
          <h2 className="event-reveal max-w-2xl font-display text-4xl leading-[1.02] sm:text-6xl">
            MAKE ROOM FOR SOMETHING <span className="text-lime-400">DIFFERENT.</span>
          </h2>
          <p className="event-reveal mt-7 max-w-xl text-base leading-8 text-white/60">
            {event.about}
          </p>

          <div className="event-reveal mt-10">
            <h3 className="mb-5 text-sm font-bold tracking-widest text-white/50">
              WHAT TO EXPECT
            </h3>
            <div className="flex flex-wrap gap-3">
              {event.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-white/20 px-4 py-3 text-sm transition hover:border-lime-400 hover:text-lime-400"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Details card */}
        <aside className="event-reveal h-fit border border-white/15 p-6 sm:p-8">
          <p className="mb-7 text-xs font-bold tracking-[0.2em] text-lime-400">
            EVENT DETAILS
          </p>

          <div className="space-y-7">
            <div className="flex gap-4">
              <CalendarDays className="shrink-0 text-lime-400" size={22} />
              <div>
                <p className="mb-1 text-xs tracking-widest text-white/45">DATE</p>
                <p className="font-semibold">{event.date}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock3 className="shrink-0 text-lime-400" size={22} />
              <div>
                <p className="mb-1 text-xs tracking-widest text-white/45">TIME</p>
                <p className="font-semibold">{event.time}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="shrink-0 text-lime-400" size={22} />
              <div>
                <p className="mb-1 text-xs tracking-widest text-white/45">VENUE</p>
                <p className="font-semibold">{event.location}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Ticket className="shrink-0 text-lime-400" size={22} />
              <div>
                <p className="mb-1 text-xs tracking-widest text-white/45">TICKET PRICE</p>
                <p className="font-display text-3xl text-lime-400">{event.price}</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate(`/booking/${event.id}`)}
            className="mt-9 flex w-full items-center justify-between rounded-md bg-lime-400 px-5 py-4 font-bold text-black transition hover:bg-white"
          >
            BOOK THIS EVENT
            <ArrowUpRight size={20} />
          </button>

          <p className="mt-4 text-center text-xs text-white/40">
            Secure your place before tickets sell out.
          </p>
        </aside>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/15 px-5 py-16 sm:px-10 sm:py-24 lg:px-16">
        <p className="mb-5 text-xs font-bold tracking-[0.2em] text-lime-400">
          DON'T JUST HEAR ABOUT IT.
        </p>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="max-w-4xl font-display text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">
            BE THERE. <span className="text-lime-400">FEEL IT.</span>
          </h2>
          <button
            onClick={() => navigate(`/booking/${event.id}`)}
            className="flex w-fit items-center gap-5 rounded-md bg-white px-6 py-4 font-bold text-black transition hover:bg-lime-400"
          >
            GET YOUR TICKET
            <ArrowUpRight size={20} />
          </button>
        </div>
      </section>

      <footer className="flex flex-col justify-between gap-4 border-t border-white/15 px-5 py-6 text-xs text-white/45 sm:flex-row sm:px-10 lg:px-16">
        <span>© 2026 MDNT EXPERIENCES</span>
        <span>MADE FOR THE MOMENTS THAT MATTER.</span>
      </footer>
    </main>
  );
}
