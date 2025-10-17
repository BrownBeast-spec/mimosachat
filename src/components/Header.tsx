import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[80%] max-w-5xl">
      <div className="glass-nav rounded-2xl md:rounded-full px-4 md:px-8 py-3 md:py-4 border border-white/20 shadow-elevated">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          {isMobile && (
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center gap-8">
              <a 
                href="/" 
                className="text-sm font-medium text-white/90 hover:text-white transition-all duration-300 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/80 group-hover:w-full transition-all duration-300" />
              </a>
              <a 
                href="/mobile" 
                className="text-sm font-medium text-white/90 hover:text-white transition-all duration-300 relative group"
              >
                Mobile
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/80 group-hover:w-full transition-all duration-300" />
              </a>
              <a 
                href="#features" 
                className="text-sm font-medium text-white/90 hover:text-white transition-all duration-300 relative group"
              >
                Features
                <span className="absolute -bottom-1 left-0 h-0.5 bg-white/80 group-hover:w-full transition-all duration-300" />
              </a>
            </nav>
          )}

          {/* Center Logo */}
          <div className={isMobile ? "" : "absolute left-1/2 -translate-x-1/2"}>
            <span className="text-white font-bold text-lg md:text-xl" style={{fontFamily: 'Poppins, sans-serif'}}>Mimosa</span>
          </div>

          {/* Right Register Button */}
          <button className="glass-button rounded-full px-4 md:px-6 py-2 md:py-2.5 border border-white/30 flex items-center gap-2 text-sm font-medium text-white hover:border-white/50 transition-all duration-300 shadow-card hover:shadow-soft group">
            <span style={{fontFamily: 'Poppins, sans-serif'}} className="hidden sm:inline">Register</span>
            <span style={{fontFamily: 'Poppins, sans-serif'}} className="sm:hidden">Join</span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobile && isMenuOpen && (
          <div className="mt-4 pt-4 border-t border-white/20">
            <nav className="flex flex-col gap-4">
              <a 
                href="/" 
                className="text-sm font-medium text-white/90 hover:text-white transition-all duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/mobile" 
                className="text-sm font-medium text-white/90 hover:text-white transition-all duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Mobile
              </a>
              <a 
                href="#features" 
                className="text-sm font-medium text-white/90 hover:text-white transition-all duration-300 py-2"
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
