import sushiPlate from "@/assets/sushi-plate.png";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  emoji: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Salmon Nigiri",
    description: "Fresh salmon on perfectly seasoned rice",
    price: "¥850",
    emoji: "🍣",
  },
  {
    name: "Dragon Roll",
    description: "Eel, avocado, and cucumber with special sauce",
    price: "¥1,200",
    emoji: "🐉",
  },
  {
    name: "Tuna Sashimi",
    description: "Premium bluefin tuna, sliced thin",
    price: "¥1,500",
    emoji: "🐟",
  },
  {
    name: "Miso Soup",
    description: "Warm and comforting, with tofu and seaweed",
    price: "¥350",
    emoji: "🍜",
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="relative py-20 bg-night-light">
      {/* Decorative lantern glows */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-lantern/20 blur-3xl rounded-full animate-glow" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-coral/15 blur-3xl rounded-full animate-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-quicksand text-4xl md:text-5xl font-bold text-cream mb-4">
            Today's Specials
          </h2>
          <p className="font-nunito text-cream/70 text-lg max-w-md mx-auto">
            Handcrafted with love by our furry chefs 🐱
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="card-cozy group hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Steam effect */}
              <div className="relative h-16 flex items-center justify-center mb-4">
                <span className="text-5xl group-hover:animate-wiggle transition-transform">
                  {item.emoji}
                </span>
                {/* Animated steam */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <div className="w-2 h-2 bg-cream-dark/40 rounded-full blur-sm animate-steam" />
                  <div className="w-2 h-2 bg-cream-dark/30 rounded-full blur-sm animate-steam" style={{ animationDelay: "0.3s", marginLeft: "8px" }} />
                </div>
              </div>

              <h3 className="font-quicksand font-bold text-wood text-xl mb-2">
                {item.name}
              </h3>
              <p className="font-nunito text-wood-light text-sm mb-4 line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-quicksand font-bold text-coral text-lg">
                  {item.price}
                </span>
                <button className="w-10 h-10 rounded-full bg-coral/20 text-coral hover:bg-coral hover:text-cream transition-all duration-300 flex items-center justify-center">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Dish */}
        <div className="relative card-cozy overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-4 bg-lantern/30 blur-2xl rounded-full animate-glow" />
              <img
                src={sushiPlate}
                alt="Special sushi platter"
                className="relative w-64 h-64 object-contain animate-float"
              />
              {/* Steam effects */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-3">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-4 bg-cream/40 rounded-full blur-sm animate-steam"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  />
                ))}
              </div>
            </div>
            <div className="text-center md:text-left">
              <span className="inline-block px-4 py-1 bg-coral/20 text-coral rounded-full font-quicksand font-semibold text-sm mb-4">
                Chef's Special ⭐
              </span>
              <h3 className="font-quicksand font-bold text-wood text-3xl mb-3">
                Whisker's Premium Platter
              </h3>
              <p className="font-nunito text-wood-light mb-6 max-w-md">
                An exquisite selection of our finest sushi, personally prepared by Chef Whiskers. 
                Includes salmon nigiri, tuna roll, and our signature dragon roll.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <span className="font-quicksand font-bold text-coral text-2xl">¥2,800</span>
                <button className="btn-cozy text-cream">
                  Order Now 🍱
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
