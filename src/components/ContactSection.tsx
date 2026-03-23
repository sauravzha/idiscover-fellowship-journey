import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Send, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative section-light py-24 sm:py-32 overflow-hidden" ref={ref}>
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left - Information */}
          <div className="scroll-hidden-left">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-primary/50" />
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Get Involved</p>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1] mb-6">
              Be part of the <span className="text-gradient drop-shadow-sm">change</span>
            </h2>
            
            <p className="text-muted-foreground leading-relaxed sm:text-lg font-medium mb-10 max-w-lg">
              Whether you want to become a fellow, support a school, or simply learn more about our work — we'd love to hear from you. Every connection matters.
            </p>
            
            {/* Contact Pills */}
            <div className="space-y-4">
              <div className="glass-card inline-flex items-center gap-4 py-4 px-6 rounded-2xl border-l-4 border-primary bg-card/40 backdrop-blur-md shadow-sm hover:translate-x-2 transition-transform duration-300 cursor-default">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5">Email Us</p>
                  <p className="font-semibold text-foreground">hello@idiscoverfellowship.org</p>
                </div>
              </div>
              
              <div className="glass-card inline-flex items-center gap-4 py-4 px-6 rounded-2xl border-l-4 border-accent bg-card/40 backdrop-blur-md shadow-sm hover:translate-x-2 transition-transform duration-300 cursor-default">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5">Visit Us</p>
                  <p className="font-semibold text-foreground">Madhya Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Glowing Form */}
          <div className="scroll-hidden-right relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-[40px] blur-xl opacity-50 pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="relative glass-card rounded-[32px] p-8 sm:p-10 space-y-6 shadow-[0_20px_60px_hsl(var(--foreground)/0.05)] border border-primary/20 bg-card/60 backdrop-blur-3xl overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-50" />

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-5 py-4 rounded-xl bg-background/50 backdrop-blur-md border border-border/50 text-base text-foreground font-medium
                    placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 hover:border-primary/30 transition-all shadow-inner"
                />
              </div>
              
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-5 py-4 rounded-xl bg-background/50 backdrop-blur-md border border-border/50 text-base text-foreground font-medium
                    placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 hover:border-primary/30 transition-all shadow-inner"
                />
              </div>
              
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us how you'd like to contribute..."
                  className="w-full px-5 py-4 rounded-xl bg-background/50 backdrop-blur-md border border-border/50 text-base text-foreground font-medium
                    placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 hover:border-primary/30 transition-all shadow-inner resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full relative group overflow-hidden bg-foreground text-background font-bold text-base py-4 rounded-xl
                  shadow-[0_8px_30px_hsl(var(--foreground)/0.2)] hover:shadow-[0_12px_40px_hsl(var(--foreground)/0.3)] 
                  transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mt-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none skew-x-12" />
                
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {submitted ? "Message Received ✓" : <>Join the Fellowship <Send size={18} /></>}
                </span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
