import { cn } from "@/lib/utils";

interface FloatingCardProps {
  icon: string;
  title: string;
  subtitle: string;
  className?: string;
  floatClass: string;
  delay: number;
}

const FloatingCard = ({ icon, title, subtitle, className, floatClass, delay }: FloatingCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-[20px] px-5 py-4 cursor-default select-none",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-2 hover:shadow-[0_16px_48px_hsl(var(--glass-shadow)),0_4px_12px_hsl(var(--glow-primary))]",
        "active:scale-[0.97]",
        floatClass,
        "animate-reveal",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl leading-none mt-0.5">{icon}</span>
        <div className="min-w-0">
          <p className="font-semibold text-sm text-foreground tracking-tight">{title}</p>
          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default FloatingCard;
