import React, { useEffect, useState } from "react";
import { SliderImagesAPI } from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function SliderImageSection() {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // ===== Fetch slides =====
  useEffect(() => {
    let mounted = true;

    const fetchSlides = async () => {
      try {
        const res = await SliderImagesAPI.getAll();
        if (mounted) setSlides(res.data);
      } catch {
        console.log("Failed loading slider images");
      }
    };

    fetchSlides();
    return () => (mounted = false);
  }, []);

  // ===== Auto slide =====
  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides]);

  if (slides.length === 0) return null;

  return (
    <section className="w-full flex justify-center py-12">
      <div className="w-full max-w-5xl rounded-3xl overflow-hidden relative h-[260px] md:h-[420px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Image */}
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center">
              <div className="px-6 md:px-12 max-w-xl space-y-4">
                <h2 className="text-white text-2xl md:text-4xl font-bold">
                  {slide.title}
                </h2>

                <p className="text-[#B4C9E2] text-base md:text-xl">
                  {slide.description}
                </p>

                {/* Button */}
                <button
                  onClick={() => navigate("/products")}
                  className="
                        relative p-[2px] rounded-3xl 
                        bg-gradient-to-r from-[#81A5CE] via-[#43B88D] to-[#05B24C]
                        transition-all duration-300 
                        hover:shadow-[0_0_12px_rgba(5,178,76,0.6)]
                        cursor-pointer
                    "
                >
                  <span
                    className="
                    block px-6 py-2 rounded-3xl 
                    text-sm md:text-base font-medium
                    text-white
                    bg-[#0B1F2A]
                    transition-all duration-300
                    hover:bg-gradient-to-r hover:from-[#81A5CE] hover:via-[#43B88D] hover:to-[#05B24C]
                    "
                  >
                    Explore All Products
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                current === i ? "bg-[#15CC63] scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
