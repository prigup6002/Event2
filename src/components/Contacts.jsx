
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactDetails = [
  {
    icon: Mail,
    label: "DROP US A MAIL",
    value: "hello@mdnt.in",
    href: "mailto:hello@mdnt.in",
  },
  {
    icon: Phone,
    label: "GOT A QUICK QUESTION?",
    value: "Get in touch by email",
    href: "mailto:hello@mdnt.in",
  },
  {
    icon: MapPin,
    label: "OUR PLAYGROUND",
    value: "India · Everywhere",
    href: null,
  },
];

export default function Contact() {
  const pageRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "Event collaboration",
    message: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-hero-item", {
        y: 45,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.utils.toArray(".contact-animate").forEach((element) => {
        gsap.from(element, {
          y: 35,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      });

      gsap.to(".contact-marquee-track", {
        xPercent: -50,
        duration: 25,
        repeat: -1,
        ease: "none",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const subject = encodeURIComponent(`MDNT enquiry: ${form.topic}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nEnquiry: ${form.topic}\n\nMessage:\n${form.message}`
    );

    try {
      window.location.href =
        `mailto:hello@mdnt.in?subject=${subject}&body=${body}`;
    } catch {
      setError("Unable to open your email application. Please email us directly.");
    }
  };

  const fieldClass =
    "mt-3 w-full border-b border-white/20 bg-transparent px-0 py-4 text-base text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#b6ff00]";

  return (
    <main ref={pageRef} className="min-h-screen overflow-hidden bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-10 lg:px-16">
        <Link to="/" className="font-display text-3xl tracking-tight">
          MDNT<span className="text-[#b6ff00]">.</span>
        </Link>

        <div className="flex items-center gap-5 text-xs font-semibold sm:gap-8 sm:text-sm">
          <Link to="/" className="transition hover:text-[#b6ff00]">
            HOME
          </Link>
          <Link to="/events" className="transition hover:text-[#b6ff00]">
            EVENTS
          </Link>
          <span className="text-[#b6ff00]">CONTACT</span>
        </div>

        <Link
          to="/events"
          className="hidden items-center gap-2 rounded-sm bg-[#b6ff00] px-4 py-3 text-xs font-bold text-black transition hover:bg-white sm:flex"
        >
          FIND AN EVENT <ArrowUpRight size={15} />
        </Link>
      </nav>

      {/* Hero */}
      <section className="px-5 pb-20 pt-20 sm:px-10 sm:pb-28 sm:pt-28 lg:px-16 lg:pt-32">
        <div className="contact-hero-item mb-8 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-white/60 sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-[#b6ff00]" />
          THE CONVERSATION STARTS HERE
          <span className="text-[#9225ff]">✳</span>
        </div>

        <h1 className="max-w-7xl font-display text-[clamp(3.8rem,11vw,10.5rem)] uppercase leading-[0.84] tracking-tight">
          <span className="contact-hero-item block">GOT SOMETHING</span>
          <span className="contact-hero-item block text-[#b6ff00]">
            IN MIND?
          </span>
          <span className="contact-hero-item block">
            LET'S TALK<span className="text-[#9225ff]">.</span>
          </span>
        </h1>

        <div className="contact-hero-item mt-10 flex flex-col justify-between gap-7 border-t border-white/20 pt-6 sm:flex-row sm:items-end">
          <p className="max-w-lg text-base leading-7 text-white/60 sm:text-lg">
            From finding your next favourite event to creating something
            unforgettable together — we'd love to hear from you.
          </p>

          <a
            href="#contact-form"
            className="flex w-fit items-center gap-3 rounded-sm bg-[#b6ff00] px-5 py-4 text-sm font-bold text-black transition hover:bg-white"
          >
            SAY HELLO <ArrowDownRight size={19} />
          </a>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-white/15 py-5">
        <div className="contact-marquee-track flex w-max">
          {[0, 1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex shrink-0 items-center gap-6 pr-6 font-display text-3xl sm:text-5xl"
            >
              <span>GOOD THINGS START WITH A HELLO</span>
              <span className="text-[#b6ff00]">✳</span>
              <span>LET'S MAKE IT HAPPEN</span>
              <span className="text-[#9225ff]">✳</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact information and form */}
      <section
        id="contact-form"
        className="grid gap-14 px-5 py-20 sm:px-10 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-16"
      >
        <div>
          <p className="contact-animate mb-6 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[#b6ff00]">
            <span className="h-2 w-2 rounded-full bg-[#9225ff]" />
            GET IN TOUCH
          </p>

          <h2 className="contact-animate font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
            WE'RE ALL
            <br />
            <span className="text-[#b6ff00]">EARS.</span>
          </h2>

          <p className="contact-animate mt-6 max-w-md leading-7 text-white/55">
            Got a question about tickets? Want to host an event? Have a
            collaboration in mind? Pick a way to reach us and let's get
            something going.
          </p>

          <div className="mt-12">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="contact-animate border-t border-white/15 py-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 transition hover:border-[#b6ff00] hover:text-[#b6ff00]">
                      <Icon size={19} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold tracking-[0.18em] text-white/40">
                        {item.label}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-2 inline-block break-words text-base transition hover:text-[#b6ff00] sm:text-lg"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-2 text-base sm:text-lg">
                          {item.value}
                        </p>
                      )}
                    </div>

                    <span className="text-[#b6ff00]">0{index + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="contact-animate mt-8 flex items-center gap-3">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center border border-white/20 transition hover:border-[#b6ff00] hover:bg-[#b6ff00] hover:text-black"
            >
              <span className="text-sm font-semibold">IG</span>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center border border-white/20 transition hover:border-[#b6ff00] hover:bg-[#b6ff00] hover:text-black"
            >
              <span className="text-sm font-semibold">in</span>
            </a>

            <span className="ml-2 text-xs tracking-wider text-white/40">
              FOLLOW THE GOOD STUFF
            </span>
          </div>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="contact-animate border border-white/15 p-5 sm:p-8 lg:p-10"
        >
          <div className="mb-9 flex items-start justify-between gap-4">
            <div>
              <p className="mb-3 text-xs font-bold tracking-[0.18em] text-[#b6ff00]">
                SEND US A MESSAGE
              </p>
              <h3 className="font-display text-3xl uppercase sm:text-4xl">
                WHAT'S UP?
              </h3>
            </div>
            <span className="text-2xl text-[#9225ff]">✳</span>
          </div>

          <div className="space-y-7">
            <label className="block text-xs font-semibold tracking-widest text-white/60">
              YOUR NAME *
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={fieldClass}
                placeholder="What should we call you?"
                autoComplete="name"
                maxLength={100}
                required
              />
            </label>

            <label className="block text-xs font-semibold tracking-widest text-white/60">
              EMAIL ADDRESS *
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={fieldClass}
                placeholder="you@example.com"
                autoComplete="email"
                maxLength={254}
                required
              />
            </label>

            <label className="block text-xs font-semibold tracking-widest text-white/60">
              WHAT'S THIS ABOUT? *
              <select
                name="topic"
                value={form.topic}
                onChange={handleChange}
                className={`${fieldClass} cursor-pointer`}
                required
              >
                <option className="bg-black" value="Event collaboration">
                  Event collaboration
                </option>
                <option className="bg-black" value="Ticket enquiry">
                  Ticket enquiry
                </option>
                <option className="bg-black" value="Hosting an event">
                  Hosting an event
                </option>
                <option className="bg-black" value="Brand partnership">
                  Brand partnership
                </option>
                <option className="bg-black" value="General enquiry">
                  Something else
                </option>
              </select>
            </label>

            <label className="block text-xs font-semibold tracking-widest text-white/60">
              TELL US EVERYTHING *
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className={`${fieldClass} min-h-36 resize-y`}
                placeholder="Tell us what's on your mind..."
                rows={4}
                maxLength={3000}
                required
              />
            </label>
          </div>

          {error && (
            <p role="alert" className="mt-5 text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="group mt-9 flex w-full items-center justify-between gap-4 rounded-sm bg-[#b6ff00] px-5 py-5 text-sm font-bold text-black transition-colors hover:bg-white sm:px-6"
          >
            SEND THAT MESSAGE
            <ArrowUpRight
              size={21}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </button>

          <p className="mt-4 text-xs leading-5 text-white/35">
            This opens your email app with your message prepared. No form
            submission is stored on a server.
          </p>
        </form>
      </section>

      {/* Closing section */}
      <section className="contact-animate border-t border-white/15 px-5 py-20 text-center sm:px-10 sm:py-28">
        <p className="mb-5 text-xs font-bold tracking-[0.2em] text-white/45">
          WHILE YOU'RE HERE
        </p>

        <h2 className="font-display text-5xl uppercase leading-[0.9] sm:text-7xl lg:text-9xl">
          LIFE'S TOO SHORT
          <br />
          <span className="text-[#b6ff00]">TO STAY IN.</span>
        </h2>

        <Link
          to="/events"
          className="mt-9 inline-flex items-center gap-3 rounded-sm bg-white px-6 py-4 text-sm font-bold text-black transition hover:bg-[#b6ff00]"
        >
          EXPLORE EVENTS <ArrowUpRight size={18} />
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#b6ff00]/50 px-5 py-7 sm:px-10 lg:px-16">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <Link to="/" className="font-display text-4xl">
            MDNT<span className="text-[#b6ff00]">.</span>
          </Link>

          <div className="flex gap-6 text-xs font-semibold tracking-wider">
            <Link to="/" className="hover:text-[#b6ff00]">HOME</Link>
            <Link to="/events" className="hover:text-[#b6ff00]">EVENTS</Link>
            <Link to="/contact" className="text-[#b6ff00]">CONTACT</Link>
          </div>

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} MDNT EXPERIENCES
          </p>
        </div>
      </footer>
    </main>
  );
}
