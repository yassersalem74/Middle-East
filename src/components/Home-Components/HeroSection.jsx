export default function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-[70vh] md:min-h-[85vh]
        flex items-center
        justify-center
        rounded-b-[40px]
        overflow-hidden
        bg-cover bg-center *:overflow-hidden
      "
      style={{ backgroundImage: "url('here-image.png')" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* content */}
      <div className="relative z-10 max-w-5xl px-6 md:px-12 text-center mx-auto">
        <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
          Your Trusted Partner in Chemical Raw Materials
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
          Middle East Egypt delivers reliable chemical raw materials for paints,
          coatings, construction, plastics, and other industrial applications
          across Egypt and the region.
        </p>

        {/* button */}
        <button
          className="
            mt-10
            inline-flex items-center gap-3
            px-8 py-4
            rounded-full
            backdrop-blur-md
            transition
            hover:scale-105
            cursor-pointer
          "
          style={{ backgroundColor: "#E4F6EC4D" }}
        >
          <span className="text-[#B4C9E2] text-lg font-medium">
            Explore Our Products
          </span>
          <img
            src="hero-icon.png"
            alt="arrow icon"
            className="w-6 h-6"
          />
        </button>
      </div>
    </section>
  );
}
