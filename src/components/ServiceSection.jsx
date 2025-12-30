import React from "react";

export default function ServiceSection() {
  return (
    <section className="pt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 ">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Why Choose Us ?</h2>
        <p className="text-gray-400 mb-12 text-2xl">
          What sets Middle East Egypt apart in the chemical industry
        </p>
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        <div className="flex flex-col gap-4  items-center justify-center w-[250px] h-[340px] bg-[#B4C9E233] rounded-3xl">
          <div>
            <img src="PaintPalette.png" alt="paint-palette" />
          </div>
          <div className="text-4xl text-center">Paints & Coatings Industry</div>
        </div>

        <div className="flex flex-col gap-4  items-center justify-center w-[250px] h-[340px] bg-[#B4C9E233] rounded-3xl">
          <div>
            <img src="Company.png" alt="company" />
          </div>
          <div className="text-4xl text-center">
            Construction & Building Materials
          </div>
        </div>

        <div className="flex flex-col gap-4  items-center justify-center w-[250px] h-[340px] bg-[#B4C9E233] rounded-3xl">
          <div>
            <img src="Soap.png" alt="Soap" />
          </div>
          <div className="text-4xl text-center">Foam & Insulation Industry</div>
        </div>

        <div className="flex flex-col gap-4  items-center justify-center w-[250px] h-[340px] bg-[#B4C9E233] rounded-3xl">
          <div>
            <img src="CopyMachine.png" alt="Copy-Machine" />
          </div>
          <div className="text-4xl text-center">Ink & Printing Industry</div>
        </div>

        <div className="flex flex-col gap-4  items-center justify-center w-[250px] h-[340px] bg-[#B4C9E233] rounded-3xl">
          <div>
            <img src="Package.png" alt="Package" />
          </div>
          <div className="text-4xl text-center">Can Coating & Packaging</div>
        </div>

        <div className="flex flex-col gap-4  items-center justify-center w-[250px] h-[340px] bg-[#B4C9E233] rounded-3xl">
          <div>
            <img src="Plastic.png" alt="Plastic" />
          </div>
          <div className="text-4xl text-center">Plastic & Polymer Industry</div>
        </div>
      </div>
    </section>
  );
}
