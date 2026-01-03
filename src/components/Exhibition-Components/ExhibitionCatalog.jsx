import React from "react";

// Card data
const catalogData = [
  {
    img: "Egypt.png",
    title: "Egypt Coating Show",
    location: "Cairo, Egypt",
    year: "2023",
    role: "Exhibitor",
  },
  {
    img: "Dubai.png",
    title: "Dubai Coating Show",
    location: "Dubai, UAE",
    year: "2024",
    role: "Speaker",
  },
  {
    img: "souq.png",
    title: "Plastic & Chemicals",
    location: "Cairo, Egypt",
    year: "2024",
    role: "Gold Sponsor",
  },
  {
    img: "Egypt2.png",
    title: "Egypt Coating Show",
    location: "Riyadh, KSA",
    year: "2023",
    role: "Speaker",
  },
  {
    img: "souq2.png",
    title: "Chemspec Middle",
    location: "Cairo, Egypt",
    year: "2023",
    role: "Exhibitor",
  },
];

export default function ExhibitionCatalog() {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-[#1E2B2A]">
      {/* Title */}
      <div className="mb-12">
        <h1 className="text-white text-4xl font-bold pb-2 border-b border-[#d9e2ec80]">
          Material Catalog
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {catalogData.map((item, index) => (
          <div
            key={index}
            className="w-11/12 h-[398px] bg-[#3C575D66] rounded-[20px] p-4 flex flex-col gap-2"
          >
            {/* Image */}
            <div className="w-full h-[200px] rounded-lg overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Title + Year */}
            <div className="flex justify-between items-center   pb-2 mt-2">
              <h2 className="text-white font-semibold text-[24px]">{item.title}</h2>
              <div className="w-[61px] h-[32px] bg-[#0F3D2E] rounded-[8px] flex items-center justify-center text-[#15CC63] font-medium text-[16px]">
                {item.year}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 mt-2 border-b border-[#B4C9E233] pb-2">
              <img
                src="locationsmallmark.png"
                alt="location"
                className="w-4 h-4"
              />
              <p className="text-[#8098C1] font-normal text-[16px]">{item.location}</p>
            </div>

            {/* Role at bottom */}
            <div className="mt-auto">
              <p className="text-[#8098C1] font-normal text-[16px]">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
