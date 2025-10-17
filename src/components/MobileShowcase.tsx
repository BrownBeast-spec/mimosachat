import { MapPin, Zap, Star, Map, Settings, User, BadgeCheck, Wifi, Battery, Signal, Heart } from "lucide-react";
import profileJane from "@/assets/profile-jane.jpg";
import profileEmma from "@/assets/profile-emma.jpg";
import profileGeorge from "@/assets/profile-george.jpg";
import profileChristina from "@/assets/profile-christina.jpg";
import profileAaron from "@/assets/profile-aaron.jpg";
import { useIsMobile } from "@/hooks/use-mobile";
import ScrollReveal from "./ui/ScrollReveal";

const MobileShowcase = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 gradient-blush min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-4">
            Mobile Experience
          </p>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={4}
            blurStrength={8}
            containerClassName="mb-6"
            textClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
            element="h2"
            stagger={0.05}
            wordAnimationEnd="bottom top"
          >
            Swipe. Match. Connect.
          </ScrollReveal>
          <ScrollReveal
            baseOpacity={0.15}
            enableBlur={true}
            baseRotation={2}
            blurStrength={4}
            containerClassName=""
            textClassName="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
            element="p"
            stagger={0.02}
            wordAnimationEnd="bottom top"
          >
            Experience the future of lifestyle-based dating on your mobile device
          </ScrollReveal>
        </div>

        {isMobile ? (
          // Mobile Layout - Simplified single card view
          <div className="relative flex flex-col items-center space-y-8 px-4">
            {/* Main Profile Card - Mobile Optimized */}
            <div className="w-full max-w-sm bg-white rounded-3xl shadow-elevated p-4 border-4 border-gray-800 animate-scale-in">
              {/* Status Bar */}
              <div className="flex items-center justify-between mb-3 px-4">
                <span className="text-xs font-semibold text-foreground">09:41</span>
                <div className="flex items-center gap-1">
                  <Signal className="w-3 h-3" />
                  <Wifi className="w-3 h-3" />
                  <Battery className="w-3 h-3" />
                </div>
              </div>

              {/* Top Action Icons */}
              <div className="flex items-center justify-between mb-3 px-3">
                <button className="w-8 h-8 rounded-lg bg-foreground/90 flex items-center justify-center touch-manipulation">
                  <Map className="w-4 h-4 text-white" />
                </button>
                <button className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center touch-manipulation">
                  <Settings className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              {/* Main Profile Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-card mb-3">
                <img 
                  src={profileJane} 
                  alt="Jane"
                  className="w-full h-72 object-cover"
                />
                
                {/* Profile Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold">Jane</h3>
                    <span className="text-lg font-semibold">26</span>
                    <BadgeCheck className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-xs text-white/90 mb-1">8 kilometers away</p>
                  <p className="text-xs text-white/90 mb-1">Marcom Specialist at Paris</p>
                  <p className="text-xs text-white/80 mb-1">Galatasaray University 2014</p>
                  <p className="text-xs text-primary font-medium">2 common places</p>
                </div>

                {/* Action Buttons */}
                <div className="absolute right-3 bottom-20 flex flex-col gap-2">
                  <button className="w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center hover:scale-110 active:scale-95 transition-transform touch-manipulation">
                    <Zap className="w-5 h-5 text-secondary fill-secondary" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center hover:scale-110 active:scale-95 transition-transform touch-manipulation">
                    <MapPin className="w-5 h-5 text-primary" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center hover:scale-110 active:scale-95 transition-transform touch-manipulation">
                    <Star className="w-5 h-5 text-accent fill-accent" />
                  </button>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="flex items-center justify-around px-6 py-2">
                <button className="relative touch-manipulation">
                  <User className="w-5 h-5 text-muted-foreground" />
                </button>
                <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                  <span className="text-white font-bold text-lg" style={{fontFamily: 'Poppins, sans-serif'}}>M</span>
                </div>
                <button className="relative touch-manipulation">
                  <Star className="w-5 h-5 text-muted-foreground" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full"></span>
                </button>
              </div>

              {/* Home Indicator */}
              <div className="flex justify-center mt-1">
                <div className="w-24 h-1 bg-foreground rounded-full"></div>
              </div>
            </div>

            {/* Mobile Profile List */}
            <div className="w-full space-y-4">
              <h3 className="text-lg font-semibold text-center text-foreground mb-4">Other Matches</h3>
              
              <div className="space-y-3">
                <div className="bg-white rounded-2xl p-3 shadow-card border border-border flex items-center gap-3">
                  <img 
                    src={profileEmma} 
                    alt="Emma"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">Emma <span className="font-normal">24</span></p>
                    <p className="text-xs" style={{ color: '#FFB8B8' }}>1 common places</p>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-primary" />
                  </button>
                </div>

                <div className="bg-white rounded-2xl p-3 shadow-card border border-border flex items-center gap-3">
                  <img 
                    src={profileGeorge} 
                    alt="George"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">George <span className="font-normal">28</span></p>
                    <p className="text-xs" style={{ color: '#FFB8B8' }}>4 common places</p>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-primary" />
                  </button>
                </div>

                <div className="bg-white rounded-2xl p-3 shadow-card border border-border flex items-center gap-3">
                  <img 
                    src={profileChristina} 
                    alt="Christina"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">Christina <span className="font-normal">24</span></p>
                    <p className="text-xs" style={{ color: '#FFB8B8' }}>2 common places</p>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-primary" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Desktop Layout - Original
          <div className="relative flex items-center justify-center min-h-[800px]">
            {/* Central iPhone Mockup */}
            <div className="relative z-10 animate-scale-in">
              {/* iPhone Frame */}
              <div className="w-[380px] bg-white rounded-[60px] shadow-elevated p-4 border-8 border-gray-900">
                {/* Status Bar */}
                <div className="flex items-center justify-between mb-4 px-6">
                  <span className="text-sm font-semibold text-foreground">09:41</span>
                  <div className="flex items-center gap-1">
                    <Signal className="w-4 h-4" />
                    <Wifi className="w-4 h-4" />
                    <Battery className="w-4 h-4" />
                  </div>
                </div>

                {/* Top Action Icons */}
                <div className="flex items-center justify-between mb-4 px-4">
                  <button className="w-10 h-10 rounded-lg bg-foreground/90 flex items-center justify-center">
                    <Map className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Settings className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>

              {/* Main Profile Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-card mb-4">
                <img 
                  src={profileJane} 
                  alt="Jane"
                  className="w-full h-[480px] object-cover"
                />
                
                {/* Profile Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-3xl font-bold">Jane</h3>
                    <span className="text-2xl font-semibold">26</span>
                    <BadgeCheck className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-sm text-white/90 mb-1">8 kilometers away</p>
                  <p className="text-sm text-white/90 mb-1">Marcom Specialist at Paris</p>
                  <p className="text-sm text-white/80 mb-1">Galatasaray University 2014</p>
                  <p className="text-sm text-primary font-medium">2 common places</p>
                </div>

                {/* Action Buttons */}
                <div className="absolute right-4 bottom-32 flex flex-col gap-3">
                  <button className="w-14 h-14 rounded-full bg-white shadow-card flex items-center justify-center hover:scale-110 transition-transform">
                    <Zap className="w-7 h-7 text-secondary fill-secondary" />
                  </button>
                  <button className="w-14 h-14 rounded-full bg-white shadow-card flex items-center justify-center hover:scale-110 transition-transform">
                    <MapPin className="w-7 h-7 text-primary" />
                  </button>
                  <button className="w-14 h-14 rounded-full bg-white shadow-card flex items-center justify-center hover:scale-110 transition-transform">
                    <Star className="w-7 h-7 text-accent fill-accent" />
                  </button>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="flex items-center justify-around px-8 py-3">
                <button className="relative">
                  <User className="w-6 h-6 text-muted-foreground" />
                </button>
                <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center -mt-2">
                  <span className="text-white font-bold text-2xl" style={{fontFamily: 'Poppins, sans-serif'}}>M</span>
                </div>
                <button className="relative">
                  <Star className="w-6 h-6 text-muted-foreground" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full"></span>
                </button>
              </div>

              {/* Home Indicator */}
              <div className="flex justify-center mt-2">
                <div className="w-32 h-1 bg-foreground rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Floating Profile Bubbles */}
          {/* Emma - Top Left */}
          <div className="absolute top-20 left-12 lg:left-32 animate-float z-20">
            <div className="bg-white rounded-3xl p-4 shadow-card border border-border flex items-center gap-3 w-64">
              <img 
                src={profileEmma} 
                alt="Emma"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="text-base font-semibold text-foreground">Emma <span className="font-normal">24</span></p>
                <p className="text-sm" style={{ color: '#FFB8B8' }}>1 common places</p>
              </div>
            </div>
          </div>

          {/* George - Middle Left */}
          <div className="absolute top-64 left-4 lg:left-20 animate-float z-20" style={{ animationDelay: "0.5s" }}>
            <div className="bg-white rounded-3xl p-4 shadow-card border border-border flex items-center gap-3 w-64">
              <img 
                src={profileGeorge} 
                alt="George"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="text-base font-semibold text-foreground">George <span className="font-normal">28</span></p>
                <p className="text-sm" style={{ color: '#FFB8B8' }}>4 common places</p>
              </div>
            </div>
          </div>

          {/* Christina - Top Right */}
          <div className="absolute top-32 right-12 lg:right-32 animate-float z-20" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white rounded-3xl p-4 shadow-card border border-border flex items-center gap-3 w-64">
              <img 
                src={profileChristina} 
                alt="Christina"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="text-base font-semibold text-foreground">Christina <span className="font-normal">24</span></p>
                <p className="text-sm" style={{ color: '#FFB8B8' }}>2 common places</p>
              </div>
            </div>
          </div>

          {/* Aaron - Bottom Right */}
          <div className="absolute bottom-32 right-4 lg:right-24 animate-float z-20" style={{ animationDelay: "0.8s" }}>
            <div className="bg-white rounded-3xl p-4 shadow-card border border-border flex items-center gap-3 w-64">
              <img 
                src={profileAaron} 
                alt="Aaron"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="text-base font-semibold text-foreground">Aaron <span className="font-normal">32</span></p>
                <p className="text-sm" style={{ color: '#FFB8B8' }}>4 common places</p>
              </div>
            </div>
          </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MobileShowcase;
