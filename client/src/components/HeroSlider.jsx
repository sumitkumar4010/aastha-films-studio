import { useEffect, useState } from "react";
import { Camera, ChevronLeft, ChevronRight, Sparkles, MapPin } from "lucide-react";

const slides = [
  {
    src: "/slides/slide-1.jpg",
    title: "Royal Jaimala Ceremony",
    category: "Wedding Rituals",
    location: "Royal Heritage Stage",
    alt: "Royal Indian wedding couple during Jaimala garland exchange ceremony",
  },
  {
    src: "/slides/slide-2.jpg",
    title: "Lakeside Romance",
    category: "Pre-Wedding Cinema",
    location: "Lake Palace, Udaipur",
    alt: "Cinematic pre-wedding shoot of couple at sunset in Udaipur lake",
  },
  {
    src: "/slides/slide-3.jpg",
    title: "Vibrant Haldi Festivities",
    category: "Candid Emotions",
    location: "Marigold Floral Court",
    alt: "Joyful bride and groom laughing during Haldi marigold flower shower",
  },
  {
    src: "/slides/slide-4.jpg",
    title: "Grand Royal Baraat Entry",
    category: "Night Procession",
    location: "Cold Pyro Spark Show",
    alt: "Grand royal baraat night entry on elephant with cold pyro fireworks",
  },
    {
    src: "/slides/slide-5.jpg",
    title: "Elegant Mehndi Night",
    category: "Candid Emotions",
    location: "Traditional Mehndi Celebration",
    alt: "Joyful bride and groom laughing during Haldi marigold flower shower",
  },
];

function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <div
      className="relative flex aspect-[16/10.5] sm:aspect-auto h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[490px] w-full flex-col overflow-hidden rounded-[30px] border-2 border-[#F5B53D]/80 bg-[#061733] p-2 shadow-[0_25px_70px_rgba(0,0,0,0.5)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[22px] border border-white/20 bg-[#061733]">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              {/* Fallback background */}
              <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-[#102B55] to-[#061733] text-white/50">
                <div className="text-center">
                  <Camera className="mx-auto mb-3 text-[#F5B53D]" size={34} />
                  <p className="text-sm font-semibold">{slide.title}</p>
                </div>
              </div>

              {/* Full Cinematic Wedding Photo */}
              <img
                src={slide.src}
                alt={slide.alt}
                className={`h-full w-full object-cover transition-transform duration-[6000ms] ease-out select-none ${
                  isActive ? "scale-105" : "scale-100"
                }`}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              {/* Multi-layered Vignette & Dark Gradients for Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

              {/* Slide Caption Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-1.5 sm:bottom-7 sm:left-7 text-left pointer-events-none">
                <div className="inline-flex items-center gap-1.5 self-start rounded-full border border-[#F5B53D]/50 bg-black/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#F5B53D] backdrop-blur-md">
                  <Sparkles size={12} className="text-[#F5B53D]" />
                  <span>{slide.category}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-extrabold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  {slide.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-300 drop-shadow">
                  <MapPin size={13} className="text-[#F5B53D]" />
                  <span>{slide.location}</span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Previous Button */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous photo"
          className="absolute left-3.5 top-1/2 z-30 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-[#F5B53D]/80 bg-[#061733]/80 text-[#F5B53D] shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:bg-[#F5B53D] hover:text-[#102B55] active:scale-95"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next photo"
          className="absolute right-3.5 top-1/2 z-30 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-[#F5B53D]/80 bg-[#061733]/80 text-[#F5B53D] shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:bg-[#F5B53D] hover:text-[#102B55] active:scale-95"
        >
          <ChevronRight size={22} />
        </button>

        {/* Slide Indicator Dots in a Glass Pill */}
        <div className="absolute bottom-3 right-6 z-30 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 backdrop-blur-md shadow-lg">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.src}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? "w-7 bg-[#F5B53D] shadow-[0_0_10px_rgba(245,181,61,0.9)]"
                  : "w-2 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;