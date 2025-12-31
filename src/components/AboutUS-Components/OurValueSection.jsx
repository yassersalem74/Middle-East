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
    <div className="pt-24 ">
      <h2 className="text-4xl text-center pb-12 font-bold mb-4  text-white">
        Why Choose Us ?
      </h2>

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

      {/* Quote Section */}
      <div className="mt-20 mx-auto w-full sm:w-4/5 px-4 sm:px-8">
        <div
          className="
            px-6 sm:px-12
            py-12 sm:py-20
            flex
            flex-col md:flex-row
            gap-8 md:gap-12
            items-center
            bg-gradient-to-r from-[#044B9D] to-[#05B24C]
            border-l-[8px] border-white
            rounded-2xl
            relative
            overflow-hidden
          "
        >
          {/* Background pattern/effect */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16"></div>
          </div>

          {/* Image */}
          <div className="relative z-10 flex justify-center items-center shrink-0">
            <div className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-full border-4 border-white/30 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/value-person.png"
                alt="Sayed Abd Elgwad - Chairman & CEO"
              />
            </div>
          </div>

          {/* Quote Text */}
          <div className="relative z-10 text-center md:text-left">
            <div className="text-6xl text-white/30 absolute -top-6 -left-4">
              "
            </div>
            <p className="text-white text-lg sm:text-xl leading-relaxed relative z-10">
              “Our success is built on trust, consistency, and long-term
              partnerships. At Middle East Egypt, we are committed to delivering
              reliable chemical solutions that support our clients’ growth and
              strengthen the industries we serve.”
            </p>

            <div className="mt-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Sayed Abd Elgwad
              </h2>
              <div className="text-[#CDDBEB] text-lg mt-2">Chairman & CEO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
