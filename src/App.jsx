
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Booking from "./components/Booking";
import About from "./components/About";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
