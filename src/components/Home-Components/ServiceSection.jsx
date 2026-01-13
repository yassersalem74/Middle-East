import React, { useEffect, useState } from "react";
import { IndustriesAPI } from "../../api/api";

export default function ServiceSection() {
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchIndustries = async () => {
      try {
        const res = await IndustriesAPI.getAll();
        if (mounted) setIndustries(res.data);
      } catch {
        console.log("error")
      }
    };

    fetchIndustries();
    return () => (mounted = false);
  }, []);

  return (
    <section className="py-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Industries We Serve
        </h2>
        <p className="text-gray-400 mb-12 text-2xl">
          Serving diverse industries across multiple applications
        </p>
      </div>

      <div className="flex gap-6 flex-wrap justify-center">
        {industries.map((item) => (
          <div
            key={item.id}
            className="
              group
              flex flex-col gap-4 items-center justify-center
              w-[250px] h-[340px]
              bg-[#B4C9E233]
              rounded-3xl
              transition-all duration-300 ease-out
              hover:-translate-y-3
              hover:shadow-[0_12px_30px_rgba(21,204,99,0.6)]
              hover:bg-[#3df58d20]
            "
          >
            {/* Image */}
            <img
              src={item.imageUrl}
              alt={item.title}
              className="
                w-20 h-20 object-contain
                transition-transform duration-300
                group-hover:-translate-y-2 group-hover:scale-110
              "
            />

            {/* Title */}
            <div className="
              text-2xl text-white text-center font-medium
              transition-colors duration-300
              group-hover:text-[#15CC63]
            ">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
