
import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import {
  FiSearch,
  FiArrowRight,
  FiArrowUpRight,
  FiChevronDown,
  FiMapPin,
  FiPlus,
  FiMinus,
  FiUsers
} from "react-icons/fi";

const tickets = [
  {
    number: "01",
    status: "SOLD OUT",
    title: "Early door with a drink",
    description: "Entry from 19:00 and a glass of something.",
    price: "₹1,499",
    fee: "incl. ₹120 fees",
    image:
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=900&q=85",
    dark: true,
  },
  {
    number: "02",
    status: "9 LEFT",
    title: "General admission",
    description: "Standing, bar access. Doors 19:00.",
    price: "₹2,199",
    fee: "incl. ₹180 fees",
  },
  {
    number: "03",
    status: "6 LEFT",
    title: "Table for two",
    description: "Two seats at a wall table, by the stage. Tables are sold in pairs.",
    price: "₹5,999",
    fee: "for two, incl. ₹400 fees",
  },
];

function Tickets() {
  const [quantity, setQuantity] = useState(2);

  return (
    <main className="min-h-screen bg-[#f4f1e9] text-[#171715]">
      <div className="grid min-h-screen grid-cols-1 border-l border-black/[0.06] sm:grid-cols-2 lg:grid-cols-3">
        {/* Heading */}
        <div className="relative flex min-h-[220px] flex-col justify-between border-b border-r border-black/[0.07] p-6 sm:p-8 lg:min-h-[242px] lg:p-9">
          <Link
            to="/"
            className="w-fit text-[9px] font-bold uppercase tracking-[.12em]"
          >
            ← Hither
          </Link>

          <p className="text-[9px] font-bold uppercase tracking-[.12em]">
            ▪ [IN / TICKETS · ALL FEES INCLUDED]
          </p>
        </div>

        <div className="flex min-h-[220px] items-center border-b border-r border-black/[0.07] px-6 py-8 sm:px-8 lg:min-h-[242px] lg:px-4">
          <h1 className="font-['Space_Grotesk'] text-[clamp(54px,7vw,76px)] font-bold leading-[.86] tracking-[-.085em]">
            Pick your
            <br />
            way in
          </h1>
        </div>

        <div className="flex min-h-[120px] items-end border-b border-r border-black/[0.07] p-6 pb-8 sm:col-span-2 lg:col-span-1 lg:min-h-[242px] lg:p-8">
          <p className="text-[9px] font-bold uppercase tracking-[.1em] text-black/55">
            131 OF 140 SOLD · TABLES GO FIRST
          </p>
        </div>

        {/* Ticket 1 */}
        <article className="relative flex min-h-[335px] flex-col justify-between overflow-hidden border-b border-r border-black/[0.07] bg-black p-6 text-white sm:p-7 lg:min-h-[337px] lg:p-6">
          <img
            src={tickets[0].image}
            alt="Jazz musicians performing"
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

          <div className="relative">
            <p className="text-[8px] font-medium uppercase tracking-[.1em] text-white/65">
              01&nbsp;&nbsp; SOLD OUT
            </p>
            <h2 className="mt-3 max-w-[290px] font-['Space_Grotesk'] text-[clamp(27px,3vw,36px)] font-bold leading-[.96] tracking-[-.055em]">
              Early door with
              <br />
              a drink
            </h2>
            <p className="mt-3 max-w-[270px] text-[11px] leading-[1.6] text-white/80">
              Entry from 19:00 and a glass of something.
            </p>
          </div>

          <button
            disabled
            className="relative flex w-fit items-center gap-3 text-left text-[11px] text-white/80"
          >
            <span className="grid h-10 w-10 place-items-center border border-white/50">
              <FiArrowRight size={17} />
            </span>
            Join the waitlist
          </button>
        </article>

        {/* Ticket 2 */}
        <article className="flex min-h-[335px] flex-col justify-between border-b border-r border-black/[0.07] bg-[#d7ff3f] p-6 sm:p-7 lg:p-6">
          <div>
            <p className="text-[8px] font-bold uppercase tracking-[.1em]">
              02&nbsp;&nbsp; 9 LEFT
            </p>
            <h2 className="mt-3 max-w-[260px] font-['Space_Grotesk'] text-[clamp(29px,3.1vw,37px)] font-bold leading-[.94] tracking-[-.06em]">
              General
              <br />
              admission
            </h2>
            <p className="mt-3 text-[11px] leading-[1.6] text-black/70">
              Standing, bar access. Doors 19:00.
            </p>
          </div>

          <div>
            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="font-['Space_Grotesk'] text-[clamp(30px,3.2vw,39px)] font-bold leading-none tracking-[-.07em]">
                  ₹2,199
                </p>
                <p className="mt-1 text-[9px] text-black/65">
                  incl. ₹180 fees
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  aria-label="Decrease ticket quantity"
                  disabled={quantity <= 1}
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="grid h-8 w-8 place-items-center border border-black/25 bg-white disabled:opacity-40"
                >
                  <FiMinus size={13} />
                </button>
                <span className="min-w-3 text-center text-[11px] font-bold">
                  {quantity}
                </span>
                <button
                  aria-label="Increase ticket quantity"
                  disabled={quantity >= 9}
                  onClick={() => setQuantity((q) => Math.min(9, q + 1))}
                  className="grid h-8 w-8 place-items-center border border-black/25 bg-white disabled:opacity-40"
                >
                  <FiPlus size={13} />
                </button>
              </div>
            </div>

            <button
              onClick={() =>
                alert(
                  `${quantity} ticket(s) selected. Total: ₹${(2199 * quantity).toLocaleString("en-IN")}. Connect your checkout to complete booking.`
                )
              }
              className="mt-5 flex w-full items-center justify-between gap-2 bg-[#171715] px-3 py-3 text-[10px] font-bold text-white transition-colors hover:bg-black/75"
            >
              <span>Continue with {quantity}</span>
              <FiArrowRight size={14} />
              <span>₹{(2199 * quantity).toLocaleString("en-IN")}</span>
            </button>
          </div>
        </article>

        {/* Ticket 3 */}
        <article className="flex min-h-[335px] flex-col justify-between border-b border-r border-black/[0.07] bg-white p-6 sm:p-7 lg:p-6">
          <div>
            <p className="text-[8px] font-bold uppercase tracking-[.1em] text-black/65">
              03&nbsp;&nbsp; 6 LEFT
            </p>
            <h2 className="mt-3 font-['Space_Grotesk'] text-[clamp(28px,3vw,36px)] font-bold leading-[.95] tracking-[-.06em]">
              Table for two
            </h2>
            <p className="mt-3 max-w-[270px] text-[11px] leading-[1.6] text-black/75">
              Two seats at a wall table, by the stage. Tables are sold in pairs.
            </p>
          </div>

          <div>
            <p className="font-['Space_Grotesk'] text-[clamp(30px,3.2vw,39px)] font-bold leading-none tracking-[-.07em]">
              ₹5,999
            </p>
            <p className="mt-1 text-[9px] text-black/60">
              for two, incl. ₹400 fees
            </p>

            <button
              onClick={() =>
                alert("Table selection UI will connect to the booking system.")
              }
              className="mt-5 flex items-center gap-3 text-left text-[10px] font-medium"
            >
              <span className="grid h-10 w-10 place-items-center border border-black/40 transition-colors hover:bg-[#d7ff3f]">
                <FiArrowRight size={17} />
              </span>
              Choose a table
            </button>
          </div>
        </article>

        {/* Footer note */}
        <div className="flex items-start gap-2 border-b border-r border-black/[0.07] px-6 py-5 text-[10px] leading-[1.6] text-black/55 sm:col-span-2 lg:col-span-3 lg:px-8">
          <FiUsers size={13} className="mt-0.5 shrink-0" />
          Tickets land in Passes and your inbox straight away. Refunds up to 48 hours before.
        </div>
      </div>
    </main>
  );
}

function AboutNightPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f1e9] text-[#171715]">
      <section className="grid min-h-screen grid-cols-1 border-l border-t border-black/[0.06] sm:grid-cols-2 lg:grid-cols-3">

        {/* Left column */}
        <div className="flex flex-col border-r border-black/[0.07] px-6 pb-8 pt-10 sm:px-8 lg:min-h-[660px] lg:px-[3.2vw]">
          <p className="text-[10px] font-bold uppercase tracking-[.12em]">
            ▪ [IN / ABOUT THE NIGHT]
          </p>

          <figure className="mt-20 sm:mt-32 lg:mt-auto">
            <img
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=90"
              alt="Musicians performing together on stage"
              className="aspect-[3/3.6] w-full max-w-[340px] object-cover object-center"
            />

            <figcaption className="mt-3 text-[10px] font-medium uppercase tracking-[.1em] text-black/55">
              THE QUARTET · SOUNDCHECK
            </figcaption>
          </figure>
        </div>

        {/* Center column */}
        <div className="border-r border-black/[0.07] px-6 pb-12 pt-12 sm:px-6 sm:pt-28 lg:px-4 lg:pt-[145px]">
          <h1 className="max-w-[580px] font-['Space_Grotesk'] text-[clamp(48px,5.8vw,68px)] font-bold leading-[0.92] tracking-[-0.075em]">
            Warm, patient and
            <br />
            a little bit{" "}
            <span className="bg-[#d7ff3f] px-[2px]">
              gospel.
            </span>
          </h1>

          <p className="mt-9 max-w-[420px] text-[15px] leading-[1.8] text-black/80">
            Amara Okafor grew up playing in the back room
            of her uncle’s church in Peckham, and it shows.
            Kindred, out on Brownswood this autumn, is her
            first record as a leader.
          </p>
        </div>

        {/* Right column */}
        <div className="border-r border-black/[0.07] px-6 pb-12 pt-8 sm:col-span-2 sm:px-6 lg:col-span-1 lg:px-4 lg:pt-[286px]">
          <p className="max-w-[400px] text-[15px] leading-[1.8] text-black/80">
            Tonight the quartet plays it front to back, then
            takes requests. The Listening Room holds 140
            people, mostly standing, with twelve small
            tables along the wall.
          </p>
        </div>

      </section>
    </main>
  );
}

function LineupPage() {
  const [activeArtist, setActiveArtist] = useState(0);

  const artists = [
    {
      name: "Amara Okafor",
      role: "TENOR SAXOPHONE · LEADER",
      quote:
        "“Kindred is the record I wanted to hear on a Thursday night. We play it the way it was written, then you pick.”",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=90",
    },
    {
      name: "Dele Ajayi",
      role: "PIANO",
      quote:
        "“Every night sounds different. That is what keeps the music alive.”",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=90",
    },
    {
      name: "Rosa Marin",
      role: "DOUBLE BASS",
      quote:
        "“The best moments happen when you leave a little room for the unexpected.”",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1000&q=90",
    },
    {
      name: "Tom Keane",
      role: "DRUMS",
      quote:
        "“We find the groove together. The audience becomes part of it.”",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=90",
    },
  ];

  const members = [
    {
      name: "Dele Ajayi",
      role: "PIANO",
      image:
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=500&q=85",
    },
    {
      name: "Rosa Marin",
      role: "DOUBLE BASS",
      image:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=500&q=85",
    },
    {
      name: "Tom Keane",
      role: "DRUMS",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=500&q=85",
    },
  ];

  const artist = artists[activeArtist];

  return (
    <main className="min-h-screen overflow-hidden bg-[#111211] text-[#f5f3ed]">
      <section className="grid min-h-screen grid-cols-1 border-l border-white/[0.07] sm:grid-cols-2 lg:grid-cols-3">

        {/* Left column */}
        <div className="flex flex-col justify-between border-r border-white/[0.08] px-6 pb-8 pt-10 sm:px-8 lg:min-h-screen lg:px-[3.2vw]">
          <p className="text-[10px] font-bold uppercase tracking-[.12em] text-white/80">
            <span className="mr-2 inline-block h-2 w-3 bg-[#d7ff3f]" />
            [IN / THE QUARTET]
          </p>

          <div className="mt-12 grid grid-cols-3 gap-3 lg:mt-auto lg:pt-28">
            {members.map((member) => (
              <div key={member.name} className="min-w-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-[.78] w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
                />
                <p className="mt-3 truncate text-[10px] font-medium">
                  {member.name}
                </p>
                <p className="mt-1 text-[8px] tracking-[.08em] text-white/45">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-2">
            <button
              aria-label="Previous artist"
              onClick={() =>
                setActiveArtist((activeArtist + artists.length - 1) % artists.length)
              }
              className="grid h-10 w-10 place-items-center border border-white/25 text-lg transition-colors hover:bg-white hover:text-black"
            >
              ←
            </button>

            <button
              aria-label="Next artist"
              onClick={() =>
                setActiveArtist((activeArtist + 1) % artists.length)
              }
              className="grid h-10 w-10 place-items-center bg-[#d7ff3f] text-xl text-black transition-colors hover:bg-white"
            >
              →
            </button>
          </div>
        </div>

        {/* Center column */}
        <div className="flex flex-col border-r border-white/[0.08] px-6 pb-8 pt-12 sm:px-5 lg:px-3 lg:pt-[62px]">
          <h1 className="mb-10 font-['Space_Grotesk'] text-[clamp(54px,7vw,76px)] font-bold leading-[.87] tracking-[-.085em] sm:mb-12">
            Who’s on
            <br />
            stage
          </h1>

          <div className="relative mt-auto">
            <img
              key={artist.image}
              src={artist.image}
              alt={artist.name}
              className="aspect-[.78] max-h-[520px] w-full object-cover object-center"
            />

            <div className="absolute bottom-0 left-0 flex">
              <button
                aria-label="Previous artist"
                onClick={() =>
                  setActiveArtist((activeArtist + artists.length - 1) % artists.length)
                }
                className="grid h-10 w-10 place-items-center bg-black/70 text-white"
              >
                ←
              </button>
              <button
                aria-label="Next artist"
                onClick={() =>
                  setActiveArtist((activeArtist + 1) % artists.length)
                }
                className="grid h-10 w-10 place-items-center bg-[#d7ff3f] text-black"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col border-r border-white/[0.08] px-6 pb-10 pt-10 sm:col-span-2 sm:px-8 lg:col-span-1 lg:px-3 lg:pt-[245px]">
          <h2 className="font-['Space_Grotesk'] text-[25px] font-bold leading-tight tracking-[-.045em]">
            {artist.name}
          </h2>

          <p className="mt-1 text-[8px] font-medium tracking-[.12em] text-white/45">
            {artist.role}
          </p>

          <blockquote className="mt-6 text-[clamp(21px,2.3vw,26px)] leading-[1.13] tracking-[-.035em] text-white/90">
            {artist.quote}
          </blockquote>

          <div className="mt-6 border-t border-white/15">
            {members.map((member, index) => (
              <button
                key={member.name}
                onClick={() => setActiveArtist(index + 1)}
                className="flex w-full items-center justify-between gap-3 border-b border-white/15 py-3 text-left transition-colors hover:text-[#d7ff3f]"
              >
                <span className="text-[11px]">{member.name}</span>
                <span className="text-[8px] text-white/50">
                  {member.role}
                </span>
              </button>
            ))}
          </div>

          <a
            href="#follow-amara"
            className="mt-6 flex w-fit items-center gap-3 text-[10px] transition-colors hover:text-[#d7ff3f]"
          >
            Follow Amara <span className="text-base">+</span>
          </a>

          <p className="mt-12 text-[9px] font-medium tracking-[.12em] text-white/45 lg:mt-16">
            {String(activeArtist + 1).padStart(2, "0")} / {String(artists.length).padStart(2, "0")}
          </p>
        </div>

      </section>
    </main>
  );
}


function RunningOrderPage() {
  const schedule = [
    {
      time: "19:00",
      title: "Doors and bar",
      description: "Arrive early for a table by the stage.",
    },
    {
      time: "19:45",
      title: "First set",
      description: "Kindred, sides A and B.",
    },
    {
      time: "20:45",
      title: "Interval",
      description: "20 minutes. The bar reopens.",
    },
    {
      time: "21:05",
      title: "Second set",
      description: "Requests, then two standards.",
    },
    {
      time: "22:00",
      title: "Close",
      description: "Last trains from the venue until 00:15.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f1e9] text-[#171715]">
      <section className="grid min-h-screen grid-cols-1 border-l border-t border-black/[0.07] sm:grid-cols-2 lg:grid-cols-3">

        {/* Header: left column */}
        <div className="border-r border-black/[0.07] px-6 pt-10 sm:px-8 lg:min-h-[245px]">
          <p className="text-[10px] font-bold uppercase tracking-[.12em]">
            <span className="mr-2 inline-block h-2 w-3 bg-black" />
            [IN / RUNNING ORDER]
          </p>
        </div>

        {/* Main heading */}
        <div className="border-r border-black/[0.07] px-6 pb-8 pt-10 sm:px-5 lg:min-h-[245px] lg:px-4">
          <h1 className="font-['Space_Grotesk'] text-[clamp(48px,6.7vw,74px)] font-bold leading-[.87] tracking-[-.08em]">
            How the
            <br />
            night runs
          </h1>
        </div>

        {/* Header note */}
        <div className="border-r border-black/[0.07] px-6 pb-8 pt-10 sm:col-span-2 lg:col-span-1 lg:px-4">
          <p className="text-[9px] font-bold uppercase tracking-[.1em] text-black/55">
            ALL TIMES IST · LAST TRAINS 00:15
          </p>
        </div>

        {/* Live status and timeline */}
        <div className="border-r border-black/[0.07] px-6 pb-3 pt-6 sm:col-span-2 sm:px-8 lg:col-span-3 lg:px-4">
          <div className="flex items-center gap-3">
            <span className="shrink-0 bg-[#d7ff3f] px-2 py-1.5 text-[9px] font-bold uppercase tracking-[.04em]">
              NOW 18:40 · DOORS IN 20 MIN
            </span>
            <div className="h-[2px] flex-1 bg-black/60" />
          </div>
        </div>

        {schedule.map((item) => (
          <div
            key={item.time}
            className="grid min-h-[82px] grid-cols-1 border-b border-r border-black/[0.09] px-6 py-4 sm:col-span-2 sm:grid-cols-2 sm:px-8 lg:col-span-3 lg:min-h-[82px] lg:grid-cols-[1fr_1fr_1fr] lg:gap-0 lg:px-0 lg:py-0"
          >
            <div className="flex items-center lg:border-r lg:border-black/[0.07] lg:px-4">
              <p className="font-['Space_Grotesk'] text-[clamp(32px,4vw,42px)] font-bold leading-none tracking-[-.065em]">
                {item.time}
              </p>
            </div>

            <div className="flex items-center py-2 lg:border-r lg:border-black/[0.07] lg:px-4 lg:py-0">
              <h2 className="font-['Space_Grotesk'] text-[21px] font-bold tracking-[-.04em] sm:text-[23px]">
                {item.title}
              </h2>
            </div>

            <div className="flex items-center py-1 lg:px-4 lg:py-0">
              <p className="text-[13px] leading-[1.6] text-black/70">
                {item.description}
              </p>
            </div>
          </div>
        ))}

        {/* Bottom grid space */}
        <div className="hidden min-h-[70px] border-r border-black/[0.07] lg:block" />
        <div className="hidden border-r border-black/[0.07] lg:block" />
        <div className="hidden border-r border-black/[0.07] lg:block" />

      </section>
    </main>
  );
}



function VenuePage() {
  const details = [
    {
      icon: "⌖",
      title: "The venue, Mumbai",
      description: "Bandra West, Mumbai, Maharashtra",
    },
    {
      icon: "▤",
      title: "Bandra station, 10 min drive",
      description: "Local trains and auto-rickshaws nearby",
    },
    {
      icon: "♿",
      title: "Accessibility",
      description: "Contact the venue to confirm step-free access",
    },
    {
      icon: "▣",
      title: "Parking",
      description: "Check nearby public parking before arrival",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f4f1e9] text-[#171715]">
      <section className="grid grid-cols-1 border-l border-t border-black/[0.07] sm:grid-cols-2 lg:grid-cols-3">

        {/* Header: exact grid alignment */}
        <div className="min-h-[180px] border-r border-b border-black/[0.07] px-4 pt-[72px] sm:px-6 lg:min-h-[242px] lg:px-8">
          <p className="text-[9px] font-bold uppercase tracking-[.1em]">
            <span className="mr-2 inline-block h-[7px] w-3 bg-black" />
            [IN / GETTING THERE]
          </p>
        </div>

        <div className="min-h-[180px] border-r border-b border-black/[0.07] px-4 pt-8 sm:px-5 lg:min-h-[242px] lg:px-4 lg:pt-[61px]">
          <h1 className="font-['Space_Grotesk'] text-[clamp(48px,6.3vw,74px)] font-bold leading-[.91] tracking-[-.08em]">
            14 Kingland
            <br />
            Road, Mumbai
          </h1>
        </div>

        <div className="hidden border-r border-b border-black/[0.07] lg:block" />

        {/* Image spans first two columns, with only 32px inset */}
        <div className="border-r border-b border-black/[0.07] p-4 sm:col-span-2 sm:p-6 lg:col-span-2 lg:p-0 lg:pl-8 lg:pr-0 lg:pb-16">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=90"
              alt="Live music venue"
              className="aspect-[1.5] w-full object-cover grayscale"
            />

            <span className="absolute left-5 top-5 bg-[#f4f1e9] px-3 py-2 text-[8px] font-bold uppercase tracking-[.08em]">
              VENUE · MUMBAI
            </span>
          </div>
        </div>

        {/* Right column details */}
        <div className="border-r border-b border-black/[0.07] lg:pt-0">
          {details.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[65px] items-start gap-3 border-b border-black/[0.1] px-4 py-4 sm:px-5 lg:px-3"
            >
              <span className="w-4 shrink-0 text-center text-sm">
                {item.icon}
              </span>

              <div>
                <h2 className="text-[12px] font-bold leading-[1.4]">
                  {item.title}
                </h2>
                <p className="mt-1 text-[10px] leading-[1.5] text-black/60">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          <a
            href="https://www.google.com/maps/search/?api=1&query=live+music+venue+Bandra+Mumbai"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-5 text-[11px] font-bold hover:text-black/55 lg:px-3"
          >
            Open in maps <span>→</span>
          </a>
        </div>

        {/* Bottom grid lines */}
        <div className="hidden min-h-[65px] border-r border-black/[0.07] lg:block" />
        <div className="hidden border-r border-black/[0.07] lg:block" />
        <div className="hidden border-r border-black/[0.07] lg:block" />

      </section>
    </main>
  );
}


function BeforeYouGoPage() {
  const faqs = [
    {
      icon: "ⓘ",
      title: "18 and over",
      description: "Photo ID checked at the door.",
    },
    {
      icon: "↻",
      title: "Refunds up to 48 hours before",
      description: "After that, resell to the waitlist at face value.",
    },
    {
      icon: "⇧",
      title: "Doors close 21:00",
      description: "Latecomers wait for the interval.",
    },
    {
      icon: "♩",
      title: "Quiet during sets",
      description: "The bar pauses service while the band plays.",
    },
  ];

  return (
    <main className="min-h-[280px] bg-[#f4f1e9] text-[#171715]">
      <section className="grid grid-cols-1 border-l border-t border-black/[0.07] sm:grid-cols-2 lg:grid-cols-3">

        {/* Left column */}
        <div className="min-h-[220px] border-r border-b border-black/[0.07] px-4 pt-6 sm:px-6 lg:min-h-[280px] lg:px-8">
          <p className="text-[9px] font-bold uppercase tracking-[.1em]">
            <span className="mr-2 inline-block h-[7px] w-3 bg-black" />
            [IN / GOOD TO KNOW]
          </p>

          <h1 className="mt-4 font-['Space_Grotesk'] text-[clamp(38px,4.5vw,48px)] font-bold leading-[.91] tracking-[-.07em]">
            Before
            <br />
            you go
          </h1>
        </div>

        {/* Center column */}
        <div className="grid grid-cols-1 border-r border-black/[0.07] sm:grid-cols-2 lg:col-span-2">
          {faqs.map((faq, index) => (
            <article
              key={faq.title}
              className={`min-h-[120px] border-b border-black/[0.07] px-4 py-6 sm:px-5 lg:min-h-[140px] lg:px-3 ${
                index % 2 === 0 ? "sm:border-r sm:border-black/[0.07]" : ""
              }`}
            >
              <span className="mb-2 block text-[18px] leading-none text-black/75">
                {faq.icon}
              </span>

              <h2 className="text-[15px] font-bold leading-[1.3] tracking-[-.025em]">
                {faq.title}
              </h2>

              <p className="mt-2 text-[11px] leading-[1.5] text-black/60">
                {faq.description}
              </p>
            </article>
          ))}
        </div>

      </section>
    </main>
  );
}



function MoreNightsPage() {
  const events = [
    {
      day: "SUN 16",
      venue: "LANTERN ROOM LIVE · 18:00",
      title: "Soul Sundays with the Ferncliff Band",
      price: "₹1,350",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85",
    },
    {
      day: "THU 13",
      venue: "THE BASEMENT COMEDY · 20:30",
      title: "Late Laughs: new material night",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=1000&q=85",
    },
    {
      day: "THU 13",
      venue: "UNIT 9 · 22:00",
      title: "Warehouse Sessions with Selah K",
      price: "₹1,499",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1000&q=85",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f1e9] text-[#171715]">
      <section className="border-l border-t border-black/[0.07]">

        {/* Host strip */}
        <div className="grid grid-cols-1 border-b border-black/[0.09] sm:grid-cols-3">
          <div className="flex items-center gap-4 px-4 py-5 sm:col-span-2 sm:px-6 lg:px-3">
            <img
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=120&q=80"
              alt="Lantern Room Live"
              className="h-12 w-12 shrink-0 object-cover"
            />

            <div>
              <p className="text-[8px] font-bold uppercase tracking-[.12em] text-black/50">
                PRESENTED BY
              </p>
              <h2 className="mt-0.5 font-['Space_Grotesk'] text-[23px] font-bold leading-none tracking-[-.045em]">
                Lantern Room Live
              </h2>
              <p className="mt-1 text-[11px] leading-[1.5] text-black/65">
                Live jazz and soul in Mumbai. Discover independent artists
                and intimate live shows.
              </p>
            </div>
          </div>

          <div className="flex items-center border-t border-black/[0.07] px-4 py-4 sm:justify-end sm:border-l sm:border-t-0 sm:px-6 lg:px-4">
            <button className="bg-[#171715] px-4 py-2.5 text-[10px] font-bold text-white transition-colors hover:bg-black/75">
              Follow Lantern Room
            </button>
          </div>
        </div>

        {/* Section heading */}
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="px-4 pt-12 sm:px-6 lg:px-3 lg:pt-[78px]">
            <p className="text-[9px] font-bold uppercase tracking-[.1em]">
              <span className="mr-2 inline-block h-[7px] w-3 bg-black" />
              [IN / ALSO THIS WEEK]
            </p>
          </div>

          <div className="px-4 pb-8 pt-10 sm:px-5 lg:px-3 lg:pt-[66px]">
            <h1 className="font-['Space_Grotesk'] text-[clamp(48px,6.5vw,74px)] font-bold leading-[.87] tracking-[-.08em]">
              More nights
              <br />
              like this
            </h1>
          </div>

          <div className="flex items-end px-4 pb-9 sm:px-5 lg:px-3 lg:pb-[68px]">
            <a
              href="#all-shows"
              className="flex items-center gap-2 text-[11px] font-bold hover:opacity-60"
            >
              All 12 shows <span>→</span>
            </a>
          </div>
        </div>

        {/* Event cards */}
        <div
          id="all-shows"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {events.map((event) => (
            <article
              key={event.title}
              className="border-r border-t border-black/[0.09]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="aspect-[1.15] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />

                <span className="absolute left-4 top-4 bg-[#f4f1e9] px-2 py-1.5 text-[8px] font-bold uppercase tracking-[.08em]">
                  {event.day}
                </span>
              </div>

              <div className="min-h-[170px] px-4 py-4 lg:min-h-[180px] lg:px-3">
                <p className="text-[8px] font-bold uppercase tracking-[.1em] text-black/55">
                  {event.venue}
                </p>

                <h2 className="mt-2 max-w-[370px] font-['Space_Grotesk'] text-[clamp(22px,2.5vw,27px)] font-bold leading-[.98] tracking-[-.05em]">
                  {event.title}
                </h2>

                <p className="mt-3 text-[12px] font-medium">
                  {event.price}
                </p>
              </div>
            </article>
          ))}
        </div>

      </section>
    </main>
  );
}


function HitherFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [plainView, setPlainView] = useState(false);

  const linkGroups = [
    {
      label: "EXPLORE",
      links: ["Tonight", "This weekend", "Discover", "Free events", "Gift a ticket"],
    },
    {
      label: "HOST",
      links: ["Host an event", "Pricing", "Door app", "Payouts"],
    },
    {
      label: "HITHER",
      links: ["About", "Careers", "Press", "Help centre"],
    },
    {
      label: "FOLLOW",
      links: ["Instagram ↗", "TikTok ↗", "The Thursday playlist ↗"],
    },
  ];

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  }

  return (
    <footer
      className={`overflow-hidden border-l border-t border-black/10 text-[#171715] ${
        plainView ? "bg-[#f4f1e9]" : "bg-[#d7ff3f]"
      }`}
    >
      {/* Newsletter section */}
      <section className="grid grid-cols-1 border-b border-black/10 sm:grid-cols-3">
        <div className="flex min-h-[180px] flex-col justify-between border-r border-black/10 px-5 py-8 sm:min-h-[320px] sm:px-6 lg:px-9">
          <p className="text-[9px] font-bold uppercase tracking-[.1em]">
            <span className="mr-2 inline-block h-[7px] w-3 bg-black" />
            [IN / THE THURSDAY LIST]
          </p>

          <div className="mt-10">
            <p className="text-[8px] font-medium uppercase tracking-[.1em]">
              INDIA · NOW
            </p>
            <p className="font-['Space_Grotesk'] text-[32px] font-bold leading-none tracking-[-.06em]">
              18:40
            </p>
            <p className="mt-1 text-[8px] uppercase tracking-[.08em]">
              THU 13 NOV · CITY EVENTS
            </p>
            <p className="mt-1 text-[9px]">
              Good nights start here.
            </p>
          </div>
        </div>

        <div className="border-r border-black/10 px-5 py-8 sm:col-span-2 sm:px-6 lg:px-3">
          <h2 className="font-['Space_Grotesk'] text-[clamp(42px,6.2vw,68px)] font-bold leading-[.88] tracking-[-.08em]">
            Six picks.
            <br />
            Every Thursday.
          </h2>

          <p className="mt-5 max-w-[350px] text-[11px] leading-[1.6]">
            Tonight’s best, picked by people who go out. One email at 08:00,
            nothing else, and you can stop it in one tap.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="mt-7 flex max-w-[560px] flex-col gap-3 sm:flex-row sm:items-end"
          >
            <label className="flex min-w-0 flex-1 items-center gap-2 border-b border-black/70 pb-2">
              <span className="text-sm">✉</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full min-w-0 bg-transparent text-[11px] outline-none placeholder:text-black/65"
              />
            </label>

            <button
              type="submit"
              className="flex shrink-0 items-center justify-between gap-4 bg-[#171715] px-4 py-3 text-[10px] font-bold text-white transition-opacity hover:opacity-75"
            >
              {subscribed ? "You're on the list!" : "Send me the list"}
              <span>→</span>
            </button>
          </form>

          <p className="mt-3 text-[8px] font-medium uppercase tracking-[.08em] text-black/65">
            {subscribed
              ? "Thanks for signing up."
              : "NO SPAM · WE NEVER SHARE YOUR EMAIL"}
          </p>
        </div>
      </section>

      {/* Footer navigation */}
      <section className="grid grid-cols-2 border-b border-black/10 sm:grid-cols-3">
        <div className="border-r border-black/10 px-5 py-7 sm:px-6 lg:px-9">
          <p className="mb-5 text-[8px] font-bold uppercase tracking-[.12em] text-black/55">
            EXPLORE
          </p>
          <div className="flex flex-col items-start gap-2.5">
            {linkGroups[0].links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[12px] font-medium hover:underline"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 border-r border-black/10">
          {linkGroups.slice(1, 3).map((group) => (
            <div
              key={group.label}
              className="border-r border-black/10 px-4 py-7 last:border-r-0 sm:px-5 lg:px-4"
            >
              <p className="mb-5 text-[8px] font-bold uppercase tracking-[.12em] text-black/55">
                {group.label}
              </p>
              <div className="flex flex-col items-start gap-2.5">
                {group.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[12px] font-medium hover:underline"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-r border-black/10 px-5 py-7 sm:col-span-1 sm:px-5 lg:px-4">
          <p className="mb-5 text-[8px] font-bold uppercase tracking-[.12em] text-black/55">
            FOLLOW
          </p>
          <div className="flex flex-col items-start gap-2.5">
            {linkGroups[3].links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[12px] font-medium hover:underline"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Legal row */}
      <section className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 px-5 py-4 sm:px-6 lg:px-9">
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-[8px] font-bold uppercase tracking-[.08em]">
          <span>© 2026 HITHER LTD</span>
          <span>MADE IN INDIA</span>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Cookies</a>
          <a href="#" className="hover:underline">Accessibility</a>
        </div>

        <div className="flex items-center gap-4 text-[8px] font-bold uppercase tracking-[.08em]">
          <button
            onClick={() => setPlainView((v) => !v)}
            className="flex items-center gap-2"
          >
            <span
              className={`flex h-4 w-7 items-center rounded-full p-0.5 transition-colors ${
                plainView ? "bg-black" : "bg-black/25"
              }`}
            >
              <span
                className={`h-3 w-3 rounded-full bg-white transition-transform ${
                  plainView ? "translate-x-3" : ""
                }`}
              />
            </span>
            Plain view
          </button>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:underline"
          >
            Back to top ↑
          </button>
        </div>
      </section>

      {/* Oversized brand */}
      <div className="overflow-hidden px-3 pt-3 sm:px-5">
        <a
          href="/"
          className="block whitespace-nowrap font-['Space_Grotesk'] text-[27vw] font-bold leading-[.73] tracking-[-.105em]"
        >
          Hither.
        </a>
      </div>
    </footer>
  );
}



export default function Home() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 45,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.from(".hero-info > *", {
        y: 20,
        opacity: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: "power2.out",
        delay: 0.25,
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
        <main
      ref={pageRef}
      className="relative min-h-screen overflow-hidden bg-[#171819] font-['DM_Sans'] text-white"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=2200&q=90"
          alt="Live jazz saxophone performance"
          className="h-full min-h-screen w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#171819]/35 via-[#171819]/15 to-[#171819]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111212]/80 via-transparent to-[#111212]/35" />
      </div>

      {/* Navigation */}
      <header className="relative z-20 grid h-[56px] grid-cols-2 border-b border-white/10 bg-[#171819]/35 backdrop-blur-[3px] lg:grid-cols-[1fr_1.45fr_1fr]">
        <Link
          to="/"
          className="flex items-center border-r border-white/10 px-5 font-['Space_Grotesk'] text-[17px] font-bold tracking-[-1px] sm:px-8"
        >
          Hither<span className="text-[#d7ff3f]">.</span>
        </Link>

        <nav className="hidden items-center justify-center gap-5 border-r border-white/10 text-[11px] text-white/75 lg:flex">
          <a href="#tonight" className="transition-colors hover:text-[#d7ff3f]">Tonight</a>
          <a href="#weekend" className="transition-colors hover:text-[#d7ff3f]">This weekend</a>
          <a href="#discover" className="transition-colors hover:text-[#d7ff3f]">Discover</a>
          <a href="#organizers" className="transition-colors hover:text-[#d7ff3f]">Organizers</a>
        </nav>

        <div className="flex items-center justify-end gap-4 px-4 text-[10px] text-white/80 sm:px-7">
          <button className="hidden items-center gap-1 sm:flex">
            Mumbai <FiChevronDown size={12} />
          </button>
          <button aria-label="Search events" className="hover:text-[#d7ff3f]">
            <FiSearch size={16} />
          </button>
          <a href="#host" className="hidden whitespace-nowrap sm:block">Host an event</a>
          <a href="#tickets" className="flex items-center gap-1 whitespace-nowrap">
            Passes
          </a>
          <div className="hidden h-7 w-7 overflow-hidden rounded-full border border-white/30 sm:block">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
              alt="Profile"
            />
          </div>
        </div>
      </header>

      {/* Main hero layout */}
      <section
        id="tonight"
        className="relative z-10 grid min-h-[calc(100vh-56px)] grid-cols-1 lg:grid-cols-[2fr_1fr]"
      >
        {/* Left: event title */}
        <div className="relative flex min-h-[490px] flex-col justify-between border-b border-white/15 px-5 pb-9 pt-10 sm:px-8 lg:min-h-[calc(100vh-56px)] lg:border-b-0 lg:border-r lg:px-[4.2vw] lg:pb-12 lg:pt-11">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 text-[9px] font-medium uppercase tracking-[.13em] text-white/85 sm:text-[10px]">
              <span className="h-2 w-3 bg-[#d7ff3f]" />
              <span>IN / TONIGHT</span>
              <span className="text-white/35">·</span>
              <span>JAZZ</span>
              <span className="text-white/35">·</span>
              <span>LIVE MUSIC</span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-1.5 lg:mt-0">
            <span className="bg-[#d7ff3f] px-3 py-1.5 text-[10px] font-bold text-black">
              9 LEFT
            </span>
            <span className="bg-white px-3 py-1.5 text-[10px] font-bold text-black">
              18+
            </span>
          </div>

          <div className="hero-title mt-auto pt-16 lg:pt-0">
            <div className="mb-4 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.15em] text-white/65 lg:hidden">
              <FiMapPin size={12} /> Mumbai, India
            </div>

            <h1 className="max-w-[950px] font-['Space_Grotesk'] text-[clamp(53px,9.3vw,130px)] font-bold leading-[.79] tracking-[-.085em]">
              Amara Okafor
              <br />
              Quartet
            </h1>
          </div>
        </div>

        {/* Right: ticket and event information */}
        <aside className="hero-info relative flex flex-col bg-[#171819]/55 backdrop-blur-[2px] lg:min-h-[calc(100vh-56px)]">
          <div className="flex flex-1 flex-col justify-center px-5 py-9 sm:px-8 lg:justify-start lg:px-6 lg:pb-8 lg:pt-[46px] xl:px-[3vw]">
            <p className="max-w-[390px] text-[13px] leading-[1.65] text-white/80 sm:text-[14px]">
              Soulful jazz from Mumbai’s live music scene, playing a special
              set with warm vocals, deep grooves and a sound made for the night.
            </p>

            <a
              id="tickets"
              href="#event-details"
              className="mt-9 flex w-full max-w-[360px] items-center justify-between gap-3 bg-[#d7ff3f] px-4 py-3.5 text-[12px] font-bold text-[#171819] transition-colors hover:bg-white sm:px-5"
            >
              <span>Get tickets</span>
              <FiArrowRight size={16} />
              <span>₹1,499</span>
            </a>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "photo-1534528741775-53994a69daeb",
                  "photo-1500648767791-00dcc994a43e",
                  "photo-1506794778202-cad84cf45f1d",
                ].map((photo) => (
                  <div
                    key={photo}
                    className="h-6 w-6 overflow-hidden rounded-full border border-[#171819]"
                  >
                    <img
                      src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=60&q=80`}
                      alt="Event attendee"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[9px] text-white/70">
                Priya, Aman and 129 others are going
              </p>
            </div>
          </div>

          {/* Details panel */}
          <div id="event-details" className="border-t border-white/15">
            <div className="grid grid-cols-[48px_1fr] gap-3 border-b border-white/10 px-5 py-5 sm:px-8 lg:px-6 xl:px-[3vw]">
              <span className="pt-1 text-[8px] font-medium uppercase tracking-[.12em] text-white/40">
                WHEN
              </span>
              <div>
                <p className="text-[12px] font-medium">Sat, 25 Oct, 19:30</p>
                <p className="mt-1 text-[10px] text-white/55">
                  Doors 18:30 · Ends 22:00
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[48px_1fr] gap-3 border-b border-white/10 px-5 py-5 sm:px-8 lg:px-6 xl:px-[3vw]">
              <span className="pt-1 text-[8px] font-medium uppercase tracking-[.12em] text-white/40">
                WHERE
              </span>
              <div>
                <p className="text-[12px] font-medium">The Listening Room</p>
                <p className="mt-1 text-[10px] leading-[1.6] text-white/55">
                  Bandra West, Mumbai, Maharashtra
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=live+music+venue+Bandra+West+Mumbai"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[9px] text-[#d7ff3f]"
                >
                  View location <FiArrowUpRight size={11} />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-[48px_1fr] gap-3 border-b border-white/10 px-5 py-5 sm:px-8 lg:px-6 xl:px-[3vw]">
              <span className="pt-1 text-[8px] font-medium uppercase tracking-[.12em] text-white/40">
                PRICE
              </span>
              <div>
                <p className="text-[12px] font-medium">From ₹599</p>
                <p className="mt-1 text-[10px] text-white/55">
                  Booking fees may apply
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[48px_1fr] gap-3 px-5 py-5 sm:px-8 lg:px-6 xl:px-[3vw]">
              <span className="pt-1 text-[8px] font-medium uppercase tracking-[.12em] text-white/40">
                HOST
              </span>
              <div>
                <p className="text-[12px] font-medium">Hither Live</p>
                <p className="mt-1 text-[10px] text-white/55">
                  Live music · Mumbai
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* Bottom location strip */}
      <div className="relative z-10 flex items-center justify-between gap-3 border-t border-white/10 bg-[#171819] px-5 py-3 text-[8px] tracking-[.08em] text-white/45 sm:px-8 lg:px-[4.2vw]">
        <span className="flex items-center gap-2"><FiMapPin size={11} /> MUMBAI, INDIA</span>
        <span className="hidden sm:block">GOOD MUSIC. GOOD PEOPLE.</span>
        <a href="#tickets" className="flex items-center gap-1 text-white/80 hover:text-[#d7ff3f]">
          BOOK YOUR PASS <FiArrowRight size={12} />
        </a>
      </div>

    </main>
    <Tickets />
    <AboutNightPage />
    <LineupPage />
    <RunningOrderPage />
    <VenuePage />
    <BeforeYouGoPage />
    <MoreNightsPage />
    <HitherFooter />
    </div>
    
    
  );
}
