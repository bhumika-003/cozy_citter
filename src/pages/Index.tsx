import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import CozyFooter from "@/components/CozyFooter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <CozyFooter />
    </main>
  );
};

export default Index;
