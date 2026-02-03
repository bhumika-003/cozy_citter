import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import CozyFooter from "@/components/CozyFooter";

const Index = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startAudio = () => {
    audioRef.current?.play();
  };

  return (
    <main className="min-h-screen">

      {/* Background audio */}
      <audio ref={audioRef} loop src="/audio/cozy_critter_cafe.wav" />

      {/* Enable sound button */}
      <button
        onClick={startAudio}
        className="fixed bottom-4 right-4 z-[9999] bg-white p-3 rounded-xl shadow"

      >
        🔊 Enable Sound
      </button>

      <HeroSection />
      <AboutSection />
      <MenuSection />
      <CozyFooter />
    </main>
  );
};

export default Index;
