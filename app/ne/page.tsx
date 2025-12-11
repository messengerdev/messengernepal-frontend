import Navbar from "@/ne-components/home-component/Navbar";
import Hero from "@/ne-components/home-component/Hero";
import Providers from "@/ne-components/home-component/Providers";
import UseCases from "@/ne-components/home-component/UseCases";
import HowToSend from "@/ne-components/home-component/HowToSend";
import Footer from "@/ne-components/home-component/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <UseCases />
      <Providers />
      <HowToSend />
      <Footer />
    </main>
  );
}

