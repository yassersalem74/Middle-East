import React from "react";

export default function IndustriesCategory() {
  const items = [
    {
      title: "Paints & Coatings",
      desc:
        "High-performance raw materials used in decorative, industrial, and protective coatings to ensure durability, finish quality, and consistency.",
      img: "/paints-coatings.png",
    },
    {
      title: "Construction",
      desc:
        "Specialty chemicals that enhance the performance of concrete, adhesives, waterproofing systems, and construction solutions.",
      img: "/Construction.png",
    },
    {
      title: "Ink Industry",
      desc:
        "Raw materials designed to support ink formulation for printing, packaging, and industrial applications with reliable color and performance.",
      img: "/Inkndustry.png",
    },
    {
      title: "Foam Industry",
      desc:
        "Chemical solutions used in flexible and rigid foam applications, offering efficiency, durability, and consistent quality.",
      img: "/Foam-Industry.png",
    },
    {
      title: "Plastics",
      desc:
        "Chemical raw materials that support plastic manufacturing processes, improving strength, flexibility, and product performance.",
      img: "/Plastics.png",
    },
    {
      title: "Adhesives",
      desc:
        "Reliable raw materials for adhesive formulations used across packaging, construction, automotive, and industrial sectors.",
      img: "/Adhesives.png",
    },
  ];

  return (
    <section className="flex flex-wrap gap-8 p-6 pb-24">
      {items.map((item, index) => (
        <div
          key={index}
          className="
            relative group
            w-full md:w-[calc(50%-16px)]
            rounded-2xl
            bg-[#3C575D4D]
            px-6 py-12
            flex flex-row md:flex-col
            gap-12
            overflow-hidden
          "
        >
          {/* CARD GRADIENT BORDER */}
          <div
            className="
              absolute inset-0
              rounded-2xl
              p-[2px]
              pointer-events-none
              opacity-0
              scale-95
              group-hover:opacity-100
              group-hover:scale-100
              transition-all
              duration-500
            "
            style={{
              background:
                "linear-gradient(90deg, #05B24C, #044B9D, #05B24C)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />

          {/* IMAGE WITH BORDER */}
          <div className="relative group/image w-fit">
            <div
              className="
                absolute inset-0
                rounded-xl
                p-[2px]
                opacity-0
                scale-90
                group-hover:opacity-100
                group-hover:scale-100
                transition-all
                duration-500
              "
              style={{
                background:
                  "linear-gradient(90deg, #05B24C, #044B9D, #05B24C)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />

            <img
              src={item.img}
              alt={item.title}
              className="relative w-16 h-16 object-contain z-10"
            />
          </div>

          {/* TEXT */}
          <div>
            <h3 className="text-white font-semibold text-[32px] mb-4">
              {item.title}
            </h3>
            <p className="text-white font-normal text-[24px]">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
