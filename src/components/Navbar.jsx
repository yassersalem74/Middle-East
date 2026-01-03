import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  // NavLink class with gradient underline
  const navItemClass = ({ isActive }) =>
    `relative transition-all duration-500 text-white
     after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] 
     after:rounded-full after:bg-gradient-to-r after:from-[#05B24C] after:via-[#05B24C] after:to-[#1263be] 
     after:transition-all after:duration-500
     ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <nav className="navbar bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 px-4 py-4 sm:px-12 fixed top-0 left-0 right-0 z-50">
      {/* ===== Left / Mobile ===== */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#43B88D]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* Mobile Menu */}
          <ul className="menu menu-sm dropdown-content bg-slate-900 rounded-box z-50 mt-3 w-52 p-2 shadow">
            <li>
              <NavLink to="/" className={navItemClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navItemClass}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={navItemClass}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/industries" className={navItemClass}>
                Industries
              </NavLink>
            </li>
            <li>
              <NavLink to="/exhibition" className={navItemClass}>
                Exhibition
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/download" className={navItemClass}>
                Download
              </NavLink>
            </li> */}
          </ul>
        </div>

        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src="middle-logo.png"
            alt="middle-east-logo"
            className="hidden sm:inline-block h-14"
          />
        </NavLink>
      </div>

      {/* ===== Center / Desktop ===== */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl gap-6">
          <li>
            <NavLink to="/" className={navItemClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navItemClass}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={navItemClass}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/industries" className={navItemClass}>
              Industries
            </NavLink>
          </li>
          <li>
            <NavLink to="/exhibition" className={navItemClass}>
              Exhibition
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/download" className={navItemClass}>
              Download
            </NavLink>
          </li> */}
        </ul>
      </div>

      {/* ===== Right / CTA ===== */}
      <div className="navbar-end">
        <NavLink
          to="/contact"
          className="relative p-[2px] rounded-3xl bg-gradient-to-r from-[#81A5CE] via-[#43B88D] to-[#05B24C] transition-all duration-300 hover:shadow-[0_0_12px_rgba(5,178,76,0.6)]"
        >
          <span className="flex items-center justify-center px-6 py-2.5 rounded-3xl text-white font-medium text-[16px]">
            Contact Us
          </span>
        </NavLink>
      </div>
    </nav>
  );
}



// bg-gradient-to-r from-[#05B24C] via-[#044B9D] to-[#05B24C]