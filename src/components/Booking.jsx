import { useEffect, useMemo, useRef, useState } from "react";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiSearch,
  FiCheck,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    id: 1,
    title: "AI, Beyond the Hype",
    category: "AI & ML",
    type: "Conference",
    date: "October 24, 2026",
    time: "10:00 AM – 5:00 PM",
    city: "Bengaluru",
    venue: "The Lalit Ashok, Bengaluru",
    price: 499,
    duration: "7 hours",
    seats: 180,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85",
    description: "A full day exploring how artificial intelligence is changing the way we build, think, and solve real-world problems.",
    about: "Move beyond AI buzzwords and explore the technologies shaping the next generation of products. Hear from engineers and builders working with machine learning, generative AI, and large language models. Whether you're experimenting with your first model or already building AI products, you'll leave with ideas you can actually use.",
    highlights: ["Practical applications of generative AI", "LLMs, RAG and AI-powered products", "Live demonstrations and expert Q&A", "Networking with developers and founders"],
    schedule: [["10:00 AM", "Registration & welcome"], ["11:00 AM", "AI in the real world"], ["01:00 PM", "Lunch & networking"], ["02:00 PM", "Live demos and panel discussion"], ["04:30 PM", "Community networking"]],
    organizer: "Togro Tech Community",
    tag: "AI / ML",
  },
  {
    id: 2,
    title: "Build Something That Matters",
    category: "Hackathon",
    type: "Hackathon",
    date: "October 25, 2026",
    time: "9:00 AM – 9:00 PM",
    city: "Delhi",
    venue: "India Habitat Centre, New Delhi",
    price: 0,
    duration: "12 hours",
    seats: 120,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=85",
    description: "Twelve hours, a team, and one idea worth bringing to life. Build, experiment, and ship something real.",
    about: "Bring your ideas, meet your teammates, and turn a rough concept into a working prototype. This buildathon welcomes developers, designers, and curious problem-solvers who want to learn by making.",
    highlights: ["Team-based project building", "Mentorship from experienced developers", "Prototype demos and feedback", "Meet other ambitious builders"],
    schedule: [["09:00 AM", "Check-in and team formation"], ["10:00 AM", "Problem statements announced"], ["01:00 PM", "Mentoring sessions"], ["05:00 PM", "Prototype checkpoint"], ["08:00 PM", "Final demos"]],
    organizer: "Build Club India",
    tag: "BUILD",
  },
  {
    id: 3,
    title: "The Art of Full Stack",
    category: "Web Development",
    type: "Meetup",
    date: "October 27, 2026",
    time: "5:30 PM – 8:00 PM",
    city: "Noida",
    venue: "91Springboard, Noida",
    price: 199,
    duration: "2.5 hours",
    seats: 80,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85",
    description: "From the first component to production APIs — a meetup for people who love building for the web.",
    about: "Explore the decisions behind modern full-stack applications, from frontend architecture and backend APIs to databases, authentication, and deployment.",
    highlights: ["Modern React architecture", "Designing maintainable REST APIs", "Database and deployment patterns", "Open community discussion"],
    schedule: [["05:30 PM", "Welcome and introductions"], ["06:00 PM", "Frontend architecture"], ["06:45 PM", "Backend and deployment"], ["07:30 PM", "Open discussion"]],
    organizer: "Web Builders NCR",
    tag: "WEB",
  },
  {
    id: 4,
    title: "Inside the Hacker's Mind",
    category: "Cybersecurity",
    type: "Workshop",
    date: "October 29, 2026",
    time: "11:00 AM – 3:00 PM",
    city: "Pune",
    venue: "Innovation Centre, Pune",
    price: 299,
    duration: "4 hours",
    seats: 65,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=85",
    description: "Understand security from the other side and learn how responsible testing helps build safer software.",
    about: "An introductory, defensive security workshop covering threat modelling, common web vulnerabilities, and safe testing practices in controlled environments.",
    highlights: ["Understanding common web vulnerabilities", "Threat modelling fundamentals", "Hands-on lab in a safe environment", "Security-first development practices"],
    schedule: [["11:00 AM", "Security fundamentals"], ["12:00 PM", "Vulnerability walkthrough"], ["01:00 PM", "Hands-on lab"], ["02:30 PM", "Review and Q&A"]],
    organizer: "Secure Stack Community",
    tag: "SECURITY",
  },
  {
    id: 5,
    title: "Clouds, Containers & Scale",
    category: "Cloud Computing",
    type: "Conference",
    date: "October 31, 2026",
    time: "10:30 AM – 4:30 PM",
    city: "Hyderabad",
    venue: "T-Hub, Hyderabad",
    price: 599,
    duration: "6 hours",
    seats: 150,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",
    description: "A practical look at cloud infrastructure, containers, distributed systems, and scaling applications.",
    about: "Understand the infrastructure decisions that keep modern applications running. Explore cloud-native architecture, containers, Kubernetes, and production reliability.",
    highlights: ["Cloud-native architecture", "Containers and orchestration", "Scalable system design", "Monitoring and reliability"],
    schedule: [["10:30 AM", "Opening session"], ["11:30 AM", "Containers in production"], ["01:00 PM", "Lunch"], ["02:00 PM", "Designing for scale"], ["03:30 PM", "Expert panel"]],
    organizer: "Cloud Native Hyderabad",
    tag: "CLOUD",
  },
  {
    id: 6,
    title: "Make Data Tell a Story",
    category: "Data Science",
    type: "Workshop",
    date: "November 2, 2026",
    time: "2:00 PM – 6:00 PM",
    city: "Mumbai",
    venue: "WeWork, BKC Mumbai",
    price: 249,
    duration: "4 hours",
    seats: 70,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
    description: "Transform raw datasets into meaningful insights using Python, visualisation, and analytical thinking.",
    about: "Work through the journey from messy data to useful conclusions. Learn how analysts explore datasets, communicate findings, and avoid misleading visualisations.",
    highlights: ["Exploratory data analysis", "Python data workflows", "Data visualisation principles", "Communicating insights clearly"],
    schedule: [["02:00 PM", "Introduction to datasets"], ["03:00 PM", "Hands-on analysis"], ["04:00 PM", "Visualising insights"], ["05:00 PM", "Project review"]],
    organizer: "Data People Mumbai",
    tag: "DATA",
  },
  {
    id: 7,
    title: "Open Source, Open Doors",
    category: "Open Source",
    type: "Meetup",
    date: "November 4, 2026",
    time: "11:00 AM – 2:00 PM",
    city: "Jaipur",
    venue: "Startup Oasis, Jaipur",
    price: 0,
    duration: "3 hours",
    seats: 90,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85",
    description: "Find your first open-source issue, collaborate with contributors, and learn how communities build software.",
    about: "Learn how to discover projects, read contribution guidelines, submit pull requests, and collaborate with maintainers in a welcoming environment.",
    highlights: ["Finding beginner-friendly issues", "Git and pull request workflows", "Project maintainer AMA", "Contribution sprint"],
    schedule: [["11:00 AM", "Getting started"], ["11:30 AM", "Git workflow walkthrough"], ["12:00 PM", "Contribution sprint"], ["01:30 PM", "Show and tell"]],
    organizer: "Open Source Jaipur",
    tag: "OSS",
  },
  {
    id: 8,
    title: "Design That Just Works",
    category: "Design",
    type: "Workshop",
    date: "November 6, 2026",
    time: "12:00 PM – 4:00 PM",
    city: "Bengaluru",
    venue: "DesignUp Studio, Bengaluru",
    price: 349,
    duration: "4 hours",
    seats: 55,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=85",
    description: "Explore typography, reusable components, and the small details that make digital products feel right.",
    about: "A practical UI/UX session on translating user needs into clear interfaces. Work with layout, hierarchy, design tokens, and reusable components.",
    highlights: ["Visual hierarchy and typography", "Building component libraries", "Design systems and tokens", "Critique and iteration"],
    schedule: [["12:00 PM", "Design foundations"], ["01:00 PM", "Component systems"], ["02:00 PM", "Hands-on redesign"], ["03:30 PM", "Feedback session"]],
    organizer: "Design Folks BLR",
    tag: "DESIGN",
  },
  {
    id: 9,
    title: "Decentralised by Design",
    category: "Blockchain",
    type: "Conference",
    date: "November 8, 2026",
    time: "10:00 AM – 3:00 PM",
    city: "Pune",
    venue: "Baner Tech Park, Pune",
    price: 399,
    duration: "5 hours",
    seats: 110,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1400&q=85",
    description: "Understand smart contracts, decentralised applications, and the engineering behind blockchain systems.",
    about: "Explore blockchain fundamentals beyond cryptocurrency, including smart contract architecture, decentralised applications, and practical design trade-offs.",
    highlights: ["Blockchain architecture", "Smart contract fundamentals", "Decentralised application design", "Security considerations"],
    schedule: [["10:00 AM", "Blockchain fundamentals"], ["11:00 AM", "Smart contracts"], ["01:00 PM", "DApp walkthrough"], ["02:00 PM", "Panel and Q&A"]],
    organizer: "Web3 Pune",
    tag: "WEB3",
  },
  {
    id: 10,
    title: "Ship It: DevOps Edition",
    category: "DevOps",
    type: "Workshop",
    date: "November 10, 2026",
    time: "9:30 AM – 1:30 PM",
    city: "Delhi",
    venue: "Delhi Technical Hub",
    price: 499,
    duration: "4 hours",
    seats: 60,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
    description: "Learn how teams automate testing, deployments, and infrastructure to release software with confidence.",
    about: "Build an understanding of CI/CD, deployment workflows, containers, and infrastructure automation using practical examples.",
    highlights: ["CI/CD pipeline fundamentals", "Deployment automation", "Infrastructure as code", "Monitoring and rollback strategies"],
    schedule: [["09:30 AM", "DevOps fundamentals"], ["10:30 AM", "Pipeline walkthrough"], ["11:30 AM", "Hands-on deployment"], ["12:45 PM", "Review and questions"]],
    organizer: "DevOps Delhi",
    tag: "DEVOPS",
  },
  {
    id: 11,
    title: "Generative AI After Hours",
    category: "AI & ML",
    type: "Meetup",
    date: "November 12, 2026",
    time: "6:00 PM – 9:00 PM",
    city: "Noida",
    venue: "Sector 62 Innovation Hub",
    price: 0,
    duration: "3 hours",
    seats: 100,
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=1400&q=85",
    description: "Bring your AI experiments, share your favourite tools, and meet people building with language models.",
    about: "A casual technical meetup for builders exploring LLM applications, retrieval-augmented generation, agents, and evaluation.",
    highlights: ["Community project demos", "RAG and agentic workflows", "Lessons from real experiments", "Open networking"],
    schedule: [["06:00 PM", "Welcome and networking"], ["06:30 PM", "Community demos"], ["07:30 PM", "Technical discussion"], ["08:15 PM", "Open networking"]],
    organizer: "GenAI Builders NCR",
    tag: "GEN AI",
  },
  {
    id: 12,
    title: "The Competitive Edge",
    category: "Programming",
    type: "Hackathon",
    date: "November 14, 2026",
    time: "10:00 AM – 5:00 PM",
    city: "Kanpur",
    venue: "IIT Kanpur Innovation Centre",
    price: 149,
    duration: "7 hours",
    seats: 100,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=85",
    description: "Challenge your problem-solving skills with algorithmic contests, debugging rounds, and team challenges.",
    about: "A coding-focused day for students and developers who want to strengthen their approach to data structures, algorithms, and timed problem-solving.",
    highlights: ["Algorithmic challenges", "Problem-solving strategies", "Live coding rounds", "Peer learning and review"],
    schedule: [["10:00 AM", "Registration"], ["10:30 AM", "Coding round one"], ["01:00 PM", "Team challenge"], ["03:00 PM", "Final round"], ["04:30 PM", "Results and discussion"]],
    organizer: "Code Kanpur",
    tag: "DSA",
  },
  {
    id: 13,
    title: "Apps from Scratch",
    category: "App Development",
    type: "Workshop",
    date: "November 16, 2026",
    time: "11:00 AM – 4:00 PM",
    city: "Chennai",
    venue: "Guindy Tech Campus, Chennai",
    price: 299,
    duration: "5 hours",
    seats: 70,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=85",
    description: "Go from a blank screen to a working mobile prototype with a guided app development session.",
    about: "Understand mobile application structure, reusable UI, navigation, API integration, and the steps involved in preparing an app for release.",
    highlights: ["Mobile app architecture", "Navigation and state", "Connecting APIs", "Prototype walkthrough"],
    schedule: [["11:00 AM", "Setup and introduction"], ["12:00 PM", "Building screens"], ["01:00 PM", "Lunch"], ["02:00 PM", "API integration"], ["03:30 PM", "Demo time"]],
    organizer: "Mobile Makers Chennai",
    tag: "MOBILE",
  },
  {
    id: 14,
    title: "Machines That Move",
    category: "Robotics",
    type: "Conference",
    date: "November 18, 2026",
    time: "10:00 AM – 4:00 PM",
    city: "Hyderabad",
    venue: "BITS Innovation Centre, Hyderabad",
    price: 699,
    duration: "6 hours",
    seats: 130,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=85",
    description: "Discover robotics, embedded systems, intelligent sensors, and the future of physical automation.",
    about: "Meet engineers and enthusiasts working with robotics systems. Explore how sensors, control systems, embedded hardware, and intelligent software come together.",
    highlights: ["Robotics system design", "Sensors and embedded computing", "Autonomous systems demonstrations", "Industry applications"],
    schedule: [["10:00 AM", "Opening keynote"], ["11:00 AM", "Robotics demonstrations"], ["01:00 PM", "Lunch and networking"], ["02:00 PM", "Panel discussion"], ["03:30 PM", "Project showcase"]],
    organizer: "Robotics Hyderabad",
    tag: "ROBOTICS",
  },
  {
    id: 15,
    title: "Women Who Build Tech",
    category: "Networking",
    type: "Networking",
    date: "November 20, 2026",
    time: "4:00 PM – 7:00 PM",
    city: "Mumbai",
    venue: "WeWork, Andheri Mumbai",
    price: 0,
    duration: "3 hours",
    seats: 100,
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
    description: "An evening for women in technology to exchange ideas, share experiences, and make new connections.",
    about: "Connect with engineers, designers, founders, and students in an inclusive community space built around conversation and shared learning.",
    highlights: ["Career stories and discussions", "Small-group networking", "Community connections", "Mentorship conversations"],
    schedule: [["04:00 PM", "Welcome"], ["04:30 PM", "Community conversations"], ["05:30 PM", "Networking circles"], ["06:30 PM", "Closing discussion"]],
    organizer: "Women in Tech Mumbai",
    tag: "CONNECT",
  },
  {
    id: 16,
    title: "Under the Database",
    category: "Databases",
    type: "Meetup",
    date: "November 22, 2026",
    time: "3:00 PM – 6:00 PM",
    city: "Bengaluru",
    venue: "Koramangala Tech Space",
    price: 199,
    duration: "3 hours",
    seats: 75,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1400&q=85",
    description: "Get into indexing, query planning, data modelling, and the decisions that keep databases fast.",
    about: "An engineering meetup about practical database design. Explore indexing, query performance, schema decisions, and trade-offs between storage approaches.",
    highlights: ["Indexing and query optimisation", "Data modelling", "Performance troubleshooting", "Engineering case studies"],
    schedule: [["03:00 PM", "Introduction"], ["03:30 PM", "Query performance"], ["04:30 PM", "Schema design discussion"], ["05:30 PM", "Q&A and networking"]],
    organizer: "Database Bengaluru",
    tag: "DATABASE",
  },
  {
    id: 17,
    title: "A New Dimension",
    category: "AR / VR",
    type: "Workshop",
    date: "November 24, 2026",
    time: "11:00 AM – 3:00 PM",
    city: "Pune",
    venue: "XR Lab Pune",
    price: 449,
    duration: "4 hours",
    seats: 50,
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1400&q=85",
    description: "Explore immersive experiences and learn how spatial interfaces change the way we interact with technology.",
    about: "Discover the fundamentals of augmented and virtual reality, from immersive interface design to interaction patterns and prototyping.",
    highlights: ["AR and VR fundamentals", "Spatial interface principles", "Interactive prototype concepts", "Emerging industry use cases"],
    schedule: [["11:00 AM", "XR introduction"], ["12:00 PM", "Interaction design"], ["01:00 PM", "Prototype lab"], ["02:30 PM", "Demo and discussion"]],
    organizer: "XR Makers Pune",
    tag: "XR",
  },
  {
    id: 18,
    title: "Engineering for Scale",
    category: "Engineering",
    type: "Conference",
    date: "November 26, 2026",
    time: "10:00 AM – 5:00 PM",
    city: "Delhi",
    venue: "Pragati Maidan, New Delhi",
    price: 599,
    duration: "7 hours",
    seats: 160,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=85",
    description: "A closer look at system design, reliability, testing, and the engineering behind products used at scale.",
    about: "Learn from engineering case studies covering distributed systems, reliability, testing strategy, and architectural decision-making.",
    highlights: ["System design case studies", "Testing and release quality", "Reliability engineering", "Engineering leadership discussions"],
    schedule: [["10:00 AM", "Opening keynote"], ["11:00 AM", "System design"], ["01:00 PM", "Lunch"], ["02:00 PM", "Reliability and testing"], ["04:00 PM", "Panel and Q&A"]],
    organizer: "Engineering India",
    tag: "SYSTEMS",
  },
  {
    id: 19,
    title: "Everything Connected",
    category: "IoT",
    type: "Workshop",
    date: "November 28, 2026",
    time: "1:00 PM – 5:00 PM",
    city: "Jaipur",
    venue: "Jaipur Tech Lab",
    price: 349,
    duration: "4 hours",
    seats: 60,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
    description: "Connect hardware, sensors, and software to understand how intelligent connected devices work.",
    about: "Explore IoT architecture, device communication, sensor data, and the path from a simple prototype to a connected application.",
    highlights: ["Sensor and device fundamentals", "Data communication patterns", "IoT prototyping concepts", "Connected product examples"],
    schedule: [["01:00 PM", "Introduction to IoT"], ["02:00 PM", "Devices and sensors"], ["03:00 PM", "Connectivity walkthrough"], ["04:00 PM", "Prototype discussion"]],
    organizer: "IoT Jaipur",
    tag: "IoT",
  },
  {
    id: 20,
    title: "From Idea to First Users",
    category: "Startups",
    type: "Networking",
    date: "November 30, 2026",
    time: "5:00 PM – 8:00 PM",
    city: "Bengaluru",
    venue: "91Springboard, Bengaluru",
    price: 249,
    duration: "3 hours",
    seats: 90,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
    description: "A room full of builders discussing MVPs, early customers, product decisions, and startup lessons.",
    about: "Join developers, founders, and product-minded people to discuss the practical challenges of building a startup, validating an idea, and finding your first users.",
    highlights: ["Validating a product idea", "Building and shipping an MVP", "Early user feedback", "Founder and builder networking"],
    schedule: [["05:00 PM", "Introductions"], ["05:30 PM", "Founder stories"], ["06:30 PM", "Small-group discussions"], ["07:30 PM", "Networking"]],
    organizer: "Startup Builders BLR",
    tag: "STARTUP",
  },
];

const categories = [
  "All events",
  "AI & ML",
  "Hackathon",
  "Web Development",
  "Cybersecurity",
  "Cloud Computing",
  "Data Science",
  "Open Source",
  "Design",
  "Blockchain",
  "DevOps",
  "Programming",
  "App Development",
  "Robotics",
  "Networking",
  "Databases",
  "AR / VR",
  "Engineering",
  "IoT",
  "Startups",
];

const imageHeights = [
  "h-64 sm:h-80",
  "h-56 sm:h-64",
  "h-64 sm:h-80 lg:h-[420px]",
  "h-56 sm:h-64",
  "h-64 sm:h-80",
  "h-56 sm:h-64",
  "h-60 sm:h-72",
  "h-64 sm:h-80",
  "h-56 sm:h-64",
  "h-56 sm:h-64",
  "h-64 sm:h-80",
  "h-56 sm:h-64",
  "h-64 sm:h-80 lg:h-[420px]",
  "h-60 sm:h-72",
  "h-64 sm:h-80",
  "h-56 sm:h-64",
  "h-60 sm:h-72",
  "h-64 sm:h-80",
  "h-56 sm:h-64",
  "h-64 sm:h-80",
];

const gridSizes = [
  "sm:col-span-2",
  "",
  "lg:row-span-2",
  "",
  "sm:col-span-2",
  "",
  "",
  "lg:col-span-2",
  "",
  "",
  "",
  "",
  "lg:row-span-2",
  "",
  "sm:col-span-2",
  "",
  "",
  "sm:col-span-2",
  "",
  "lg:col-span-2",
];

export default function Booking() {
  const pageRef = useRef(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All events");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [sort, setSort] = useState("Featured");
  const [bookingDone, setBookingDone] = useState(false);

  const filteredEvents = useMemo(() => {
    let result = events.filter((event) => {
      const query = search.toLowerCase().trim();

      const matchesSearch =
        !query ||
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query) ||
        event.city.toLowerCase().includes(query);

      return (
        matchesSearch &&
        (category === "All events" || event.category === category)
      );
    });

    if (sort === "Name A–Z") {
      result = [...result].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    } else if (sort === "Free first") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    return result;
  }, [search, category, sort]);

  useEffect(() => {
    if (selectedEvent) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedEvent]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".booking-heading", {
        y: 30,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
      });

      gsap.from(".masonry-card", {
        y: 24,
        opacity: 0,
        duration: 0.55,
        stagger: 0.045,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".masonry-grid",
          start: "top 90%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, [selectedEvent, filteredEvents.length]);

  function openEvent(event) {
    setBookingDone(false);
    setSelectedEvent(event);
  }

  function goBack() {
    setSelectedEvent(null);
    setBookingDone(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main
      ref={pageRef}
      id="top"
      className="min-h-screen w-full overflow-x-clip bg-white text-[#111111]"
    >
      {/* Reuse your existing Togro navbar here. */}

      {selectedEvent ? (
        <section className="w-full px-5 pb-20 pt-8 sm:px-8 lg:px-10">
          <button
            onClick={goBack}
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-black/60 transition hover:text-black"
          >
            <FiArrowLeft />
            Back to all events
          </button>

          <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_370px] lg:gap-14">
            <div className="min-w-0">
              <div className="relative h-[260px] w-full overflow-hidden bg-[#f0f0f0] sm:h-[400px] lg:h-[520px]">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-8">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
                  {selectedEvent.category} / {selectedEvent.type} / {selectedEvent.city}
                </p>

                <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                  {selectedEvent.title}
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60 sm:text-xl sm:leading-9">
                  {selectedEvent.description}
                </p>
              </div>

              <div className="mt-12 border-t border-black/10 pt-8">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  About this event
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-black/65 sm:text-lg">
                  {selectedEvent.about}
                </p>
              </div>

              <div className="mt-12 border-t border-black/10 pt-8">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  What you'll experience
                </h2>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {selectedEvent.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 bg-[#f6f6f6] p-4"
                    >
                      <FiCheck className="mt-1 shrink-0" size={18} />
                      <span className="text-sm leading-6 text-black/75 sm:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 border-t border-black/10 pt-8">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Event schedule
                </h2>

                <div className="mt-6">
                  {selectedEvent.schedule.map(([time, activity]) => (
                    <div
                      key={time}
                      className="grid grid-cols-[100px_minmax(0,1fr)] gap-4 border-b border-black/10 py-5 sm:grid-cols-[130px_minmax(0,1fr)]"
                    >
                      <span className="text-sm font-medium text-black/45">
                        {time}
                      </span>
                      <div className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-black" />
                        <span className="text-sm font-medium sm:text-base">
                          {activity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 border-t border-black/10 pt-8">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Organised by
                </h2>

                <div className="mt-5 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black text-xl font-semibold text-white">
                    {selectedEvent.organizer.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{selectedEvent.organizer}</p>
                    <p className="mt-1 text-sm text-black/45">Event organiser</p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="h-fit lg:sticky lg:top-8">
              <div className="border border-black/10 bg-white p-5 sm:p-7">
                <p className="text-sm text-black/45">Registration fee</p>

                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight">
                    {selectedEvent.price === 0 ? "Free" : `₹${selectedEvent.price}`}
                  </span>
                  {selectedEvent.price > 0 && (
                    <span className="text-sm text-black/40">/ person</span>
                  )}
                </div>

                <div className="my-7 space-y-5 border-y border-black/10 py-6">
                  <div className="flex gap-3">
                    <FiCalendar className="mt-1 shrink-0" size={19} />
                    <div>
                      <p className="text-sm font-medium">{selectedEvent.date}</p>
                      <p className="mt-1 text-sm text-black/45">Event date</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <FiClock className="mt-1 shrink-0" size={19} />
                    <div>
                      <p className="text-sm font-medium">{selectedEvent.time}</p>
                      <p className="mt-1 text-sm text-black/45">{selectedEvent.duration}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <FiMapPin className="mt-1 shrink-0" size={19} />
                    <div>
                      <p className="text-sm font-medium">{selectedEvent.venue}</p>
                      <p className="mt-1 text-sm text-black/45">{selectedEvent.city}, India</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <FiUsers className="mt-1 shrink-0" size={19} />
                    <div>
                      <p className="text-sm font-medium">{selectedEvent.seats} places</p>
                      <p className="mt-1 text-sm text-black/45">Listed event capacity</p>
                    </div>
                  </div>
                </div>

                {bookingDone ? (
                  <div className="bg-[#f2f2f2] p-4">
                    <p className="font-semibold">Registration demo complete</p>
                    <p className="mt-2 text-sm leading-6 text-black/60">
                      Connect your backend to save registrations and confirm bookings.
                    </p>
                  </div>
                ) : (
                  <button
                    onClick={() => setBookingDone(true)}
                    className="flex w-full items-center justify-between bg-black px-5 py-4 font-medium text-white transition hover:bg-black/80"
                  >
                    {selectedEvent.price === 0 ? "Register for free" : "Book your spot"}
                    <FiArrowUpRight size={20} />
                  </button>
                )}

                <p className="mt-4 text-center text-xs leading-5 text-black/40">
                  Demo registration. Payment and confirmation are not connected yet.
                </p>
              </div>
            </aside>
          </div>
        </section>
      ) : (
        <>
          <section className="w-full px-5 pb-8 pt-12 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
            <div className="booking-heading">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <h1 className="max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-7xl lg:text-[clamp(4rem,8vw,8rem)]">
                  Find your
                  <br />
                  next experience<span className="text-black/30">.</span>
                </h1>

                <p className="max-w-xs text-sm leading-6 text-black/55 sm:text-base">
                  Ideas worth sharing. People worth meeting. Things worth building.
                </p>
              </div>

              <div className="mt-10 flex min-h-[65px] w-full items-center gap-4 border-b-2 border-black pb-2">
                <FiSearch size={24} className="shrink-0" />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search events, topics or cities"
                  className="min-w-0 flex-1 bg-transparent py-3 text-lg outline-none placeholder:text-black/35 sm:text-2xl"
                />

                {search && (
                  <button onClick={() => setSearch("")} aria-label="Clear search">
                    <span className="sr-only">Clear search</span>
                    <FiArrowLeft size={19} className="rotate-180" />
                  </button>
                )}
              </div>
            </div>
          </section>

          <section className="w-full px-5 pb-8 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-5 border-b border-black/15 pb-6">
              <div className="flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      category === item
                        ? "border-black bg-black text-white"
                        : "border-black/15 bg-white text-black/65 hover:border-black hover:text-black"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-black/45">
                <span>{filteredEvents.length} events to explore</span>

                <div className="flex items-center gap-3">
                  {(search || category !== "All events") && (
                    <button
                      onClick={() => {
                        setSearch("");
                        setCategory("All events");
                      }}
                      className="underline underline-offset-4 hover:text-black"
                    >
                      Reset filters
                    </button>
                  )}

                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    aria-label="Sort events"
                    className="rounded-full border border-black/15 bg-white px-4 py-2.5 text-sm text-black outline-none"
                  >
                    <option>Featured</option>
                    <option>Name A–Z</option>
                    <option>Free first</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
            {filteredEvents.length > 0 ? (
              <div className="masonry-grid grid w-full grid-cols-1 items-start gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {filteredEvents.map((event) => {
                  const originalIndex = events.findIndex(
                    (item) => item.id === event.id
                  );

                  return (
                    <article
                      key={event.id}
                      className={`masonry-card group min-w-0 ${gridSizes[originalIndex]}`}
                    >
                      <button
                        onClick={() => openEvent(event)}
                        className="block w-full text-left"
                      >
                        <div
                          className={`relative w-full overflow-hidden bg-[#efefef] ${imageHeights[originalIndex]}`}
                        >
                          <img
                            src={event.image}
                            alt={event.title}
                            loading={originalIndex > 5 ? "lazy" : "eager"}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      </button>

                      <div className="flex items-start justify-between gap-3 py-4 sm:gap-4">
                        <div className="min-w-0 flex-1">
                          <div className="mb-2 flex flex-wrap items-center gap-2 text-[10px] font-medium uppercase tracking-[0.13em] text-black/45 sm:text-[11px]">
                            <span>{event.category}</span>
                            <span>·</span>
                            <span>{event.type}</span>
                          </div>

                          <button
                            onClick={() => openEvent(event)}
                            className="text-left"
                          >
                            <h2 className="text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
                              {event.title}
                            </h2>
                          </button>

                          <p className="mt-3 text-sm leading-6 text-black/60">
                            {event.description}
                          </p>

                          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-black/50 sm:text-sm">
                            <span>{event.date}</span>
                            <span>·</span>
                            <span>{event.city}</span>
                          </div>

                          <p className="mt-3 text-sm font-semibold text-black">
                            {event.price === 0 ? "Free entry" : `₹${event.price}`}
                          </p>
                        </div>

                        <button
                          onClick={() => openEvent(event)}
                          aria-label={`Explore ${event.title}`}
                          className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/15 transition hover:bg-black hover:text-white sm:h-10 sm:w-10"
                        >
                          <FiArrowUpRight size={19} />
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="py-24 text-center">
                <h2 className="text-3xl font-semibold tracking-tight">
                  Nothing here just yet.
                </h2>
                <p className="mt-3 text-black/50">
                  Try a different search or category.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setCategory("All events");
                  }}
                  className="mt-6 rounded-full bg-black px-6 py-3 text-sm text-white transition hover:bg-black/75"
                >
                  View all events
                </button>
              </div>
            )}
          </section>
        </>
      )}
    </main>
  );
}
