'use client';

import Link from "next/link";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

export default function Hero() {
  return (
    <section className="pt-34 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Slogan */}
            <h1 className="text-5xl font-bold text-primary mb-6 leading-tight">
              Turn bulk messaging into big opportunities and connectivity.
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Messengernepal makes messaging easy, reliable, secure, fast and effictive with own tech and API. Send 1000+ SMS through WhatsApp, Viber, NTC, and Ncell in a click.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/signup"
                className="px-6 py-2.5 text-white bg-primary rounded-full hover:bg-primary/90 transition-colors shadow-md w-full sm:w-auto"
              >
                Get Started
              </Link>
              <Link
                href="/"
                className="flex items-center justify-center gap-2 px-6 py-2.5 text-gray-900 bg-gray-50 rounded-full hover:bg-gray-50 transition-colors shadow-md w-full sm:w-auto"
              >
                <PlayCircle className="w-5 h-5" />
                How to use
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md bg-green-100 rounded-lg p-4">
              <Image
                src={heroImage}
                alt="Messengernepal messaging illustration"
                className="w-full h-auto object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

