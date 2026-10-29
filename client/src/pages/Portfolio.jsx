import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Camera,
  Play,
  Heart,
  Sparkles,
  ArrowRight,
  Eye,
  X,
  Plane,
  Film,
  CheckCircle2,
} from "lucide-react";

const categories = [
  "All Work",
  "Weddings",
  "Pre-Wedding",
  "Candid & Rituals",
  "Cinematic Films",
  "Drone Aerials",
];

const galleryItems = [
  {
    id: 1,
    title: "Royal Grand Wedding",
    category: "Weddings",
    location: "Jamui, Bihar",
    image: "/slides/slide-1.jpg",
    tag: "Featured Wedding",
    desc: "Complete traditional wedding rituals and emotional vidaai moments captured in timeless color tones.",
  },
  {
    id: 2,
    title: "Cinematic Film Poster",
    category: "Cinematic Films",
    location: "Gidhaur Studio",
    image: "/slides/slide-2.jpg",
    tag: "Studio Branding",
    desc: "Signature cinematic visual design and brand typography crafted for unforgettable wedding teasers.",
  },
  {
    id: 3,
    title: "Grand Wedding Saga",
    category: "Weddings",
    location: "Patna, Bihar",
    image: "/slides/slide-3.jpg",
    tag: "Masterpiece",
    desc: "Comprehensive 4K photography, gimbal cinematography, and drone shoot highlighting every joyful moment.",
  },
  {
    id: 4,
    title: "Sunset Pre-Wedding Romance",
    category: "Pre-Wedding",
    location: "Heritage Fort Grounds",
    image: "/slides/slide-1.jpg",
    tag: "Couple Shoot",
    desc: "Golden hour candid shoot capturing the couple's intimate laughter and chemistry.",
  },
  {
    id: 5,
    title: "Vibrant Haldi & Mehendi Colors",
    category: "Candid & Rituals",
    location: "Royal Garden Resort",
    image: "/slides/slide-3.jpg",
    tag: "Rituals & Joy",
    desc: "Splash of yellow marigolds, pure laughter, and traditional rituals frozen in heartfelt stills.",
  },
  {
    id: 6,
    title: "Breathtaking Drone Aerials",
    category: "Drone Aerials",
    location: "Baraat Procession",
    image: "/slides/slide-1.jpg",
    tag: "4K Aerial",
    desc: "Spectacular bird's eye perspectives of the grand baraat, fireworks, and palace venue.",
  },
];

const filmReels = [
  {
    title: "Rohit & Anjali — The Royal Union",
    duration: "4:30 Min Film",
    views: "25k+ Views",
    type: "Cinematic 4K Teaser",
  },
  {
    title: "Aman & Priya — A Love Story in Bihar",
    duration: "6:15 Min Film",
    views: "42k+ Views",
    type: "Full Wedding Highlight",
  },
  {
    title: "Vikas & Sneha — Golden Hour Magic",
    duration: "3:40 Min Film",
    views: "18k+ Views",
    type: "Pre-Wedding Film",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All Work");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === "All Work"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#061733] text-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#102B55] to-[#061733] px-5 py-20 lg:px-10">
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#F5B53D]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-[#102B55]/60 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F5B53D]/40 bg-[#F5B53D]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F5B53D]">
            <Sparkles size={14} className="text-[#F5B53D]" />
            <span>Our Visual Masterpieces</span>
          </div>

          <h1 className="mt-5 font-serif text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Moments that become{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B53D] via-[#FFE39B] to-[#F5B53D]">
              Timeless Art
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
            Explore our curated collection of royal weddings, candid emotions,
            breathtaking pre-wedding stories, and cinematic films from Aastha Films Studio.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#F5B53D] text-[#061733] shadow-[0_4px_20px_rgba(245,181,61,0.4)] scale-105"
                    : "border border-white/15 bg-white/5 text-slate-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Portfolio Grid */}
      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0a1e3f]/80 shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-2 hover:border-[#F5B53D]/60"
              >
                {/* Poster Frame */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-black/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061733] via-transparent to-transparent opacity-60" />

                  {/* Badge */}
                  <span className="absolute left-3.5 top-3.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-semibold text-[#F5B53D] backdrop-blur-md">
                    {item.tag}
                  </span>

                  {/* Hover Quick Zoom Button */}
                  <button
                    type="button"
                    onClick={() => setSelectedImage(item)}
                    className="absolute right-3.5 top-3.5 grid h-9 w-9 place-items-center rounded-full bg-[#F5B53D] text-[#061733] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 hover:scale-110"
                    aria-label="View poster full size"
                  >
                    <Eye size={18} />
                  </button>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-[#F5B53D]">
                      <span>{item.category}</span>
                      <span className="text-slate-400">{item.location}</span>
                    </div>

                    <h3 className="mt-2 text-xl font-bold text-white transition group-hover:text-[#F5B53D]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-white/10 pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedImage(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F5B53D] hover:underline"
                    >
                      <span>Preview Full Poster</span>
                      <Eye size={14} />
                    </button>
                    <Link
                      to="/contact"
                      className="text-xs font-medium text-slate-400 hover:text-white"
                    >
                      Book Shoot →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Wedding Films Showcase */}
      <section className="border-t border-white/10 bg-[#091f44] px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5B53D]">
                4K Cinema Experience
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
                Cinematic Wedding Teasers & Films
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300">
                Crafted with cinematic grade color grading, high-end prime lenses, drone perspectives, and custom music design.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[#F5B53D] px-6 py-2.5 text-xs font-bold text-[#F5B53D] transition hover:bg-[#F5B53D] hover:text-[#061733]"
            >
              View Packages & Inquire <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filmReels.map((film, index) => (
              <div
                key={film.title}
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[#061733] p-5 shadow-xl transition hover:-translate-y-1 hover:border-[#F5B53D]/50"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#102B55] to-[#040e1f] grid place-items-center">
                  <img
                    src={`/slides/slide-${(index % 3) + 1}.jpg`}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-40 blur-xs transition group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Play Button */}
                  <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-[#F5B53D] text-[#061733] shadow-[0_0_25px_rgba(245,181,61,0.6)] transition group-hover:scale-110">
                    <Play size={22} className="ml-1 fill-[#061733]" />
                  </div>

                  <span className="absolute bottom-2.5 right-2.5 rounded bg-black/80 px-2 py-0.5 text-[11px] font-mono font-bold text-white">
                    {film.duration}
                  </span>
                </div>

                <div className="mt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5B53D]">
                    {film.type}
                  </span>
                  <h4 className="mt-1 font-serif text-lg font-bold text-white">
                    {film.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-400">
                    Full 4K Ultra HD • Drone Included • {film.views}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[92vh] max-w-5xl overflow-hidden rounded-2xl border-2 border-[#F5B53D] bg-[#061733] p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/70 text-white transition hover:bg-[#F5B53D] hover:text-[#061733]"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[75vh] w-auto object-contain mx-auto rounded-lg"
            />

            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-[#F5B53D]">
                {selectedImage.title}
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                {selectedImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
