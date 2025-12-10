import Navbar from "@/ne-components/home-component/Navbar";
import Hero from "@/ne-components/home-component/Hero";
import UseCases from "@/ne-components/home-component/UseCases";
import Footer from "@/ne-components/home-component/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <UseCases />
      <Footer />
    </main>
  );
}

