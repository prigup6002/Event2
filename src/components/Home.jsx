
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowRight,
  ChevronDown,
  Maximize2,
  Menu,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);


const EventExperiences = () => {
  const sectionRef = useRef(null);

  const events = [
    {
      number: "01",
      category: "ART & CREATIVITY",
      title: "Pottery & Chai",
      description:
        "Get your hands messy, make something beautiful, and meet creative people.",
      date: "SAT, 24 OCT",
      price: "₹599 onwards",
      location: "Studio in the City",
      image:
        "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=85",
    },
    {
      number: "02",
      category: "MEET NEW PEOPLE",
      title: "The Rooftop Social",
      description:
        "Golden hour conversations, good music, and strangers who feel like friends.",
      date: "SAT, 24 OCT",
      price: "₹399 onwards",
      location: "Rooftop · City Centre",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=85",
    },
    {
      number: "03",
      category: "MUSIC & CULTURE",
      title: "Live & Unplugged",
      description:
        "An intimate evening of live music, new artists, and unforgettable vibes.",
      date: "SUN, 25 OCT",
      price: "₹499 onwards",
      location: "The Listening Room",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=85",
    },
    {
      number: "04",
      category: "FOOD & DISCOVERY",
      title: "The Local Food Walk",
      description:
        "Explore hidden food spots, discover local favourites, and eat your way around town.",
      date: "SUN, 25 OCT",
      price: "₹299 onwards",
      location: "Old City Streets",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=85",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-heading", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".experience-card", {
        y: 65,
        opacity: 0,
        duration: 0.85,
        stagger: 0.16,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-grid",
          start: "top 82%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-5 pb-24 pt-14 text-[#49413f] sm:px-8 lg:px-[5.4%] lg:pb-32 lg:pt-20"
    >
      {/* Soft oversized background graphic */}
      <div className="pointer-events-none absolute -right-36 top-20 h-[780px] w-[780px] rounded-full border-[90px] border-[#f6f5f5] opacity-90" />

      <div className="experience-heading relative z-10 mx-auto mb-12 max-w-3xl text-center sm:mb-16">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#96877a] sm:text-xs">
          A little something for everyone
        </p>

        <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.12] tracking-[-0.025em]">
          Find your kind of
          <span className="block italic text-[#928985]">
            unforgettable.
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#817a76] sm:text-base">
          From creative afternoons to spontaneous nights out, there’s always
          something worth showing up for.
        </p>
      </div>

      {/* Event cards */}
      <div className="experience-grid relative z-10 mx-auto grid max-w-[1500px] grid-cols-1 items-start gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-[18px]">
        {events.map((event, index) => (
          <article
            key={event.number}
            className={`experience-card group rounded-[23px] bg-[#f6f6f0] p-[15px] transition-shadow duration-300 hover:shadow-[0_15px_45px_rgba(57,45,35,0.08)] sm:p-[18px] ${
              index % 2 === 1 ? "xl:mt-8" : "xl:mt-0"
            }`}
          >
            <div className="mb-4 flex justify-center">
              <span className="grid size-[34px] place-items-center rounded-full bg-[#fffce8] text-[13px] text-[#93897a]">
                {event.number}
              </span>
            </div>

            <p className="mb-2 text-center text-[9px] font-semibold tracking-[0.17em] text-[#9a897a] sm:text-[10px]">
              {event.category}
            </p>

            <h3 className="text-center font-display text-[23px] leading-tight sm:text-[25px]">
              {event.title}
            </h3>

            <p className="mx-auto mb-5 mt-3 min-h-[60px] max-w-[300px] text-center text-[13px] leading-[1.55] text-[#69615d] sm:text-[14px]">
              {event.description}
            </p>

            <div className="relative overflow-hidden rounded-[11px]">
              <img
                src={event.image}
                alt={event.title}
                loading="lazy"
                className="aspect-[4/4.5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.045]"
              />

              <span className="absolute left-3 top-3 rounded-full bg-[#fff9e9] px-3 py-1.5 text-[10px] font-semibold text-[#49413f]">
                {event.date}
              </span>
            </div>

            <div className="px-1 pb-1 pt-4">
              <div className="mb-3 flex items-center justify-between gap-2 text-[11px] text-[#817873]">
                <span className="truncate">{event.location}</span>
                <span className="shrink-0 font-semibold text-[#49413f]">
                  {event.price}
                </span>
              </div>

              <a
                href="#all-events"
                className="group/link flex items-center justify-center gap-2 py-2 text-[13px] font-semibold underline decoration-[#a79b90] underline-offset-4 transition-colors hover:text-[#9a7050]"
              >
                Explore event
                <span className="transition-transform group-hover/link:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="relative z-10 mt-12 flex justify-center">
        <a
          id="all-events"
          href="/events"
          className="inline-flex min-h-[50px] items-center gap-3 rounded-[7px] bg-[#49413f] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#675850]"
        >
          Explore all events <span>→</span>
        </a>
      </div>
    </section>
  );
};


const EventDiscoveryCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [touchStart, setTouchStart] = useState(null);

  const events = [
    {
      category: "ART & CREATIVITY",
      title: "Make Something Beautiful",
      description: "A hands-on pottery workshop, good music, and new creative friends.",
      image: "photo-1565193566173-7a0ee3dbe261",
      tag: "Creative Workshop",
      place: "Art Studio",
      date: "24 OCT",
    },
    {
      category: "SOCIAL & COMMUNITY",
      title: "Meet Your Kind of People",
      description: "Leave the small talk behind. Find your people over conversations that actually matter.",
      image: "photo-1528605248644-14dd04022da1",
      tag: "Community Meetup",
      place: "The Social Club",
      date: "24 OCT",
    },
    {
      category: "MUSIC & NIGHTLIFE",
      title: "An Evening of Live Music",
      description: "Discover independent artists and enjoy an intimate night of live performances.",
      image: "photo-1501386761578-eac5c94b800a",
      tag: "Live Music",
      place: "The Listening Room",
      date: "25 OCT",
    },
    {
      category: "FOOD & DRINKS",
      title: "The Great Food Walk",
      description: "Find hidden food gems, taste local favourites, and explore your city differently.",
      image: "photo-1517248135467-4c7edcad34c4",
      tag: "Food Experience",
      place: "Old City",
      date: "25 OCT",
    },
    {
      category: "OUTDOORS & NATURE",
      title: "Sunrise, Slow Mornings",
      description: "Start your day with an easy morning walk, fresh air, and lovely company.",
      image: "photo-1470252649378-9c29740c9fa8",
      tag: "Outdoor Meetup",
      place: "City Park",
      date: "26 OCT",
    },
    {
      category: "COFFEE & CONVERSATIONS",
      title: "Coffee With Strangers",
      description: "One table, good coffee, and conversations with people you have yet to meet.",
      image: "photo-1445116572660-236099ec97a0",
      tag: "Coffee Social",
      place: "Neighbourhood Café",
      date: "26 OCT",
    },
    {
      category: "WELLNESS & MINDFULNESS",
      title: "Pause, Breathe, Reset",
      description: "Unwind with a beginner-friendly mindfulness session in a calm setting.",
      image: "photo-1506126613408-eca07ce68773",
      tag: "Wellness Session",
      place: "The Quiet Space",
      date: "31 OCT",
    },
    {
      category: "GAMES & FUN",
      title: "Game Night, Anyone?",
      description: "Board games, friendly competition, and the kind of laughs you remember.",
      image: "photo-1528605248644-14dd04022da1",
      tag: "Game Night",
      place: "The Playroom",
      date: "31 OCT",
    },
    {
      category: "PHOTOGRAPHY & DESIGN",
      title: "See Your City Differently",
      description: "Explore street photography with a creative group and fresh perspectives.",
      image: "photo-1452587925148-ce544e77e70d",
      tag: "Photo Walk",
      place: "Arts District",
      date: "01 NOV",
    },
    {
      category: "CULTURE & DISCOVERY",
      title: "A Little Local Adventure",
      description: "Discover cultural corners, local stories, and places you never knew existed.",
      image: "photo-1519608487953-e999c86e7455",
      tag: "City Experience",
      place: "City Centre",
      date: "01 NOV",
    },
  ];

  const getIndex = (index) =>
    (index + events.length) % events.length;

  const goTo = (index) => setActiveIndex(getIndex(index));

  const visibleCards = [
    { event: events[getIndex(activeIndex - 1)], position: "side" },
    { event: events[activeIndex], position: "center" },
    { event: events[getIndex(activeIndex + 1)], position: "side" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f6f5ef] px-5 pb-20 pt-16 text-[#49413f] sm:px-8 sm:pt-20 lg:px-[5.4%]">
      <div className="pointer-events-none absolute -right-48 top-40 h-[850px] w-[850px] rounded-full border-[100px] border-white/70" />

      <div className="relative z-10 mx-auto mb-10 max-w-3xl text-center sm:mb-12">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#96877a] sm:text-xs">
          Find your next experience
        </p>

        <h2 className="font-display text-[clamp(2.1rem,4.5vw,3.6rem)] leading-[1.12] tracking-[-0.025em]">
          There's a place for you,
          <span className="block italic text-[#928985]">
            wherever you are.
          </span>
        </h2>
      </div>

      {/* Carousel */}
      <div
        className="relative z-10 mx-auto grid max-w-[1450px] grid-cols-1 items-stretch gap-5 md:grid-cols-[0.85fr_1.8fr_0.85fr] md:gap-[18px]"
        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStart === null) return;
          const distance = e.changedTouches[0].clientX - touchStart;
          if (Math.abs(distance) > 45) {
            goTo(activeIndex + (distance < 0 ? 1 : -1));
          }
          setTouchStart(null);
        }}
      >
        {visibleCards.map(({ event, position }, index) => (
          <article
            key={`${event.title}-${activeIndex}-${index}`}
            className={`group relative isolate min-h-[420px] overflow-hidden rounded-[22px] bg-[#ddd3c6] md:min-h-[480px] ${
              position === "center"
                ? "md:min-h-[530px]"
                : "hidden md:block md:mt-0"
            }`}
          >
            <img
              src={`https://images.unsplash.com/${event.image}?auto=format&fit=crop&w=1200&q=85`}
              alt={event.title}
              loading="lazy"
              className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#211b19]/85 via-[#211b19]/15 to-[#211b19]/10" />

            {position === "center" && (
              <span className="absolute left-5 top-5 rounded-full bg-[#fff8e8] px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-[#49413f] sm:left-8 sm:top-8">
                {event.tag}
              </span>
            )}

            {position === "side" && (
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-[#49413f]">
                {event.date}
              </span>
            )}

            <div className={`absolute inset-x-0 bottom-0 p-5 text-white sm:p-7 ${
              position === "side" ? "md:p-5" : "md:p-8"
            }`}>
              <p className="mb-2 text-[9px] font-semibold tracking-[0.2em] text-white/80 sm:text-[10px]">
                {event.category}
              </p>

              <h3 className={`font-display leading-[1.12] ${
                position === "center"
                  ? "text-[clamp(1.8rem,3vw,2.7rem)]"
                  : "text-[25px] md:text-[21px] lg:text-[25px]"
              }`}>
                {event.title}
              </h3>

              {position === "center" && (
                <p className="mt-3 max-w-lg text-[13px] leading-[1.6] text-white/90 sm:text-sm">
                  {event.description}
                </p>
              )}

              <div className="mt-4 flex items-center justify-between gap-2 border-t border-white/25 pt-3">
                <span className="truncate text-[11px] text-white/85 sm:text-xs">
                  {event.place} · {event.date}
                </span>

                <a
                  href="/events"
                  aria-label={`Explore ${event.title}`}
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-[#fff8e8] text-[#49413f] transition-transform hover:scale-105"
                >
                  →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Navigation controls */}
      <div className="relative z-10 mt-5 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Previous event"
          className="grid size-12 place-items-center rounded-full border border-[#d8d5cd] bg-[#e7e5df] text-[#49413f] transition-colors hover:bg-[#49413f] hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="1.5">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <span className="min-w-[60px] text-center text-xs tabular-nums text-[#827a74]">
          {String(activeIndex + 1).padStart(2, "0")} / 10
        </span>

        <button
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Next event"
          className="grid size-12 place-items-center rounded-full border border-[#d8d5cd] bg-[#e7e5df] text-[#49413f] transition-colors hover:bg-[#49413f] hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="1.5">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="relative z-10 mt-10 text-center">
        <p className="font-display text-xl sm:text-2xl">
          Your next favourite memory is out there.
        </p>
        <p className="mt-2 text-sm text-[#827a74]">
          Ten ways to get out, explore, and connect.
        </p>
      </div>
    </section>
  );
};


export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".nav-item", {
        y: -18,
        opacity: 0,
        duration: 0.7,
        stagger: 0.09,
      })
        .from(
          ".hero-title-line",
          {
            y: 55,
            opacity: 0,
            duration: 1,
            stagger: 0.16,
          },
          "-=0.25"
        )
        .from(
          ".hero-copy, .hero-cta",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
          },
          "-=0.45"
        )
        .from(
          ".floating-preview",
          {
            x: 45,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.6"
        );

      gsap.to(".hero-background", {
        scale: 1.06,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);


const CommunitySection = () => {
  const stats = [
    {
      icon: "chart",
      title: "For every kind of vibe",
      description: "From laid-back meetups to unforgettable experiences",
    },
    {
      icon: "people",
      title: "11,000+ people connecting",
      description: "Finding their people, one event at a time",
    },
    {
      icon: "community",
      title: "A community that feels like you",
      description: "Real connections, shared interests, lasting memories",
    },
  ];

  const logos = [
    "VOGUE",
    "VANITY FAIR",
    "ELLE",
    "madame",
    "marie claire",
    "Gala",
  ];

  return (
    <section className="relative overflow-hidden bg-white text-[#49413f]">
      {/* Press / featured-in strip */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 items-center gap-y-8 px-6 py-16 sm:grid-cols-3 sm:gap-y-10 lg:grid-cols-6 lg:px-12 lg:py-[100px]">
        {logos.map((logo, index) => (
          <div
            key={logo}
            className={`text-center text-[#49413f] ${
              index === 1
                ? "font-display text-[23px] tracking-[-0.06em] sm:text-[27px]"
                : index === 2
                  ? "font-serif text-[26px] tracking-[0.28em] sm:text-[30px]"
                  : index === 3
                    ? "font-serif text-[26px] italic sm:text-[30px]"
                    : index === 4
                      ? "font-display text-[22px] tracking-[-0.06em] sm:text-[27px]"
                      : index === 5
                        ? "font-serif text-[29px] italic sm:text-[34px]"
                        : "font-serif text-[28px] tracking-[-0.07em] sm:text-[34px]"
            }`}
          >
            {logo}
          </div>
        ))}
      </div>

      {/* Community stats */}
      <div className="mx-auto grid max-w-[1050px] grid-cols-1 gap-12 px-6 pb-20 pt-5 sm:grid-cols-3 sm:gap-8 lg:pb-24">
        {stats.map((stat) => (
          <div key={stat.title} className="flex flex-col items-center text-center">
            <div className="mb-3 flex size-[78px] items-center justify-center rounded-full bg-[#49413f] text-[#fff8e7]">
              {stat.icon === "chart" && (
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  className="size-9"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M5 33h30M9 33V18h8v15M17 33V8h8v25M25 33V23h7v10" />
                </svg>
              )}

              {stat.icon === "people" && (
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  className="size-10"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <circle cx="20" cy="11" r="5" />
                  <path d="M10 28c0-5 4-8 10-8s10 3 10 8-20 7-20 0Z" />
                  <path d="M9 10a4 4 0 0 0 0 8M5 26c0-3 2-5 5-6M31 10a4 4 0 0 1 0 8M35 26c0-3-2-5-5-6" />
                </svg>
              )}

              {stat.icon === "community" && (
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  className="size-9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <circle cx="19" cy="20" r="15" />
                  <circle cx="19" cy="15" r="5" />
                  <path d="M9 30c1-5 5-8 10-8s9 3 10 8M28 10l3 3 5-6" />
                </svg>
              )}
            </div>

            <h3 className="max-w-[260px] font-display text-[22px] leading-[1.25]">
              {stat.title}
            </h3>

            <p className="mt-2 max-w-[240px] text-[15px] leading-[1.5] text-[#827b78]">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Heading with oversized background graphic */}
      <div className="relative flex min-h-[300px] items-start justify-center overflow-hidden px-5 pb-24 pt-8 text-center sm:min-h-[330px] sm:pt-10 lg:min-h-[370px]">
        <svg
          aria-hidden="true"
          viewBox="0 0 850 500"
          fill="none"
          className="pointer-events-none absolute -bottom-[310px] left-1/2 w-[720px] max-w-none -translate-x-1/2 text-[#f5f4f4] sm:-bottom-[340px] sm:w-[850px] lg:-bottom-[400px] lg:w-[1000px]"
        >
          <path
            d="M80 500C80 260 190 80 420 80C545 80 640 120 710 160L830 105V500H80Z"
            stroke="currentColor"
            strokeWidth="100"
          />
        </svg>

        <div className="relative z-10 max-w-[760px]">
          <h2 className="font-display text-[clamp(2.1rem,4vw,3.2rem)] leading-[1.15] tracking-[-0.025em]">
            A world of experiences,
            <span className="block italic text-[#918986]">
              made to bring us together
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};




  return (
    <div>
      <main className="min-h-screen bg-[#f8f6f0] text-white">
      <section
        ref={heroRef}
        className="event-hero relative isolate flex min-h-[calc(100svh-58px)] flex-col overflow-hidden"
      >
        {/* Hero background */}
        <div className="hero-background absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=2400&q=90"
            alt="Friends gathered together at a lively outdoor event"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Warm cinematic overlay */}
        <div className="absolute inset-0 -z-10 bg-[#392c25]/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#342820]/60 via-[#342820]/15 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#281e18]/35 via-transparent to-[#211b17]/20" />

        {/* Navigation */}
        <header className="relative z-20 flex h-[84px] shrink-0 items-center justify-between border-b border-white/10 bg-[#40352f]/55 px-6 backdrop-blur-[3px] md:px-12 lg:px-[5.6%]">
          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#experience" className="nav-item nav-link">
              Discover <ChevronDown size={14} />
            </a>
            <a href="#community" className="nav-item nav-link">
              For you <ChevronDown size={14} />
            </a>
            <a href="#events" className="nav-item nav-link">
              Our events <ChevronDown size={14} />
            </a>
          </nav>

          <button
            className="nav-item flex items-center gap-1 lg:hidden"
            aria-label="Open navigation"
          >
            <Menu size={25} />
          </button>

          <a
            href="#home"
            className="nav-item absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          >
            <span className="block font-display text-[25px] leading-[0.9] tracking-wide">
              tog.ro
            </span>
            <span className="mt-1 block text-[8px] tracking-[0.24em]">
              FIND YOUR PEOPLE
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <button className="nav-item text-sm font-medium">
              EN <span className="mx-1 text-white/50">/</span> HI
            </button>
            <a href="#login" className="nav-item text-sm font-medium">
              Log in
            </a>
            <a
              href="#events"
              className="nav-item flex h-[54px] min-w-[215px] items-center justify-center rounded-[10px] border border-white/75 px-6 text-sm font-semibold transition-colors hover:bg-white hover:text-[#43362f]"
            >
              Explore events <ArrowRight className="ml-2" size={16} />
            </a>
          </div>

          <a
            href="#events"
            className="nav-item rounded-md border border-white/70 px-3 py-2 text-xs font-semibold sm:px-5 lg:hidden"
          >
            Explore
          </a>
        </header>

        {/* Hero content */}
        <div
          id="home"
          className="relative flex flex-1 items-center px-6 pb-28 pt-24 md:px-12 md:pb-24 lg:px-[5.6%]"
        >
          <div className="w-full max-w-[610px]">
            <p className="hero-copy mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/90 sm:text-xs">
              Good people. Real moments. New stories.
            </p>

            <h1 className="font-display text-[clamp(3.4rem,7.2vw,6.8rem)] leading-[0.94] tracking-[-0.035em]">
              <span className="hero-title-line block">Life is better</span>
              <span className="hero-title-line block text-[#fff4d4]">
                together.
              </span>
            </h1>

            <p className="hero-copy mt-7 max-w-[410px] text-[14px] leading-[1.65] text-white/95 sm:text-[16px]">
              Discover experiences around you, meet people who get you, and
              turn an ordinary day into a story worth telling.
            </p>

            <div className="hero-cta mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#events"
                className="group inline-flex min-h-[54px] min-w-[230px] items-center justify-center gap-3 rounded-[7px] bg-[#fff9df] px-7 text-[14px] font-semibold text-[#44372f] transition-all duration-300 hover:bg-white"
              >
                Find your next moment
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-sm text-white/95 transition-opacity hover:opacity-70"
              >
                Discover more <ArrowDownRight size={16} />
              </a>
            </div>
          </div>

          {/* Floating event preview */}
          <a
            href="#events"
            className="floating-preview group absolute bottom-8 right-6 hidden w-[290px] overflow-hidden rounded-[20px] bg-[#f7f2e8] text-[#342a24] shadow-2xl sm:block md:bottom-12 md:right-12 md:w-[310px] lg:bottom-[9%] lg:right-[5.6%] lg:w-[345px]"
          >
            <div className="relative h-[180px] overflow-hidden md:h-[195px]">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85"
                alt="An intimate outdoor gathering"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-[#fff9e8] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider">
                Near you
              </span>
              <span className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-lg bg-[#fff9e8]">
                <Maximize2 size={15} />
              </span>
            </div>
            <div className="flex items-center justify-between gap-3 px-5 py-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#8b796a]">
                  This weekend · Social
                </p>
                <h2 className="mt-1 font-display text-lg leading-tight">
                  The Sunday Social
                </h2>
                <p className="mt-1 text-xs text-[#7d6c5f]">
                  Good coffee, better company.
                </p>
              </div>
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[#d8cdbb] transition-colors group-hover:bg-[#3e332c] group-hover:text-white">
                <ArrowRight size={17} />
              </span>
            </div>
          </a>

          <div className="absolute bottom-5 left-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/75 md:left-12 lg:left-[5.6%]">
            <span className="h-px w-9 bg-white/70" />
            Your city, your people, your kind of fun
          </div>
        </div>
      </section>

      {/* Small transition strip beneath the hero */}
      <section
        id="experience"
        className="flex min-h-[90px] flex-wrap items-center justify-between gap-4 px-6 py-6 text-[#40352e] md:px-12 lg:px-[5.6%]"
      >
        <p className="font-display text-xl sm:text-2xl">
          Make room for something different.
        </p>
        <a
          href="#events"
          className="inline-flex items-center gap-2 text-sm font-semibold"
        >
          Explore experiences <ArrowRight size={16} />
        </a>
      </section>

      {/* Following section anchor */}
      <section id="community" className="sr-only">
        Find your community through shared experiences.
      </section>
      <section id="login" className="sr-only">
        Sign in to your account.
      </section>
      <section id="events" className="sr-only">
        Browse upcoming events.
      </section>
    </main>
    <CommunitySection />
    <EventExperiences />
    <EventDiscoveryCarousel />
    </div>
    
  );
}
