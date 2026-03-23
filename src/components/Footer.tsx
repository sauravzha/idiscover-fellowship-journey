import logo from "@/assets/logo.jpg";
import { Heart } from "lucide-react";

const links = ["About", "Journey", "Fellows", "Impact", "Memories", "Contact"];

const Footer = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background pt-20 pb-12 overflow-hidden border-t border-border/30">
      {/* Deep Center Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-10">
          {/* Logo & Brand */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="relative group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <img src={logo} alt="iDiscover" className="relative w-14 h-14 rounded-xl object-cover shadow-lg border border-white/10 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="font-black text-2xl tracking-tight text-foreground">
              <span className="text-gradient">i</span>Discover Fellowship
            </span>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-2xl px-4">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors hover:-translate-y-0.5"
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground/80 font-medium">
          <p>© {new Date().getFullYear()} iDiscover Fellowship by Kshamtalaya.</p>
          <p className="flex items-center gap-2">
            Made with lots of love <Heart size={14} className="text-primary animate-pulse" fill="currentColor" /> by your Junior Fellow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
