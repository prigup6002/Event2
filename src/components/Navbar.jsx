import { Link, NavLink } from "react-router-dom";

export default function Navbar({ light = false }) {
  const links = [
    { label: "HOME", to: "/" },
    { label: "EVENTS", to: "/events" },
    { label: "CONTACTS", to: "/contacts" },
    { label: "BOOKING", to: "/booking" },
  ];

  return (
    <header className="absolute left-0 top-0 z-50 w-full px-5 py-5 md:px-10">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between gap-5">
        <Link
          to="/"
          className={`font-display text-3xl tracking-tight md:text-4xl ${
            light ? "text-black" : "text-white"
          }`}
        >
          TOGRO<span className="text-[#922BFF]">.</span>
        </Link>

        <div
          className={`hidden items-center gap-1 rounded-md border p-1 backdrop-blur-md md:flex ${
            light
              ? "border-black/15 bg-white/70"
              : "border-white/15 bg-black/40"
          }`}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded px-4 py-3 text-xs font-semibold transition ${
                  isActive
                    ? "bg-white text-black"
                    : light
                      ? "text-black hover:bg-black/10"
                      : "text-white hover:bg-white/10"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div
          className={`flex items-center gap-3 text-[10px] font-semibold md:hidden ${
            light ? "text-black" : "text-white"
          }`}
        >
          <Link to="/">HOME</Link>
          <Link to="/events">EVENTS</Link>
          <Link to="/contacts">CONTACTS</Link>
          <Link to="/booking">BOOKING</Link>
        </div>

        <Link
          to="/booking"
          className={`rounded-md border px-4 py-3 text-xs font-semibold transition hover:border-[#922BFF] hover:bg-[#922BFF] hover:text-white ${
            light
              ? "border-black bg-black text-white"
              : "border-white bg-white text-black"
          }`}
        >
          GET YOUR TICKET <span className="text-[#922BFF]">●</span>
        </Link>
      </nav>
    </header>
  );
}