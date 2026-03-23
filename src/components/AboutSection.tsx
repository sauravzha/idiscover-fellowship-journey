import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Globe, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="relative section-light py-24 sm:py-32 overflow-hidden" ref={ref}>
      {/* Background ambient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Content Area */}
          <div className="scroll-hidden-left relative">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-primary/50" />
              <p className="text-sm font-bold uppercase tracking-widest text-primary">About Us</p>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1] mb-6">
              A fellowship that <span className="text-gradient drop-shadow-sm">transforms</span>
            </h2>
            
            <p className="text-muted-foreground leading-relaxed sm:text-lg font-medium mb-8 max-w-lg">
              iDiscover Fellowship is a movement by Kshamtalaya Foundation that places passionate young leaders in government schools across Bihar Samastipur. These fellows don't just teach — they inspire, create, and transform.
            </p>
            
            <div className="glass-card bg-muted/20 border-l-4 border-primary p-6 rounded-r-2xl transform hover:translate-x-2 transition-transform duration-300 shadow-md">
              <p className="text-foreground leading-relaxed font-serif italic text-lg sm:text-xl font-medium">
                "हमारा मानना है कि हर बच्चे में बदलाव की शक्ति है। बस ज़रूरत है — एक ऐसे साथी की जो उस शक्ति को पहचाने।"
              </p>
            </div>
          </div>

          {/* Right Cards Area - Staggered 3D Layout */}
          <div className="scroll-hidden-right md:pl-10 lg:pl-16 relative">
            <div className="space-y-6 md:space-y-8 py-4">
              
              {/* Mission */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 flex items-start gap-4 sm:gap-6 hover:-translate-y-2 hover:translate-x-2 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_hsl(var(--primary)/0.15)] group relative overflow-hidden backdrop-blur-xl bg-card/60">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                  <Target className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="relative z-10 pt-1">
                  <p className="font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">Mission</p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">To nurture creative confidence and curiosity in every child through experiential learning.</p>
                </div>
              </div>

              {/* Vision - Staggered Left */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 flex items-start gap-4 sm:gap-6 md:-translate-x-12 hover:-translate-y-2 hover:-translate-x-10 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_hsl(var(--accent)/0.15)] group relative overflow-hidden backdrop-blur-xl bg-card/60 border-accent/20">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:bg-accent group-hover:scale-110 transition-all duration-500 group-hover:shadow-[0_0_20px_hsl(var(--accent)/0.4)]">
                  <Globe className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div className="relative z-10 pt-1">
                  <p className="font-bold text-xl text-foreground mb-2 group-hover:text-accent transition-colors">Vision</p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">A world where every child has access to joyful, meaningful education — regardless of where they are born.</p>
                </div>
              </div>

              {/* Approach */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 flex items-start gap-4 sm:gap-6 hover:-translate-y-2 hover:translate-x-2 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_hsl(var(--primary)/0.15)] group relative overflow-hidden backdrop-blur-xl bg-card/60">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                  <Lightbulb className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="relative z-10 pt-1">
                  <p className="font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">Approach</p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">Fellow-led, community-embedded, and deeply rooted in empathy and creativity.</p>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
