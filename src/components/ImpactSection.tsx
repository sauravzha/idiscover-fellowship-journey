import { useEffect, useState, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Users, School, GraduationCap, CalendarCheck } from "lucide-react";

const stats = [
  { icon: Users, value: 13, suffix: "", label: "Fellows", desc: "Passionate change-makers" },
  { icon: School, value: 70, suffix: "", label: "Schools", desc: "Government schools transformed" },
  { icon: GraduationCap, value: 650, suffix: "+", label: "Students", desc: "Lives touched directly" },
  { icon: CalendarCheck, value: 100, suffix: "+", label: "Sessions", desc: "Hours of creative learning" },
];

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  return count;
}

const StatCard = ({ stat, delay, inView }: { stat: typeof stats[0]; delay: number; inView: boolean }) => {
  const count = useCountUp(stat.value, inView);
  const Icon = stat.icon;

  return (
    <div
      className="scroll-hidden glass-card rounded-3xl p-8 text-center hover:-translate-y-3 transition-all duration-500 shadow-lg hover:shadow-[0_20px_50px_hsl(var(--primary)/0.15)] group relative overflow-hidden bg-card/40 backdrop-blur-2xl border-border/40"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Icon Ring */}
      <div className="relative w-16 h-16 mx-auto rounded-full bg-background flex items-center justify-center mb-6 shadow-inner border border-primary/20 group-hover:border-primary/50 transition-colors duration-500">
        <div className="absolute inset-0 rounded-full ring-1 ring-primary/20 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700 ease-out" />
        <Icon size={28} className="text-primary group-hover:scale-110 transition-transform duration-500" />
      </div>

      {/* Number */}
      <p className="text-4xl sm:text-5xl font-black text-foreground tabular-nums tracking-tight mb-2 drop-shadow-sm group-hover:text-primary transition-colors duration-300">
        {count.toLocaleString()}<span className="text-primary">{stat.suffix}</span>
      </p>

      {/* Labels */}
      <p className="font-bold text-sm uppercase tracking-widest text-foreground/90 mt-1 mb-3">{stat.label}</p>
      <p className="text-sm text-muted-foreground leading-relaxed font-medium">{stat.desc}</p>
    </div>
  );
};

const ImpactSection = () => {
  const ref = useScrollReveal();
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" className="relative py-24 sm:py-32 overflow-hidden bg-background" ref={ref}>
      {/* Massive Cinematic Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10" ref={sectionRef}>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Context & Hero Image */}
          <div className="lg:col-span-5 flex flex-col xl:pr-8 text-center lg:text-left scroll-hidden">
            <div className="inline-flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="h-[2px] w-8 bg-primary/50" />
              <p className="text-sm font-bold uppercase tracking-widest text-primary">By The Numbers</p>
              <div className="h-[2px] w-8 bg-primary/50 hidden lg:block" />
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground mb-6">
              Our <span className="text-gradient drop-shadow-md">Impact</span>
            </h2>

            <p className="text-muted-foreground sm:text-lg max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed mb-10">
              Measuring the scale of transformation, one classroom at a time. This is what dedication looks like when translated into real-world change across Bihar Samastipur.
            </p>

            {/* Generated Image Container */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden glass-card border border-primary/20 shadow-[0_20px_60px_hsl(var(--primary)/0.15)] group">
              <img
                src="/impact-photo.jpg"
                alt="Impact Visualization"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              {/* Cinematic Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 z-10" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />

              {/* Inner glowing border */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 z-20 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: 2x2 Grid of Stat Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} delay={i * 120} inView={inView} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ImpactSection;
