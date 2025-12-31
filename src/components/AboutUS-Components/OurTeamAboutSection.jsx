import React from "react";

export default function OurTeamAboutSection() {
  return (
    <section className="py-24  text-white">
      {/* Heading */}
      <h2 className="text-4xl text-center font-bold mb-4">Meet Our Team</h2>
      <p className="text-[#B4C9E2] text-xl text-center mb-12">
        Serving diverse industries across multiple applications
      </p>


       <div className="py-6 flex justify-center flex-wrap gap-12">
          <div className="flex flex-col  w-[250px]  h-[340px] items-center justify-center gap-4 opacity-80 hover:opacity-100 bg-gradient-to-b from-[#FFFFFF] via-[#8098C1] via-[#4065A2] to-[#003183] backdrop-blur-md rounded-3xl px-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-emerald-400 flex items-center justify-center">
                <img
                  src="ceo.png"
                  alt="CEO"
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-white">
                sayed Abd elgwad
              </h3>
              <p className="text-sm text-[#CDDBEB] mt-1">Chairman & CEO</p>
            </div>
          </div>

          <div className="flex flex-col  w-[250px]  h-[340px] items-center justify-center gap-4 opacity-80 hover:opacity-100 bg-gradient-to-b from-[#FFFFFF] via-[#8098C1] via-[#4065A2] to-[#003183] backdrop-blur-md rounded-3xl  px-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-emerald-400 flex items-center justify-center">
                <img
                  src="ceo2.png"
                  alt="CEO"
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-white">
                Sameh Elghory
              </h3>
              <p className="text-sm text-[#CDDBEB] mt-1">GM</p>
            </div>
          </div>

          <div className="flex flex-col  w-[250px]  h-[340px] items-center justify-center gap-4 opacity-80 hover:opacity-100 bg-gradient-to-b from-[#FFFFFF] via-[#8098C1] via-[#4065A2] to-[#003183] backdrop-blur-md rounded-3xl  px-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-emerald-400 flex items-center justify-center">
                <img
                  src="ceo3.png"
                  alt="CEO"
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-white">
               walied eldash
              </h3>
              <p className="text-sm text-[#CDDBEB] mt-1">Chairman & CEO</p>
            </div>
          </div>

          <div className="flex flex-col  w-[250px]  h-[340px] items-center justify-center gap-4 opacity-80 hover:opacity-100 bg-gradient-to-b from-[#FFFFFF] via-[#8098C1] via-[#4065A2] to-[#003183] backdrop-blur-md rounded-3xl  px-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-emerald-400 flex items-center justify-center">
                <img
                  src="ceo.png"
                  alt="CEO"
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-white">
                sayed Abd elgwad
              </h3>
              <p className="text-sm text-[#CDDBEB] mt-1">Chairman & CEO</p>
            </div>
          </div>
        </div>
    </section>
  );
}
