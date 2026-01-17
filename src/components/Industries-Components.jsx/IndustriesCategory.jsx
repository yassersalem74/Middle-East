import React, { useEffect, useState } from "react";
import { IndustriesAPI } from "../../api/api";
import { Link } from "react-router-dom";

export default function IndustriesCategory() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchIndustries = async () => {
      try {
        const res = await IndustriesAPI.getAll();
        if (mounted) setItems(res.data);
      } catch {
        console.log("Failed to load industries");
      }
    };

    fetchIndustries();
    return () => (mounted = false);
  }, []);

  return (
    <section className="flex flex-wrap gap-8 p-6 pb-24">
      {items.map((item) => (
        <Link
          key={item.id}
          to={`/industries/${item.id}`}
          className="
            relative group
            w-full md:w-[calc(50%-16px)]
            rounded-2xl
            bg-[#3C575D4D]
            px-6 py-12
            flex flex-col
            gap-8
            overflow-hidden
            transition-all
            duration-500
            hover:bg-[#15cc6320]
            hover:-translate-y-2
          "
        >
          {/* Gradient Border on Hover */}
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
              background: "linear-gradient(90deg, #0d361e, #044B9D, #05B24C)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />

          {/* Icon */}
          <div className="relative w-fit">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="relative w-16 h-16 object-contain z-10"
              loading="lazy"
            />
          </div>

          {/* Title */}
          <h3 className="text-white font-semibold text-[28px]">
            {item.title}
          </h3>
        </Link>
      ))}
    </section>
  );
}
