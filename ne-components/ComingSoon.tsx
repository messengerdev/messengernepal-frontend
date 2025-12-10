import Link from "next/link";
import { ArrowLeft, Rocket, Timer } from "lucide-react";

interface ComingSoonProps {
  title: string;
  subtitle: string;
}

export default function ComingSoon({ title, subtitle }: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center space-y-8">
        {/* Icon */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100">
            <Timer className="w-4 h-4 text-gray-500" />
            <span className="text-xs font-medium text-gray-500">विकास अन्तर्गत</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
          
          <p className="text-lg text-gray-500 max-w-md mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Back Button */}
        <div className="pt-4">
          <Link 
            href="/ne"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            गृहमा फर्कनुहोस्
          </Link>
        </div>
      </div>
    </div>
  );
}

