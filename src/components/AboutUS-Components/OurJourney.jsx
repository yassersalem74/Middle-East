import React from "react";

const journeyData = [
  {
    img: "foundation.png",
    title: "Foundation",
    desc: "Established roots specializing in the Paints & Coatings sector.",
  },
  {
    img: "expansion.png",
    title: "Expansion",
    desc: "Diversified portfolio into multiple chemical industries.",
  },
  {
    img: "partenership1.png",
    title: "Global Partnerships",
    desc: "Secured strategic alliances with top-tier global producers.",
  },
  {
    img: "logistic.png",
    title: "Logistics Excellence",
    desc: "Developed robust storage & supply chain capabilities.",
  },
];

export default function OurJourney() {
  return (
    <section className="py-24  text-white">
      {/* Heading */}
      <h2 className="text-4xl text-center font-bold mb-4">Our Journey</h2>
      <p className="text-[#B4C9E2] text-xl text-center mb-12">
        A timeline of growth and commitment
      </p>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Icons + Line */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {journeyData.map((item, index) => (
            <React.Fragment key={index}>
              {/* Item */}
              <div className="flex flex-col items-center">
                {/* Icon */}
                <div className="relative hover:bg-gradient-to-tr hover:from-[#044B9D] hover:to-[#05B24C] hover:border-amber-50 transition  duration-300  z-10 flex items-center justify-center w-20 h-20 rounded-full border border-white/40">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Text */}
                <h3 className="mt-6 font-semibold text-[24px] text-[#8098C1]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[16px] text-white text-center max-w-xs">
                  {item.desc}
                </p>
              </div>

              {/* Line BETWEEN items */}
              {index !== journeyData.length - 1 && (
                <>
                  {/* Horizontal line (desktop) */}
                  <div className="hidden lg:block flex-1 h-px bg-white/40 mx-4"></div>

                  {/* Vertical line (mobile) */}
                  <div className="lg:hidden w-px h-12 bg-white/40 my-6"></div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
