import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-primary pt-20 pb-6 overflow-hidden">
      {/* Wave SVG Shape */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg 
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-10 pt-6">
          {/* Brand Column */}
          <div className="md:col-span-5 text-white">
            <h2 className="text-2xl font-bold mb-4">MessengerNepal</h2>
            <p className="text-white/80 mb-6 max-w-sm leading-relaxed text-sm">
              सम्पर्क सजिलो बनाउनुहोस्। सहज रूपमा जडान गर्नुहोस्।
            </p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 text-white/90">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>अनामनगर-२९, काठमाडौं, नेपाल</span>
              </div>
              <div className="flex items-start gap-2 text-white/90">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>०१५१७२०२५</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>inquiry@messengernepal.com.np</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>customercare@messengernepal.com.np</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 text-white">
            <h3 className="text-base font-semibold mb-4">अन्वेषण गर्नुहोस्</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/ne" className="text-white/80 hover:text-white transition-colors">गृह</Link>
              </li>
              <li>
                <Link href="/ne/about" className="text-white/80 hover:text-white transition-colors">हाम्रो बारेमा</Link>
              </li>
              <li>
                <Link href="/ne/features" className="text-white/80 hover:text-white transition-colors">विशेषताहरू</Link>
              </li>
              <li>
                <Link href="/ne/pricing" className="text-white/80 hover:text-white transition-colors">मूल्य</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-4 text-white">
            <h3 className="text-base font-semibold mb-4">जडान गर्नुहोस्</h3>
            <div className="flex gap-3 mb-4">
                <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="w-5 h-5 text-white" />
                </Link>
            </div>
            <div className="flex gap-3 text-xs">
                <Link href="/ne/privacy" className="text-white/60 hover:text-white transition-colors">गोपनीयता</Link>
                <span className="text-white/40">•</span>
                <Link href="/ne/terms" className="text-white/60 hover:text-white transition-colors">सर्तहरू</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/40 text-xs tracking-wider uppercase">
            © {new Date().getFullYear()} MessengerNepal
          </p>
        </div>
      </div>
      
      {/* Decorative foliage/blobs from reference image */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-tr-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-white/5 rounded-bl-full blur-3xl pointer-events-none" />
    </footer>
  );
}

