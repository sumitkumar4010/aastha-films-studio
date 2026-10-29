import { Link } from "react-router-dom";
import {
  ArrowRight,
  Camera,
  Clapperboard,
  Heart,
  MessageCircle,
  Plane,
  Sparkles,
  Eye,
  CheckCircle2,
} from "lucide-react";
import Antigravity from "../components/Antigravity";
import HeroSlider from "../components/HeroSlider";

function Home() {
  const services = [
    {
      icon: <Camera size={28} />,
      title: "Wedding Photography",
      text: "Every ritual and emotion is captured in beautiful, timeless frames.",
    },
    {
      icon: <Heart size={28} />,
      title: "Candid Photography",
      text: "Natural smiles, real tears, and authentic joyous moments.",
    },
    {
      icon: <Clapperboard size={28} />,
      title: "Cinematic Films",
      text: "We turn your wedding story into a cinematic 4K masterpiece.",
    },
    {
      icon: <Plane size={28} />,
      title: "Drone Shoots",
      text: "Grand bird's eye aerial shots for baraat and royal venues.",
    },
  ];

  const featuredWork = [
    {
      title: "Royal Grand Wedding",
      category: "Weddings",
      image: "/slides/slide-1.jpg",
      tag: "Featured Wedding",
    },
    {
      title: "Signature Studio Branding",
      category: "Films & Design",
      image: "/slides/slide-2.jpg",
      tag: "Cinematic",
    },
    {
      title: "Grand Wedding Saga",
      category: "Complete Story",
      image: "/slides/slide-3.jpg",
      tag: "Masterpiece",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-[#fff9ef] text-[#102B55]">
      <main>
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative overflow-hidden bg-[#061733] px-5 py-12 text-white lg:px-10 lg:py-16"
        >
          {/* Antigravity Interactive Canvas Background */}
          <div className="absolute inset-0 opacity-100">
            <Antigravity
              colors={["#102B55", "#F5B53D", "#FFFFFF"]}
              count={1500}
              magnetRadius={9}
              ringRadius={7}
              particleSize={0.9}
              autoAnimate
              colorMode="conic"
              colorSpeed={0.05}
              particleShape="capsule"
              particleVariance={1}
              fieldStrength={10}
              waveAmplitude={1}
              waveCount={3}
              waveSpeed={0.4}
              rotationSpeed={0}
              pulseSpeed={3}
              depthFactor={1}
              ambient={0.25}
              lerpSpeed={0.05}
              interactive
              clickBurst
              intro
              lightMode={false}
            />
          </div>

          <div className="relative z-10 mx-auto grid max-w-7xl items-stretch gap-8 lg:grid-cols-2">
            {/* Left Box: Aastha Films Studio with Dual-Frame & Glow */}
            <div className="relative flex h-full min-h-[440px] sm:min-h-[460px] lg:min-h-[480px] w-full flex-col justify-between overflow-hidden rounded-[30px] border-2 border-[#F5B53D]/80 bg-[#061733] p-2 shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
              <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[22px] border border-white/20 bg-gradient-to-br from-[#0c244d]/90 via-[#061733]/95 to-[#041024]/95 p-6 backdrop-blur-xl sm:p-8 lg:p-9">
                {/* Ambient Glow Orbs */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#F5B53D]/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[#102B55]/60 blur-3xl" />

                <div className="relative z-10">
                  {/* Tagline Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#F5B53D]/40 bg-[#F5B53D]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F5B53D] backdrop-blur-sm">
                    <Sparkles size={13} className="animate-pulse text-[#F5B53D]" />
                    <span>Cinematic Wedding Studio</span>
                  </div>

                  {/* Main Studio Title */}
                  <div className="mt-3.5">
                    <p className="font-sans text-[clamp(1.75rem,3.8vw,2.75rem)] font-extrabold leading-none tracking-tight text-[#F5B53D] drop-shadow-sm">
                      AASTHA FILMS <span className="text-white">STUDIO</span>
                    </p>
                  </div>

                  {/* Tagline Heading */}
                  <h1 className="mt-3.5 font-serif text-xl font-bold leading-tight text-white sm:text-2xl lg:text-[1.85rem]">
                    Every wedding has a story.
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F5B53D] via-[#FFE39B] to-[#F5B53D]">
                      We capture it forever.
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="mt-3.5 max-w-xl text-xs leading-relaxed text-slate-300 sm:text-sm sm:leading-6">
                    Wedding photography, candid shoots, cinematic films, drone coverage and
                    luxurious heirloom album design for your most cherished day.
                  </p>

                  {/* Studio Highlights */}
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-200/90">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F5B53D]" /> 500+ Weddings
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F5B53D]" /> 4K Ultra Cinematic
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F5B53D]" /> Drone Shoots
                    </span>
                  </div>
                </div>

                {/* Interactive Action Buttons with Rich Effects */}
                <div className="relative z-10 mt-6 flex flex-wrap items-center gap-3.5 pt-2">
                  {/* Button 1: View Our Work -> Links to /portfolio */}
                  <Link
                    to="/portfolio"
                    className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#F5B53D] via-[#ffd066] to-[#e5a024] px-6 py-3.5 text-sm font-extrabold text-[#061733] shadow-[0_8px_25px_rgba(245,181,61,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(245,181,61,0.6)] active:translate-y-0 active:scale-95"
                  >
                    {/* Shimmer light sweep reflection */}
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

                    <span className="relative z-10 font-bold tracking-wide">View Our Work</span>
                    <ArrowRight
                      size={17}
                      className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                    />
                  </Link>

                  {/* Button 2: WhatsApp Us */}
                  <a
                    href="https://wa.me/918539847172"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full border border-emerald-400/50 bg-emerald-500/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:bg-[#25D366] hover:text-[#061733] hover:shadow-[0_12px_35px_rgba(37,211,102,0.45)] active:translate-y-0 active:scale-95"
                  >
                    {/* Shimmer light sweep reflection */}
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

                    {/* Live radar pulsing indicator */}
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 transition-colors group-hover:bg-[#061733]" />
                    </span>

                    <MessageCircle
                      size={18}
                      className="relative z-10 text-emerald-400 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-[#061733]"
                    />
                    <span className="relative z-10 tracking-wide">WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Box: Hero Poster Slider */}
            <HeroSlider />
          </div>
        </section>

        {/* PORTFOLIO HIGHLIGHT SECTION */}
        <section id="portfolio" className="bg-white px-5 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b7791f]">
                  OUR PORTFOLIO
                </p>
                <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
                  Moments That Stay With You
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
                  Pre-wedding romance, vibrant haldi-mehendi rituals, grand reception evenings, and emotional wedding vidaai captured across Bihar.
                </p>
              </div>

              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-[#102B55] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#F5B53D] hover:text-[#061733]"
              >
                Explore Full Gallery <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredWork.map((item) => (
                <div
                  key={item.title}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#061733]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3.5 top-3.5 rounded-full bg-[#102B55]/90 px-3 py-1 text-xs font-bold text-[#F5B53D] backdrop-blur-md">
                      {item.tag}
                    </span>
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#b7791f]">
                      {item.category}
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-[#102B55]">
                      {item.title}
                    </h3>
                    <div className="mt-4 border-t border-slate-100 pt-3">
                      <Link
                        to="/portfolio"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102B55] hover:text-[#b7791f]"
                      >
                        <span>View Portfolio Page</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section
          id="services"
          className="bg-[#102B55] px-5 py-20 text-white lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5B53D]">
                  WHAT WE OFFER
                </p>
                <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
                  Complete Wedding Coverage
                </h2>
                <p className="mt-3 max-w-2xl text-base text-white/80">
                  From traditional ceremonies to 4K cinematic storytelling, drone shots, and heirloom albums.
                </p>
              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-[#F5B53D] px-6 py-3 text-sm font-bold text-[#061733] transition hover:bg-[#ffc65c]"
              >
                All Packages & Pricing <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-white/15 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-[#F5B53D]/50"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5B53D] text-[#102B55] shadow-md">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold">{service.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {service.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT PREVIEW SECTION */}
        <section id="about" className="px-5 py-20 lg:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b7791f]">
                ABOUT THE STUDIO
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl text-[#102B55]">
                Aastha Films Studio
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Led by <strong className="text-[#102B55]">Sujit Raaz</strong> in Gidhaur, Jamui (Bihar), we specialize in wedding photography and filmmaking that preserves real family emotions for generations to come.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b7791f]" /> 500+ Weddings Done
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b7791f]" /> 8+ Years of Trust
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b7791f]" /> Sony & DJI 4K Gear
                </span>
              </div>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#102B55] px-6 py-3 text-sm font-bold text-[#102B55] transition hover:bg-[#102B55] hover:text-white"
                >
                  Read Studio Story & Founder <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border-2 border-[#F5B53D] bg-[#061733] p-2 shadow-2xl">
              <img
                src="/poster.jpg"
                alt="Aastha Films Studio Banner"
                className="w-full object-contain rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* CALL TO ACTION SECTION */}
        <section id="contact" className="bg-[#F5B53D] px-5 py-16 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#102B55]/80">
                LET&apos;S CREATE MEMORIES
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#102B55] sm:text-4xl">
                Ready to book your wedding shoot?
              </h2>
              <p className="mt-1 text-sm font-medium text-[#102B55]/85">
                Check date availability & package pricing in just a click.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-[#102B55] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#061733]"
              >
                Open Booking Form
              </Link>
              <a
                href="https://wa.me/918539847172"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border-2 border-[#102B55] px-6 py-3.5 font-bold text-[#102B55] transition hover:bg-[#102B55] hover:text-white"
              >
                <MessageCircle size={18} />
                WhatsApp: 8539847172
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;