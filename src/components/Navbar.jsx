import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="w-full bg-sky-300 border-b shadow-sm">
      <div className="max-w-10xl mx-auto px-4 md:px-15 py-4 flex items-center justify-between">
        
        {/* Logo + Website Name */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="InternPortal Logo"
            className="h-35 w-auto"
          />
          <span className="text-2xl font-bold text-black size-6.5">
            InternDhundho
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-black font-bold">
          <Link to="/services" className="hover:text-sky-500">Services</Link>
          <Link to="/careers" className="hover:text-sky-500">Careers</Link>
          <Link to="/careers" className="hover:text-sky-500">Contact Us</Link>
          <Link to="/login" className="hover:text-sky-500">Login</Link>
          <Link
            to="/signup"
            className="bg-sky-500 text-white px-4 py-1.5 rounded hover:bg-sky-600"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}
