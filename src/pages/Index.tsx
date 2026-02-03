import { useEffect, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import CozyFooter from "@/components/CozyFooter";

const Index = () => {
  const audioRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const AudioContextConstructor =
      window.AudioContext ??
      (
        window as typeof window & {
          webkitAudioContext?: typeof AudioContext;
        }
      ).webkitAudioContext;

    if (!AudioContextConstructor) {
      return;
    }

    const startAudio = async () => {
      if (audioRef.current) {
        await audioRef.current.resume();
        return;
      }

      const audioContext = new AudioContextConstructor();
      const masterGain = audioContext.createGain();
      masterGain.gain.value = 0.08;
      masterGain.connect(audioContext.destination);

      const oscillatorA = audioContext.createOscillator();
      oscillatorA.type = "sine";
      oscillatorA.frequency.value = 196;

      const oscillatorB = audioContext.createOscillator();
      oscillatorB.type = "sine";
      oscillatorB.frequency.value = 246.94;

      const oscillatorC = audioContext.createOscillator();
      oscillatorC.type = "sine";
      oscillatorC.frequency.value = 293.66;

      const gainA = audioContext.createGain();
      gainA.gain.value = 0.45;
      const gainB = audioContext.createGain();
      gainB.gain.value = 0.35;
      const gainC = audioContext.createGain();
      gainC.gain.value = 0.25;

      oscillatorA.connect(gainA).connect(masterGain);
      oscillatorB.connect(gainB).connect(masterGain);
      oscillatorC.connect(gainC).connect(masterGain);

      oscillatorA.start();
      oscillatorB.start();
      oscillatorC.start();

      audioRef.current = audioContext;
    };

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
      if (audioRef.current) {
        audioRef.current.close();
        audioRef.current = null;
      }
    };
  }, []);

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
