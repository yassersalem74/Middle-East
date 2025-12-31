export default function WhoWeAre() {
  return (
    <section className="py-16 px-16">
      <h2 className="text-4xl text-[#15CC63] font-semibold">Who We Are ?</h2>

      <div>
        <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 my-6">
          <div className="flex flex-col items-center justify-start col-span-1 lg:col-span-2">
            <h2 className="text-white text-5xl m-0 p-0">
              Trusted supplier of chemical raw materials
            </h2>
            <div className="text-white text-lg py-4 text-justify">
              serving the Egyptian market and several neighboring regions. We
              specialize in providing reliable supply solutions that support a
              wide range of industrial applications.
            </div>
            <div className="text-white text-lg py-4 text-justify">
              Our journey began in the paints and coatings sector, where we
              built strong market knowledge and long-term client relationships.
              Over time, we expanded our portfolio to serve multiple chemical
              industries, adapting to the evolving needs of manufacturers.
            </div>
                      <div className="text-white text-lg py-4 text-justify">
              Our journey began in the paints and coatings sector, where we
              built strong market knowledge and long-term client relationships.
              Over time, we expanded our portfolio to serve multiple chemical
              industries, adapting to the evolving needs of manufacturers.
            </div>
          </div>
          <div className=" flex flex-col items-center sm:items-end justify-center">
            <img
              className="w-[350px] h-[400px] rounded-2xl"
              src="aboutUs-who-we-are.png"
              alt="who-we-are.png"
            />
          </div>
        </div>

        <div className="text-white text-lg py-1 text-justify">
          Through strategic partnerships with leading global producers, we
          deliver high-quality materials that meet international standards. Our
          continuous investment in storage and logistics has strengthened our
          distribution network, ensuring consistent availability and dependable
          service.
        </div>

        <div className="text-white text-lg py-1 text-justify">
          Today, Middle East Egypt operates as more than a distributor. We are a
          strategic partner focused on flexibility, efficiency, and long-term
          value—supporting our clients’ growth in a dynamic and competitive
          market.
        </div>
      </div>
    </section>
  );
}
