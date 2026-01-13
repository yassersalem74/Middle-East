import React from "react";
import { Link } from "react-router-dom";

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
      <div
        className="text-white py-12 px-6
        rounded-t-3xl
        overflow-hidden
        [box-shadow:0px_4px_16px_0px_#3C575D_inset]
        [border-top:1px_solid_#3C575D]"
      >
        <div
          className="
            grid gap-10
            sm:grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            text-center
          "
        >
          {/* Subscribe + Social */}
          <div className="flex flex-col items-center">
            <h4 className="mb-4 text-lg font-semibold">
              Middle East Egypt
            </h4>

            <div className="flex w-full rounded-full bg-white">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 text-sm text-gray-700 outline-none rounded-l-full"
              />
              <button className="rounded-r-full bg-[#34649B] px-5 py-2 text-sm font-medium text-white">
                Subscribe
              </button>
            </div>

            {/* Social */}
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="LinkedIn">
                <img src="LinkedIn.png" className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Facebook">
                <img src="Facebook.png" className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src="Instagram.png" className="h-6 w-6" />
              </a>
              <a href="#" aria-label="X">
                <img src="x.png" className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center">
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white">Products</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center">
            <h4 className="mb-4 text-lg font-semibold">Contact</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Cairo, Egypt</li>
              <li>+20 XXX XXX XXXX</li>
              <li>info@middleeastegypt.com</li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center justify-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} Middle East Egypt.  
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
