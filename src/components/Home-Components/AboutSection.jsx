
export default function AboutSection() {
  return (
    <section className="relative overflow-hidden  py-16 px-6 md:px-12">
      <article className="flex justify-evenly flex-wrap lg:flex-nowrap gap-12 items-center">
        {/* Left Content */}
        <div className="text-white flex flex-col justify-between content-between ">
          <h2 className="text-3xl md:text-6xl font-bold mb-6">
            About <span className="text-[#05B24C]">Middle East Egypt</span>
          </h2>

          <p className="text-gray-300 mb-4 leading-relaxed">
            <span className="text-[#05B24C] font-semibold">Our Vision</span>{" "}
            To be a trusted regional partner in the chemical industry,
            delivering reliable solutions that support sustainable growth and
            add long-term value to our clients and partners.
          </p>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Middle East Egypt is a trusted supplier of chemical raw materials,
            serving the Egyptian market and neighboring regions.
            <span className="text-[#05B24C] cursor-pointer hover:underline ml-1">
              Read more
            </span>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3  mt-8">
            <div className="rounded-l-xl bg-white/10 backdrop-blur-md p-6 text-center">
              <h3 className="text-3xl md:text-5xl font-bold text-white">10+</h3>
              <p className="text-gray-300 text-lg  mt-1">Years of Experience</p>
            </div>

            <div className=" bg-white/10 backdrop-blur-md p-6 text-center">
              <h3 className="text-3xl md:text-5xl font-bold text-white">8+</h3>
              <p className="text-gray-300 text-lg  mt-1">
                Industrial Sectors Served
              </p>
            </div>

            <div className="rounded-r-xl bg-white/10 backdrop-blur-md p-6 text-center">
              <h3 className="text-3xl md:text-5xl font-bold text-white">100%</h3>
              <p className="text-gray-300 text-lg  mt-1">Reliable Supply</p>
            </div>
          </div>
        </div>
        {/* Right Image */}
        <figure className="relative flex justify-center lg:justify-end ">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/30">
            <img
              src="about-image-section.png"
              alt="Middle East Egypt Overview"
              className="w-full max-w-md lg:max-w-lg object-cover"
            />
          </div>
        </figure>
      </article>
    </section>
  );
}
