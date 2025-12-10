import ComingSoon from "@/components/ComingSoon";
import Navbar from "@/components/home-component/Navbar";

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <ComingSoon 
        title="Features in the Works"
        subtitle="We're building powerful tools to help you reach millions. The detailed breakdown of our capabilities is coming soon."
      />
    </>
  );
}

