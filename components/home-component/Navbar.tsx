'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  
  // Detect current locale from pathname
  const isNepali = pathname.startsWith('/ne');
  const currentLocale = isNepali ? 'ne' : 'en';
  const localePrefix = isNepali ? '/ne' : '';

  const languages = {
    en: 'English',
    ne: 'नेपाली'
  };

  const handleLanguageToggle = () => {
    const newLocale = currentLocale === 'en' ? 'ne' : 'en';
    const newPrefix = newLocale === 'ne' ? '/ne' : '';
    
    // Get current path without locale prefix
    let currentPath = pathname;
    if (isNepali) {
      currentPath = pathname.replace('/ne', '') || '/';
    }
    
    // Navigate to the same page but with new locale
    const newPath = newPrefix + currentPath;
    router.push(newPath);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={localePrefix + "/"} className="flex items-center gap-2">
              <Image
                src="/logo-mn.png"
                alt="Messengernepal"
                width={40}
                height={40}
                className="h-10 w-auto"
                priority
              />
              <span className="text-2xl font-semibold text-primary tracking-tight">Messengernepal</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href={localePrefix + "/"} 
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              href={localePrefix + "/features"} 
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link 
              href={localePrefix + "/about"} 
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              About
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={handleLanguageToggle}
              className="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{languages[currentLocale === 'en' ? 'ne' : 'en']}</span>
            </button>

            <div className="hidden sm:flex items-center gap-4">
              <Link 
                href={localePrefix + "/login"} 
                className="px-6 py-2.5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Login
              </Link>
              <Link 
                href={localePrefix + "/signup"} 
                className="px-6 py-2.5 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

