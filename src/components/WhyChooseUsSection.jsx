import React from "react";

export default function WhyChooseUsSection() {
  const cards = [
    {
      image: "champ.png",
      title: "Trusted Industry Experience",
      description: "Proven expertise serving multiple chemical industries.",
    },
    {
      image: "car.png",
      title: "Reliable Storage & Distribution",
      description: "Expanded storage ensuring consistent product availability.",
    },
    {
      image: "partenership.png",
      title: "Global Partnerships",
      description: "Strong relationships with leading international producers.",
    },
  ];

  return (
      <section className=" bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900  text-white py-16 px-4 text-center" style={{
      background: "linear-gradient(135deg, #0F3D2E 0%, #0B1F2A 50%, #0A1B25 100%)",
    }}>
        <h2 className="text-4xl font-bold mb-4">Why Choose Us ?</h2>
        <p className="text-gray-400 mb-12 text-2xl">
          What sets Middle East Egypt apart in the chemical industry
        </p>

        <div className="flex flex-wrap justify-evenly gap-12 px-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative h-[460px] w-[343px] rounded-2xl transition-all duration-300 group"
            >
              <div className="h-full w-full bg-gray-900 rounded-2xl p-8 flex flex-col items-center justify-center text-center border border-[#E6EDF5]/50 group-hover:border-transparent">
                <div className="mb-6 overflow-hidden rounded-full">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-[150px] w-[150px] rounded-full object-contain"
                    style={{
                      animation: "scaleBreathe 4s ease-in-out infinite",
                    }}
                  />
                </div>
                <h3 className="text-3xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-300 text-xl">{card.description}</p>
              </div>

              <div
                className="absolute inset-0 rounded-2xl p-[2px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to right, #4ade80, #60a5fa, #4ade80)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              ></div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes scaleBreathe {
            0% {
              transform: scale(0.85);
            }
            50% {
              transform: scale(1.15);
            }
            100% {
              transform: scale(0.85);
            }
          }
        `}</style>
      </section>
  );
}
