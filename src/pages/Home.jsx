import Navbar from "../components/layout/navbar/Navbar";
import HeroSection from "../components/hero/HeroSection";

import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Navbar />
      <HeroSection />
    </MainLayout>
  );
}
