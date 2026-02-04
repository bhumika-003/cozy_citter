
import { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import CozyFooter from "@/components/CozyFooter";

const Index = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play().catch(() => undefined);
        setIsSoundEnabled(true);
      } else {
        audioRef.current.pause();
        setIsSoundEnabled(false);
      }
    }
  };

  const startAudio = () => {
    if (audioRef.current?.paused) {
      audioRef.current?.play().catch(() => undefined);
      setIsSoundEnabled(true);
    }
  };

  useEffect(() => {
    const audio = new Audio("/audio/cozy_critter_cafe.wav");
    audio.loop = true;
    audio.volume = 0.18;
    audioRef.current = audio;

    startAudio();

    const handleFirstInteraction = () => {
      startAudio();
      document.removeEventListener("pointerdown", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
    };

    document.addEventListener("pointerdown", handleFirstInteraction);
    document.addEventListener("keydown", handleFirstInteraction);

    return () => {
      document.removeEventListener("pointerdown", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Enable/Disable sound button */}
      <button
        onClick={toggleAudio}
        className={`fixed bottom-4 right-4 z-[9999] p-3 rounded-xl shadow transition-all duration-200 hover:shadow-lg active:scale-95 ${
          isSoundEnabled
            ? "bg-orange-400 text-white hover:bg-orange-500"
            : "bg-white text-gray-800 hover:bg-gray-50"
        }`}
        title={isSoundEnabled ? "Disable Sound" : "Enable Sound"}
      >
        <span className="text-lg">{isSoundEnabled ? "🔊" : "🔇"}</span> {isSoundEnabled ? "Sound On" : "Sound Off"}
      </button>

      <HeroSection />
      <AboutSection />
      <MenuSection />
      <CozyFooter />
    </main>
  );
};

export default Index;
