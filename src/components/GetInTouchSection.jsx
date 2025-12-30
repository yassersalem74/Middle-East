import React from "react";

export default function GetInTouchSection() {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get in Touch with Us
          </h2>
          <p className="text-gray-400 text-2xl">
            Contact Middle East Egypt for any questions or additional
            information.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT CARD */}
          <div className="rounded-2xl flex flex-col justify-center border border-[#E6EDF580] shadow-[0px_0px_6px_0px_white] p-6 space-y-6 bg-white/5">
            {/* Item */}
            {[
              { icon: "location.png", title: "LOCATION" },
              { icon: "email.png", title: "EMAIL" },
              { icon: "phone.png", title: "PHONE" },
              { icon: "calendar.png", title: "SCHEDULE MEETING" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-[#3C575D] rounded-xl p-4"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <p className="text-white text-lg font-semibold">
                    {item.title}
                  </p>
                  <p className="text-[#CDDBEB] text-base">
                    Suadi Arabia, street 18
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-2xl border border-[#E6EDF580] shadow-[0px_0px_6px_0px_white] p-6 bg-white/5">
            <form className="space-y-6">
              {/* Input */}
              {["Name", "Email", "Subject"].map((placeholder, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={placeholder}
                  className="
                    w-full
                    bg-[#3C575D]
                    rounded-xl
                    px-5
                    py-4
                    text-white
                    placeholder:text-[#CDDBEB]
                    placeholder:text-[24px]
                    placeholder:font-normal
                    focus:outline-none
                  "
                />
              ))}

              {/* Textarea */}
              <textarea
                rows="4"
                placeholder="Message"
                className="
                  w-full
                  bg-[#3C575D]
                  rounded-lg
                  px-5
                  py-4
                  text-white
                  placeholder:text-[#CDDBEB]
                  placeholder:text-[24px]
                  placeholder:font-normal
                  focus:outline-none
                  resize-none
                "
              />

              {/* Button */}
              <button
                type="submit"
                className="
                  w-full
                  bg-gradient-to-r from-[#033F83CC] to-[#044B9D]
                  text-white
                  text-lg
                  font-semibold
                  py-4
                  rounded-lg
                  cursor-pointer
                  border-transparent
                    hover:bg-blue-200
                    hover:[border-image:linear-gradient(to_left,#033F83CC,#044B9D)_1]
                  hover:opacity-90
                  transition
                "
              >
                TRANSMIT MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
