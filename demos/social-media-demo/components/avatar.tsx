import { cn } from "@/lib/utils";

const sizes = {
  xs: "w-7 h-7 text-[10px]",
  sm: "w-9 h-9 text-xs",
  md: "w-11 h-11 text-sm",
  lg: "w-16 h-16 text-lg",
  xl: "w-24 h-24 text-2xl",
};

export function Avatar({
  initials,
  accent,
  size = "md",
  className,
}: {
  initials: string;
  accent: string;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full font-bold text-foreground/90 bg-gradient-to-br border border-white/10",
        accent,
        sizes[size],
        className
      )}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
