import { useEffect, useRef, useState } from "react";
import { FiSearch, FiArrowUpRight, FiChevronDown, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import earth from "../assets/earth.png";
import { Link } from "react-router-dom";


const events = [
  "Designer Meetup",
  "Freelancer Meetup",
];

function WhoWeAre() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f7f7f5] px-4 py-20 text-center text-[#111] sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      <span className="absolute bottom-5 left-[11%] text-3xl font-extralight text-black/20">
        ✳
      </span>

      <span className="absolute right-[16%] top-10 text-xl text-black/20">
        ◞
      </span>

      <div className="mx-auto max-w-[1000px]">
        <h2 className="mb-7 text-3xl font-extrabold uppercase leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[58px]">
          Who We Are
        </h2>

        <p className="text-base font-normal uppercase leading-[1.9] tracking-[0.015em] text-[#777] sm:text-xl lg:text-[32px] lg:leading-[1.85]">
          We are a passionate group of tech enthusiasts dedicated to fostering
          knowledge exchange and collaboration within the tech industry. Our
          meetup brings together experts from various fields to share insights,
          experiences, and innovative ideas.
        </p>
      </div>
    </section>
  );
}


const recentEvents = [
  {
    title: "Creative Gala",
    category: "Corporate Events",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=90",
  },
  {
    title: "Design Summit",
    category: "Conferences",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=90",
  },
  {
    title: "Live Music Night",
    category: "Entertainment",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=90",
  },
  {
    title: "Community Festival",
    category: "Festivals",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1000&q=90",
  },
  {
    title: "Business Forum",
    category: "Networking",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=90",
  },
  {
    title: "Art Exhibition",
    category: "Art & Culture",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1000&q=90",
  },
  {
    title: "Tech Conference",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1000&q=90",
  },
  {
    title: "Award Ceremony",
    category: "Celebrations",
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1000&q=90",
  },
  {
    title: "Luxury Wedding",
    category: "Weddings",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=90",
  },
  {
    title: "Startup Meetup",
    category: "Community",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=90",
  },
];

function RecentWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const animatingRef = useRef(false);

  const moveGallery = (direction) => {
    if (animatingRef.current) return;

    const track = trackRef.current;
    if (!track) return;

    const cards = track.querySelectorAll(".recent-work-card");
    if (!cards.length) return;

    const maxIndex = recentEvents.length - 1;
    const nextIndex = Math.max(
      0,
      Math.min(maxIndex, activeIndex + direction)
    );

    if (nextIndex === activeIndex) return;

    animatingRef.current = true;

    const card = cards[nextIndex];
    const distance = card.offsetLeft;

    gsap.to(track, {
      x: -distance,
      duration: 0.75,
      ease: "power3.inOut",
      onComplete: () => {
        setActiveIndex(nextIndex);
        animatingRef.current = false;
      },
    });

    gsap.fromTo(
      card,
      { opacity: 0.55, scale: 0.97 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.65,
        ease: "power2.out",
      }
    );
  };

  return (
    <section className="overflow-hidden bg-[#f7f7f5] py-20 text-[#111] sm:py-24 lg:py-28">
      <div className="px-5 sm:px-8 lg:px-10">
        <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-[1.2fr_0.8fr] md:items-start lg:mb-10">
          <h2 className="text-3xl font-black uppercase leading-[1.05] tracking-[-0.045em] sm:text-4xl lg:text-[42px]">
            See our recent work
          </h2>

          <p className="max-w-[440px] text-[12px] uppercase leading-[1.8] tracking-[0.025em] text-black/50 sm:text-[13px] md:justify-self-end">
            Whether you're a seasoned design professional or an aspiring
            enthusiast, our events promise inspiring experiences and
            meaningful connections.
          </p>
        </div>
      </div>

      <div className="overflow-hidden pl-5 sm:pl-8 lg:pl-10">
        <div
          ref={trackRef}
          className="flex w-max gap-3 sm:gap-4"
        >
          {recentEvents.map((event, index) => (
            <article
              key={event.title}
              className="recent-work-card group relative w-[78vw] max-w-[420px] shrink-0 sm:w-[44vw] lg:w-[28.5vw] lg:max-w-none"
            >
              <div className="relative aspect-[1.12/1] overflow-hidden bg-[#e5e5e2]">
                <img
                  src={event.image}
                  alt={event.title}
                  loading={index < 4 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                <div className="absolute bottom-0 left-0 bg-[#f7f7f5] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.08em]">
                  {String(index + 1).padStart(2, "0")} / {event.category}
                </div>

                <button
                  aria-label={`View ${event.title}`}
                  onClick={() =>
                    window.alert(`${event.title} — ${event.category}`)
                  }
                  className="absolute bottom-0 right-0 flex h-12 w-12 items-center justify-center border-l-[5px] border-t-[5px] border-[#f7f7f5] bg-[#111] text-white transition-colors duration-300 hover:bg-[#d5f34b] hover:text-black sm:h-[54px] sm:w-[54px]"
                >
                  <FiArrowUpRight size={25} strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex items-start justify-between gap-3 py-4">
                <div>
                  <h3 className="text-lg font-bold uppercase leading-tight tracking-[-0.035em] sm:text-xl">
                    {event.title}
                  </h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.08em] text-black/45">
                    {event.category}
                  </p>
                </div>
                <span className="pt-1 text-xs text-black/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-center gap-3">
        <button
          aria-label="Previous events"
          onClick={() => moveGallery(-1)}
          disabled={activeIndex === 0}
          className="flex h-10 w-10 items-center justify-center bg-black/[0.05] transition-colors hover:bg-black/10 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <FiArrowLeft size={17} />
        </button>

        <button
          aria-label="Next events"
          onClick={() => moveGallery(1)}
          disabled={activeIndex === recentEvents.length - 1}
          className="flex h-10 w-10 items-center justify-center bg-[#111] text-white transition-colors hover:bg-[#d5f34b] hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
        >
          <FiArrowRight size={17} />
        </button>

        <span className="ml-2 text-[10px] tracking-[0.12em] text-black/50">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(recentEvents.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function EventStats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray(".stat-number");

      gsap.from(".stat-item", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      counters.forEach((counter) => {
        const target = Number(counter.dataset.value);
        const suffix = counter.dataset.suffix || "";
        const state = { value: 0 };

        gsap.to(state, {
          value: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            counter.textContent =
              Math.floor(state.value).toLocaleString("en-IN") + suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: 1, suffix: "M+", label: "Happy User" },
    { value: 200, suffix: "+", label: "Event Completed" },
    { value: 0.5, suffix: "M", label: "Our Community", decimal: true },
  ];

  return (
    <section
      ref={sectionRef}
      className="border-y-[3px] border-[#f7f7f5] bg-[#111] px-5 py-8 text-white sm:px-10 sm:py-9"
    >
      <div className="mx-auto grid max-w-[1100px] grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="stat-item flex flex-col items-center justify-center gap-2 text-center"
          >
            <h2
              className="stat-number text-2xl font-extrabold leading-none tracking-[-0.035em] sm:text-3xl lg:text-[32px]"
              data-value={stat.value}
              data-suffix={stat.suffix}
            >
              {stat.decimal ? "0.0M" : "0"}
            </h2>

            <p className="text-[9px] font-normal uppercase tracking-[0.02em] text-white/60 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

gsap.registerPlugin(ScrollTrigger);

const organizers = [
  {
    name: "Shakib Hasan",
    role: "Head of Event",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=90",
    position: "left",
  },
  {
    name: "Abdullah Masum",
    role: "Junior Member",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=90",
    position: "center",
  },
  {
    name: "Shamim Hossain",
    role: "Senior Member",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=90",
    position: "right",
  },
];

function Organizers() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".organizer-heading", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".organizer-card", {
        y: 45,
        opacity: 0,
        duration: 0.85,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".organizer-grid",
          start: "top 82%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="organizers"
      className="overflow-hidden bg-[#f7f7f5] px-5 py-20 text-[#111] sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="organizer-heading mx-auto mb-12 max-w-[760px] text-center sm:mb-16">
        <h2 className="text-3xl font-black uppercase leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[42px]">
          Meet the Organizers
        </h2>

        <p className="mx-auto mt-4 max-w-[650px] text-[12px] uppercase leading-[1.9] tracking-[0.015em] text-black/50 sm:text-sm">
          Our freelance/design meetup is organized by a team of dedicated
          professionals with extensive experience in the creative industry.
        </p>
      </div>

      <div className="organizer-grid mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 sm:grid-cols-3 sm:gap-6 lg:gap-12">
        {organizers.map((person) => (
          <article
            key={person.name}
            className={`organizer-card flex flex-col items-center text-center ${
              person.position === "center" ? "sm:mt-16" : "sm:mt-0"
            }`}
          >
            <div className="group relative aspect-square w-[210px] max-w-full overflow-hidden rounded-full bg-white sm:w-full sm:max-w-[250px] lg:max-w-[280px]">
              <img
                src={person.image}
                alt={person.name}
                loading="lazy"
                className="h-full w-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            <h3 className="mt-5 text-sm font-semibold uppercase tracking-[-0.02em] sm:text-base">
              {person.name}
            </h3>

            <p className="mt-1 text-[11px] uppercase tracking-[0.04em] text-black/45 sm:text-xs">
              {person.role}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}


import {
  FiStar,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Product Designer",
    company: "Independent Designer",
    initials: "AM",
    color: "#d8e2cc",
    quote:
      "I came in looking for inspiration and left with three new collaborators. The conversations here feel genuine, not transactional.",
    event: "DESIGNER MEETUP · MUMBAI",
  },
  {
    name: "Ananya Sharma",
    role: "Creative Director",
    company: "Studio A",
    initials: "AS",
    color: "#ead8ce",
    quote:
      "The best part is meeting people who are just as curious as you are. Every event has something unexpected to take home.",
    event: "CREATIVE SOCIAL · DELHI",
  },
  {
    name: "Rohan Kapoor",
    role: "Freelance Developer",
    company: "Independent",
    initials: "RK",
    color: "#d9dff0",
    quote:
      "No awkward networking, no forced introductions. Just good people, interesting ideas and conversations that continue afterwards.",
    event: "COMMUNITY NIGHT · BENGALURU",
  },
  {
    name: "Ishita Verma",
    role: "Visual Artist",
    company: "Independent Artist",
    initials: "IV",
    color: "#eee5b9",
    quote:
      "I met people from completely different fields, and that was exactly what I needed. The atmosphere makes it easy to join in.",
    event: "ART & IDEAS · PUNE",
  },
];

function Testimonials() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const active = testimonials[activeIndex];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-intro > *", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".testimonial-feature", {
        y: 45,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonial-feature",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".testimonial-small-card", {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonial-small-grid",
          start: "top 88%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const changeTestimonial = (direction) => {
    if (animating) return;

    setAnimating(true);

    const nextIndex =
      (activeIndex + direction + testimonials.length) % testimonials.length;

    gsap.to(".testimonial-quote-content", {
      opacity: 0,
      y: 14,
      duration: 0.22,
      ease: "power2.in",
      onComplete: () => {
        setActiveIndex(nextIndex);

        requestAnimationFrame(() => {
          gsap.fromTo(
            ".testimonial-quote-content",
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power3.out",
              onComplete: () => setAnimating(false),
            }
          );
        });
      },
    });
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="overflow-hidden bg-[#f7f7f5] px-5 py-20 text-[#111] sm:px-8 sm:py-24 lg:px-10 lg:py-28 mt-10"
    >
      <div className="testimonial-intro mb-12 grid grid-cols-1 gap-6 md:grid-cols-[1fr_0.65fr] md:items-end lg:mb-16">
        <div>

          <h2 className="max-w-[750px] text-4xl font-black uppercase leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-[68px]">
            Good people.
            <br />
            <span className="text-black/25">Real experiences.</span>
          </h2>
        </div>

        <p className="max-w-[390px] text-sm leading-7 text-black/60 md:justify-self-end lg:text-base">
          Don't just take our word for it. Hear from the people who came for
          an event and found a community.
        </p>
      </div>

      <div className="testimonial-feature grid grid-cols-1 border border-black/10 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="flex min-h-[280px] flex-col justify-between bg-[#111111] p-6 sm:p-9 lg:min-h-[410px] lg:p-10  text-white">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.1em]">
              Featured story
            </span>
            <FiArrowUpRight size={20} />
          </div>

          <div>
            <div className="mb-5 flex gap-1 text-black">
              {Array.from({ length: 5 }).map((_, index) => (
                <FiStar key={index} size={17} fill="currentColor" />
              ))}
            </div>

            <div className="testimonial-quote-content">
              <span className="mb-2 block text-6xl font-black leading-none tracking-[-0.08em]">
                “
              </span>

              <blockquote className="max-w-[570px] text-2xl font-bold leading-[1.18] tracking-[-0.045em] sm:text-3xl lg:text-[38px]">
                {active.quote}
              </blockquote>

              <div className="mt-8 flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full text-xs font-bold"
                  style={{ backgroundColor: active.color }}
                >
                  {active.initials}
                </div>

                <div>
                  <p className="text-sm font-bold">{active.name}</p>
                  <p className="mt-1 text-[11px]  text-white">
                    {active.role} · {active.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.1em]  text-white">
            {active.event}
          </p>
        </div>

        <div className="flex flex-col justify-between bg-white p-6 sm:p-9 lg:p-10">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-black/50">
              A word from our community
            </p>
            <span className="text-xs tabular-nums text-black/45">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>

          <div className="my-12 lg:my-16">
            <span className="mb-4 block text-sm uppercase tracking-[0.12em] text-black/40">
              The experience
            </span>

            <p className="max-w-[520px] text-xl font-medium leading-[1.45] tracking-[-0.035em] sm:text-2xl lg:text-[30px]">
              Every meetup starts with a conversation. Sometimes, that
              conversation becomes the start of something bigger.
            </p>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-5 border-t border-black/10 pt-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.1em] text-black/45">
                Find your people
              </p>
              <p className="mt-2 text-lg font-bold tracking-[-0.035em]">
                Your next story starts here.
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => changeTestimonial(-1)}
                disabled={animating}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center border border-black/15 transition-colors hover:bg-black hover:text-white disabled:opacity-40"
              >
                <FiArrowLeft size={18} />
              </button>

              <button
                onClick={() => changeTestimonial(1)}
                disabled={animating}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center bg-[#111] text-white transition-colors hover:bg-[#d5f34b] hover:text-black disabled:opacity-40"
              >
                <FiArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-small-grid mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials
          .filter((_, index) => index !== activeIndex)
          .slice(0, 3)
          .map((item) => (
            <button
              key={item.name}
              onClick={() => {
                const index = testimonials.findIndex(
                  (testimonial) => testimonial.name === item.name
                );

                setActiveIndex(index);
              }}
              className="testimonial-small-card group flex min-h-[185px] flex-col justify-between border border-black/10 bg-transparent p-5 text-left transition-colors duration-300 hover:bg-white sm:p-6"
            >
              <div>
                <div className="mb-4 flex gap-1 text-black/65">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FiStar key={index} size={12} fill="currentColor" />
                  ))}
                </div>

                <p className="text-sm leading-6 text-black/75">
                  “{item.quote}”
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between gap-3 border-t border-black/10 pt-4">
                <div>
                  <p className="text-xs font-bold uppercase">{item.name}</p>
                  <p className="mt-1 text-[10px] text-black/45">{item.role}</p>
                </div>

                <FiArrowUpRight
                  className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  size={18}
                />
              </div>
            </button>
          ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-5">
        <p className="text-[10px] uppercase tracking-[0.1em] text-black/45">
          Shared by people who showed up
        </p>

        <a
          href="#events"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase transition-colors hover:text-black/50"
        >
          Find your next event <FiArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}


import { FiPlus, FiMinus,} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What is Event?",
    answer:
      "Event is a platform that brings people together through meetups, workshops and events where they can learn, connect and share ideas.",
  },
  {
    question: "How can I register for an event?",
    answer:
      "Browse the available events, select the one you like and follow the registration or ticket booking process on its event page.",
  },
  {
    question: "Are the events open to beginners?",
    answer:
      "Yes, many events welcome beginners as well as experienced professionals. Check the event description for any specific requirements.",
  },
  {
    question: "Can I attend events alone?",
    answer:
      "Of course! You can attend independently, meet new people and take part in conversations and activities during the event.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Cancellation and refund options depend on the event's policy. Please review the terms on the event page before booking.",
  },
  {
    question: "How can I host an event?",
    answer:
      "Contact our team with your event idea, preferred location and expected audience. We'll help you understand the next steps.",
  },
];

function FAQSection() {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-heading, .faq-description, .faq-item", {
        y: 22,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="bg-[#f7f7f5] px-5 py-16 text-[#111] sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="faq-heading text-3xl font-extrabold uppercase tracking-tight sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="faq-description mx-auto mt-4 max-w-xl text-sm leading-6 text-black/55 sm:text-base">
            Have questions? Find answers to the most common queries about
            our events and community.
          </p>
        </div>

        <div className="border-t border-black/15">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="faq-item border-b border-black/15"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6"
                >
                  <span className="text-base font-semibold sm:text-lg">
                    {faq.question}
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/15 transition-colors duration-200">
                    {isOpen ? <FiMinus size={16} /> : <FiPlus size={16} />}
                  </span>
                </button>

                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-5 pr-8 text-sm leading-7 text-black/60 sm:pb-6 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-black/55">
          Still have questions?{" "}
          <a
            href="#contact"
            className="font-semibold text-black underline underline-offset-4 hover:text-black/60"
          >
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
}


import {
  FiArrowUp,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";


gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-reveal", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".footer-brand", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 75%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="overflow-hidden bg-[#111111] px-5 pt-16 text-white sm:px-8 lg:px-10"
    >
      <div className="footer-reveal mb-16 flex flex-col justify-between gap-8 border-b border-white/20 pb-12 md:flex-row md:items-end">
        <div>
          <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Good people.
            <br />
            Great events.
            <span className="text-[#d5f34b]"> Better stories.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-white/60 sm:text-lg">
            Find your people, discover something new, and make every
            moment count with Event.
          </p>
        </div>

        <a
          href="#events"
          className="group flex w-fit items-center gap-4 rounded-full bg-[#white] px-6 py-4 font-medium text-black transition"
        >
          Explore events
          <FiArrowUpRight
            size={20}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </div>

      <div className="grid grid-cols-2 gap-10 pb-16 md:grid-cols-4">
        <div className="footer-reveal col-span-2 md:col-span-1">
          <a href="/" className="text-4xl font-bold tracking-tight">
            Event<span className="text-[#d5f34b]">.</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/50">
            Your next favourite memory starts with showing up.
          </p>

          <div className="mt-6 flex gap-3">
            {[
              { icon: FiInstagram, href: "#instagram" },
              { icon: FiLinkedin, href: "#linkedin" },
              { icon: FiTwitter, href: "#twitter" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                aria-label={href.slice(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:border-[#d5f34b] hover:bg-[#d5f34b] hover:text-black"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-reveal">
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/40">
            Discover
          </h3>
          <div className="flex flex-col items-start gap-4 text-sm text-white/75">
            <a href="#events" className="transition hover:text-[#d5f34b]">All events</a>
            <a href="#events" className="transition hover:text-[#d5f34b]">Workshops</a>
            <a href="#events" className="transition hover:text-[#d5f34b]">Meetups</a>
            <a href="#events" className="transition hover:text-[#d5f34b]">Experiences</a>
          </div>
        </div>

        <div className="footer-reveal">
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/40">
            Event
          </h3>
          <div className="flex flex-col items-start gap-4 text-sm text-white/75">
            <a href="#about" className="transition hover:text-[#d5f34b]">About us</a>
            <a href="#organizers" className="transition hover:text-[#d5f34b]">For organizers</a>
            <a href="#testimonials" className="transition hover:text-[#d5f34b]">Community</a>
            <a href="#faq" className="transition hover:text-[#d5f34b]">FAQs</a>
          </div>
        </div>

        <div className="footer-reveal">
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/40">
            Get in touch
          </h3>
          <a
            href="mailto:hello@Event.in"
            className="group flex w-fit items-center gap-2 text-sm text-black/75 transition hover:text-[#d5f34b]"
          >
            hello@Event.in
            <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <p className="mt-4 text-sm leading-6 text-white/40">
            Have an event in mind?
            <br />
            Let’s make it happen.
          </p>
        </div>
      </div>

      <div className="overflow-hidden border-t border-white/15 pt-5">
        <div className="footer-brand select-none text-center text-[25vw] font-semibold leading-[0.78] tracking-[-0.09em] text-white sm:text-[24vw]">
          Event
        </div>
      </div>

      <div className="flex flex-col gap-4 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Event. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="#privacy" className="transition hover:text-white">Privacy policy</a>
          <a href="#terms" className="transition hover:text-white">Terms of use</a>
        </div>

        <a
          href="#top"
          className="flex w-fit items-center gap-2 transition hover:text-[#d5f34b]"
        >
          Back to top <FiArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}







export default function Home() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(".nav-item", {
        y: -12,
        opacity: 0,
        duration: 0.6,
        stagger: 0.07,
      })
        .from(
          ".hero-word",
          {
            y: 45,
            opacity: 0,
            duration: 0.85,
            stagger: 0.08,
          },
          "-=0.25"
        )
        .from(
          ".globe-wrap",
          {
            opacity: 0,
            scale: 0.88,
            duration: 1.1,
            ease: "power2.out",
          },
          "-=0.45"
        )
        .from(
          ".event-link",
          {
            x: 28,
            opacity: 0,
            duration: 0.65,
            stagger: 0.14,
          },
          "-=0.5"
        )
        .from(
          ".see-events",
          {
            y: 12,
            opacity: 0,
            duration: 0.45,
          },
          "-=0.25"
        );

      gsap.to(".globe-wrap", {
        y: -8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".globe-pin", {
        y: -5,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.25,
        ease: "sine.inOut",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <main
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-[#f7f7f5] px-4 text-[#111] sm:px-6 lg:px-10"
    >
      {/* Navigation */}
      <header className="flex h-[72px] items-center justify-between border-b border-black/[0.04]">
        <a
          href="/"
          className="nav-item flex items-center gap-2 font-['Arial'] text-[19px] font-black tracking-[-1px]"
        >
          <span className="text-[22px]">♟</span>
          Event
        </a>
        <nav className="flex items-center gap-15">
          <Link to="/booking" className="nav-item text-[9px] font-medium uppercase">
            Book now
          </Link>
          <Link className="nav-item text-[9px] font-medium uppercase" to="/about">
            About us
          </Link>
          <a className="nav-item text-[9px] font-medium uppercase" href="#contact">
            Contact
          </a>
          <Link className="nav-item flex items-center gap-1 text-[9px] font-medium uppercase" to="#packages">
            Packages <FiChevronDown size={10} />
          </Link>
        </nav>
        

        <form
          onSubmit={(e) => e.preventDefault()}
          className="nav-item hidden w-[200px] items-center border-b border-black/10 pb-1 lg:flex"
        >
          <input
            aria-label="Search location"
            placeholder="Search location here..."
            className="w-full bg-transparent text-[9px] outline-none placeholder:text-black/30"
          />
          <button aria-label="Search">
            <FiSearch size={15} />
          </button>
        </form>

        <button className="nav-item md:hidden" aria-label="Search">
          <FiSearch size={18} />
        </button>
      </header>

      {/* Main headline */}
      <section className="pt-16 sm:pt-20 lg:pt-[70px]">
        <div className="flex flex-wrap items-center gap-x-3">
          <h1 className="hero-word font-['Arial'] text-[clamp(42px,7vw,126px)] font-black uppercase leading-[.95] tracking-[-.055em]">
            Coll
          </h1>

          <div className="hero-word relative flex min-w-[100px] flex-1 items-center">
            <span className="mt-16.5 -ml-[10px] lg:h-[19px] w-full bg-black sm:h-[9px]" />
          </div>

          <h1 className="hero-word font-['Arial'] text-[clamp(38px,7vw,126px)] font-black uppercase leading-[.95] tracking-[-.055em]">
            Aboration
          </h1>
        </div>

        <p className="hero-word mt-5 text-right font-['Arial'] text-[clamp(20px,3.8vw,37px)] font-normal italic uppercase leading-tight tracking-[-.035em]">
          With creative people
        </p>
      </section>

      {/* Globe + event links */}
      <section
        id="events"
        className="grid grid-cols-1 items-center gap-10 pb-16 pt-8 sm:pt-12 lg:grid-cols-[1fr_1fr] lg:gap-14 lg:pb-20 lg:pt-6"
      >
        {/* Globe visual */}
        <div className="globe-wrap relative mx-auto flex aspect-square w-full max-w-[440px] items-center justify-center">
          <img
            src={earth}
            alt="Earth globe"
            className="h-full w-full rounded-full object-cover grayscale opacity-75"
          />

        </div>

        {/* Event list */}
        <div className="flex w-full flex-col" id="about">
          {events.map((event) => (
            <a
              key={event}
              href="#contact"
              className="event-link group flex min-h-[90px] items-center justify-between border-b border-black/10 py-5 sm:min-h-[100px]"
            >
              <span className="text-[clamp(23px,3.4vw,32px)] font-light uppercase tracking-[-.045em] text-black/15 transition-colors duration-300 group-hover:text-black">
                {event}
              </span>
              <FiArrowUpRight
                className="shrink-0 text-black/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
                size={34}
                strokeWidth={1}
              />
            </a>
          ))}

          <a
            href="#contact"
            className="see-events mt-10 flex min-h-[58px] items-center justify-center gap-2 bg-[#111] px-5 text-[20px] font-medium uppercase transition-colors duration-300 hover:bg-[#383838]"
          >
            See more events <FiArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </main>
    <WhoWeAre />
    <RecentWork />
    <EventStats />
    <Organizers />
    <Testimonials />
    <FAQSection />
    <Footer />
    </div>
    
  );
}

