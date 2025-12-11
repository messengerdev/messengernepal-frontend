import Navbar from "@/components/home-component/Navbar";
import Hero from "@/components/home-component/Hero";
import Providers from "@/components/home-component/Providers";
import UseCases from "@/components/home-component/UseCases";
import Footer from "@/components/home-component/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <UseCases />
      <Providers />
      <Footer />
    </main>
  );
}
