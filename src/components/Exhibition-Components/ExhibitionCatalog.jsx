import React, { useEffect, useState } from "react";
import { ExhibitionsAPI } from "../../api/api"; 
// adjust path if needed

export default function ExhibitionCatalog() {
  const [catalogData, setCatalogData] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchExhibitions = async () => {
      try {
        const res = await ExhibitionsAPI.getAll();
        if (mounted) setCatalogData(res.data);
      } catch {
        // silent fail (no UI change requested)
      }
    };

    fetchExhibitions();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16">
      {/* Title */}
      <div className="mb-12">
        <h1 className="text-white text-4xl font-bold pb-2 border-b border-[#d9e2ec80]">
          Material Catalog
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {catalogData.map((item) => (
          <div
            key={item.id}
            className="w-11/12 h-[398px] bg-[#3C575D66] rounded-[20px] p-4 flex flex-col gap-2"
          >
            {/* Image */}
            <div className="w-full h-[200px] rounded-lg overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Title + Year */}
            <div className="flex justify-between items-center pb-2 mt-2">
              <h2 className="text-white font-semibold text-[24px]">
                {item.title}
              </h2>
              <div className="w-[61px] h-[32px] bg-[#0F3D2E] rounded-[8px] flex items-center justify-center text-[#15CC63] font-medium text-[16px]">
                {new Date(item.date).getFullYear()}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 mt-2 border-b border-[#B4C9E233] pb-2">
              <img
                src="locationsmallmark.png"
                alt="location"
                className="w-4 h-4"
              />
              <p className="text-[#8098C1] font-normal text-[16px]">
                {item.location}
              </p>
            </div>

            {/* Role */}
            <div className="mt-auto">
              <p className="text-[#8098C1] font-normal text-[16px]">
                {item.exhibitionType}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
