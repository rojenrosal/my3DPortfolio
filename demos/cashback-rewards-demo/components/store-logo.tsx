import { cn } from "@/lib/utils";

type Props = {
  initials: string;
  accent: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: "w-10 h-10 text-sm",
  md: "w-14 h-14 text-lg",
  lg: "w-20 h-20 text-2xl",
};

export function StoreLogo({ initials, accent, size = "md", className }: Props) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl font-bold text-foreground/90 bg-gradient-to-br border border-white/10 shadow-inner",
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
