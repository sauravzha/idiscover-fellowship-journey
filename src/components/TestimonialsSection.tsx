import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  "मुझे पहली बार लगा कि मैं भी कुछ बन सकता हूँ। फेलो दीदी ने मुझमें विश्वास जगाया।",
  "मैंने 15 सालों तक पढ़ाया है, लेकिन छात्रों को इतना उत्साहित कभी नहीं देखा। फेलो हमारे स्कूल में एक नई ऊर्जा लेकर आए हैं।",
  "मेरा बच्चा अब रोज़ खुशी-खुशी स्कूल जाना चाहता है। पहले उसे ज़बरदस्ती भेजना पड़ता था।",
  "इस फेलोशिप ने मुझे किसी भी डिग्री से ज्यादा सिखाया है। हर बच्चे ने मुझे जीवन का एक नया पाठ पढ़ाया है।",
  "हमारे स्कूल में उपस्थिति 60% से बढ़कर 90% हो गई है। बच्चों की आँखों में अब एक नई चमक है।"
];

const TestimonialsSection = () => {
  const ref = useScrollReveal();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="relative section-tinted py-24 sm:py-32 overflow-hidden" ref={ref}>
      {/* Background Cinematic Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08)_0%,transparent_70%)] pointer-events-none blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-hidden">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-[2px] w-8 bg-primary/50" />
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Testimonials</p>
            <div className="h-[2px] w-8 bg-primary/50" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">
            Voices of <span className="text-gradient drop-shadow-md">Change</span>
          </h2>
        </div>

        <div className="scroll-hidden max-w-4xl mx-auto relative">
          
          {/* Subtle watermark quote icon behind card */}
          <Quote className="absolute -top-10 -left-10 w-40 h-40 text-primary/5 -rotate-6 z-0" />
          
          {/* Main Cinematic Card */}
          <div className="glass-card rounded-[40px] p-8 sm:p-14 text-center relative z-10 shadow-[0_20px_60px_hsl(var(--foreground)/0.03)] border border-border/50 bg-card/60 backdrop-blur-3xl min-h-[340px] flex flex-col justify-center">
            
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-[40px] pointer-events-none" />

            <div key={current} className="animate-in fade-in zoom-in-95 duration-700 ease-out fill-mode-forwards relative z-10 flex flex-col items-center">
              
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 shadow-inner">
                <Quote size={28} className="text-primary" />
              </div>

              <p className="text-xl sm:text-2xl md:text-3xl text-foreground leading-relaxed font-semibold italic text-wrap-balance mb-10 max-w-3xl">
                "{t}"
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between gap-6 sm:gap-8 mt-12 w-full max-w-max mx-auto relative z-20">
              <button
                onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}
                className="w-12 h-12 rounded-full border border-border bg-background/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-500 hover:bg-primary/50 ${i === current ? "bg-primary w-8 shadow-[0_0_10px_hsl(var(--primary)/0.5)]" : "bg-border w-2"}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setCurrent((current + 1) % testimonials.length)}
                className="w-12 h-12 rounded-full border border-border bg-background/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
