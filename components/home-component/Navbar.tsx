import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-mn.png"
                alt="MessengerNepal"
                width={40}
                height={40}
                className="h-10 w-auto"
                priority
              />
              <span className="text-2xl font-semibold text-primary tracking-tight">MessengerNepal</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/features" 
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              About
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-4">
              <Link 
                href="/login" 
                className="px-6 py-2.5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Login
              </Link>
              <Link 
                href="/signup" 
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

