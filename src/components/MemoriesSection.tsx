import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X, Maximize2 } from "lucide-react";

const images = [
  { src: "/gallery-img-1.jpeg", alt: "Classroom session", span: "md:col-span-2 md:row-span-2" },
  { src: "/gallery-img-2.jpeg", alt: "Students learning", span: "" },
  { src: "/gallery-img-3.jpeg", alt: "Group activity", span: "" },
  { src: "/gallery-img-4.jpeg", alt: "Teaching moment", span: "" },
  { src: "/gallery-img-5.jpeg", alt: "Creative workshop", span: "md:row-span-2" },
  { src: "/gallery-img-6.jpeg", alt: "Fellowship moment", span: "md:col-span-2" },
  { src: "/gallery-img-7.jpeg", alt: "Community engagement", span: "" },
];

const MemoriesSection = () => {
  const ref = useScrollReveal();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="memories" className="relative section-light py-24 sm:py-32 overflow-hidden" ref={ref}>
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--accent)/0.03)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-hidden">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-[2px] w-8 bg-accent/50" />
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Gallery</p>
            <div className="h-[2px] w-8 bg-accent/50" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground">
            Moments that <span className="text-gradient drop-shadow-sm">Matter</span>
          </h2>
          <p className="mt-6 text-muted-foreground sm:text-lg max-w-xl mx-auto font-medium">
             Glimpses of joy, learning, and transformation captured in time.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-[200px] sm:auto-rows-[240px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`scroll-hidden gallery-item rounded-3xl overflow-hidden cursor-pointer relative group ${img.span} shadow-md hover:shadow-[0_20px_50px_hsl(var(--foreground)/0.15)] border border-border/40 bg-card/40`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100 delay-100">
                <div className="w-14 h-14 rounded-full bg-background/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl">
                  <Maximize2 size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300 backdrop-blur-xl"
          onClick={() => setLightbox(null)}
        >
          <div className="absolute inset-0 bg-background/90" />
          
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 rounded-full bg-card/20 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-card/40 hover:scale-110 transition-all text-foreground z-50 shadow-2xl"
          >
            <X size={24} />
          </button>
          
          <img
            src={lightbox}
            alt="Full view"
            className="relative z-10 max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/10 animate-in zoom-in-95 duration-500 ease-out"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default MemoriesSection;
