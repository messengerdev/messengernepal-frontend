'use client';

import Link from "next/link";
import { PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-34 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Slogan */}
        <h1 className="text-4xl font-bold text-primary mb-6 ">
          Turn bulk messaging into big opportunities and connectivity.
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          MessengerNepal makes messaging simple. Send bulk SMS through WhatsApp, Viber, NTC, and Ncell instantly, and grow your reach with as little as a click.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/signup"
            className="px-6 py-2.5 text-white bg-primary rounded-full hover:bg-primary/90 transition-colors shadow-md w-full sm:w-auto"
          >
            Get Started
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-2.5 text-gray-900 bg-gray-50 rounded-full hover:bg-gray-50 transition-colors shadow-md w-full sm:w-auto"
          >
            <PlayCircle className="w-5 h-5" />
            How to use
          </Link>
        </div>
      </div>
    </section>
  );
}

