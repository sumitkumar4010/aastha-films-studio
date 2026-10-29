import { Link } from "react-router-dom";
import {
  Camera,
  Heart,
  Award,
  Users,
  Clock,
  Sparkles,
  CheckCircle2,
  MapPin,
  Phone,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const stats = [
  { value: "500+", label: "Weddings Captured", desc: "Across Bihar, Jharkhand & beyond" },
  { value: "8+", label: "Years Experience", desc: "Mastering wedding photography & cinema" },
  { value: "100%", label: "Happy Couples", desc: "Dedicated to emotional storytelling" },
  { value: "4K UHD", label: "Cinema Standards", desc: "Using Sony FX & DJI Drone systems" },
];

const values = [
  {
    icon: <Heart size={26} className="text-[#F5B53D]" />,
    title: "Emotions Over Forced Poses",
    text: "We believe the most beautiful wedding memories are unscripted — genuine tears of parents, nervous laughter of the bride, and joyful dance of friends.",
  },
  {
    icon: <Camera size={26} className="text-[#F5B53D]" />,
    title: "Cinematic Visual Art",
    text: "Every video we edit feels like a feature film trailer. From rich warm color grading to custom acoustic audio, we preserve your legacy with pride.",
  },
  {
    icon: <Award size={26} className="text-[#F5B53D]" />,
    title: "Crafted Heirloom Albums",
    text: "Our physical photo books are made from archival-grade paper and handcrafted covers, built to be passed down through generations.",
  },
  {
    icon: <Clock size={26} className="text-[#F5B53D]" />,
    title: "Punctual Delivery & Care",
    text: "We respect your excitement. Our dedicated post-production team delivers your teasers, photos, and albums within agreed timelines.",
  },
];

const testimonials = [
  {
    quote: "Aastha Films Studio made our wedding look like a Bollywood movie! Sujit ji and his crew were so calm and captured every ritual beautifully without interfering.",
    couple: "Abhishek & Neha",
    location: "Jamui",
  },
  {
    quote: "The drone shots and candid photos of our haldi ceremony were unbelievable. Every family member was praising the album quality!",
    couple: "Rohan & Sneha",
    location: "Patna",
  },
  {
    quote: "Best wedding photographer in Bihar hands down. The teaser they gave us got thousands of views on Instagram!",
    couple: "Gaurav & Pooja",
    location: "Gidhaur",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#061733] text-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#102B55] to-[#061733] px-5 py-20 lg:px-10">
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#F5B53D]/15 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F5B53D]/40 bg-[#F5B53D]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F5B53D]">
            <Sparkles size={14} className="text-[#F5B53D]" />
            <span>Our Journey & Craft</span>
          </div>

          <h1 className="mt-5 font-serif text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Passionate About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B53D] via-[#FFE39B] to-[#F5B53D]">
              Your Story
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            We are Aastha Films Studio, a premier wedding photography and cinematic production house dedicated to turning wedding rituals into unforgettable heirlooms.
          </p>
        </div>
      </section>

      {/* Stats Counter Row */}
      <section className="border-b border-white/10 bg-[#071938] px-5 py-12 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
              >
                <p className="font-sans text-4xl font-black text-[#F5B53D]">
                  {s.value}
                </p>
                <p className="mt-1 font-serif text-lg font-bold text-white">
                  {s.label}
                </p>
                <p className="mt-1 text-xs text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder & Studio Story */}
      <section className="px-5 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* Left Poster / Studio Photo */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#F5B53D]/80 bg-[#061733] p-2 shadow-2xl">
            <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-[#102B55] to-[#040f21]">
              <img
                src="/slides/slide-1.jpg"
                alt="Aastha Films Studio Poster"
                className="w-full object-contain p-2"
              />
            </div>
            <div className="mt-3 p-4 text-center">
              <p className="font-serif text-xl font-bold text-[#F5B53D]">
                Sujit Raaz
              </p>
              <p className="text-xs text-slate-300">
                Founder & Lead Cinematographer, Aastha Films Studio
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-semibold text-[#F5B53D]">
              <Users size={14} />
              <span>Meet The Studio</span>
            </div>

            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl text-white">
              Every Wedding Has A Story.{" "}
              <span className="text-[#F5B53D]">We Capture It Forever.</span>
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300">
              <p>
                Based in <strong className="text-white">Gidhaur, Jamui (Bihar)</strong>, Aastha Films Studio was founded with a singular mission: to offer wedding couples world-class cinematic coverage and photography without missing the warmth of Indian cultural roots.
              </p>
              <p>
                Led by <strong className="text-white">Sujit Raaz</strong>, our team of passionate photographers, drone pilots, and editors have spent nearly a decade documenting grand processions, sentimental rituals, and intimate smiles.
              </p>
              <p>
                Whether it is a royal palace destination wedding, an outdoor sunset pre-wedding shoot, or a traditional hometown celebration, we treat every ceremony with the deep care and artistry it deserves.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-[#F5B53D] px-6 py-3 text-sm font-bold text-[#061733] transition hover:scale-105"
              >
                View Our Portfolio <ArrowRight size={17} />
              </Link>
              <a
                href="https://wa.me/918539847172"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <MessageCircle size={18} />
                WhatsApp: 8539847172
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="border-t border-white/10 bg-[#081b3c] px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5B53D]">
              What Drives Us
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
              Our Artistic Philosophy
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-md transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="mb-4 inline-block rounded-xl bg-white/10 p-3">
                  {v.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  {v.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-300">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5B53D]">
              Client Love
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
              Words From Our Happy Couples
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.couple}
                className="relative flex flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-7 shadow-lg"
              >
                <p className="italic text-sm text-slate-300 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-[#F5B53D]">
                      {t.couple}
                    </h4>
                    <span className="text-xs text-slate-400">{t.location}</span>
                  </div>
                  <div className="flex text-[#F5B53D]">
                    {"★".repeat(5)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
