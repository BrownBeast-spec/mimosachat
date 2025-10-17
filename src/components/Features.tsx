import { BadgeCheck, Zap, Star, MapPin } from "lucide-react";
import profileBella from "@/assets/profile-bella.jpg";
import profileCarlos from "@/assets/profile-carlos.jpg";
import { useIsMobile } from "@/hooks/use-mobile";
import ScrollReveal from "./ui/ScrollReveal";

const Features = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 gradient-blush">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-4">
            Match Your Lifestyle
          </p>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={4}
            blurStrength={8}
            containerClassName="mb-6"
            textClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
            element="h2"
            stagger={0.04}
            wordAnimationEnd="bottom top"
          >
            Smart Match Feed
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
            Personalized feed based on your lifestyle & preferences. The more you use Mimosa, the smarter it gets! Matching people based on just looks is now a thing of the past! Mimosa matches people with similar lifestyles...
          </ScrollReveal>
        </div>

        {isMobile ? (
          // Mobile Layout - Stacked Cards
          <div className="space-y-8">
            {/* Bella Card */}
            <div className="relative mx-auto animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-full max-w-sm mx-auto bg-background rounded-3xl overflow-hidden shadow-elevated border border-border">
                <div className="relative h-80">
                  <img 
                    src={profileBella} 
                    alt="Bella" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold">Bella 28</h3>
                      <BadgeCheck className="w-4 h-4 text-accent" />
                    </div>
                    <p className="text-xs text-white/80 mb-1">7 kilometers away</p>
                    <p className="text-xs text-white/80">5 common places</p>
                  </div>
                </div>
                <div className="flex justify-center gap-4 py-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shadow-card">
                    <Zap className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-card">
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Interest Badges Mobile */}
            <div className="flex justify-center gap-4 flex-wrap px-4">
              <div className="bg-background rounded-2xl p-3 shadow-card border border-border flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">
                  S
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Spotify</p>
                  <p className="text-xs text-muted-foreground">1 common song</p>
                </div>
              </div>
              <div className="bg-background rounded-2xl p-3 shadow-card border border-border flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg">
                  N
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Netflix</p>
                  <p className="text-xs text-muted-foreground">1 common movie</p>
                </div>
              </div>
            </div>

            {/* Carlos Card */}
            <div className="relative mx-auto animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <div className="w-full max-w-sm mx-auto bg-background rounded-3xl overflow-hidden shadow-elevated border border-border">
                <div className="relative h-80">
                  <img 
                    src={profileCarlos} 
                    alt="Carlos" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold">Carlos 27</h3>
                      <BadgeCheck className="w-4 h-4 text-accent" />
                    </div>
                    <p className="text-xs text-white/80 mb-1">7 kilometers away</p>
                    <p className="text-xs text-white/80">5 common places</p>
                  </div>
                </div>
                <div className="flex justify-center gap-4 py-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shadow-card">
                    <Zap className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-card">
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile emoji decoration */}
            <div className="flex justify-center gap-8 text-3xl py-4">
              <span className="animate-float" style={{ animationDelay: "0.3s" }}>🍿</span>
              <span className="animate-float" style={{ animationDelay: "0.7s" }}>☕</span>
              <span className="animate-float" style={{ animationDelay: "1.2s" }}>🍷</span>
              <span className="animate-float" style={{ animationDelay: "0.9s" }}>🍔</span>
            </div>
          </div>
        ) : (
          // Desktop Layout - Original with improvements
          <div className="relative flex items-center justify-center gap-8 min-h-[600px]">
            {/* Left Card - Bella */}
            <div className="relative -rotate-6 hover:rotate-0 transition-transform duration-500 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-80 bg-background rounded-3xl overflow-hidden shadow-elevated border border-border">
                <div className="relative h-96">
                  <img 
                    src={profileBella} 
                    alt="Bella" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-bold">Bella 28</h3>
                      <BadgeCheck className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-sm text-white/80 mb-1">7 kilometers away</p>
                    <p className="text-sm text-white/80">5 common places</p>
                  </div>
                </div>
                <div className="absolute -right-4 top-1/4 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-card">
                    <Zap className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-card">
                    <Star className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card - Carlos */}
            <div className="relative rotate-6 hover:rotate-0 transition-transform duration-500 animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <div className="w-80 bg-background rounded-3xl overflow-hidden shadow-elevated border border-border">
                <div className="relative h-96">
                  <img 
                    src={profileCarlos} 
                    alt="Carlos" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-bold">Carlos 27</h3>
                      <BadgeCheck className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-sm text-white/80 mb-1">7 kilometers away</p>
                    <p className="text-sm text-white/80">5 common places</p>
                  </div>
                </div>
                <div className="absolute -right-4 top-1/4 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-card">
                    <Zap className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-card">
                    <Star className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
              </div>
            </div>

          {/* Floating Interest Badges */}
          <div className="absolute -left-12 top-24 animate-float">
            <div className="bg-background rounded-2xl p-4 shadow-card border border-border flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Spotify</p>
                <p className="text-xs text-muted-foreground">1 common song</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-12 top-24 animate-float" style={{ animationDelay: "0.5s" }}>
            <div className="bg-background rounded-2xl p-4 shadow-card border border-border flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-2xl">
                N
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Netflix</p>
                <p className="text-xs text-muted-foreground">1 common movie</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: "1s" }}>
            <div className="bg-background rounded-2xl p-4 shadow-card border border-border flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Favorite Places</p>
                <p className="text-xs text-muted-foreground">2 common places</p>
              </div>
            </div>
          </div>

          {/* Emoji Icons */}
          <div className="absolute top-12 left-32 text-4xl animate-float" style={{ animationDelay: "0.3s" }}>
            🍿
          </div>
          <div className="absolute top-32 right-24 text-4xl animate-float" style={{ animationDelay: "0.7s" }}>
            ☕
          </div>
          <div className="absolute bottom-32 left-24 text-4xl animate-float" style={{ animationDelay: "1.2s" }}>
            🍷
          </div>
          <div className="absolute bottom-24 right-32 text-4xl animate-float" style={{ animationDelay: "0.9s" }}>
            🍔
          </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
