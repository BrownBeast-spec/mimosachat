import { Heart, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black/90 backdrop-blur-xl border-t border-white/10">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/90 to-black/80" />
      
      <div className="relative z-10 py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-lg md:text-xl" style={{fontFamily: 'Poppins, sans-serif'}}>M</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white" style={{fontFamily: 'Poppins, sans-serif'}}>Mimosa</h3>
              </div>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-4 md:mb-6 max-w-md mx-auto md:mx-0" style={{fontFamily: 'Poppins, sans-serif'}}>
                Smart lifestyle-based dating app. Match with people who share your interests, favorite places, and lifestyle preferences. More than just looks.
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center md:justify-start gap-4">
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation">
                  <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold text-base md:text-lg mb-4 md:mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>Quick Links</h4>
              <ul className="space-y-2 md:space-y-3">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm md:text-base" style={{fontFamily: 'Poppins, sans-serif'}}>Home</a></li>
                <li><a href="#features" className="text-white/70 hover:text-white transition-colors duration-300 text-sm md:text-base" style={{fontFamily: 'Poppins, sans-serif'}}>Features</a></li>
                <li><a href="/mobile" className="text-white/70 hover:text-white transition-colors duration-300 text-sm md:text-base" style={{fontFamily: 'Poppins, sans-serif'}}>Mobile App</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm md:text-base" style={{fontFamily: 'Poppins, sans-serif'}}>About Us</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm md:text-base" style={{fontFamily: 'Poppins, sans-serif'}}>Blog</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold text-base md:text-lg mb-4 md:mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>Contact</h4>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-center justify-center md:justify-start gap-3 text-white/70">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />
                  <span className="text-sm md:text-base" style={{fontFamily: 'Poppins, sans-serif'}}>hello@mimosa.com</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3 text-white/70">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />
                  <span className="text-sm md:text-base" style={{fontFamily: 'Poppins, sans-serif'}}>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start justify-center md:justify-start gap-3 text-white/70">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base text-center md:text-left" style={{fontFamily: 'Poppins, sans-serif'}}>IIIT Kottayam<br />Kerala, India</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-6 md:pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
              
              {/* Made with Love */}
              <div className="flex items-center gap-2 text-white/70 order-2 md:order-1">
                <span className="text-sm md:text-base" style={{fontFamily: 'Poppins, sans-serif'}}>Made with</span>
                <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                <span className="text-sm md:text-base" style={{fontFamily: 'Poppins, sans-serif'}}>for meaningful connections</span>
              </div>
              
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm order-3 md:order-2">
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300" style={{fontFamily: 'Poppins, sans-serif'}}>Privacy Policy</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300" style={{fontFamily: 'Poppins, sans-serif'}}>Terms of Service</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300" style={{fontFamily: 'Poppins, sans-serif'}}>Cookie Policy</a>
              </div>
              
              {/* Copyright */}
              <div className="text-white/50 text-xs md:text-sm text-center md:text-right order-1 md:order-3" style={{fontFamily: 'Poppins, sans-serif'}}>
                © 2024 Mimosa. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
