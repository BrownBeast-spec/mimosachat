import { Heart, X, Instagram, BadgeCheck } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useIsMobile } from "@/hooks/use-mobile";
import { color } from "motion/react";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Social Media Sidebar - Hidden on mobile */}
      {!isMobile && (
        <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
          <a href="#" className="w-12 h-12 rounded-full bg-background/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-background/20 transition-all hover:scale-110">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full bg-background/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-background/20 transition-all hover:scale-110">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 md:px-6 animate-fade-in"
      >
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-white/90 mb-6 md:mb-8 tracking-tight leading-tight">
          Match your<br />lifestyle
        </h1>
        
        {/* Mobile Social Icons */}
        {isMobile && (
          <div className="flex justify-center gap-4 mb-8">
            <a href="#" className="w-12 h-12 rounded-full bg-background/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-background/20 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-background/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-background/20 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Profile Card - Hidden on mobile, positioned responsively on larger screens */}
      {!isMobile && (
        <div className="absolute bottom-12 right-4 lg:right-12 z-20 animate-scale-in">
          <div className="w-64 lg:w-72 bg-black/20 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/10 shadow-2xl">
            {/* Profile Image */}
            <div className="w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 rounded-2xl mb-4 lg:mb-6 relative overflow-hidden mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-br from-orange-300 to-red-400 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-base lg:text-lg">A</span>
                </div>
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="text-center space-y-2 lg:space-y-3 mb-4 lg:mb-6">
              <h3 className="text-white font-bold text-base lg:text-lg" style={{fontFamily: 'Poppins, sans-serif'}}>Aurora Borealis</h3>
              <p className="text-white/70 text-xs lg:text-sm" style={{fontFamily: 'Poppins, sans-serif'}}>UI/UX Designer for Emotion-Driven Interfaces</p>
            </div>
            
            {/* Stats and Follow Button */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="flex items-center gap-1 text-white/80">
                  <svg className="w-3 lg:w-4 h-3 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs lg:text-sm font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>372</span>
                </div>
                <div className="flex items-center gap-1 text-white/80">
                  <svg className="w-3 lg:w-4 h-3 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  </svg>
                  <span className="text-xs lg:text-sm font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>28</span>
                </div>
              </div>
              
              {/* Follow Button */}
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full px-3 lg:px-4 py-1.5 lg:py-2 text-white text-xs lg:text-sm font-medium transition-all duration-200 flex items-center gap-1" style={{fontFamily: 'Poppins, sans-serif'}}>
                Follow
                <span className="text-sm lg:text-lg leading-none">+</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 flex gap-8 md:gap-12 z-20">
        <button className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-background border-2 border-destructive flex items-center justify-center shadow-elevated hover:scale-110 active:scale-95 transition-transform touch-manipulation">
          <X className="w-6 h-6 md:w-8 md:h-8 text-destructive" />
        </button>
        <button className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-500 border-2 border-red-500 flex items-center justify-center shadow-elevated hover:scale-110 active:scale-95 transition-transform hover:bg-red-400 touch-manipulation">
          <Heart className="w-6 h-6 md:w-8 md:h-8 text-white fill-white" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
