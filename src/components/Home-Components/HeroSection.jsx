import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <header>
      <section
        className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center rounded-b-[40px] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('here-image.png')" }}
        aria-label="Hero Section"
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-5xl px-6 md:px-12 text-center mx-auto">
          <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
            Your Trusted Partner in Chemical Raw Materials
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-base md:text-2xl leading-relaxed text-white">
            Middle East Egypt delivers reliable chemical raw materials for paints,
            coatings, construction, plastics, and industrial applications.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full backdrop-blur-md transition hover:scale-105 cursor-pointer"
            style={{ backgroundColor: "#E4F6EC4D" }}
            aria-label="Explore Our Products"
          >
            <span className="text-[#B4C9E2] text-lg font-medium">
              Explore Our Products
            </span>
            <img
              src="hero-icon.png"
              alt="Arrow icon"
              width="24"
              height="24"
              loading="eager"
            />
          </button>
        </div>
      </section>
    </header>
  );
}
