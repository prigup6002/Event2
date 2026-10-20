export const events = [
  {
    id: "sunburn-mumbai",
    title: "SUNBURN FESTIVAL",
    category: "Music",
    date: "19 December 2026",
    time: "4:00 PM onwards",
    city: "Mumbai",
    venue: "Mahalaxmi Racecourse",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1400&q=85",
    description:
      "Experience an electrifying music festival featuring immersive stage production, incredible sound and unforgettable performances.",
    tags: ["Live Music", "Festival", "Outdoor"],
  },
  {
    id: "comedy-night-delhi",
    title: "COMEDY AFTER DARK",
    category: "Comedy",
    date: "24 October 2026",
    time: "7:30 PM",
    city: "New Delhi",
    venue: "The Laugh Store, Aerocity",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=1400&q=85",
    description:
      "A night of sharp punchlines, relatable stories and live stand-up comedy featuring exciting performers.",
    tags: ["Stand-up", "Nightlife", "Live"],
  },
  {
    id: "creative-meetup-bangalore",
    title: "THE CREATIVE CLUB",
    category: "Community",
    date: "31 October 2026",
    time: "11:00 AM",
    city: "Bengaluru",
    venue: "The Courtyard, Indiranagar",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=85",
    description:
      "Meet designers, artists, founders and creative thinkers for a day of conversations, collaboration and fresh ideas.",
    tags: ["Networking", "Creative", "Community"],
  },
  {
    id: "food-festival-delhi",
    title: "THE GREAT INDIAN FOOD FEST",
    category: "Food",
    date: "7 November 2026",
    time: "12:00 PM onwards",
    city: "New Delhi",
    venue: "Major Dhyan Chand National Stadium",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1400&q=85",
    description:
      "Discover regional Indian flavours, street-food favourites and new culinary experiences all in one place.",
    tags: ["Food", "Culture", "Outdoor"],
  },
  {
    id: "indie-live-pune",
    title: "INDIE SOUND SESSION",
    category: "Music",
    date: "14 November 2026",
    time: "6:00 PM",
    city: "Pune",
    venue: "High Spirits, Koregaon Park",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=85",
    description:
      "An intimate live music experience celebrating independent artists, fresh sounds and a crowd that loves discovering music.",
    tags: ["Indie", "Live Music", "Nightlife"],
  },
  {
    id: "design-conference-hyderabad",
    title: "DESIGN THAT MATTERS",
    category: "Workshop",
    date: "21 November 2026",
    time: "10:00 AM",
    city: "Hyderabad",
    venue: "T-Hub, Madhapur",
    price: 1199,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=85",
    description:
      "A gathering for designers and product thinkers to explore creative problem-solving, design culture and emerging ideas.",
    tags: ["Design", "Learning", "Networking"],
  },
];

export const getEventById = (id) =>
  events.find((event) => event.id === id);