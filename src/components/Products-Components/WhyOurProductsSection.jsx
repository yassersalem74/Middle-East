import React from "react";

// Gradient Border Component
const GradientBorder = () => {
  return (
    <div
      className="absolute inset-0 rounded-2xl p-[2px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        background: "linear-gradient(to right, #4ade80, #60a5fa, #4ade80)",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }}
    />
  );
};

// Card Component
const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="relative h-[350px] w-full sm:w-[320px] rounded-2xl transition-all duration-300 group">
      {/* Main Card Content */}
      <div className="h-full w-full rounded-2xl px-6 sm:px-8 flex flex-col items-start justify-center border border-[#3C575D] group-hover:border-transparent bg-transparent">
        {/* Icon and Title */}
        <div className="mb-4">
          <img
            src={icon}
            alt={`${title.toLowerCase().replace(/\s+/g, "-")}-icon`}
            className="h-16 w-16 object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/64x64/1f4d3f/ffffff?text=${title.charAt(
                0
              )}`;
            }}
          />
          <h2 className="text-white text-2xl font-semibold py-4">{title}</h2>
        </div>

        {/* Description */}
        <div>
          <p className="text-white text-lg leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Gradient Border Overlay (shown on hover) */}
      <GradientBorder />
    </div>
  );
};

// Main Component with All Cards
const WhyOurProducts = () => {
  const cardsData = [
    {
      icon: "champion-icon.png",
      title: " High-quality",
      description:
        "Premium chemical raw materials raw materials Premium chemical raw materials  raw materials  ",
    },
    {
      icon: "trusted-icon.png",
      title: "Trusted global",
      description:
        "Partnerships with international producers Partnerships with international   producers",
    },
    {
      icon: "consistent.png",
      title: "Consistent",
      description:
        "Reliable stock and fast delivery whenever you needReliable stock and fast delivery whenever you need",
    },
  ];

  return (
    <section className="py-12 ">
      <h2 className="text-4xl text-center font-bold mb-4 text-white">
       Why Our Products ?
      </h2>
       <p className="text-[#B4C9E2] text-2xl text-center mb-12">
        Discover why clients trust us every time
      </p>

      <div className="flex flex-wrap justify-center sm:justify-evenly gap-8 px-4">
        {cardsData.map((card, index) => (
          <ValueCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyOurProducts;
