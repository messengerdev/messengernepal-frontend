import ComingSoon from "@/components/ComingSoon";
import Navbar from "@/components/home-component/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <ComingSoon 
        title="Our Story is Unfolding"
        subtitle="We're crafting the story of how MessengerNepal is transforming communication across the nation. Stay tuned!"
      />
    </>
  );
}

