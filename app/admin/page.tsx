import ComingSoon from "@/components/ComingSoon";
import Navbar from "@/components/home-component/Navbar";

export default function AdminDashboardPage() {
  return (
    <>
      <Navbar />
      <ComingSoon 
        title="Dashboard under construction"
        subtitle="We're building an amazing dashboard experience for you. Check back soon for updates and new features!"
      />
    </>
  );
}

