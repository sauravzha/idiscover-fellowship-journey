import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CultureGallerySection from "@/components/CultureGallerySection";
import JourneySection from "@/components/JourneySection";
import FellowsSection from "@/components/FellowsSection";
import ImpactSection from "@/components/ImpactSection";
import MemoriesSection from "@/components/MemoriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

import AudioPlayer from "@/components/AudioPlayer";

const Index = () => (
  <div className="relative min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <CultureGallerySection />
    <JourneySection />
    <FellowsSection />
    <ImpactSection />
    <MemoriesSection />
    <TestimonialsSection />
    <Footer />
    <AudioPlayer />
  </div>
);

export default Index;
