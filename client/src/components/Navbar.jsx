import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import GooeyNav from "./GooeyNav";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const activeIndex = Math.max(
    0,
    navLinks.findIndex((item) => item.path === location.pathname)
  );

  const items = navLinks.map((item) => ({
    label: item.label,
    href: item.path,
    onClick: (e) => {
      e.preventDefault();
      navigate(item.path);
    },
  }));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#102B55]/90 text-white backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="flex w-full items-center px-5 py-2.5 lg:px-10">
        <Link to="/" className="shrink-0 transition hover:opacity-90">
          <img
            src="/logo.png"
            alt="Aastha Films Studio"
            className="h-16 sm:h-20 w-auto rounded-2xl bg-white p-1 object-contain shadow-md"
          />
        </Link>

        {/* Desktop Gooey Navigation */}
        <div className="ml-auto hidden lg:block">
          <GooeyNav
            items={items}
            activeIndex={activeIndex}
            initialActiveIndex={activeIndex}
            color="#F5B53D"
            activeTextColor="#061733"
            colors={["#F5B53D", "#FFD778", "#FFEAB0", "#E5A93C"]}
            theme="dark"
            size="lg"
            frame
            particleCount={18}
            spread={58}
            animationTime={600}
            timeVariance={300}
            gooeyness={0.5}
            wobble={0.6}
            hoverEffect
          />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <nav className="border-t border-white/10 bg-[#0d2244] px-6 py-6 lg:hidden animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold transition ${
                    isActive
                      ? "bg-[#F5B53D] text-[#061733] shadow-md"
                      : "text-white hover:bg-white/10 hover:text-[#F5B53D]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-[#061733]" />
                  )}
                </Link>
              );
            })}

            <div className="mt-2 border-t border-white/10 pt-4">
              <a
                href="https://wa.me/918539847172"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-[#061733]"
              >
                WhatsApp: 8539847172
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;