import { useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  Send,
  CheckCircle2,
} from "lucide-react";

function InstagramIcon({ size = 22, className = "" }) {
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    eventType: "Wedding",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct WhatsApp pre-filled message
    const text = `*New Wedding Booking Inquiry - Aastha Films Studio*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Event Type:* ${encodeURIComponent(formData.eventType)}%0A` +
      `*Event Date:* ${encodeURIComponent(formData.date || "Not specified")}%0A` +
      `*Location/City:* ${encodeURIComponent(formData.location)}%0A` +
      `*Requirements/Message:* ${encodeURIComponent(formData.message || "Looking for wedding package details")}`;

    const whatsappUrl = `https://wa.me/918539847172?text=${text}`;
    
    setSubmitted(true);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#061733] text-white">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#102B55] to-[#061733] px-5 py-20 lg:px-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#F5B53D]/15 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F5B53D]/40 bg-[#F5B53D]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F5B53D]">
            <Sparkles size={14} className="text-[#F5B53D]" />
            <span>Get In Touch</span>
          </div>

          <h1 className="mt-5 font-serif text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Book Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B53D] via-[#FFE39B] to-[#F5B53D]">
              Wedding Dates
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Dates fill up quickly during peak wedding season. Reach out today to check availability, discuss custom packages, or visit our studio in Gidhaur, Jamui.
          </p>
        </div>
      </section>

      {/* Main Content: Info & Inquiry Form */}
      <section className="px-5 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Info Cards (5 Cols) */}
          <div className="space-y-6 lg:col-span-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5B53D]">
                Direct Contact
              </p>
              <h2 className="mt-1 font-serif text-3xl font-bold text-white">
                Let&apos;s Connect
              </h2>
              <p className="mt-2 text-xs text-slate-300">
                You can call us directly or drop a message on WhatsApp for instant replies.
              </p>
            </div>

            {/* Phone Card */}
            <a
              href="tel:+918539847172"
              className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-[#F5B53D] hover:bg-white/10"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#F5B53D] text-[#061733] transition group-hover:scale-110">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-xs text-slate-400">Call Us Anytime</p>
                <p className="font-sans text-lg font-bold text-white group-hover:text-[#F5B53D]">
                  +91 8539847172
                </p>
                <p className="text-[11px] text-slate-400">Prop. Sujit Raaz</p>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/918539847172"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-emerald-400/40 bg-emerald-500/10 p-5 transition hover:-translate-y-1 hover:border-[#25D366] hover:bg-[#25D366]/20"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#25D366] text-[#061733] transition group-hover:scale-110">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-xs text-emerald-400">WhatsApp Instant Chat</p>
                <p className="font-sans text-lg font-bold text-white">
                  Chat on WhatsApp
                </p>
                <p className="text-[11px] text-slate-300">Click to discuss packages & dates</p>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href="https://www.instagram.com/aastha__films?exln=NGlxNjdkNWdiNTB3"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-pink-400/30 bg-pink-500/10 p-5 transition hover:-translate-y-1 hover:border-pink-400 hover:bg-pink-500/20"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white transition group-hover:scale-110">
                <InstagramIcon size={22} />
              </div>
              <div>
                <p className="text-xs text-pink-300">Follow Our Work</p>
                <p className="font-sans text-lg font-bold text-white">
                  @aastha_films_studio
                </p>
                <p className="text-[11px] text-slate-300">Watch our latest wedding reels</p>
              </div>
            </a>

            {/* Studio Address Card */}
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-[#F5B53D]">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Studio Location</p>
                  <p className="font-serif text-base font-bold text-white">
                    Aastha Films Studio
                  </p>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                    Main Road, Gidhaur, Jamui, Bihar — 811305
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-3 text-xs text-slate-400">
                <Clock size={15} className="text-[#F5B53D]" />
                <span>Open 7 Days: 9:00 AM – 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form (7 Cols) */}
          <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#102B55] to-[#071936] p-7 sm:p-10 shadow-2xl lg:col-span-7">
            <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              Check Date Availability & Quote
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Fill this quick form and click send. It will directly connect with Sujit Raaz on WhatsApp with your complete event details!
            </p>

            {submitted && (
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/20 p-4 text-xs font-semibold text-emerald-300">
                <CheckCircle2 size={18} className="shrink-0 text-emerald-400" />
                <span>Inquiry drafted! Redirecting to WhatsApp...</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-300">
                    Your Name / Couple Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Rahul & Pooja"
                    className="mt-1.5 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#F5B53D] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="e.g. 9876543210"
                    className="mt-1.5 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#F5B53D] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-300">
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) =>
                      setFormData({ ...formData, eventType: e.target.value })
                    }
                    className="mt-1.5 w-full rounded-xl border border-white/20 bg-[#061733] px-4 py-3 text-sm text-white focus:border-[#F5B53D] focus:outline-none"
                  >
                    <option value="Wedding & Reception">Wedding & Reception</option>
                    <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                    <option value="Ring Ceremony / Tilak">Ring Ceremony / Tilak</option>
                    <option value="Haldi & Mehendi">Haldi & Mehendi</option>
                    <option value="Birthday / Mundan">Birthday / Mundan Ceremony</option>
                    <option value="Other Commercial / Event">Other Event</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="mt-1.5 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-sm text-white focus:border-[#F5B53D] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300">
                  Event Venue / City *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  placeholder="e.g. Jamui / Gidhaur / Patna"
                  className="mt-1.5 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#F5B53D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300">
                  Any specific requirements (Drone, Candid, Albums, etc.)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us what you are looking for..."
                  className="mt-1.5 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#F5B53D] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F5B53D] via-[#ffd066] to-[#e5a024] py-4 text-base font-extrabold text-[#061733] shadow-[0_8px_25px_rgba(245,181,61,0.35)] transition-all hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(245,181,61,0.5)] active:scale-95"
              >
                <span>Send Inquiry On WhatsApp</span>
                <Send size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
