import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Booking from "./components/Booking";
import Contacts from "./components/Contacts";
import Events from "./components/Events";
import EventDetails from "./components/EventDetails";
import Home from "./components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}