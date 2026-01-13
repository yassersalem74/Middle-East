import React, { useEffect, useState } from "react";
import { IndustriesAPI } from "../../api/api"; 
// 👆 adjust path if file is inside components folder

export default function IndustriesCategory() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchIndustries = async () => {
      try {
        const res = await IndustriesAPI.getAll();
        if (mounted) setItems(res.data);
      } catch {
        // silent fail (no UI change requested)
      }
    };

    fetchIndustries();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="flex flex-wrap gap-8 p-6 pb-24">
      {items.map((item) => (
        <div
          key={item.id}
          className="
            relative group
            w-full md:w-[calc(50%-16px)]
            rounded-2xl
            bg-[#3C575D4D]
            px-6 py-12
            flex flex-col
            gap-12
            overflow-hidden
            hover:bg-[#15cc63]
            transition-all
            duration-500
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
              background: "linear-gradient(90deg, #0d361e, #044B9D, #05B24C)",
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
                background: "linear-gradient(90deg, #0d361e, #044B9D, #05B24C)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />

            <img
              src={item.imageUrl}
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
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
