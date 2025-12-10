'use client';

import Link from "next/link";
import { PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-34 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Slogan */}
        <h1 className="text-4xl font-bold text-primary mb-6 ">
        सामूहिक सञ्चारले निर्माण गर्ने विशद् अवसर र प्रगाढ संयोजकता अनुभव गर्नुहोस्।
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          MessengerNepal ले सन्देश पठाउन सजिलो बनाउँछ। WhatsApp, Viber, NTC, र Ncell मार्फत तुरुन्तै थोक SMS पठाउनुहोस्, र एउटा क्लिकमा आफ्नो पहुँच बढाउनुहोस्।
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/ne/signup"
            className="px-6 py-2.5 text-white bg-primary rounded-full hover:bg-primary/90 transition-colors shadow-md w-full sm:w-auto"
          >
            सुरु गर्नुहोस्
          </Link>
          <Link
            href="/ne"
            className="flex items-center justify-center gap-2 px-6 py-2.5 text-gray-900 bg-gray-50 rounded-full hover:bg-gray-50 transition-colors shadow-md w-full sm:w-auto"
          >
            <PlayCircle className="w-5 h-5" />
            कसरी प्रयोग गर्ने
          </Link>
        </div>
      </div>
    </section>
  );
}

