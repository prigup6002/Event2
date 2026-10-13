
import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiArrowUpRight,
  FiCalendar,
  FiCheck,
  FiClock,
  FiInstagram,
  FiMapPin,
  FiMenu,
  FiMinus,
  FiPlus,
  FiX,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const lime = "#d6ff3f";

const events = [
  {
    date: "FRI, 24 OCT · 8:00 PM",
    title: "After Hours, Before Sunrise",
    category: "ELECTRONIC · LIVE",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=850&q=85",
    price: "₹799",
  },
  {
    date: "SAT, 25 OCT · 7:30 PM",
    title: "The Bombay Listening Room",
    category: "JAZZ · SOUL",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=850&q=85",
    price: "₹599",
  },
  {
    date: "SUN, 26 OCT · 6:00 PM",
    title: "Somewhere in the City",
    category: "INDIE · ACOUSTIC",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=850&q=85",
    price: "₹499",
  },
];

const lineup = [
  {
    name: "Amara Okafor",
    role: "VOCALS · BAND LEADER",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Rohan Mehta",
    role: "PIANO",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=500&q=85",
  },
  {
    name: "The Sunday Players",
    role: "HOUSE BAND",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=500&q=85",
  },
];

const schedule = [
  { time: "18:30", title: "Doors open", detail: "Drinks, records & good company" },
  { time: "19:15", title: "The Sunday Players", detail: "Opening set · Live band" },
  { time: "20:00", title: "Amara Okafor Quartet", detail: "Main performance · 75 minutes" },
  { time: "21:30", title: "One more for the road", detail: "DJ set & late-night listening" },
];

const faqs = [
  {
    q: "What time should I arrive?",
    a: "Doors open at 6:30 PM. Arrive a little early, grab a drink and settle in before the first set.",
  },
  {
    q: "Can I get tickets at the door?",
    a: "Door tickets depend on availability. Booking online is the safest way to save your spot.",
  },
  {
    q: "Is the venue accessible?",
    a: "Please contact the venue before the event so the team can confirm current access arrangements.",
  },
  {
    q: "What is your refund policy?",
    a: "Tickets are subject to the event organiser's policy. Check the booking details before purchasing.",
  },
];

function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.12em] ${
        light ? "text-[#b9b9ad]" : "text-[#65655d]"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-[#d6ff3f]" : "bg-[#a9d526]"}`} />
      {children}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="relative z-50 flex h-[62px] items-center justify-between border-b border-black/10 bg-[#f3f0e8] px-5 md:px-[5.1vw]">
      <Link to="/" onClick={close} className="font-['Space_Grotesk'] text-[27px] font-bold leading-none tracking-[-2px]">
        hither<span className="text-[#a8d72c]">.</span>
      </Link>

      <div className="hidden items-center gap-2 text-[8px] font-bold tracking-[.12em] lg:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-[#a8d72c]" />
        GOOD MUSIC, GOOD PEOPLE
      </div>

      <button
        type="button"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
        className="grid h-9 w-9 place-items-center md:hidden"
      >
        {open ? <FiX size={19} /> : <FiMenu size={19} />}
      </button>

      <nav
        className={`${
          open ? "flex" : "hidden"
        } absolute left-0 right-0 top-[61px] flex-col border-b border-black/10 bg-[#f3f0e8] px-5 pb-5 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
      >
        <a onClick={close} href="#events" className="border-b border-black/10 py-4 text-[11px] md:border-0 md:py-0">
          Events
        </a>
        <a onClick={close} href="#about" className="border-b border-black/10 py-4 text-[11px] md:border-0 md:py-0">
          About
        </a>
        <a onClick={close} href="#venue" className="border-b border-black/10 py-4 text-[11px] md:border-0 md:py-0">
          The venue
        </a>
        <a
          onClick={close}
          href="#tickets"
          className="mt-3 flex items-center justify-between gap-5 bg-[#d6ff3f] px-4 py-3 text-[10px] font-bold md:mt-0"
        >
          GET TICKETS <FiArrowUpRight size={14} />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-frame relative h-[580px] overflow-hidden bg-[#29271f] text-white md:h-[min(57vw,720px)] md:min-h-[570px]">
        <img
          className="hero-photo absolute inset-0"
          src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=2000&q=90"
          alt="A soulful live music performance"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/15" />

        <div className="absolute left-5 right-5 top-5 flex justify-between text-[8px] font-bold tracking-[.12em] md:left-[5.1vw] md:right-[5.1vw]">
          <span>HITHER PRESENTS — VOL. 014</span>
          <span>19°04' N · MUMBAI, IN</span>
        </div>

        <div className="absolute right-5 top-[28%] hidden flex-col gap-1 text-[8px] font-bold tracking-[.1em] [writing-mode:vertical-rl] md:flex">
          <span>GOOD SOUND.</span>
          <span>GOOD COMPANY.</span>
        </div>

        <div className="hero-copy absolute bottom-7 left-5 right-5 md:bottom-10 md:left-[5.1vw] md:right-[5.1vw]">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-[9px] font-bold tracking-[.12em]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d6ff3f]" />
            LIVE MUSIC
            <span className="text-white/60">/</span>
            JAZZ, SOUL & EVERYTHING BETWEEN
          </div>

          <h1 className="font-['Space_Grotesk'] text-[clamp(65px,11.3vw,160px)] font-bold leading-[.79] tracking-[-.095em]">
            A LITTLE MORE
            <br />
            SOUL<span className="text-[#d6ff3f]">.</span>
          </h1>

          <div className="mt-8 flex items-end justify-between gap-4 md:mt-10">
            <p className="max-w-[240px] text-[11px] leading-[1.7] text-white/85 md:text-[12px]">
              An evening of music that stays with you.
              <br />
              Mumbai, come as you are.
            </p>
            <a
              href="#tickets"
              className="flex min-w-[155px] items-center justify-between gap-4 bg-[#d6ff3f] px-4 py-4 text-[10px] font-bold text-[#191914] transition-colors hover:bg-white md:min-w-[185px]"
            >
              FIND YOUR TICKETS <FiArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-3 border-b border-black/15 px-5 py-5 text-[8px] font-bold tracking-[.08em] sm:flex sm:items-center sm:gap-8 md:px-[5.1vw]">
        <div className="flex items-center gap-2"><FiCalendar size={12} /> SATURDAY, 25 OCTOBER</div>
        <div className="flex items-center gap-2"><FiClock size={12} /> DOORS AT 6:30 PM</div>
        <div className="flex items-center gap-2"><FiMapPin size={12} /> BANDRA WEST, MUMBAI</div>
        <span className="hidden text-right font-medium tracking-normal text-black/45 sm:ml-auto sm:block">One night. No repeats.</span>
      </div>
    </section>
  );
}

function Tickets() {
  const [selected, setSelected] = useState(1);

  const tickets = [
    {
      name: "The Early Bird",
      description: "For the ones who plan their good nights ahead.",
      price: "₹599",
      note: "Limited availability",
    },
    {
      name: "General Admission",
      description: "One seat in the room. A whole night to remember.",
      price: "₹899",
      note: "Most popular",
    },
    {
      name: "The Good Seat",
      description: "Closer to the sound. A little extra room to settle in.",
      price: "₹1,499",
      note: "Premium access",
    },
  ];

  return (
    <section id="tickets" className="px-5 py-16 md:px-[5.1vw] md:py-24">
      <SectionLabel>01 / YOUR NIGHT STARTS HERE</SectionLabel>

      <div className="mb-8 mt-9 flex items-end justify-between gap-4 md:mb-11">
        <h2 className="font-['Space_Grotesk'] text-[clamp(48px,7.3vw,100px)] font-bold leading-[.83] tracking-[-.085em]">
          Find your
          <br />
          way in<span className="text-[#a8d72c]">.</span>
        </h2>
        <p className="mb-1 hidden max-w-[200px] text-[11px] leading-[1.8] text-black/60 sm:block">
          Good music is better together. Pick your ticket and we’ll save you a spot.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
        {tickets.map((ticket, index) => (
          <button
            type="button"
            key={ticket.name}
            onClick={() => setSelected(index)}
            className={`flex min-h-[215px] flex-col justify-between border p-4 text-left transition-colors sm:min-h-[250px] sm:p-5 ${
              selected === index
                ? "border-[#d6ff3f] bg-[#d6ff3f]"
                : "border-black/20 bg-transparent hover:bg-black/[.035]"
            }`}
          >
            <div className="flex items-center justify-between text-[9px] font-bold">
              <span className={selected === index ? "text-black/55" : "text-black/45"}>0{index + 1}</span>
              <span className="uppercase tracking-[.08em]">{ticket.note}</span>
            </div>

            <div className="my-6">
              <h3 className="font-['Space_Grotesk'] text-[25px] font-bold leading-[.95] tracking-[-.06em] sm:text-[clamp(20px,2.5vw,32px)]">
                {ticket.name}
              </h3>
              <p className="mt-3 max-w-[250px] text-[10px] leading-[1.7] text-black/65">{ticket.description}</p>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-['Space_Grotesk'] text-[27px] font-bold tracking-[-.07em]">{ticket.price}</span>
              <span className={`grid h-7 w-7 place-items-center rounded-full border ${selected === index ? "border-black bg-black text-[#d6ff3f]" : "border-black/30"}`}>
                {selected === index ? <FiCheck size={14} /> : <FiArrowUpRight size={14} />}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-5 flex flex-col items-start justify-between gap-4 border-t border-black/15 pt-5 sm:flex-row sm:items-center">
        <p className="flex items-center gap-2 text-[10px] text-black/55"><FiCheck size={14} /> Secure booking · Prices in INR</p>
        <button
          type="button"
          onClick={() => alert(`Selected: ${tickets[selected].name} — ${tickets[selected].price}. Connect a booking provider to complete checkout.`)}
          className="flex w-full items-center justify-between gap-10 bg-[#191914] px-4 py-3.5 text-[10px] font-bold text-white transition-colors hover:bg-[#34342b] sm:w-auto"
        >
          CONTINUE WITH {tickets[selected].name.toUpperCase()} <FiArrowUpRight size={15} />
        </button>
      </div>
    </section>
  );
}

function ArtistIntro() {
  return (
    <section id="about" className="border-t border-black/15 px-5 py-16 md:px-[5.1vw] md:py-24">
      <div className="flex items-center justify-between gap-4">
        <SectionLabel>02 / THE FEELING</SectionLabel>
        <span className="text-right text-[8px] font-bold tracking-[.08em] text-black/45">NOT JUST ANOTHER GIG</span>
      </div>

      <div className="mt-10 grid grid-cols-2 items-center gap-5 md:mt-14 md:grid-cols-[.8fr_1.2fr] md:gap-[10vw]">
        <figure className="relative aspect-[.72] overflow-hidden bg-[#d8d2c7] md:aspect-[.84]">
          <img
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=85"
            alt="Singer performing live"
            className="object-cover"
          />
          <figcaption className="absolute bottom-0 left-0 bg-[#d6ff3f] px-3 py-2 text-[8px] font-bold tracking-[.06em]">
            MUMBAI · AFTER DARK
          </figcaption>
        </figure>

        <div>
          <SectionLabel>MEET THE MUSIC</SectionLabel>
          <h2 className="mt-5 font-['Space_Grotesk'] text-[clamp(29px,6vw,82px)] font-bold leading-[.91] tracking-[-.085em]">
            Warm,
            <br />
            patient
            <br />
            and a little
            <br />
            bit gospel<span className="text-[#a8d72c]">.</span>
          </h2>
          <p className="mt-5 max-w-[390px] text-[10px] leading-[1.85] text-black/65 md:mt-7 md:text-[12px]">
            Some nights are for dancing. Some are for listening. This one is for letting the music find its way in — from the first note to the last.
          </p>
          <p className="mt-3 hidden max-w-[390px] text-[12px] leading-[1.85] text-black/65 md:block">
            Come for the quartet. Stay for that feeling you can never quite explain the next morning.
          </p>
          <a href="#lineup" className="mt-5 inline-flex items-center gap-3 border-b border-black pb-2 text-[10px] font-bold">
            MEET THE ARTISTS <FiArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Lineup() {
  return (
    <section id="lineup" className="bg-[#191914] px-5 py-16 text-[#f3f0e8] md:px-[5.1vw] md:py-24">
      <SectionLabel light>03 / THE PEOPLE BEHIND THE SOUND</SectionLabel>

      <div className="mb-8 mt-9 flex items-end justify-between gap-4 md:mb-12">
        <h2 className="font-['Space_Grotesk'] text-[clamp(48px,8vw,108px)] font-bold leading-[.82] tracking-[-.09em]">
          Made of
          <br />
          good notes<span className="text-[#d6ff3f]">.</span>
        </h2>
        <p className="mb-1 hidden max-w-[210px] text-[11px] leading-[1.8] text-white/55 sm:block">
          Four musicians. One room. No background noise.
        </p>
      </div>

      <div className="grid grid-cols-2 items-center gap-5 md:grid-cols-[1.15fr_.85fr] md:gap-[7vw]">
        <div className="relative h-[300px] overflow-hidden bg-[#333229] sm:h-[420px] md:h-[500px]">
          <img
            src={lineup[0].image}
            alt={lineup[0].name}
            className="lineup-photo object-cover"
          />
          <span className="absolute bottom-3 left-3 text-[8px] font-bold tracking-[.1em]">ARTIST 001 — VOCALS</span>
        </div>

        <div>
          <span className="text-[8px] font-bold tracking-[.14em] text-[#d6ff3f]">THE HEADLINER</span>
          <h3 className="mt-4 font-['Space_Grotesk'] text-[clamp(32px,6.5vw,78px)] font-bold leading-[.84] tracking-[-.09em]">
            Amara
            <br />
            Okafor<span className="text-[#d6ff3f]">.</span>
          </h3>
          <p className="mt-5 text-[8px] font-bold tracking-[.1em] text-[#d6ff3f]">VOCALS · BAND LEADER</p>
          <p className="mt-4 max-w-[310px] text-[10px] leading-[1.8] text-white/60 md:text-[12px]">
            A voice that moves between jazz, soul and gospel without asking permission. Intimate, fearless and made for a room like this.
          </p>
          <a href="#schedule" className="mt-5 inline-flex items-center gap-2 border-b border-white/40 pb-2 text-[9px] font-bold">
            SEE THE SET TIMES <FiArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 border-y border-white/20 md:grid-cols-3">
        {lineup.slice(1).map((artist, index) => (
          <div key={artist.name} className={`flex min-w-0 items-center gap-3 py-4 pr-2 ${index === 1 ? "col-span-2 border-t border-white/20 md:col-span-1 md:border-l md:border-t-0 md:pl-4" : ""} ${index === 0 ? "md:border-l md:pl-4" : ""}`}>
            <div className="h-[65px] w-[52px] shrink-0 overflow-hidden bg-white/10 sm:h-[78px] sm:w-[68px]">
              <img src={artist.image} alt={artist.name} />
            </div>
            <div className="min-w-0">
              <h4 className="font-['Space_Grotesk'] text-[13px] font-bold leading-tight tracking-[-.04em] sm:text-[16px]">{artist.name}</h4>
              <p className="mt-1 text-[7px] leading-[1.5] text-white/50 sm:text-[9px]">{artist.role}</p>
            </div>
            <FiArrowUpRight className="ml-auto shrink-0 text-[#d6ff3f]" size={14} />
          </div>
        ))}
      </div>
      <p className="mt-5 text-[8px] font-bold tracking-[.08em] text-white/45">THREE SETS · ONE SHARED STAGE · ALL HEART</p>
    </section>
  );
}

function Schedule() {
  return (
    <section id="schedule" className="border-b border-black/15 px-5 py-16 md:px-[5.1vw] md:py-24">
      <SectionLabel>04 / HOW THE NIGHT UNFOLDS</SectionLabel>
      <div className="mb-9 mt-9 flex items-end justify-between gap-4 md:mb-12">
        <h2 className="font-['Space_Grotesk'] text-[clamp(49px,7.5vw,102px)] font-bold leading-[.82] tracking-[-.085em]">
          On the
          <br />
          night<span className="text-[#a8d72c]">.</span>
        </h2>
        <p className="mb-1 max-w-[145px] text-[9px] leading-[1.7] text-black/55 md:max-w-[220px] md:text-[11px]">
          A loose plan for a night best left to the music.
        </p>
      </div>

      <div className="border-t border-black/20">
        {schedule.map((item, index) => (
          <div key={item.time} className={`grid grid-cols-[58px_1fr_auto] items-center gap-3 border-b border-black/20 py-4 sm:grid-cols-[100px_1fr_auto] sm:gap-5 sm:py-5 ${index === 2 ? "bg-[#d6ff3f] px-3" : ""}`}>
            <time className="font-['Space_Grotesk'] text-[17px] font-bold tracking-[-.06em] sm:text-[23px]">{item.time}</time>
            <div>
              <h3 className="font-['Space_Grotesk'] text-[13px] font-bold tracking-[-.04em] sm:text-[17px]">{item.title}</h3>
              <p className="mt-1 text-[8px] leading-[1.5] text-black/55 sm:text-[10px]">{item.detail}</p>
            </div>
            {index === 2 ? (
              <span className="bg-[#191914] px-2 py-1.5 text-[7px] font-bold tracking-[.06em] text-[#d6ff3f]">MAIN SET</span>
            ) : (
              <span className="text-[8px] font-bold text-black/40">0{index + 1}</span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-2 text-[9px] text-black/50"><FiClock size={13} /> Doors open at 6:30 PM · Subject to minor changes</div>
    </section>
  );
}

function Venue() {
  return (
    <section id="venue" className="border-b border-black/15 px-5 py-16 md:px-[5.1vw] md:py-24">
      <SectionLabel>05 / THE PLACE</SectionLabel>
      <div className="mb-8 mt-9 flex items-end justify-between gap-4 md:mb-12">
        <h2 className="font-['Space_Grotesk'] text-[clamp(44px,7vw,95px)] font-bold leading-[.83] tracking-[-.085em]">
          Meet us
          <br />
          in Bandra<span className="text-[#a8d72c]">.</span>
        </h2>
        <p className="mb-1 max-w-[130px] text-[9px] leading-[1.7] text-black/55 md:max-w-[200px] md:text-[11px]">
          A little tucked away. Worth finding.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[1.2fr_.8fr] md:gap-[5vw]">
        <div className="relative aspect-[1.25] overflow-hidden bg-[#d0cbc0] md:aspect-auto md:min-h-[390px]">
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=85"
            alt="An intimate venue for live music"
          />
          <span className="absolute bottom-0 left-0 bg-[#d6ff3f] px-3 py-2 text-[8px] font-bold tracking-[.08em]">THE ROOM WHERE IT HAPPENS</span>
        </div>

        <div className="flex flex-col">
          <div className="border-b border-black/15 pb-5">
            <span className="text-[8px] font-bold tracking-[.12em] text-black/45">THE ADDRESS</span>
            <h3 className="mt-3 font-['Space_Grotesk'] text-[23px] font-bold tracking-[-.06em]">The Listening Room</h3>
            <p className="mt-2 text-[10px] leading-[1.8] text-black/60">Bandra West, Mumbai, Maharashtra</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=live+music+venues+Bandra+West+Mumbai"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 border-b border-black/25 pb-1 text-[10px] font-bold"
            >
              GET DIRECTIONS <FiArrowUpRight size={13} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-5 border-b border-black/15 py-5">
            <div>
              <span className="text-[8px] font-bold tracking-[.12em] text-black/45">DOORS</span>
              <p className="mt-2 text-[12px] font-bold">6:30 PM onwards</p>
            </div>
            <div>
              <span className="text-[8px] font-bold tracking-[.12em] text-black/45">DRESS CODE</span>
              <p className="mt-2 text-[12px] font-bold">Come as you are</p>
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between gap-3 pt-5">
            <span className="flex items-center gap-2 text-[8px] font-bold text-black/55"><FiMapPin size={13} /> MUMBAI, INDIA</span>
            <a href="#tickets" className="inline-flex items-center gap-2 text-[10px] font-bold">SAVE YOUR SPOT <FiArrowUpRight size={13} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-black/15 px-5 py-16 md:px-[5.1vw] md:py-24">
      <SectionLabel>06 / BEFORE YOU GO</SectionLabel>
      <div className="mt-9 grid gap-8 md:grid-cols-[.85fr_1.15fr] md:gap-[8vw]">
        <h2 className="font-['Space_Grotesk'] text-[clamp(55px,7vw,95px)] font-bold leading-[.82] tracking-[-.09em]">
          Good to
          <br />
          know<span className="text-[#a8d72c]">.</span>
        </h2>

        <div>
          <div className="border-t border-black/20">
            {faqs.map((item, index) => (
              <div key={item.q} className="border-b border-black/20">
                <button
                  type="button"
                  onClick={() => setActive(active === index ? -1 : index)}
                  className="flex min-h-[59px] w-full items-center justify-between gap-4 py-4 text-left font-['Space_Grotesk'] text-[14px] font-semibold tracking-[-.03em] sm:text-[16px]"
                  aria-expanded={active === index}
                >
                  {item.q}
                  {active === index ? <FiMinus size={15} className="shrink-0" /> : <FiPlus size={15} className="shrink-0" />}
                </button>
                {active === index && (
                  <p className="max-w-[460px] pb-5 pr-6 text-[10px] leading-[1.9] text-black/60 sm:text-[11px]">{item.a}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-black/15 pt-5">
            <span className="text-[8px] font-bold tracking-[.1em] text-black/45">STILL HAVE A QUESTION?</span>
            <a href="mailto:hello@hither.example" className="inline-flex items-center gap-2 border-b border-black pb-1 text-[10px] font-bold">
              TALK TO US <FiArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function RelatedEvents() {
  return (
    <section id="events" className="px-5 py-16 md:px-[5.1vw] md:py-24">
      <SectionLabel>07 / KEEP A NIGHT FREE</SectionLabel>
      <div className="mb-8 mt-9 flex items-end justify-between gap-4 md:mb-12">
        <h2 className="font-['Space_Grotesk'] text-[clamp(47px,7.5vw,100px)] font-bold leading-[.82] tracking-[-.085em]">
          More good
          <br />
          nights<span className="text-[#a8d72c]">.</span>
        </h2>
        <a href="#events" className="hidden items-center gap-2 text-[10px] font-bold sm:inline-flex">ALL EVENTS <FiArrowUpRight size={14} /></a>
      </div>

      <div className="grid grid-cols-2 gap-x-3 gap-y-7 md:grid-cols-3 md:gap-4">
        {events.map((event, index) => (
          <a href="#tickets" key={event.title} className={`${index === 2 ? "hidden md:block" : ""} group min-w-0`}>
            <div className="relative aspect-[.82] overflow-hidden bg-[#d0cbc0] sm:aspect-[.92]">
              <img
                src={event.image}
                alt={event.title}
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-2 top-2 bg-[#f3f0e8] px-2 py-1.5 text-[7px] font-bold sm:left-3 sm:top-3 sm:text-[8px]">0{index + 1}</span>
              <span className="absolute bottom-2 right-2 grid h-8 w-8 place-items-center bg-[#d6ff3f] sm:bottom-3 sm:right-3"><FiArrowUpRight size={16} /></span>
            </div>
            <p className="mt-3 text-[7px] font-bold tracking-[.08em] text-black/50 sm:text-[8px]">{event.date}</p>
            <h3 className="mt-2 font-['Space_Grotesk'] text-[19px] font-bold leading-[.98] tracking-[-.055em] sm:text-[clamp(22px,2.5vw,31px)]">{event.title}</h3>
            <p className="mt-2 text-[8px] font-bold tracking-[.07em] text-black/45">{event.category}</p>
            <p className="mt-3 text-[11px] font-bold">{event.price} <span className="font-normal text-black/45"> onwards</span></p>
          </a>
        ))}
      </div>

      <a href="#events" className="mt-7 inline-flex items-center gap-2 border-b border-black pb-2 text-[10px] font-bold sm:hidden">EXPLORE ALL EVENTS <FiArrowUpRight size={14} /></a>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (event) => {
    event.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Enter a valid email address.");
      return;
    }
    setMessage("You're on the list. Connect your email service to save subscriptions.");
  };

  return (
    <section className="bg-[#d6ff3f] px-5 pb-6 pt-8 md:px-[5.1vw] md:pt-10">
      <SectionLabel>08 / A GOOD THING IN YOUR INBOX</SectionLabel>

      <div className="grid gap-8 py-10 md:grid-cols-[1.15fr_.85fr] md:items-end md:gap-[8vw] md:py-16">
        <div>
          <span className="text-[8px] font-bold tracking-[.12em]">THE HITHER LETTER</span>
          <h2 className="mt-5 font-['Space_Grotesk'] text-[clamp(58px,8.2vw,112px)] font-bold leading-[.79] tracking-[-.095em]">
            Six picks.
            <br />
            Every
            <br />
            Thursday<span className="text-[#f3f0e8]">.</span>
          </h2>
          <p className="mt-5 text-[10px] leading-[1.8] md:text-[11px]">The gigs worth leaving home for. Curated, not crowded.</p>
        </div>

        <form onSubmit={submit} className="pb-1">
          <label htmlFor="newsletter-email" className="mb-3 block text-[8px] font-bold tracking-[.1em]">YOUR EMAIL ADDRESS</label>
          <div className="flex border-b border-black">
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@somewhere.com"
              className="h-12 min-w-0 flex-1 bg-transparent text-[12px] outline-none placeholder:text-black/45"
              required
            />
            <button aria-label="Subscribe" type="submit" className="grid h-10 w-10 place-items-center bg-[#191914] text-[#d6ff3f] transition-colors hover:bg-black/70">
              <FiArrowUpRight size={17} />
            </button>
          </div>
          <p aria-live="polite" className="mt-3 min-h-5 text-[9px] leading-[1.7]">{message || "No spam. No noise. Unsubscribe whenever."}</p>
        </form>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-black/30 pt-4 text-[7px] font-bold tracking-[.08em] sm:text-[8px]">
        <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-black" /> MADE FOR MUSIC PEOPLE</span>
        <span>MUMBAI, INDIA · EST. 2026</span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="overflow-hidden bg-[#d6ff3f] px-5 pt-6 md:px-[5.1vw] md:pt-8">
      <div className="flex items-start justify-between gap-4 border-b border-black/30 pb-5 text-[8px] font-bold tracking-[.1em]">
        <span>GOOD MUSIC. GOOD PEOPLE.</span>
        <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="inline-flex items-center gap-2">BACK TO TOP <FiArrowUpRight size={13} /></a>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-8 py-7 sm:grid-cols-4 md:py-10">
        <div>
          <p className="mb-4 text-[8px] font-bold tracking-[.12em] text-black/55">FIND YOUR NIGHT</p>
          <div className="flex flex-col gap-3 text-[10px]">
            <a href="#events">All events</a>
            <a href="#tickets">Tickets</a>
            <a href="#schedule">Schedule</a>
          </div>
        </div>
        <div>
          <p className="mb-4 text-[8px] font-bold tracking-[.12em] text-black/55">THE GOOD STUFF</p>
          <div className="flex flex-col gap-3 text-[10px]">
            <a href="#about">Our story</a>
            <a href="#lineup">The artists</a>
            <a href="#venue">The venue</a>
          </div>
        </div>
        <div>
          <p className="mb-4 text-[8px] font-bold tracking-[.12em] text-black/55">SAY HELLO</p>
          <div className="flex flex-col gap-3 text-[10px]">
            <a href="mailto:hello@hither.example">Email us <FiArrowUpRight className="inline" /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <FiInstagram className="inline" /></a>
          </div>
        </div>
        <div>
          <p className="mb-4 text-[8px] font-bold tracking-[.12em] text-black/55">SMALL PRINT</p>
          <div className="flex flex-col gap-3 text-[10px]">
            <a href="#faq">FAQs</a>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-3 border-t border-black/30 py-4 text-[7px] font-bold tracking-[.06em] sm:flex-row sm:text-[8px]">
        <span>© 2026 HITHER STUDIO</span>
        <span>BUILT AROUND THE THINGS THAT BRING US TOGETHER.</span>
      </div>

      <div className="footer-wordmark -ml-[.075em] -mb-[.16em] w-max whitespace-nowrap font-['Space_Grotesk'] text-[23vw] font-bold leading-[.73] tracking-[-.12em] sm:text-[22.2vw]">
        HITHER<span className="text-[#f3f0e8]">.</span>
      </div>
    </footer>
  );
}

export default function Home() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.13,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.from(".hero-photo", {
        scale: 1.12,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.utils.toArray(".hero-section, section[id], footer").forEach((section) => {
        const children = section.querySelectorAll(".reveal");
        if (!children.length) return;

        gsap.from(children, {
          y: 30,
          opacity: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        });
      });

      gsap.utils.toArray(".ticket-card, .related-grid > a").forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card.querySelector("img") || card, {
            scale: 1.035,
            duration: 0.35,
            overwrite: true,
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card.querySelector("img") || card, {
            scale: 1,
            duration: 0.35,
            overwrite: true,
          });
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className="min-h-screen bg-[#f3f0e8] text-[#191914]">
      <div id="top">
        <Header />
        <Hero />
        <Tickets />
        <ArtistIntro />
        <Lineup />
        <Schedule />
        <Venue />
        <div id="faq"><FAQ /></div>
        <RelatedEvents />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}
