import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import ShinyText from "./ui/ShinyText";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar when scrolled past hero section (approximately viewport height)
      const scrolled = window.scrollY > window.innerHeight * 0.8;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[80%] max-w-5xl transition-all duration-300">
      <div
        className={`rounded-2xl md:rounded-full px-4 md:px-8 py-3 md:py-4 shadow-elevated transition-all duration-500 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-xl border border-border/50"
            : "glass-nav border border-white/20"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isScrolled
                  ? "bg-muted text-foreground hover:bg-muted/80"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          )}

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center gap-8">
              <a
                href="/"
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  isScrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-white/90 hover:text-white"
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Home
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isScrolled ? "bg-foreground/60" : "bg-white/80"
                  }`}
                />
              </a>
              <a
                href="/mobile"
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  isScrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-white/90 hover:text-white"
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Mobile
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isScrolled ? "bg-foreground/60" : "bg-white/80"
                  }`}
                />
              </a>
              <a
                href="#features"
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  isScrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-white/90 hover:text-white"
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Features
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isScrolled ? "bg-foreground/60" : "bg-white/80"
                  }`}
                />
              </a>
            </nav>
          )}

          {/* Center Logo */}
          <div className={isMobile ? "" : "absolute left-1/2 -translate-x-1/2"}>
            <span
              className={`font-bold text-xl md:text-2xl lg:text-3xl transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <ShinyText
                text="Mimosa"
                disabled={false}
                speed={4}
                className="custom-class"
              />
            </span>
          </div>

          {/* Right Register Button */}
          <button
            className={`rounded-full px-4 md:px-6 py-2 md:py-2.5 flex items-center gap-2 text-sm font-medium transition-all duration-300 shadow-card hover:shadow-soft group ${
              isScrolled
                ? "bg-primary/10 backdrop-blur-xl border border-primary/30 text-primary hover:border-primary/50 hover:bg-primary/15"
                : "glass-button border border-white/30 text-white hover:border-white/50"
            }`}
          >
            <span
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="hidden sm:inline"
            >
              Register
            </span>
            <span
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="sm:hidden"
            >
              Join
            </span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobile && isMenuOpen && (
          <div
            className={`mt-4 pt-4 transition-colors duration-300 ${
              isScrolled
                ? "border-t border-border/30"
                : "border-t border-white/20"
            }`}
          >
            <nav className="flex flex-col gap-4">
              <a
                href="/"
                className={`text-sm font-medium transition-all duration-300 py-2 ${
                  isScrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-white/90 hover:text-white"
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/mobile"
                className={`text-sm font-medium transition-all duration-300 py-2 ${
                  isScrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-white/90 hover:text-white"
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Mobile
              </a>
              <a
                href="#features"
                className={`text-sm font-medium transition-all duration-300 py-2 ${
                  isScrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-white/90 hover:text-white"
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
