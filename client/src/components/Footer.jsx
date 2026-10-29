import { Link } from "react-router-dom";
import {
  Camera,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ArrowUpRight,
} from "lucide-react";

function InstagramIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#061733] text-white">
      {/* Upper CTA Banner */}
      <div className="border-b border-white/10 bg-gradient-to-r from-[#102B55] via-[#061733] to-[#102B55] px-5 py-12 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5B53D]">
              Reserve Your Wedding Date
            </p>
            <h3 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
              Let&apos;s turn your moments into cinematic art.
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#F5B53D] px-6 py-3 text-sm font-bold text-[#061733] shadow-[0_4px_20px_rgba(245,181,61,0.3)] transition hover:scale-105 hover:bg-[#ffc65c]"
            >
              Book Consultation <ArrowUpRight size={17} />
            </Link>
            <a
              href="https://wa.me/918539847172"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-6 py-3 text-sm font-bold text-emerald-400 backdrop-blur transition hover:bg-[#25D366] hover:text-[#061733]"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Aastha Films Studio"
                className="h-16 w-auto rounded-xl bg-white p-1 object-contain"
              />
            </Link>
            <h4 className="mt-4 font-sans text-xl font-black text-[#F5B53D]">
              AASTHA FILMS <span className="text-white">STUDIO</span>
            </h4>
            <p className="mt-2 text-xs font-medium text-slate-300">
              Prop. Sujit Raaz
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Premium wedding photography, candid emotions, 4K cinematic films and
              luxury heirloom albums crafted with passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-serif text-lg font-bold text-[#F5B53D]">
              Navigation
            </h5>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/" className="transition hover:text-[#F5B53D]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="transition hover:text-[#F5B53D]">
                  Portfolio & Gallery
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition hover:text-[#F5B53D]">
                  Our Services & Packages
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-[#F5B53D]">
                  About Studio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-[#F5B53D]">
                  Contact & Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-serif text-lg font-bold text-[#F5B53D]">
              Services
            </h5>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li>Wedding Photography</li>
              <li>Candid & Emotional Shoots</li>
              <li>4K Cinematic Teasers & Films</li>
              <li>Drone Aerial Videography</li>
              <li>Karizma & Canvera Album Design</li>
              <li>Pre-Wedding & Post-Wedding</li>
            </ul>
          </div>

          {/* Contact & Studio Details */}
          <div>
            <h5 className="font-serif text-lg font-bold text-[#F5B53D]">
              Get in Touch
            </h5>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-[#F5B53D]" />
                <span>Gidhaur, Jamui, Bihar - 811305</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-[#F5B53D]" />
                <a
                  href="tel:+918539847172"
                  className="transition hover:text-[#F5B53D]"
                >
                  +91 8539847172
                </a>
              </li>
              <li className="flex items-center gap-3">
                <InstagramIcon size={18} className="shrink-0 text-[#F5B53D]" />
                <a
                  href="https://www.instagram.com/aastha__films?exln=NGlxNjdkNWdiNTB3"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[#F5B53D]"
                >
                  @aastha_films_studio
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="shrink-0 text-emerald-400" />
                <a
                  href="https://wa.me/918539847172"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 transition hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-slate-400 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Aastha Films Studio. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Crafted with <Heart size={14} className="fill-red-500 text-red-500" /> for timeless wedding memories.
          </p>
        </div>
      </div>
    </footer>
  );
}
