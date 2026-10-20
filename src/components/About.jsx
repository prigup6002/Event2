import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiArrowUpRight,
  FiCalendar,
  FiUsers,
  FiZap,
  FiTarget,
  FiGlobe,
  FiCheckCircle,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-hero-item", {
        y: 65,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      });

      gsap.utils.toArray(".about-reveal").forEach((element) => {
        gsap.from(element, {
          y: 45,
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

      gsap.from(".about-stat", {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 85%",
          once: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      number: "01",
      icon: <FiUsers />,
      title: "Community first.",
      description:
        "Technology grows faster when people share ideas, experiences, and opportunities. We bring those people together.",
    },
    {
      number: "02",
      icon: <FiZap />,
      title: "Ideas into action.",
      description:
        "We believe the best conversations do more than inspire. They help people build, experiment, collaborate, and create.",
    },
    {
      number: "03",
      icon: <FiTarget />,
      title: "Every connection counts.",
      description:
        "A new perspective, a future teammate, or a conversation with an expert can change the direction of your journey.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "Find tech meetups, conferences, workshops, and communities that match your interests.",
    },
    {
      number: "02",
      title: "Show up",
      description:
        "Join people who are curious about the same technologies, problems, and possibilities.",
    },
    {
      number: "03",
      title: "Grow together",
      description:
        "Exchange knowledge, build meaningful relationships, and turn conversations into opportunities.",
    },
  ];

  return (
    <div
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-white text-black"
    >
      <Navbar light />

      {/* HERO */}
      <section className="px-5 pb-16 pt-5 sm:px-8 sm:pb-24 sm:pt-24 lg:px-10 lg:pt-28">
        <div className="mx-auto max-w-[1600px]">
          <h1 className="about-hero-item max-w-7xl text-[clamp(3.5rem,10vw,9.5rem)] font-semibold leading-[0.86] tracking-[-0.085em]">
            Good things
            <br />
            happen when
            <br />
            <span className="text-neutral-400">tech connects.</span>
          </h1>

          <div className="about-hero-item mt-10 flex flex-col justify-between gap-8 border-t border-black/15 pt-7 md:mt-14 md:flex-row md:items-end">
            <p className="max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl lg:text-2xl">
              Togro makes discovering technology events easier, helping curious
              minds find their people, explore new ideas, and become part of
              something bigger.
            </p>

            <Link
              to="/events"
              className="group inline-flex w-fit shrink-0 items-center gap-4 rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Explore events
              <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="px-5 sm:px-8 lg:px-10">
        <div className="relative mx-auto max-w-[1600px] overflow-hidden bg-neutral-100">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2400&q=90"
            alt="People connecting at a technology conference"
            className="h-[320px] w-full object-cover grayscale sm:h-[480px] lg:h-[650px]"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-4 text-white sm:bottom-10 sm:left-10 sm:right-10 md:flex-row md:items-end">
            <p className="max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              The next big thing could start with a conversation.
            </p>
            <span className="text-xs uppercase tracking-[0.2em] sm:text-sm">
              People. Ideas. Possibilities.
            </span>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="about-reveal">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 sm:text-sm">
              / Our story
            </p>

            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
              Tech is better
              <br />
              <span className="text-neutral-400">together.</span>
            </h2>
          </div>

          <div className="about-reveal flex flex-col justify-center gap-6">
            <p className="text-xl leading-relaxed text-neutral-700 sm:text-2xl">
              The technology world moves fast. New tools emerge, new ideas take
              shape, and entire industries change. But behind every meaningful
              breakthrough are people learning from one another.
            </p>

            <p className="text-base leading-relaxed text-neutral-500 sm:text-lg">
              Finding the right event or community should not be the hard part.
              Togro exists to make that discovery simpler, so students,
              developers, designers, founders, and tech enthusiasts can spend
              less time searching and more time connecting.
            </p>

            <p className="text-base leading-relaxed text-neutral-500 sm:text-lg">
              Whether you are attending your first meetup or looking to meet
              people who challenge the way you think, there is always something
              new to discover.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats bg-black px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="about-reveal mb-12 max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 sm:text-sm">
              / What we believe in
            </p>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">
              Built around the power of showing up.
            </h2>
          </div>

          <div className="grid grid-cols-1 border-t border-white/20 sm:grid-cols-3">
            <div className="about-stat border-b border-white/20 py-8 sm:border-b-0 sm:border-r sm:pr-6 lg:py-12">
              <FiCalendar className="mb-10 text-2xl text-neutral-400" />
              <h3 className="text-2xl font-medium sm:text-3xl">
                Find your next event
              </h3>
              <p className="mt-3 max-w-xs leading-relaxed text-neutral-400">
                Discover meetups, workshops, conferences, and more in one
                place.
              </p>
            </div>

            <div className="about-stat border-b border-white/20 py-8 sm:border-b-0 sm:border-r sm:px-6 lg:py-12">
              <FiUsers className="mb-10 text-2xl text-neutral-400" />
              <h3 className="text-2xl font-medium sm:text-3xl">
                Meet your people
              </h3>
              <p className="mt-3 max-w-xs leading-relaxed text-neutral-400">
                Connect with curious minds who share your passion for
                technology.
              </p>
            </div>

            <div className="about-stat py-8 sm:pl-6 lg:py-12">
              <FiGlobe className="mb-10 text-2xl text-neutral-400" />
              <h3 className="text-2xl font-medium sm:text-3xl">
                Expand your world
              </h3>
              <p className="mt-3 max-w-xs leading-relaxed text-neutral-400">
                Explore new perspectives, communities, and opportunities to
                grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-[1600px]">
          <div className="about-reveal mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 sm:text-sm">
                / What drives us
              </p>
              <h2 className="text-5xl font-semibold tracking-[-0.065em] sm:text-7xl lg:text-8xl">
                Our values.
              </h2>
            </div>

            <p className="max-w-md text-base leading-relaxed text-neutral-500 sm:text-lg">
              Everything we do comes back to one idea: making it easier for
              people to learn from people.
            </p>
          </div>

          <div className="border-t border-black/15">
            {values.map((value) => (
              <div
                key={value.number}
                className="about-reveal grid gap-5 border-b border-black/15 py-8 sm:grid-cols-[70px_1fr_1fr] sm:items-start sm:gap-8 sm:py-12"
              >
                <span className="text-sm text-neutral-400">
                  {value.number}
                </span>

                <div>
                  <div className="mb-5 text-2xl">{value.icon}</div>
                  <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">
                    {value.title}
                  </h3>
                </div>

                <p className="max-w-lg text-base leading-relaxed text-neutral-500 sm:pt-10 sm:text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-neutral-100 px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="about-reveal mb-14 max-w-3xl sm:mb-20">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 sm:text-sm">
              / Simple by design
            </p>
            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
              From curious
              <br />
              to connected.
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="about-reveal border-t border-black/20 pt-6"
              >
                <span className="text-sm text-neutral-400">{step.number}</span>
                <h3 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-neutral-600 sm:text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="about-reveal">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=85"
              alt="People collaborating and exchanging ideas"
              className="h-[360px] w-full object-cover grayscale sm:h-[520px]"
            />
          </div>

          <div className="about-reveal">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 sm:text-sm">
              / For the curious
            </p>

            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.065em] sm:text-7xl">
              There is a place for you here.
            </h2>

            <div className="mt-8 space-y-5">
              {[
                "Students taking their first steps into tech",
                "Developers and designers sharpening their craft",
                "Founders and builders looking for fresh perspectives",
                "Organizers bringing great communities together",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <FiCheckCircle className="mt-1 shrink-0 text-xl" />
                  <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-base leading-relaxed text-neutral-500 sm:text-lg">
              You do not need to know everything. You just need to be curious
              enough to start.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="about-reveal mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 sm:text-sm">
              / Your next chapter starts here
            </p>

            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
              Stop scrolling.
              <br />
              Start connecting.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-xl">
              Your next idea, collaborator, or favourite tech community could
              be one event away.
            </p>
          </div>

          <Link
            to="/events"
            className="group inline-flex shrink-0 items-center gap-5 rounded-full bg-white px-7 py-5 text-sm font-semibold text-black transition-colors hover:bg-neutral-200"
          >
            Find your next event
            <FiArrowUpRight className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>

      {/* Keep your existing black Togro footer here */}
    </div>
  );
}

function AboutPage() {
  return <About />;
}
