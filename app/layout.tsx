import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import WhatsAppChat from "@/components/WhatsAppChat";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "MessengerNepal - Bulk Messaging Services",
  description: "Bulk messaging app providing services through WhatsApp, Viber,NTC, and Ncell. Send messages efficiently across multiple platforms in Nepal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} antialiased`}
      >
        {children}
        <WhatsAppChat />
      </body>
    </html>
  );
}
