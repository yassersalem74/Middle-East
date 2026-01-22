import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 border-t border-[#3C575D]">

      <div className="max-w-7xl mx-auto px-6 py-12 text-white">

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3 text-center md:text-left">

          {/* ===== Company Info ===== */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Middle East Egypt
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Specialized in chemical raw materials and industrial solutions across multiple sectors in Egypt and the Middle East.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              
              <a
                href="https://www.linkedin.com/company/middle-east-egypt/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition hover:scale-110 hover:opacity-80"
              >
                <img src="/LinkedIn.png" className="h-6 w-6" alt="LinkedIn" />
              </a>

              <a
                href="https://www.facebook.com/share/17RSGqhsfn/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition hover:scale-110 hover:opacity-80"
              >
                <img src="/Facebook.png" className="h-6 w-6" alt="Facebook" />
              </a>

              <a
                href="https://www.instagram.com/middeleastegypt?igsh=MXdmMXg0bzZ0czR2cQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition hover:scale-110 hover:opacity-80"
              >
                <img src="/Instagram.png" className="h-6 w-6" alt="Instagram" />
              </a>
            </div>
          </div>

          {/* ===== Quick Links ===== */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== Contact Info ===== */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Cairo, Egypt</li>
              <li>
                <a
                  href="mailto:info@middleeastegypt.com"
                  className="hover:text-white transition"
                >
                  info@middleeastegypt.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="border-t border-[#3C575D] mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Middle East Egypt. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
