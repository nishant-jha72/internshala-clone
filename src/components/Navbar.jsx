import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-sky-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo + Website Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="InternDhundho Logo"
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Intern<span className="text-sky-600">Dhundho</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <Link to="/services" className="hover:text-sky-600 transition-colors">Services</Link>
            <Link to="/careers" className="hover:text-sky-600 transition-colors">Careers</Link>
            <Link to="/contact" className="hover:text-sky-600 transition-colors">Contact Us</Link>
            
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-200">
              <Link to="/login" className="hover:text-sky-600 transition-colors">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-sky-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-sky-700 hover:shadow-lg transition-all active:scale-95"
              >
                Sign Up
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button (Icon only - functionality requires state) */}
          <button className="md:hidden p-2 text-slate-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

        </div>
      </div>
    </header>
  );
}
