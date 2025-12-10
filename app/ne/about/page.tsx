import ComingSoon from "@/ne-components/ComingSoon";
import Navbar from "@/ne-components/home-component/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <ComingSoon 
        title="हाम्रो कथा खुल्दैछ"
        subtitle="MessengerNepal ले देशभरि सम्पर्कलाई कसरी रूपान्तरण गरिरहेको छ भन्ने कथालाई हामीले निर्माण गरिरहेका छौं। हामीसँगै रहनुहोस्!"
      />
    </>
  );
}

