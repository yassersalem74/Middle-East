import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IndustriesAPI } from "../../api/api";

export default function IndustryDetails() {
  const { id } = useParams();
  const [industry, setIndustry] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchIndustry = async () => {
      try {
        const res = await IndustriesAPI.getAll();
        const found = res.data.find((i) => i.id == id);
        if (mounted) setIndustry(found);
      } catch {
        console.log("Failed loading industry");
      }
    };

    fetchIndustry();
    return () => (mounted = false);
  }, [id]);

  if (!industry) {
    return (
      <div className="text-center text-white text-xl py-24">
        Loading...
      </div>
    );
  }

  return (
    <section className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <Link
          to="/industries"
          className="btn btn-sm mb-8 bg-[#3C575D] text-white hover:bg-[#044B9D]"
        >
          ← Back to Industries
        </Link>

        {/* Content Card */}
        <div className="
          grid grid-cols-1 lg:grid-cols-2
          gap-10
          items-center
          bg-[#3C575D33]
          rounded-3xl
          p-8
          border border-[#B4C9E233]
        ">
          
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={industry.imageUrl}
              alt={industry.title}
              className="
                w-[280px] h-[280px]
                object-contain
                rounded-2xl
                shadow-lg
              "
            />
          </div>

          {/* Text */}
          <div>
            <h1 className="text-4xl font-bold text-[#15CC63] mb-4">
              {industry.title}
            </h1>

            <p className="text-[#B4C9E2] text-lg leading-relaxed">
              {industry.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
