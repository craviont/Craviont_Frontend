import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  theme?: "light" | "dark";
}

export function Logo({ className, theme = "dark" }: LogoProps) {
  return (
    <div className={cn("relative inline-block h-full w-auto select-none", className)}>
      <img 
        src={theme === "light" ? "/assets/logo-black.png" : "/assets/logo-white.png"} 
        alt="Craviont" 
        className="h-full w-auto object-contain"
      />
    </div>
  );
}
