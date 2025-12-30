import React from "react";

export default function Footer() {
  return (
    <footer
      className="
       bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900
    border border-[#3C575D]
    overflow-hidden
          rounded-t-3xl

      "
    >
      <div className="text-white py-12 px-6
          rounded-t-3xl
    overflow-hidden
    [box-shadow:0px_4px_16px_0px_#3C575D_inset]
    [border-top:1px_solid_#3C575D]">
        <div
          className="
            grid gap-10
            sm:grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            text-center
          "
        >
          {/* Contact Us */}
          <div className="flex flex-col items-center">
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>

            <div className="flex w-full  rounded-full bg-white">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 text-sm text-gray-700 outline-none"
              />
              <button className="rounded-full bg-[#34649B] px-5 py-2 text-sm font-medium text-white">
                Subscribe
              </button>
            </div>

            <div className="mt-6 flex gap-4">
              <img src="LinkedIn.png" alt="LinkedIn" className="h-6 w-6" />
              <img src="Facebook.png" alt="Facebook" className="h-6 w-6" />
              <img src="Instagram.png" alt="Instagram" className="h-6 w-6" />
              <img src="x.png" alt="X" className="h-6 w-6" />
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col items-center">
            <h4 className="mb-4 text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About Me</li>
              <li className="hover:text-white cursor-pointer">Services</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col items-center">
            <h4 className="mb-4 text-lg font-semibold">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Blogs</li>
              <li className="hover:text-white cursor-pointer">Podcasts</li>
              <li className="hover:text-white cursor-pointer">Books</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center">
            <h4 className="mb-4 text-lg font-semibold">Contact</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Greyson Lane 6212-648 Palarni.</li>
              <li>(610) 945-7986</li>
              <li>hello@Transparent.co</li>
            </ul>

            <button
              className="
                mt-6 rounded-full
                bg-[#34649B]
                px-6 py-2
                text-sm font-medium
                text-white
                hover:opacity-90
              "
            >
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
