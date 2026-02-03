const AboutSection = () => {
  const features = [
    {
      emoji: "🐱",
      title: "Adorable Staff",
      description: "Our furry chefs are trained in the ancient art of sushi-making",
    },
    {
      emoji: "🏮",
      title: "Cozy Atmosphere",
      description: "Warm lantern lights and soft music create the perfect escape",
    },
    {
      emoji: "🌿",
      title: "Fresh Ingredients",
      description: "Only the finest fish and vegetables, sourced daily",
    },
    {
      emoji: "🎮",
      title: "Play & Dine",
      description: "Help our chefs prepare dishes in our fun mini-games",
    },
  ];

  return (
    <section className="relative py-20 bg-night">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-sage blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-20 w-48 h-48 bg-coral blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-quicksand text-4xl md:text-5xl font-bold text-cream mb-4">
            Why Visit Us?
          </h2>
          <p className="font-nunito text-cream/70 text-lg">
            More than just a restaurant — it's a cozy adventure ✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-3xl bg-cream/5 border border-cream/10 hover:bg-cream/10 hover:border-lantern/30 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lantern/20 to-coral/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{feature.emoji}</span>
              </div>
              <h3 className="font-quicksand font-bold text-cream text-xl mb-2">
                {feature.title}
              </h3>
              <p className="font-nunito text-cream/60 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mt-20">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-lantern/40" />
          <span className="text-2xl animate-float">🍥</span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-lantern/40" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
