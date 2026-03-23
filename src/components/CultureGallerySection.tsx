import { useState, useRef, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const photos = [
  { id: 1, src: "/manisha-action-1.jpg", alt: "Students cheering", dotX: 50, dotY: 50 },
  { id: 2, src: "/culture-img-1.jpeg", alt: "Fellowship moment", dotX: 50, dotY: 50 },
  { id: 3, src: "/culture-img-2.jpeg", alt: "Fellowship moment", dotX: 50, dotY: 50 },
  { id: 4, src: "/culture-img-3.jpeg", alt: "Fellowship moment", dotX: 50, dotY: 50 },
  { id: 5, src: "/culture-img-4.jpeg", alt: "Fellowship moment", dotX: 50, dotY: 50 },
  { id: 6, src: "/culture-img-5.jpeg", alt: "Fellowship moment", dotX: 50, dotY: 50 },
];

const connections = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 1, to: 4 },
  { from: 2, to: 5 },
  { from: 3, to: 6 },
  { from: 4, to: 5 },
  { from: 5, to: 6 },
];

const particles = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 5,
}));

// Photo component with 3D Tilt effect
const TiltPhoto = ({ photo, isHovered, onHover, onLeave }: any) => {
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-10 to 10 degrees max)
    const rotateX = ((centerY - y) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    onLeave();
  };

  return (
    <div
      className={`
        culture-photo-node relative rounded-2xl overflow-hidden aspect-square cursor-pointer
        border-[1.5px] glass-card
        ${isHovered ? 'border-primary/80 shadow-[0_0_40px_hsl(var(--glow-primary))] z-30' : 'border-primary/10'}
      `}
      style={{
        transform,
        transition: 'transform 0.1s ease-out, box-shadow 0.4s ease-out, border-color 0.4s ease-out',
        willChange: 'transform'
      }}
      data-id={photo.id}
      onMouseEnter={onHover}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        // Color awakening: grayscale by default, colored on hover
        className={`w-full h-full object-cover transition-all duration-700 ease-out 
          ${isHovered ? 'scale-110 grayscale-0' : 'scale-100 grayscale-[0.8] contrast-125 brightness-90'}`}
        loading="lazy"
      />
      <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-700
        ${isHovered ? 'from-background/90 via-background/20 to-transparent opacity-100' : 'from-background/90 via-transparent to-transparent opacity-90'}`} />

      {/* Glowing Dot exactly in center of photo */}
      <div
        className={`
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-4 h-4 rounded-full transition-all duration-500 z-40
          ${isHovered ? 'cta-gradient scale-[1.8] shadow-[0_0_30px_hsl(var(--primary))]' : 'bg-primary/50 scale-100 shadow-[0_0_15px_hsl(var(--primary))]'}
        `}
      />
    </div>
  );
};

const CultureGallerySection = () => {
  const ref = useScrollReveal();
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgPaths, setSvgPaths] = useState<Array<{ id: string; d: string; active: boolean; isHoveringAny: boolean }>>([]);
  const [dotPositions, setDotPositions] = useState<Record<number, { x: number; y: number }>>({});

  const updatePositions = () => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const newDotPositions: Record<number, { x: number; y: number }> = {};
    const elements = containerRef.current.querySelectorAll('.culture-photo-node');

    elements.forEach((el) => {
      const id = parseInt(el.getAttribute('data-id') || '0', 10);
      const rect = el.getBoundingClientRect();
      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;
      newDotPositions[id] = { x, y };
    });

    setDotPositions(newDotPositions);

    const isHoveringAny = hoveredNode !== null;

    const newPaths = connections.map(conn => {
      const p1 = newDotPositions[conn.from];
      const p2 = newDotPositions[conn.to];
      if (!p1 || !p2) return null;

      const midX = (p1.x + p2.x) / 2;
      const midY = (p1.y + p2.y) / 2;
      const offsetX = (p1.y - p2.y) * 0.15;
      const offsetY = (p2.x - p1.x) * 0.15;

      const d = `M ${p1.x} ${p1.y} Q ${midX + offsetX} ${midY + offsetY} ${p2.x} ${p2.y}`;
      const active = hoveredNode === conn.from || hoveredNode === conn.to;

      return { id: `${conn.from}-${conn.to}`, d, active, isHoveringAny };
    }).filter(Boolean) as typeof svgPaths;

    setSvgPaths(newPaths);
  };

  useEffect(() => {
    updatePositions();
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, [hoveredNode]);

  useEffect(() => {
    const timer = setTimeout(updatePositions, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="culture" className="relative py-24 sm:py-32 overflow-hidden bg-background" ref={ref}>
      {/* Dark Vignette Background specifically for this section */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at center, transparent 0%, hsl(var(--foreground)/0.03) 100%)'
      }} />

      {/* Ambient Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full bg-primary/20 blur-[1px]"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animation: `particle-drift ${p.duration}s infinite alternate ease-in-out`,
              animationDelay: `${p.delay}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 scroll-hidden">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/70 mb-3">Cultural Thread</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            A Living <span className="text-gradient">Tapestry</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Connected by shared values and experiences, building a strong community of young changemakers across 70 vibrant schools.
          </p>
        </div>

        <div className="relative" ref={containerRef}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id="glowGradientActive" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="glowGradientInactive" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
              </linearGradient>
              <filter id="strongGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {svgPaths.map((path) => (
              <path
                key={path.id}
                d={path.d}
                fill="none"
                stroke={path.active ? "url(#glowGradientActive)" : "url(#glowGradientInactive)"}
                strokeWidth={path.active ? "3" : "1.5"}
                pathLength="1"
                className={`transition-all duration-700 ease-out 
                  ${path.active ? 'opacity-100 constellation-active' : path.isHoveringAny ? 'opacity-20' : 'opacity-60 constellation-draw'}`}
                filter={path.active ? "url(#strongGlow)" : "none"}
              />
            ))}
          </svg>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 lg:gap-16">
            {photos.map((photo, i) => (
              <div
                key={photo.id}
                className="flex flex-col relative z-30 scroll-hidden"
                style={{
                  transitionDelay: `${i * 100}ms`,
                  marginTop: i % 3 === 1 ? '3rem' : i % 3 === 2 ? '6rem' : '0'
                }}
              >
                <TiltPhoto
                  photo={photo}
                  isHovered={hoveredNode === photo.id}
                  onHover={() => setHoveredNode(photo.id)}
                  onLeave={() => setHoveredNode(null)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureGallerySection;
