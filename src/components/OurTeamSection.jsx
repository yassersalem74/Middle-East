import React from "react";

export default function OurTeamSection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-lg md:text-2xl">
            Serving diverse industries across multiple applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#39AD63] to-[#044B9D] backdrop-blur-md rounded-3xl py-8 px-6">
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

          {/* Quote Card */}
          <div className="lg:col-span-3 bg-gradient-to-r from-[#044B9D] to-[#05B24C] rounded-bl-3xl lg:rounded-r-3xl lg:rounded-bl-3xl px-6 md:px-10 py-10 flex items-center">
            <p className="text-white text-lg md:text-2xl leading-relaxed">
              “Our success is built on trust, consistency, and long-term
              partnerships. At Middle East Egypt, we are committed to delivering
              reliable chemical solutions that support our clients’ growth and
              strengthen the industries we serve.”
            </p>
          </div>
        </div>

        <div className="py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#b5b4b4] via-[#8098C1] via-[#4065A2] to-[#003183] backdrop-blur-md rounded-3xl py-8 px-6">
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

          <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#b5b4b4] via-[#8098C1] via-[#4065A2] to-[#003183] backdrop-blur-md rounded-3xl py-8 px-6">
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

          <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#b5b4b4] via-[#8098C1] via-[#4065A2] to-[#003183] backdrop-blur-md rounded-3xl py-8 px-6">
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

          <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#b5b4b4] via-[#8098C1] via-[#4065A2] to-[#003183] backdrop-blur-md rounded-3xl py-8 px-6">
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
      </div>
    </section>
  );
}
