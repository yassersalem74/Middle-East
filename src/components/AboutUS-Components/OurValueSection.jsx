import React from "react";

// Card Component
const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="relative h-[350px] w-[320px] rounded-2xl transition-all duration-300 group">
      {/* Main Card Content */}
      <div className="h-full w-full rounded-2xl px-8 flex flex-col items-start justify-center border border-[#3C575D] group-hover:border-transparent bg-transparent">
        {/* Icon and Title */}
        <div className="mb-4">
          <img
            src={icon}
            alt={`${title.toLowerCase().replace(/\s+/g, "-")}-icon`}
            className="h-16 w-16 object-contain"
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

// Main Component with All Cards
const ValuesSection = () => {
  const cardsData = [
    {
      icon: "heart-icon.png",
      title: "Reliability",
      description:
        "We are committed to delivering consistent supply solutions for our clients",
    },
    {
      icon: "energy-icon.png",
      title: "Quality Excellence",
      description:
        "We believe in long-term relationships, acting as a strategic partner",
    },
    {
      icon: "puzzle-icon.png",
      title: "Partnership Mindset",
      description:
        "We work exclusively with trusted global producers to ensure quality",
    },
  ];

  return (
    <div className="py-12">
      <div className="flex flex-wrap justify-evenly gap-6">
        {cardsData.map((card, index) => (
          <ValueCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ValuesSection;
