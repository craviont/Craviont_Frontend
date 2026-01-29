import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { useLocation } from "wouter";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scrolled state for background change
      setIsScrolled(currentScrollY > 20);
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
  ];

  const handleMobileLinkClick = (href: string) => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 transition-all duration-500 ease-in-out px-4 md:px-6 py-4",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent",
        isVisible ? "translate-y-0" : "-translate-y-full",
        // Increase z-index to be above normal content but below the modal's backdrop if needed
        // Actually, the user wants the navbar to BLUR when modal is open.
        // We can detect modal state if we had a global store, but for now let's ensure it's below the modal's backdrop z-index.
        "z-[60]" 
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <a className="cursor-pointer block hover:opacity-80 transition-opacity">
              <Logo className="h-6 md:h-7 w-auto" theme="light" />
            </a>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a 
                className={cn(
                  "text-sm font-medium transition-colors cursor-pointer relative",
                  location === link.href 
                    ? "text-[#143109] font-bold" 
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {link.name}
                {location === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#143109] rounded-full" />
                )}
              </a>
            </Link>
          ))}
          
          <Link href="/contact">
            <a className="cursor-pointer">
              <Button className="bg-[#143109] hover:bg-[#143109]/90 text-white rounded-full px-8 h-12 text-sm font-bold shadow-xl shadow-[#143109]/20 transition-all duration-300 hover:scale-105 active:scale-95 group overflow-hidden relative cursor-pointer">
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-12 block">Get Started</span>
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-12 group-hover:translate-y-0 text-white">Let's Go</span>
              </Button>
            </a>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b shadow-xl p-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className={cn(
                    "text-base font-medium py-2 border-b border-gray-100",
                    location === link.href ? "text-[#143109] font-bold" : "text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
            <a>
              <Button className="w-full bg-[#143109] text-white rounded-full h-12">
                Get Started
              </Button>
            </a>
          </Link>
        </div>
      )}
    </nav>
  );
}
