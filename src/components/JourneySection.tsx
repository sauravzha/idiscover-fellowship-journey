import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Users, School, BookOpen, Heart, ArrowRight } from "lucide-react";

const steps = [
  { icon: Users, num: "01", title: "Fellows चुने गए", desc: "13 passionate young leaders selected from diverse backgrounds to drive change in local communities.", emoji: "🎯" },
  { icon: School, num: "02", title: "Schools Assign हुए", desc: "Each fellow mapped to 2 government schools — their canvas for systematic transformation over the year.", emoji: "🏫" },
  { icon: BookOpen, num: "03", title: "Sessions शुरू हुए", desc: "Interactive, joyful, and creative sessions launched, instantly redefining what learning looks like daily.", emoji: "📚" },
  { icon: Heart, num: "04", title: "जिंदगी बदली", desc: "Students discovered confidence, radical curiosity, and the courage to dream beyond their horizons.", emoji: "✨" },
];

const JourneySection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useScrollReveal();

  const handleStepChange = (index: number) => {
    if (index === activeStep) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveStep(index);
      setIsAnimating(false);
    }, 300); // Wait for fade out before switching content
  };

  const current = steps[activeStep];
  const Icon = current.icon;

  return (
    <section id="journey" className="relative py-24 sm:py-32 bg-background overflow-hidden" ref={ref}>
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.03),transparent_40%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-hidden">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/70 mb-3">The Path</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-tight">
            The Fellowship <span className="text-gradient drop-shadow-sm">Journey</span>
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg max-w-lg mx-auto font-medium">
            From selection to transformation — every step a story of courage and growth.
          </p>
        </div>

        {/* Interactive Dashboard Container */}
        <div className="mt-12 max-w-5xl mx-auto">
          
          {/* Top Navigation Timeline */}
          <div className="relative mb-8 sm:mb-12">
            {/* Horizontal Line background */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-border/60 -translate-y-1/2 z-0 hidden sm:block" />
            
            {/* Progress Line */}
            <div 
              className="absolute top-1/2 left-0 h-[3px] bg-primary -translate-y-1/2 z-0 hidden sm:block transition-all duration-500 ease-out"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />

            <div className="relative z-10 flex flex-wrap sm:flex-nowrap justify-between gap-4 sm:gap-0">
              {steps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => handleStepChange(i)}
                  className={`flex flex-col items-center gap-3 w-1/2 sm:w-auto relative group outline-none`}
                  aria-label={`Go to step ${step.num}`}
                >
                  {/* Timeline Dot */}
                  <div 
                    className={`w-12 h-12 rounded-full border-[3px] flex items-center justify-center transition-all duration-500 font-bold z-10 bg-background
                      ${i === activeStep 
                        ? 'border-primary text-primary shadow-[0_0_20px_hsl(var(--primary)/0.4)] scale-110' 
                        : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                      }
                    `}
                  >
                    {step.num}
                  </div>
                  
                  {/* Step Title Label (Desktop primarily) */}
                  <span className={`text-sm font-semibold max-w-[120px] text-center transition-colors duration-300
                    ${i === activeStep ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'}
                  `}>
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Massive Focus Card */}
          <div className="relative glass-card rounded-[32px] sm:rounded-[48px] overflow-hidden min-h-[400px] sm:min-h-[480px] border border-border/50 shadow-[0_20px_60px_hsl(var(--foreground)/0.03)] bg-gradient-to-br from-card to-card/50 backdrop-blur-3xl">
            
            {/* Content Container with fade transition */}
            <div className={`p-8 sm:p-12 md:p-16 h-full flex flex-col justify-center transition-all duration-300 ease-in-out
              ${isAnimating ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0'}
            `}>
              
              <div className="grid md:grid-cols-12 gap-10 items-center">
                
                {/* Visual Left Side */}
                <div className="md:col-span-5 relative flex justify-center md:block">
                  {/* Huge Watermark Number */}
                  <span className="absolute -top-16 -left-8 md:-top-24 md:-left-12 text-[160px] md:text-[240px] font-black leading-none text-primary/5 pointer-events-none select-none">
                    {current.num}
                  </span>
                  
                  {/* Icon & Emoji layout */}
                  <div className="relative z-10 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shadow-inner">
                    <Icon size={64} className="text-primary opacity-80 animate-in zoom-in duration-500" />
                    
                    {/* Floating Emoji Badge */}
                    <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-background rounded-full flex items-center justify-center text-2xl sm:text-4xl shadow-xl border border-border animate-in slide-in-from-bottom duration-500 delay-150">
                      {current.emoji}
                    </div>
                  </div>
                </div>

                {/* Text Right Side */}
                <div className="md:col-span-7 flex flex-col text-center md:text-left">
                  <div className="inline-flex items-center justify-center md:justify-start gap-3 mb-6 animate-in slide-in-from-right duration-500">
                    <div className="h-[2px] w-8 bg-primary/50" />
                    <span className="text-sm font-bold tracking-widest uppercase text-primary">Milestone {current.num}</span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight animate-in slide-in-from-right duration-500 delay-100">
                    {current.title}
                  </h3>
                  
                  <div className="glass-card bg-muted/20 border-l-4 border-primary p-6 rounded-r-2xl transform animate-in slide-in-from-right duration-500 delay-200">
                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                      {current.desc}
                    </p>
                  </div>

                  {/* Desktop Only Next Button Hint */}
                  {activeStep < steps.length - 1 && (
                    <button 
                      onClick={() => handleStepChange(activeStep + 1)}
                      className="hidden md:flex items-center gap-2 mt-8 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors hover:translate-x-2 w-fit duration-300 animate-in fade-in duration-500 delay-300"
                    >
                      Next Step <ArrowRight size={16} />
                    </button>
                  )}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default JourneySection;
