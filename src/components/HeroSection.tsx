import catChef from "@/assets/cat-chef.png";
import dogCustomer from "@/assets/dog-customer.png";
import cozyStreetBg from "@/assets/cozy-street-bg.png";

const HeroSection = () => {
  const handleViewMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cozyStreetBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-night/40 via-transparent to-night/80" />
      </div>

      {/* Floating Particles/Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-lantern/60 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          {/* Title with lantern glow effect */}
          <div className="relative mb-8">
            <div className="absolute -inset-10 bg-lantern/20 blur-3xl rounded-full animate-glow" />
            <h1 className="relative font-quicksand text-5xl md:text-7xl font-bold text-cream drop-shadow-lg">
              Paws & Plates
            </h1>
            <p className="relative font-nunito text-xl md:text-2xl text-cream/90 mt-4 max-w-lg mx-auto">
              A cozy sushi restaurant run by the most adorable chefs in town
            </p>
          </div>

          {/* Characters */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
            {/* Cat Chef */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-lantern/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={catChef}
                alt="Cute cat chef"
                className="relative w-48 h-48 md:w-64 md:h-64 object-contain animate-float drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-cream/90 px-4 py-2 rounded-2xl shadow-cozy">
                <p className="font-quicksand font-semibold text-wood text-sm">Chef Whiskers</p>
              </div>
            </div>

            {/* Dog Customer */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-coral/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={dogCustomer}
                alt="Happy dog customer"
                className="relative w-48 h-48 md:w-64 md:h-64 object-contain animate-float-delayed drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-cream/90 px-4 py-2 rounded-2xl shadow-cozy">
                <p className="font-quicksand font-semibold text-wood text-sm">Mochi</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-16">
            <button
              type="button"
              onClick={handleViewMenu}
              className="btn-cozy text-cream text-lg hover:animate-wiggle"
            >
              🍣 View Menu
            </button>
            <button className="px-6 py-3 rounded-2xl font-quicksand font-semibold bg-cream/90 text-wood hover:bg-cream transition-all duration-300 shadow-cozy hover:-translate-y-1">
              ✨ Play Now
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
            <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-cream/70 rounded-full animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
