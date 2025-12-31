import React from "react";

export default function AboutUSHeroSection() {
  return (
    <section
      className="
        relative
        min-h-[40vh] md:min-h-[85vh]
        flex items-center
        justify-center
        overflow-hidden
        bg-cover bg-center *:overflow-hidden
      "
      style={{ backgroundImage: "url('about-hero-section.png')" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,31,42,0.75)] via-[rgba(11,29,40,0.75)] to-[rgba(15,61,46,0.75)]"></div>

      {/* content */}
      <div className="relative z-10 max-w-5xl px-6 md:px-12 text-center mx-auto">
        <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
          <span className="text-[#15CC63]">About</span> Middle East Egypt
        </h1>

        <p
          className="
            mt-6
            max-w-3xl
            mx-auto
            text-base md:text-2xl
            leading-relaxed
            text-white
          "
        >
          Middle East Egypt is a trusted supplier of chemical raw materials
        </p>
      </div>
    </section>
  );
}
