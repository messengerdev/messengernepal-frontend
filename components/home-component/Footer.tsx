import Link from "next/link";
import Image from "next/image";
import { Facebook, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import esewaLogo from "@/assets/esewa-logo.png";
import fonepayLogo from "@/assets/fonepay-logo.png";

export default function Footer() {
  return (
    <footer className="relative bg-primary pt-16 pb-6 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-10 pt-6">
          {/* Brand Column */}
          <div className="md:col-span-5 text-white">
            <div className="mb-4">
              <div className="inline-block bg-white p-2">
                <Image
                  src="/full-logo-mn-copy.png"
                  alt="Messengernepal"
                  width={120}
                  height={24}
                  className="h-6 w-auto"
                />
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-sm leading-relaxed text-sm">
              Simplify communication. Connect effortlessly.
            </p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 text-white/90">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Anamnagar-29 ,Kathmandu, Nepal</span>
              </div>
              <div className="flex items-start gap-2 text-white/90">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>01-5172025</span>
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
            <h3 className="text-base font-semibold mb-4">Explore</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link href="/features" className="text-white/80 hover:text-white transition-colors">Features</Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/80 hover:text-white transition-colors">Price</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-4 text-white">
            <h3 className="text-base font-semibold mb-4">Connect</h3>
            <div className="flex gap-3 mb-6">
                <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="w-5 h-5 text-white" />
                </Link>
                <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-white" />
                </Link>
            </div>
            
            {/* Payment Providers */}
            <div>
              <h3 className="text-base font-semibold mb-3">We accept</h3>
              <div className="flex gap-2 items-center">
                <div className="relative h-10 w-24">
                  <Image
                    src={esewaLogo}
                    alt="eSewa"
                    className="object-contain"
                    width={96}
                    height={40}
                  />
                </div>
                <div className="relative h-10 w-24">
                  <Image
                    src={fonepayLogo}
                    alt="Fonepay"
                    className="object-contain"
                    width={96}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs">
            <p className="text-white/40 tracking-wider uppercase">
              © {new Date().getFullYear()} Messengernepal
            </p>
            <span className="text-white/40">•</span>
            <div className="flex gap-3">
              <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">Privacy</Link>
              <span className="text-white/40">•</span>
              <Link href="/terms" className="text-white/60 hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative foliage/blobs from reference image */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-tr-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-white/5 rounded-bl-full blur-3xl pointer-events-none" />
    </footer>
  );
}

