import lantern from "@/assets/lantern.png";

const CozyFooter = () => {
  return (
    <footer className="relative bg-night py-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lantern/30 to-transparent" />
      
      {/* Floating lanterns */}
      <div className="absolute top-8 left-1/4 opacity-40">
        <img src={lantern} alt="" className="w-16 h-16 object-contain animate-float" />
      </div>
      <div className="absolute top-12 right-1/3 opacity-30">
        <img src={lantern} alt="" className="w-12 h-12 object-contain animate-float-delayed" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-quicksand text-2xl font-bold text-cream mb-4">
              🍣 Paws & Plates
            </h3>
            <p className="font-nunito text-cream/60 text-sm max-w-xs mx-auto md:mx-0">
              Where every meal is made with love, whiskers, and a wagging tail.
            </p>
          </div>

          {/* Hours */}
          <div className="text-center">
            <h4 className="font-quicksand font-semibold text-cream mb-4">Open Hours</h4>
            <div className="font-nunito text-cream/60 text-sm space-y-1">
              <p>Mon - Fri: 5pm - 11pm</p>
              <p>Sat - Sun: 12pm - 11pm</p>
              <p className="text-coral mt-2">🌙 Night owls welcome!</p>
            </div>
          </div>

          {/* Ambiance */}
          <div className="text-center md:text-right">
            <h4 className="font-quicksand font-semibold text-cream mb-4">Vibe Check</h4>
            <div className="flex flex-wrap justify-center md:justify-end gap-2">
              {["Lo-fi beats", "Cozy", "Pet-friendly", "Calm"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-cream/10 text-cream/70 rounded-full text-xs font-nunito"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="font-nunito text-cream/40 text-xs mt-4">
              🎵 Now playing: soft lo-fi café jazz
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-cream/10 text-center">
          <p className="font-nunito text-cream/40 text-sm">
            Made with 💕 and lots of catnip • © 2024 Paws & Plates
          </p>
          <div className="flex justify-center gap-4 mt-4">
            {["🐱", "🐕", "🍣", "🏮", "🌿"].map((emoji, i) => (
              <span
                key={i}
                className="text-2xl hover:animate-wiggle cursor-pointer transition-transform hover:scale-125"
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CozyFooter;
