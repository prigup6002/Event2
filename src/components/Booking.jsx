import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock3,
  LockKeyhole,
  MapPin,
  Minus,
  Plus,
  ShieldCheck,
  Ticket,
  Users,
  X,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const events = {
  "1": {
    id: "1",
    title: "AFTER HOURS",
    subtitle: "A night beyond ordinary.",
    category: "MUSIC / NIGHTLIFE",
    date: "SAT, 14 NOV 2026",
    time: "7:00 PM onwards",
    location: "Kanpur, India",
    venue: "The Underground",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1400&q=90",
    accent: "#b6ff00",
    availability: "Limited tickets available",
  },
  "2": {
    id: "2",
    title: "THE FREQUENCY",
    subtitle: "Feel every beat.",
    category: "LIVE MUSIC",
    date: "SUN, 22 NOV 2026",
    time: "6:00 PM onwards",
    location: "Kanpur, India",
    venue: "The Main Stage",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=90",
    accent: "#9225ff",
    availability: "Tickets selling fast",
  },
  "3": {
    id: "3",
    title: "SUNDAY SOCIAL",
    subtitle: "Good people. Better plans.",
    category: "COMMUNITY / SOCIAL",
    date: "SUN, 29 NOV 2026",
    time: "4:00 PM onwards",
    location: "Kanpur, India",
    venue: "The Social House",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1400&q=90",
    accent: "#b6ff00",
    availability: "A few spots left",
  },
};

const money = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

export default function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pageRef = useRef(null);

  const event = events[id] || events["1"];

  const [quantity, setQuantity] = useState(1);
  const [attendee, setAttendee] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [error, setError] = useState("");

  const subtotal = event.price * quantity;
  const bookingFee = Math.round(subtotal * 0.02);
  const total = subtotal + bookingFee;

  const formattedTotal = useMemo(() => money(total), [total]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".booking-reveal", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.09,
        ease: "power3.out",
        clearProps: "all",
      });

      gsap.from(".booking-image", {
        scale: 1.08,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.utils.toArray(".booking-scroll-reveal").forEach((element) => {
        gsap.from(element, {
          y: 24,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, [confirmed]);

  const updateAttendee = (field, value) => {
    setAttendee((previous) => ({
      ...previous,
      [field]: value,
    }));
    setError("");
  };

  const handleBooking = (e) => {
    e.preventDefault();

    if (!attendee.name.trim() || !attendee.email.trim() || !attendee.phone.trim()) {
      setError("Please complete all attendee details.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(attendee.email)) {
      setError("Enter a valid email address.");
      return;
    }

    if (!/^[0-9+\-\s()]{10,15}$/.test(attendee.phone.trim())) {
      setError("Enter a valid phone number.");
      return;
    }

    if (!agreed) {
      setError("Please accept the booking terms to continue.");
      return;
    }

    const newBookingId = `MDNT-${Date.now().toString().slice(-8)}`;

    const booking = {
      bookingId: newBookingId,
      eventId: event.id,
      eventTitle: event.title,
      quantity,
      attendee,
      subtotal,
      bookingFee,
      total,
      status: "DEMO - NOT PAID",
      createdAt: new Date().toISOString(),
    };

    try {
      const existingBookings = JSON.parse(
        localStorage.getItem("mdntBookings") || "[]"
      );

      localStorage.setItem(
        "mdntBookings",
        JSON.stringify([...existingBookings, booking])
      );
    } catch {
      setError("Unable to save your demo booking in this browser.");
      return;
    }

    setBookingId(newBookingId);
    setConfirmed(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (confirmed) {
    return (
      <main
        className="min-h-screen bg-[#090909] px-5 py-8 text-white sm:px-8 lg:px-12"
        style={{ "--lime": "#b6ff00" }}
      >
        <nav className="flex items-center justify-between border-b border-white/10 pb-6">
          <Link to="/events" className="text-2xl font-black tracking-tight">
            MDNT<span className="text-[#b6ff00]">.</span>
          </Link>
          <span className="text-[10px] uppercase tracking-[0.24em] text-white/40">
            Booking preview
          </span>
        </nav>

        <section className="mx-auto flex min-h-[75vh] max-w-2xl items-center justify-center py-14">
          <div className="booking-reveal w-full border border-white/10 bg-[#101010] p-6 sm:p-10">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#b6ff00] text-black">
              <Check size={30} strokeWidth={2.5} />
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#b6ff00]">
              Demo booking created
            </p>

            <h1 className="text-4xl font-black leading-none tracking-tight sm:text-6xl">
              YOU'RE ON
              <br />
              THE LIST<span className="text-[#b6ff00]">.</span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/55">
              Your booking details have been saved in this browser. This is a
              frontend demo only — your ticket is not paid for or confirmed for
              entry.
            </p>

            <div className="my-8 border border-white/10 p-5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-widest text-white/40">
                  Reference
                </span>
                <span className="text-sm font-bold text-[#b6ff00]">
                  {bookingId}
                </span>
              </div>
              <div className="my-4 h-px bg-white/10" />
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-widest text-white/40">
                  Event
                </span>
                <span className="text-right text-sm font-bold">
                  {event.title}
                </span>
              </div>
              <div className="my-4 h-px bg-white/10" />
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-widest text-white/40">
                  Tickets
                </span>
                <span className="text-sm font-bold">{quantity}</span>
              </div>
              <div className="my-4 h-px bg-white/10" />
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-widest text-white/40">
                  Demo total
                </span>
                <span className="text-xl font-black">{formattedTotal}</span>
              </div>
            </div>

            <div className="mb-7 flex gap-3 border border-[#b6ff00]/20 bg-[#b6ff00]/5 p-4 text-xs leading-6 text-white/65">
              <ShieldCheck className="mt-1 shrink-0 text-[#b6ff00]" size={18} />
              No payment has been collected. A backend and payment verification
              flow are needed for real ticket purchases.
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => navigate("/events")}
                className="flex flex-1 items-center justify-center gap-3 bg-[#b6ff00] px-6 py-4 text-xs font-black uppercase tracking-widest text-black transition hover:bg-white"
              >
                Explore events <ArrowRight size={16} />
              </button>
              <button
                onClick={() => {
                  setConfirmed(false);
                  setQuantity(1);
                  setAttendee({ name: "", email: "", phone: "" });
                  setAgreed(false);
                  setError("");
                }}
                className="border border-white/15 px-6 py-4 text-xs font-bold uppercase tracking-widest transition hover:border-white"
              >
                Book again
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-[#090909] text-white"
      style={{ "--lime": "#b6ff00", "--purple": "#9225ff" }}
    >
      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-8 lg:px-12">
        <Link
          to="/events"
          className="text-2xl font-black tracking-tight sm:text-3xl"
        >
          MDNT<span className="text-[#b6ff00]">.</span>
        </Link>

        <div className="hidden items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/55 sm:flex">
          <Link className="transition hover:text-[#b6ff00]" to="/events">
            Events
          </Link>
          <Link className="transition hover:text-[#b6ff00]" to="/contact">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/60">
          <LockKeyhole size={14} className="text-[#b6ff00]" />
          Secure checkout
        </div>
      </nav>

      {/* Heading */}
      <section className="px-5 pb-10 pt-9 sm:px-8 sm:pb-14 sm:pt-14 lg:px-12">
        <Link
          to={`/events/${event.id}`}
          className="booking-reveal mb-9 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 transition hover:text-[#b6ff00]"
        >
          <ArrowLeft size={14} /> Back to event
        </Link>

        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="booking-reveal mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#b6ff00]">
              YOUR NEXT GREAT NIGHT STARTS HERE
            </p>
            <h1 className="booking-reveal max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              MAKE IT
              <br />
              <span className="text-[#b6ff00]">HAPPEN.</span>
            </h1>
          </div>

          <div className="booking-reveal flex items-center gap-3 lg:pb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
              <Ticket size={17} className="text-[#b6ff00]" />
            </div>
            <div>
              <p className="text-xs font-bold">Your ticket, your moment.</p>
              <p className="mt-1 text-[10px] text-white/40">
                A few details and you're done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main checkout */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <form
          onSubmit={handleBooking}
          className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_370px] xl:grid-cols-[minmax(0,1fr)_420px] xl:gap-12"
        >
          {/* Left side */}
          <div className="min-w-0 space-y-7">
            {/* Event card */}
            <section className="booking-reveal overflow-hidden border border-white/10 bg-[#101010]">
              <div className="relative h-64 overflow-hidden sm:h-[360px]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="booking-image h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/5" />

                <div className="absolute left-5 top-5 flex items-center gap-2 bg-[#b6ff00] px-3 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-black sm:left-7 sm:top-7">
                  <span className="h-1.5 w-1.5 rounded-full bg-black" />
                  {event.category}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#b6ff00]">
                    THE EVENT
                  </p>
                  <h2 className="text-4xl font-black leading-[0.9] tracking-tight sm:text-6xl">
                    {event.title}
                    <span className="text-[#b6ff00]">.</span>
                  </h2>
                  <p className="mt-3 text-sm text-white/65">{event.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
                <div className="flex items-start gap-3 border-b border-white/10 p-5 sm:border-b-0 sm:border-r">
                  <Clock3 size={17} className="mt-0.5 shrink-0 text-[#b6ff00]" />
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">
                      Date & time
                    </p>
                    <p className="mt-2 text-xs font-bold">{event.date}</p>
                    <p className="mt-1 text-xs text-white/45">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-b border-white/10 p-5 sm:border-b-0 sm:border-r">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-[#b6ff00]" />
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">
                      Location
                    </p>
                    <p className="mt-2 text-xs font-bold">{event.venue}</p>
                    <p className="mt-1 text-xs text-white/45">{event.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-5">
                  <Ticket size={17} className="mt-0.5 shrink-0 text-[#b6ff00]" />
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">
                      Ticket price
                    </p>
                    <p className="mt-2 text-xl font-black">{money(event.price)}</p>
                    <p className="mt-1 text-xs text-white/45">Per person</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quantity */}
            <section className="booking-scroll-reveal border border-white/10 bg-[#101010] p-5 sm:p-7">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-[#b6ff00]">
                    STEP 01
                  </p>
                  <h3 className="text-2xl font-black tracking-tight sm:text-3xl">
                    PICK YOUR TICKETS
                  </h3>
                  <p className="mt-2 text-xs text-white/45">
                    Good nights are better shared.
                  </p>
                </div>
                <Ticket size={23} className="mt-1 text-white/40" />
              </div>

              <div className="flex flex-col gap-5 border border-white/10 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <div>
                  <p className="text-sm font-bold">General admission</p>
                  <p className="mt-1 text-xs text-white/40">
                    Standard entry · 1 person per ticket
                  </p>
                  <p className="mt-3 text-lg font-black text-[#b6ff00]">
                    {money(event.price)}
                    <span className="ml-1 text-[10px] font-normal text-white/40">
                      / ticket
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    aria-label="Remove one ticket"
                    disabled={quantity <= 1}
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="flex h-10 w-10 items-center justify-center border border-white/15 transition hover:border-[#b6ff00] hover:text-[#b6ff00] disabled:cursor-not-allowed disabled:opacity-25"
                  >
                    <Minus size={15} />
                  </button>

                  <span className="w-5 text-center text-lg font-black tabular-nums">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    aria-label="Add one ticket"
                    disabled={quantity >= 10}
                    onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                    className="flex h-10 w-10 items-center justify-center bg-[#b6ff00] text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-25"
                  >
                    <Plus size={15} />
                  </button>
                </div>
              </div>

              <p className="mt-3 text-[10px] text-white/35">
                Maximum 10 tickets per booking.
              </p>
            </section>

            {/* Attendee information */}
            <section className="booking-scroll-reveal border border-white/10 bg-[#101010] p-5 sm:p-7">
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-[#b6ff00]">
                    STEP 02
                  </p>
                  <h3 className="text-2xl font-black tracking-tight sm:text-3xl">
                    WHO'S COMING?
                  </h3>
                  <p className="mt-2 text-xs text-white/45">
                    We'll use these details for your booking.
                  </p>
                </div>
                <Users size={23} className="mt-1 text-white/40" />
              </div>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="attendee-name"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-white/60"
                  >
                    Full name
                  </label>
                  <input
                    id="attendee-name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    value={attendee.name}
                    onChange={(e) => updateAttendee("name", e.target.value)}
                    placeholder="Your full name"
                    className="w-full border border-white/10 bg-[#090909] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#b6ff00]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="attendee-email"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-white/60"
                  >
                    Email address
                  </label>
                  <input
                    id="attendee-email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={attendee.email}
                    onChange={(e) => updateAttendee("email", e.target.value)}
                    placeholder="you@example.com"
                    className="w-full border border-white/10 bg-[#090909] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#b6ff00]"
                  />
                  <p className="mt-2 text-[10px] text-white/35">
                    Booking updates would be sent to this email once a backend is connected.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="attendee-phone"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-white/60"
                  >
                    Phone number
                  </label>
                  <input
                    id="attendee-phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    maxLength={15}
                    value={attendee.phone}
                    onChange={(e) => updateAttendee("phone", e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full border border-white/10 bg-[#090909] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#b6ff00]"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Right side summary */}
          <aside className="booking-reveal lg:sticky lg:top-6">
            <div className="border border-white/10 bg-[#101010]">
              <div className="flex items-center justify-between border-b border-white/10 p-5 sm:p-6">
                <div>
                  <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.24em] text-[#b6ff00]">
                    ALMOST THERE
                  </p>
                  <h3 className="text-2xl font-black tracking-tight">
                    YOUR ORDER
                  </h3>
                </div>
                <div className="flex h-11 w-11 items-center justify-center border border-white/10">
                  <Ticket size={20} className="text-[#b6ff00]" />
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="mb-6 flex gap-4">
                  <div className="h-24 w-20 shrink-0 overflow-hidden bg-white/5">
                    <img
                      src={event.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 py-1">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#b6ff00]">
                      {event.category}
                    </p>
                    <h4 className="mt-2 text-lg font-black leading-tight">
                      {event.title}
                    </h4>
                    <p className="mt-2 text-[10px] leading-5 text-white/45">
                      {event.date}
                      <br />
                      {event.venue}, {event.location}
                    </p>
                  </div>
                </div>

                <div className="mb-5 flex items-center justify-between border-y border-dashed border-white/15 py-4">
                  <span className="text-xs text-white/55">Tickets</span>
                  <span className="text-xs font-bold">
                    {quantity} × {money(event.price)}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between gap-4 text-xs">
                    <span className="text-white/45">Subtotal</span>
                    <span className="font-bold tabular-nums">{money(subtotal)}</span>
                  </div>
                  <div className="flex justify-between gap-4 text-xs">
                    <span className="text-white/45">Booking fee (2%)</span>
                    <span className="font-bold tabular-nums">{money(bookingFee)}</span>
                  </div>
                </div>

                <div className="my-6 border-t border-white/10" />

                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                      Total amount
                    </p>
                    <p className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                      {formattedTotal}
                    </p>
                  </div>
                  <span className="pb-1 text-[10px] text-white/40">INR</span>
                </div>

                <div className="mt-6 border border-[#b6ff00]/20 bg-[#b6ff00]/5 p-4">
                  <div className="flex gap-3">
                    <ShieldCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-[#b6ff00]"
                    />
                    <div>
                      <p className="text-xs font-bold">No hidden surprises.</p>
                      <p className="mt-1 text-[10px] leading-5 text-white/45">
                        The displayed total includes the demo booking fee.
                      </p>
                    </div>
                  </div>
                </div>

                <label className="mt-6 flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => {
                      setAgreed(e.target.checked);
                      setError("");
                    }}
                    className="mt-1 h-4 w-4 shrink-0 accent-[#b6ff00]"
                  />
                  <span className="text-[10px] leading-5 text-white/55">
                    I agree to the booking terms and understand that this is a
                    demo booking, not a paid ticket purchase.
                  </span>
                </label>

                {error && (
                  <div
                    role="alert"
                    className="mt-5 flex items-start gap-2 border border-red-500/25 bg-red-500/5 p-3 text-xs leading-5 text-red-300"
                  >
                    <X size={15} className="mt-0.5 shrink-0" />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="group mt-6 flex w-full items-center justify-between gap-3 bg-[#b6ff00] px-5 py-5 text-left text-black transition duration-300 hover:bg-white"
                >
                  <span>
                    <span className="block text-sm font-black uppercase tracking-widest">
                      Confirm demo booking
                    </span>
                    <span className="mt-1 block text-[10px] text-black/60">
                      {formattedTotal} · No payment collected
                    </span>
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                <p className="mt-4 text-center text-[9px] leading-5 text-white/30">
                  Demo only. Real checkout requires server-side ticket
                  availability checks and verified payment processing.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 py-3 text-[10px] text-white/35">
              <CheckCircle2 size={14} className="text-[#b6ff00]" />
              Simple checkout · No account needed
            </div>
          </aside>
        </form>
      </section>

      {/* Bottom CTA */}
      <section className="booking-scroll-reveal border-t border-white/10 px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#b6ff00]">
              PLANS CHANGE. MEMORIES STAY.
            </p>
            <h2 className="max-w-2xl text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl">
              MAKE ROOM
              <br />
              FOR A GOOD NIGHT<span className="text-[#b6ff00]">.</span>
            </h2>
          </div>
          <Link
            to="/events"
            className="inline-flex items-center gap-3 self-start border border-white/20 px-5 py-4 text-xs font-bold uppercase tracking-widest transition hover:border-[#b6ff00] hover:text-[#b6ff00] sm:self-auto"
          >
            Explore more events <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-7 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/events" className="text-2xl font-black tracking-tight">
            MDNT<span className="text-[#b6ff00]">.</span>
          </Link>
          <p className="text-[10px] uppercase tracking-[0.16em] text-white/35">
            GOOD PEOPLE. GREAT PLANS. NO ORDINARY NIGHTS.
          </p>
          <div className="flex gap-5 text-[10px] font-bold uppercase tracking-widest text-white/45">
            <Link to="/events" className="hover:text-[#b6ff00]">
              Events
            </Link>
            <Link to="/contact" className="hover:text-[#b6ff00]">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5 text-[9px] text-white/25 sm:flex-row sm:justify-between">
          <span>© 2026 MDNT. ALL RIGHTS RESERVED.</span>
          <span>DEMO CHECKOUT · NO REAL PAYMENTS</span>
        </div>
      </footer>
    </main>
  );
}
