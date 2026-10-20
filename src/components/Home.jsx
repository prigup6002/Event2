
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const AboutStatement = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".statement-icon", {
        opacity: 0,
        scale: 0.5,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".statement-heading span", {
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".statement-copy", {
        y: 18,
        opacity: 0,
        duration: 0.7,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="flex min-h-[580px] items-center justify-center bg-black px-5 py-24 text-center text-white sm:min-h-[620px] sm:px-10 lg:min-h-[683px] lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-[1450px] flex-col items-center">
        <div className="statement-icon mb-8 grid size-5 place-items-center">
          <span className="relative block size-[15px] rounded-full border-[3px] border-white">
            <span className="absolute left-1/2 top-1/2 size-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
          </span>
        </div>

        <h2 className="statement-heading event-display max-w-[1380px] text-[clamp(2rem,4.45vw,4.55rem)] font-black uppercase leading-[1.08] tracking-[-0.045em]">
          <span className="block">
            We bring people together through
          </span>
          <span className="block">
            <span className="text-white">unforgettable events that </span>
            <span className="text-[#c4ff00]">spark joy,</span>
          </span>
          <span className="block">
            <span className="text-[#c4ff00]">build connections, </span>
            <span className="text-white">and create</span>
          </span>
          <span className="block">
            <span className="text-white">lasting </span>
            <span className="text-[#c4ff00]">memories.</span>
          </span>
        </h2>

        <p className="statement-copy mt-7 max-w-[750px] text-[14px] leading-[1.65] text-white/85 sm:text-[16px]">
          From discovering new experiences to meeting people who share your
          interests, we make it easier to show up, connect, and be part of
          something memorable.
        </p>
      </div>
    </section>
  );
};

const EventServices = () => {
  const [activeImage, setActiveImage] = useState(null);

  const services = [
    {
      eyebrow: "FOR BRANDS",
      title: (
        <>
          IN-<span className="text-[#8b00ff]">REAL</span>-LIFE
          <br />
          (IRL)
          <br />
          BRANDED
          <br />
          <span className="text-[#8b00ff]">EXPERIENCES</span>
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=90",
      href: "#brand-events",
      darkButton: true,
    },
    {
      eyebrow: "FOR EVENTS",
      title: (
        <>
          EVENT
          <br />
          OPERATIONS
          <br />
          <span className="text-[#8b00ff]">YOU</span> CAN
          <br />
          <span className="text-[#8b00ff]">COUNT ON</span>
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=90",
      href: "#event-operations",
      darkButton: false,
    },
  ];

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-white px-6 py-20 text-black sm:px-10 lg:px-[11.45%] lg:py-0">
      {/* Fixed central image, revealed on hover */}
      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 z-[1] hidden h-[78svh] max-h-[760px] w-[min(41vw,680px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[4px] transition-all duration-500 ease-out md:block ${
          activeImage
            ? "scale-100 opacity-100"
            : "scale-[0.96] opacity-0"
        }`}
      >
        {services.map((service, index) => (
          <img
            key={service.image}
            src={service.image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              activeImage === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-[15%]">
        {services.map((service, index) => (
          <article
            key={service.href}
            onMouseEnter={() => setActiveImage(index)}
            onMouseLeave={() => setActiveImage(null)}
            className={`relative ${
              index === 1 ? "md:pl-0" : ""
            }`}
          >
            <div className="mb-8 flex items-center gap-4 overflow-hidden whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.05em]">
              <span className="text-[#8b00ff]">●</span>
              <span>{service.eyebrow}</span>
              <span className="text-[#8b00ff]">●</span>
              <span>{service.eyebrow}</span>
              <span className="text-[#8b00ff]">●</span>
            </div>

            <h2 className="event-display relative text-[clamp(2.8rem,5.25vw,5.3rem)] font-black uppercase leading-[0.86] tracking-[-0.045em]">
              {service.title}
            </h2>

            <a
              href={service.href}
              onFocus={() => setActiveImage(index)}
              onBlur={() => setActiveImage(null)}
              className={`mt-10 inline-flex h-[49px] items-center gap-3 rounded-[6px] border px-6 text-[14px] font-medium uppercase transition-colors duration-200 ${
                service.darkButton
                  ? "border-[#292929] bg-[#292929] text-white hover:bg-[#8b00ff] hover:border-[#8b00ff]"
                  : "border-[#dedede] bg-white text-black shadow-sm hover:bg-[#8b00ff] hover:text-white hover:border-[#8b00ff]"
              }`}
            >
              Learn more
              <span className="text-[#8b00ff]">●</span>
            </a>
          </article>
        ))}
      </div>

      {/* Mobile image preview */}
      {activeImage !== null && (
        <div className="pointer-events-none fixed inset-x-6 bottom-6 z-20 h-44 overflow-hidden rounded-md md:hidden">
          <img
            src={services[activeImage].image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      )}
    </section>
  );
};

const projects = [
  {
    title: "RED BULL JUKEBOX",
    category: "BRANDS",
    description:
      "Engaged over 500 consumers in person, providing a polished show-day experience.",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=2000&q=90",
  },
  {
    title: "LIVE MUSIC FESTIVAL",
    category: "LIVE EVENTS",
    description:
      "Bringing music, culture and communities together through unforgettable live experiences.",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=2000&q=90",
  },
  {
    title: "CULTURE IN MOTION",
    category: "EXPERIENTIAL",
    description:
      "Turning creative ideas into immersive moments that audiences remember long after the event.",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=2000&q=90",
  },
];

const FeaturedProjects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-heading > *", {
        y: 70,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top 85%",
        },
      });

      gsap.utils.toArray(".project-item").forEach((project) => {
        const image = project.querySelector(".project-image");
        const details = project.querySelector(".project-details");

        gsap.fromTo(
          image,
          {
            y: 100,
            opacity: 0,
            scale: 0.92,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 80%",
            },
          }
        );

        gsap.fromTo(
          details,
          {
            y: 45,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 72%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-20 lg:py-28"
    >
      {/* Section heading */}
      <div className="projects-heading flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <h2 className="max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.4rem]">
            From <span className="text-[#c6ff00]">pop-ups</span> to
            <br className="hidden sm:block" /> large-scale
            <br />
            <span className="text-[#c6ff00]">productions</span>.
          </h2>

          <p className="mt-6 text-sm text-white/85 sm:text-base">
            We turn ideas into moments that people actually talk about.
          </p>
        </div>

        <a
          href="#our-work"
          className="shrink-0 rounded-md border border-white/80 px-6 py-3 text-sm font-medium transition-colors duration-300 hover:bg-white hover:text-black"
        >
          VIEW OUR WORK
        </a>
      </div>

      {/* Project images */}
      <div id="our-work" className="mt-28 space-y-28 lg:mt-36 lg:space-y-36">
        {projects.map((project, index) => (
          <article key={project.title} className="project-item mx-auto max-w-5xl">
            <a
              href="#contact"
              className="group relative block overflow-hidden rounded-md"
            >
              <div className="project-image relative aspect-[1.55/1] overflow-hidden rounded-md bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading={index === 0 ? "eager" : "lazy"}
                />

                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/20" />

                <span className="absolute bottom-6 left-6 rounded-full bg-white px-5 py-2 text-xs font-semibold italic text-black">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#8b19ff]" />
                  {project.category}
                </span>

                <span className="absolute right-8 top-1/2 -translate-y-1/2 rotate-[-8deg] rounded-md bg-[#8b19ff] px-5 py-4 text-xs font-bold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-[-60%] group-hover:opacity-100 sm:px-7 sm:py-5 sm:text-sm">
                  VIEW PROJECT ↗
                </span>
              </div>
            </a>

            <div className="project-details mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-12">
              <h3 className="text-3xl font-extrabold leading-none tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                {project.title}
              </h3>

              <p className="max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const eventMoments = [
  {
    year: "2025",
    location: "Mumbai, India",
    title: "Live Music & Festival Culture",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=85",
  },
  {
    year: "2024",
    location: "Bengaluru, India",
    title: "Creative Community Meetups",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85",
  },
  {
    year: "2025",
    location: "Delhi, India",
    title: "Experiential Brand Events",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=85",
  },
  {
    year: "2024",
    location: "Pune, India",
    title: "Music, Art & Culture",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=85",
  },
  {
    year: "2025",
    location: "Jaipur, India",
    title: "People & Experiences",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=85",
  },
  {
    year: "2024",
    location: "Hyderabad, India",
    title: "The Afterparty",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=900&q=85",
  },
];

const EventMoments = () => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animation;
    let resizeObserver;

    const setupLoop = () => {
      animation?.kill();

      const halfWidth = track.scrollWidth / 2;
      if (!halfWidth) return;

      animation = gsap.to(track, {
        x: -halfWidth,
        duration: 42,
        ease: "none",
        repeat: -1,
      });

      animationRef.current = animation;
    };

    const images = [...track.querySelectorAll("img")];
    Promise.all(
      images.map(
        (img) =>
          img.complete
            ? Promise.resolve()
            : new Promise((resolve) => {
                img.addEventListener("load", resolve, { once: true });
                img.addEventListener("error", resolve, { once: true });
              })
      )
    ).then(setupLoop);

    resizeObserver = new ResizeObserver(setupLoop);
    resizeObserver.observe(track);

    return () => {
      animation?.kill();
      resizeObserver?.disconnect();
    };
  }, []);

  const repeatedMoments = [...eventMoments, ...eventMoments];

  return (
    <section className="w-full overflow-hidden bg-white py-24 text-black sm:py-28 lg:py-32">
      {/* Heading */}
      <div className="px-6 sm:px-10 lg:px-20">
        <div className="mb-5 flex items-center gap-3 overflow-hidden whitespace-nowrap text-xs font-medium uppercase tracking-wide">
          <span>Follow us</span>
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#8b19ff]" />
          <span>Follow us</span>
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#8b19ff]" />
          <span>Follow the moments</span>
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#8b19ff]" />
        </div>

        <h2 className="max-w-4xl text-5xl font-extrabold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[5.5rem]">
          Enter the world{" "}
          <span className="text-[#8b19ff]">we create</span> after dark.
        </h2>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-neutral-800 sm:text-lg">
          From live gigs and college festivals to creative pop-ups and
          unforgettable nights out, discover the people and moments shaping
          India's event scene.
        </p>
      </div>

      {/* Infinite moving image gallery */}
      <div className="mt-20 overflow-hidden sm:mt-28">
        <div
          ref={trackRef}
          className="flex w-max items-start"
          style={{ willChange: "transform" }}
        >
          {repeatedMoments.map((event, index) => (
            <a
              key={`${event.title}-${index}`}
              href="#events"
              className="group relative w-[76vw] shrink-0 border-r border-neutral-200 px-5 sm:w-[46vw] sm:px-7 lg:w-[27vw] lg:px-7"
            >
              <div className="mb-7 flex items-center justify-between text-sm">
                <span>{event.year}</span>
                <span className="text-neutral-700">{event.location}</span>
              </div>

              <div className="relative aspect-[0.78/1] overflow-hidden rounded-sm bg-neutral-100">
                <img
                  src={event.image}
                  alt={event.title}
                  loading={index < eventMoments.length ? "eager" : "lazy"}
                  draggable="false"
                  className="h-full w-full object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-6">
                  <p className="text-xs uppercase tracking-widest">
                    Discover the experience
                  </p>
                  <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                    {event.title}
                  </h3>
                </div>
              </div>

              <h3 className="mt-5 text-lg font-semibold sm:text-xl">
                {event.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

function TogetherFooter() {
  const sectionRef = useRef(null);
  const circleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite anticlockwise rotation
      gsap.to(circleRef.current, {
        rotation: -360,
        duration: 22,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      gsap.from(".footer-content", {
        y: 35,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const letters = "TOGETHER".split("");

  return (
    <footer
      ref={sectionRef}
      className="relative overflow-hidden bg-black text-white"
    >
      {/* Circular rotating text */}
      {/* Center CTA */}
<section className="relative min-h-[650px] overflow-hidden bg-black text-white">
  <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center justify-center px-5">
    {/* Rotating circular text */}
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <svg
        viewBox="0 0 600 600"
        className="h-[min(88vw,580px)] w-[min(88vw,580px)] overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <path
            id="footer-circle"
            d="M 300,300 m -225,0 a 225,225 0 1,1 450,0 a 225,225 0 1,1 -450,0"
          />
        </defs>

        <text
          fill="white"
          fontSize="49"
          fontWeight="800"
          letterSpacing="4"
        >
          <textPath
            href="#footer-circle"
            className="footer-orbit-text"
          >
            SOMETHING TOGETHER • SOMETHING TOGETHER •
          </textPath>
        </text>
      </svg>
    </div>

    {/* Center content */}
    <div className="relative z-10 -mt-3 max-w-[440px] text-center">
      <h2 className="font-display text-[clamp(1.5rem,3vw,2.6rem)] leading-[1.04] tracking-tight text-white">
        Tell us what you're
        <br />
        working on. We'll show
        <br />
        you what's possible.
      </h2>

      <a
        href="#contact"
        className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-md border border-white bg-white px-6 py-3 text-sm font-semibold text-black shadow-[0_2px_0_#aaa] transition-colors duration-200 hover:border-black hover:bg-black hover:text-white"
      >
        GET IN TOUCH
        <span className="text-[#922BFF]">●</span>
      </a>
    </div>
  </div>
</section>

      {/* Lime divider */}
      <div className="mx-5 border-t border-[#b8ff00] sm:mx-10" />

      {/* Footer information */}
      <section className="grid grid-cols-1 gap-12 px-5 py-14 sm:px-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="footer-content space-y-8 text-sm leading-6">
          <div>
            <p className="font-bold">ADDRESS:</p>
            <p className="mt-1">KANPUR, INDIA</p>
          </div>

          <div>
            <p className="font-bold">CONTACT:</p>
            <a
              href="mailto:hello@togro.in"
              className="mt-1 inline-block transition-colors hover:text-[#b8ff00]"
            >
              HELLO@TOGRO.IN
            </a>
          </div>
        </div>

        <nav className="footer-content grid grid-cols-2 gap-x-8 gap-y-6 text-sm font-bold">
          <a className="text-[#9228ff]" href="/">
            HOME
          </a>
          <a className="transition-colors hover:text-[#b8ff00]" href="#brands">
            FOR BRANDS
          </a>
          <a className="transition-colors hover:text-[#b8ff00]" href="#contact">
            WORK WITH US
          </a>
          <a className="transition-colors hover:text-[#b8ff00]" href="#events">
            FOR EVENTS
          </a>
          <a className="transition-colors hover:text-[#b8ff00]" href="#contact">
            GET IN TOUCH
          </a>
          <a className="transition-colors hover:text-[#b8ff00]" href="#community">
            OUR COMMUNITY
          </a>
        </nav>

        <div className="footer-content flex items-start justify-start lg:justify-end">
          <a
            href="#top"
            className="inline-flex items-center gap-2 border border-white/40 px-5 py-3 text-sm transition-colors hover:border-[#b8ff00] hover:text-[#b8ff00]"
          >
            BACK TO TOP <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <div className="px-5 pb-6 text-xs text-white/40 sm:px-10">
        © {new Date().getFullYear()} TOGRO. MADE FOR REAL-LIFE CONNECTIONS.
      </div>
    </footer>
  );
}


const Home = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".top-item", {
        y: -14,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: "power2.out",
      });

      gsap.from(".headline-line", {
        y: 35,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".bottom-content", {
        y: 18,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        delay: 0.55,
        ease: "power2.out",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const brands = [
    "COMMON GROUND",
    "Daily Social",
    "NIGHTLIGHT®",
    "AFTERHOURS",
    "CITY CULTURE",
  ];

  return (
    <div>
      <main
      ref={pageRef}
      id="home"
      className="relative min-h-[900px] h-[100svh] overflow-hidden bg-black text-white"
    >
      {/* Full-screen concert background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=2400&q=95"
          alt="Crowd at a live music event"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Match the reference image's pink-purple atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#49123e]/65 via-[#a3299b]/25 to-[#70217f]/45" />
      <div className="absolute inset-0 bg-fuchsia-500/15 mix-blend-color" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black" />

      {/* Header */}
      <header className="absolute left-0 right-0 top-0 z-20 flex h-[82px] items-center justify-between px-6 sm:px-10 lg:px-[5%]">
        <a
          href="#home"
          className="top-item text-[37px] font-black leading-none tracking-[-0.085em] sm:text-[42px]"
        >
          TGRO
        </a>

        <nav className="top-item absolute left-1/2 top-[9px] hidden h-[64px] -translate-x-1/2 items-center gap-7 rounded-[5px] bg-[#57465f]/65 px-6 backdrop-blur-md lg:flex xl:gap-8 xl:px-6">
          <Link to="/" className="whitespace-nowrap text-[14px] font-semibold uppercase">
            Home
          </Link>
          <Link to="/events" className="whitespace-nowrap text-[14px] font-semibold uppercase">
            Events
          </Link>
          <Link to="/contacts" className="whitespace-nowrap text-[14px] font-semibold uppercase">
            Contacts
          </Link>
          <Link to="/booking" className="whitespace-nowrap text-[14px] font-semibold uppercase">
            Booking
          </Link>
        </nav>

        <Link
          to="/contacts"
          className="top-item hidden h-[49px] min-w-[193px] items-center justify-center gap-3 rounded-[6px] bg-white px-5 text-[15px] font-medium uppercase text-black transition-colors hover:bg-[#c4ff00] sm:flex"
        >
          Get in touch
          <span className="size-[7px] rounded-full bg-[#9228e9]" />
        </Link>

        <div className="top-item flex items-center gap-3 text-[10px] font-bold uppercase sm:hidden">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/booking">Booking</Link>
        </div>
      </header>

      {/* Headline: same left alignment and stacked uppercase style */}
      <section className="absolute inset-x-0 top-[19%] z-10 px-6 sm:px-10 lg:left-[5%] lg:right-auto lg:w-[900px] lg:px-0">
        <h1 className="event-display text-[clamp(2.65rem,5.45vw,5.5rem)] font-black uppercase leading-[0.87] tracking-[-0.065em]">
          <span className="headline-line block">We connect people</span>
          <span className="headline-line block">through incredible</span>
          <span className="headline-line block">events and</span>
          <span className="headline-line block text-[#c4ff00]">
            real-life experiences
          </span>
        </h1>
      </section>

      {/* Bottom-right copy and CTA */}
      <div className="absolute bottom-[6.2%] right-6 z-10 w-[min(440px,calc(100%-48px))] sm:right-10 lg:right-[5%] lg:w-[415px]">
        <p className="bottom-content max-w-[420px] text-[16px] leading-[1.55] sm:text-[18px]">
          TOGRO brings people together through experiences they love and
          moments they actually talk about.
        </p>

        <div className="bottom-content mt-7 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex h-[50px] items-center justify-center gap-3 rounded-[6px] bg-[#282828] px-6 text-[14px] font-semibold uppercase transition-colors hover:bg-[#454545]"
          >
            Get in touch
            <span className="size-[7px] rounded-full bg-[#9228e9]" />
          </a>

          <a
            href="#events"
            className="inline-flex h-[50px] items-center justify-center gap-2 rounded-[6px] border border-white px-5 text-[14px] font-medium uppercase transition-colors hover:bg-white hover:text-black"
          >
            View our events
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Bottom black brand strip */}
      <div className="absolute bottom-0 left-0 right-0 z-[5] h-[116px] bg-black">
        <div className="mx-auto flex h-full max-w-[1800px] items-center px-6 sm:px-10 lg:px-[5%]">
          <div className="grid w-full grid-cols-3 items-center gap-x-5 gap-y-5 sm:grid-cols-5 lg:grid-cols-5 lg:gap-x-12">
            {brands.map((brand, index) => (
              <div
                key={brand}
                className={`bottom-content text-center text-white/50 ${
                  index === 1
                    ? "font-display text-[22px] italic tracking-tight sm:text-[27px]"
                    : index === 2
                      ? "text-[12px] font-black tracking-[0.02em] sm:text-[15px]"
                      : index === 3
                        ? "text-[12px] font-extrabold tracking-[0.13em] sm:text-[14px]"
                        : "text-[10px] font-extrabold tracking-[0.08em] sm:text-[12px]"
                }`}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
    <AboutStatement />
    <EventServices />
    <FeaturedProjects />
    <EventMoments />
    <TogetherFooter />
    </div>
    
  );
};

export default Home;
