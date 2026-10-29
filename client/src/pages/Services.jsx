import { Link } from "react-router-dom";
import {
  Camera,
  Film,
  Heart,
  Plane,
  Sparkles,
  BookOpen,
  Sliders,
  Tv,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const allServices = [
  {
    icon: <Camera size={30} className="text-[#F5B53D]" />,
    title: "Wedding Photography",
    subtitle: "Traditional & Candid Stills",
    desc: "Capturing rituals, blessings, families, emotional vidaai, and every sacred promise in crisp, vibrant detail.",
    features: [
      "Traditional family portraits",
      "Candid emotional moments",
      "Haldi, Mehendi & Sangeet coverage",
      "High-resolution edited digital gallery",
    ],
  },
  {
    icon: <Film size={30} className="text-[#F5B53D]" />,
    title: "4K Cinematic Wedding Films",
    subtitle: "Story-Driven Movie Experience",
    desc: "We turn your wedding into a cinematic masterpiece with Hollywood-grade color grading and soulful background music.",
    features: [
      "3-5 min Instagram cinematic teaser",
      "25-45 min full wedding movie highlight",
      "Professional audio recording of vows/mantras",
      "Cinematic slow-motion & storytelling",
    ],
  },
  {
    icon: <Heart size={30} className="text-[#F5B53D]" />,
    title: "Pre-Wedding Shoots",
    subtitle: "Romantic & Concept Themes",
    desc: "A relaxed, fun-filled romantic shoot at scenic locations to celebrate your love story before the wedding rush begins.",
    features: [
      "Multiple outfit & location changes",
      "Romantic cinematic video teaser",
      "Creative concept direction & posing guide",
      "Invitation card / save-the-date photo edits",
    ],
  },
  {
    icon: <Plane size={30} className="text-[#F5B53D]" />,
    title: "Drone Aerial Shoots",
    subtitle: "Breathtaking Bird's Eye View",
    desc: "Grand aerial perspectives of the baraat procession, firework displays, palace venues, and open-air ceremonies.",
    features: [
      "4K Ultra HD 60fps drone coverage",
      "Licensed and experienced drone pilot",
      "Grand venue and gathering scale shots",
      "Smooth sweeping cinematic movements",
    ],
  },
  {
    icon: <BookOpen size={30} className="text-[#F5B53D]" />,
    title: "Karizma & Canvera Album Design",
    subtitle: "Heirloom Luxury Albums",
    desc: "Custom-designed, flush-mount luxury albums with waterproof metallic, velvet, or leather finishes that last for generations.",
    features: [
      "Premium glossy / matte / metallic sheet options",
      "Custom personalized couple cover with gold foil",
      "Storybook narrative layout design",
      "Lifetime durability & protective briefcase box",
    ],
  },
  {
    icon: <Sliders size={30} className="text-[#F5B53D]" />,
    title: "Gimbal & Steadicam Motion",
    subtitle: "Ultra-Smooth Dynamic Shots",
    desc: "Using industry-standard DJI Ronin gimbals to capture walking shots, dance performances, and dramatic couple entries.",
    features: [
      "DJI Ronin gimbal stabilization",
      "360-degree dynamic camera rotations",
      "High-energy dance floor coverage",
      "Seamless moving one-take sequences",
    ],
  },
  {
    icon: <Tv size={30} className="text-[#F5B53D]" />,
    title: "Live LED Wall Mixing & Crane",
    subtitle: "Grand Event Broadcasting",
    desc: "Multi-camera setup with live switcher mixing directly telecast on huge LED walls and jumbotrons at your wedding venue.",
    features: [
      "Multi-camera live video switching",
      "High-reach hydraulic jimmy jib crane",
      "Real-time telecast to venue LED screens",
      "Live YouTube / Facebook streaming option",
    ],
  },
];

const packages = [
  {
    name: "Classic Wedding Package",
    tagline: "Ideal for intimate and standard weddings",
    price: "Custom Quote",
    popular: false,
    perks: [
      "1 Traditional Photographer",
      "1 Traditional Videographer",
      "Complete Wedding & Reception coverage",
      "Full edited video (Pen Drive)",
      "1 Standard Karizma Album (30 sheets)",
    ],
  },
  {
    name: "Royal Cinematic Package",
    tagline: "Our most popular package for grand weddings",
    price: "Best Value",
    popular: true,
    perks: [
      "2 Candid & Traditional Photographers",
      "2 Cinematic Videographers (Gimbal setup)",
      "1 Professional 4K Drone Pilot",
      "3-5 Min 4K Cinematic Teaser Film",
      "Full length wedding documentary film",
      "2 Premium Heirloom Albums (40 sheets each)",
      "Haldi & Mehendi coverage included",
    ],
  },
  {
    name: "Diamond Destination Suite",
    tagline: "All-inclusive luxury celebrity style coverage",
    price: "Premium",
    popular: false,
    perks: [
      "Full 5-member Master Crew (Candid, Drone, Gimbal)",
      "Dedicated Pre-Wedding shoot with video trailer",
      "Complete 3-day festivities (Sangeet, Haldi, Wedding)",
      "4K Ultra HD Drone + Jimmy Jib Crane",
      "Instant next-day Instagram Reels",
      "3 Luxury Velvet Leather Albums + Parent Minis",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#061733] text-white">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#102B55] to-[#061733] px-5 py-20 lg:px-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#F5B53D]/15 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F5B53D]/40 bg-[#F5B53D]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F5B53D]">
            <Sparkles size={14} className="text-[#F5B53D]" />
            <span>Complete Wedding Solutions</span>
          </div>

          <h1 className="mt-5 font-serif text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Our Photography &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B53D] via-[#FFE39B] to-[#F5B53D]">
              Filmmaking Services
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            From traditional ceremonies to 4K cinematic storytelling and aerial drone perspectives,
            Aastha Films Studio provides total wedding media production under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service) => (
              <div
                key={service.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#F5B53D]/60 hover:bg-white/[0.08]"
              >
                <div>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#F5B53D]/40 bg-[#061733] shadow-md group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5B53D]">
                    {service.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {service.desc}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6 text-xs text-slate-300">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-[#F5B53D] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-white/10 pt-4">
                  <a
                    href="https://wa.me/918539847172"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#F5B53D] transition group-hover:translate-x-1"
                  >
                    <span>Inquire for this service</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Packages Section */}
      <section className="border-t border-white/10 bg-[#071b3d] px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5B53D]">
              Transparent & Flexible
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Curated Wedding Packages
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
              Choose the package that aligns with your dream wedding celebration. Custom packages also available!
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3 items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition duration-300 ${
                  pkg.popular
                    ? "border-2 border-[#F5B53D] bg-gradient-to-b from-[#102B55] to-[#081836] shadow-[0_15px_60px_rgba(245,181,61,0.25)] scale-105 z-10"
                    : "border border-white/15 bg-white/5 shadow-xl hover:border-white/30"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#F5B53D] px-4 py-1 text-xs font-black uppercase tracking-wider text-[#061733] shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300">{pkg.tagline}</p>

                  <div className="mt-6 rounded-2xl bg-black/30 p-4 border border-white/10">
                    <span className="text-xs font-semibold text-slate-400">Booking Tier</span>
                    <p className="text-2xl font-extrabold text-[#F5B53D]">{pkg.price}</p>
                  </div>

                  <ul className="mt-6 space-y-3 text-xs sm:text-sm text-slate-200">
                    {pkg.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-[#F5B53D] shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="https://wa.me/918539847172"
                    target="_blank"
                    rel="noreferrer"
                    className={`flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold transition ${
                      pkg.popular
                        ? "bg-[#F5B53D] text-[#061733] shadow-lg hover:scale-105 hover:bg-[#ffc65c]"
                        : "border border-white/30 bg-white/10 text-white hover:bg-white hover:text-[#061733]"
                    }`}
                  >
                    <MessageCircle size={17} />
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Gear Showcase */}
      <section className="px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/15 bg-gradient-to-r from-[#102B55] to-[#071936] p-8 sm:p-12 text-center shadow-2xl">
          <Camera size={44} className="mx-auto text-[#F5B53D]" />
          <h2 className="mt-4 font-serif text-3xl font-bold">
            Cinema-Grade Equipment For Flawless Quality
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
            We don&apos;t compromise on quality. Our kit includes 4K Sony Full-Frame cinema cameras, Sony G-Master prime lenses, DJI Ronin 3-axis gimbals, DJI 4K camera drones, and studio sound gear.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-semibold text-slate-200">
            <span className="rounded-full bg-white/10 px-4 py-2 border border-white/15">Sony FX3 & A7 Series</span>
            <span className="rounded-full bg-white/10 px-4 py-2 border border-white/15">DJI Ronin RS3 Gimbal</span>
            <span className="rounded-full bg-white/10 px-4 py-2 border border-white/15">DJI 4K Drone</span>
            <span className="rounded-full bg-white/10 px-4 py-2 border border-white/15">Godox Strobes & Softboxes</span>
            <span className="rounded-full bg-white/10 px-4 py-2 border border-white/15">Sennheiser Audio</span>
          </div>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#F5B53D] px-7 py-3.5 text-sm font-bold text-[#061733] hover:scale-105 transition"
            >
              Book Your Wedding Dates Now <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
