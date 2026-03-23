import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { useParallax } from "@/hooks/useParallax";

const heroPhotos = [
  { src: "/raushani-profile.jpg", position: "top-[10%] left-[5%] md:left-[8%]", z: -20, delay: 0 },
  { src: "/hero-img-1.jpeg", position: "top-[20%] right-[3%] md:right-[6%]", z: -40, delay: -2 },
  { src: "/hero-img-2.jpeg", position: "bottom-[20%] left-[2%] md:left-[5%]", z: -10, delay: -4 },
  { src: "/hero-img-3.jpeg", position: "bottom-[15%] right-[2%] md:right-[10%]", z: -30, delay: -6 },
];

// Different parallax speeds per 3D card for deep depth
const photoSpeeds = [0.12, -0.08, 0.15, -0.05];

const HeroSection = () => {
  const bgOffset = useParallax(0.25);
  const contentOffset = useParallax(0.12);
  const particleOffset = useParallax(0.18);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-20 pb-24">
      {/* Dark Vignette Parallax gradient background layer to make glowing elements pop */}
      <div
        className="absolute inset-0 bg-background will-change-transform"
        style={{ transform: `translateY(${bgOffset * 0.4}px) scale(1.1)` }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--foreground)/0.03)_100%)]" />
      </div>

      {/* Decorative gradient orbs with parallax */}
      <div
        className="absolute top-[-5%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-25 will-change-transform mix-blend-screen blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)), transparent 70%)",
          transform: `translateY(${bgOffset * -0.3}px)`,
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-20 will-change-transform mix-blend-screen blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent)), transparent 70%)",
          transform: `translateY(${bgOffset * -0.5}px)`,
        }}
      />

      {/* Particles with parallax */}
      <div
        className="absolute inset-0 will-change-transform pointer-events-none"
        style={{ transform: `translateY(${particleOffset * -0.6}px)` }}
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="particle bg-primary/30"
            style={{
              left: `${8 + ((i * 37 + 13) % 84)}%`,
              top: `${8 + ((i * 53 + 7) % 84)}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + (i % 4) * 1.5}s`,
              width: `${3 + (i % 3) * 1.5}px`,
              height: `${3 + (i % 3) * 1.5}px`,
            }}
          />
        ))}
      </div>

      {/* 3D Floating Photo Gallery */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none [perspective:2000px]">
        {heroPhotos.map((photo, i) => (
          <div
            key={i}
            className={`absolute z-10 ${photo.position} will-change-transform`}
            style={{ 
              transform: `translateZ(${photo.z}px) translateY(${bgOffset * photoSpeeds[i] * 10}px)` 
            }}
          >
            <div 
              className="relative rounded-2xl overflow-hidden glass-card border-white/10 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-float-3d"
              style={{ animationDelay: `${photo.delay}s` }}
            >
              <img 
                src={photo.src} 
                alt="Fellowship moment" 
                className="w-48 md:w-56 h-auto rounded-xl object-cover grayscale-[0.3] opacity-80 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 rounded-xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Center content with slower parallax (stays grounded) */}
      <div
        className="relative z-20 text-center px-4 max-w-4xl mx-auto will-change-transform w-full"
        style={{ transform: `translateY(${contentOffset * -0.5}px)` }}
      >
        <div className="animate-reveal inline-block mb-8" style={{ animationDelay: "100ms" }}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <img
              src={logo}
              alt="Kshamtalaya logo"
              className="relative w-20 h-20 mx-auto rounded-2xl shadow-xl object-cover border-2 border-white/10"
            />
          </div>
        </div>

        {/* Main Event Title */}
        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.05] animate-reveal drop-shadow-sm"
          style={{ animationDelay: "200ms" }}
        >
          <span className="text-foreground">iDiscover</span>
          <br className="hidden sm:block" />
          <span className="text-gradient drop-shadow-[0_0_20px_hsl(var(--primary)/0.3)]"> Fellowship</span>
        </h1>

        {/* Hindi Tagline - Elegant Cursive glow */}
        <div className="mt-6 mb-8 relative animate-reveal" style={{ animationDelay: "350ms" }}>
          <p className="text-2xl sm:text-4xl text-foreground font-semibold tracking-wide drop-shadow-md pb-1">
            सफर <span className="text-primary italic font-serif opacity-90 mx-1">एक</span> प्रेरणा का
          </p>
          <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-[1px]"></div>
        </div>

        {/* Subtitle Message */}
        <p
          className="mt-6 text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-reveal font-medium leading-relaxed"
          style={{ animationDelay: "450ms" }}
        >
          यह सिर्फ शिक्षा नहीं, बदलाव की कहानी है
        </p>

        {/* Sleek Stats Pill Container */}
        <div className="mt-10 mb-12 animate-reveal flex justify-center" style={{ animationDelay: "550ms" }}>
          <div className="glass-card py-3 px-6 rounded-full border border-primary/20 bg-background/40 backdrop-blur-xl shadow-[0_0_30px_hsl(var(--primary)/0.15)] inline-flex items-center gap-2 sm:gap-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
            <span className="relative z-10 text-xs sm:text-sm font-bold tracking-widest uppercase text-foreground">
              13 Fellows
            </span>
            <span className="relative z-10 text-primary/40">•</span>
            <span className="relative z-10 text-xs sm:text-sm font-bold tracking-widest uppercase text-foreground">
              70 Schools
            </span>
            <span className="relative z-10 text-primary/40">•</span>
            <span className="relative z-10 text-xs sm:text-sm font-bold uppercase text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]">
              हज़ारों ज़िंदगियाँ बदली
            </span>
          </div>
        </div>

        {/* Call To Action */}
        <div className="animate-reveal" style={{ animationDelay: "650ms" }}>
          <button
            className="group relative px-8 py-4 bg-foreground text-background font-bold text-sm sm:text-base rounded-full
              shadow-[0_4px_24px_hsl(var(--foreground)/0.2)]
              transition-all duration-300 ease-out
              hover:shadow-[0_8px_40px_hsl(var(--foreground)/0.3)] hover:scale-105 active:scale-[0.97]
              inline-flex items-center gap-3 overflow-hidden"
          >
            {/* CTA Hover Sheen */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none skew-x-12" />
            
            <span className="relative z-10">Explore Journey</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
      
      {/* Mobile-only static images below the fold */}
      <div className="sm:hidden absolute bottom-2 left-0 right-0 flex justify-center gap-4 px-4 overflow-x-auto pb-4 z-10">
         {heroPhotos.slice(0, 2).map((photo, i) => (
           <img 
             key={i}
             src={photo.src} 
             alt="mobile hero" 
             className="w-32 h-24 rounded-lg object-cover shadow-lg border border-white/10"
           />
         ))}
      </div>
    </section>
  );
};

export default HeroSection;
