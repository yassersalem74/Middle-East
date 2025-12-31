import React from "react";

export default function OurValueSection() {
  return (
    <section className="mt-12 mb-28">
      <h2 className="text-center text-white text-5xl font-semibold mt-6 mb-16">
        Our Value
      </h2>

      <div className="flex flex-wrap justify-evenly gap-6">
        <div className="px-8 flex flex-col items-start justify-center gap-9 w-[320px] h-[350px] border border-[#3C575D] rounded-2xl">
          <div className="">
            <img src="heart-icon.png" alt="heart-icon" />
            <h2 className="text-white text-3xl py-4">Reliability</h2>
          </div>
          <div>
            <div className="text-white text-2xl">
              We are committed to delivering consistent supply solutions our
              clients{" "}
            </div>
          </div>
        </div>

        <div className="px-8 flex flex-col items-start justify-center gap-9 w-[320px] h-[350px] border border-[#3C575D] rounded-2xl">
          <div className="">
            <img src="energy-icon.png" alt="energy-icon" />
            <h2 className="text-white text-3xl py-4">Quality Excellence</h2>
          </div>
          <div>
            <div className="text-white text-2xl">
              We believe in long-term relationships, acting as a strategic
              partner{" "}
            </div>
          </div>
        </div>

        <div className="px-8 flex flex-col items-start justify-center gap-9 w-[320px] h-[350px] border border-[#3C575D] rounded-2xl">
          <div className="">
            <img src="puzzle-icon.png" alt="puzzle-icon" />
            <h2 className="text-white text-3xl py-4">Partnership Mindset</h2>
          </div>
          <div>
            <div className="text-white text-2xl">
              We work exclusively with trusted global producers to ensure
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
