export default function WhoWeAre() {
  return (
    <section aria-labelledby="who-heading" className="py-16 px-16">
      
      <h2 id="who-heading" className="text-4xl text-[#15CC63] font-semibold">
        Who We Are ?
      </h2>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">

          {/* Text Content */}
          <article className="flex flex-col items-start col-span-1 lg:col-span-2">

            <h3 className="text-white text-5xl m-0 p-0">
              Trusted supplier of chemical raw materials
            </h3>

            <p className="text-white text-lg py-4 text-justify">
              Serving the Egyptian market and several neighboring regions. We
              specialize in providing reliable supply solutions that support a
              wide range of industrial applications.
            </p>

            <p className="text-white text-lg py-4 text-justify">
              Our journey began in the paints and coatings sector, where we
              built strong market knowledge and long-term client relationships.
              Over time, we expanded our portfolio to serve multiple chemical
              industries, adapting to the evolving needs of manufacturers.
            </p>

            <p className="text-white text-lg py-4 text-justify">
              Through strategic partnerships with leading global producers, we
              deliver high-quality materials that meet international standards.
            </p>
          </article>

          {/* Image */}
          <figure className="flex flex-col items-center sm:items-end justify-center">
            <img
              className="w-[350px] h-[400px] rounded-2xl object-cover"
              src="aboutUs-who-we-are.png"
              alt="Middle East Egypt facility"
              width="350"
              height="400"
              loading="lazy"
            />
          </figure>
        </div>

        <p className="text-white text-lg py-1 text-justify">
          Our continuous investment in storage and logistics has strengthened our
          distribution network, ensuring consistent availability and dependable service.
        </p>

        <p className="text-white text-lg py-1 text-justify">
          Today, Middle East Egypt operates as more than a distributor. We are a
          strategic partner focused on flexibility, efficiency, and long-term value.
        </p>
      </div>
    </section>
  );
}
