import React from "react";

export default function Navbar() {
  const navItemClass = `
  relative
  transition-colors duration-300
  hover:text-[#6893C4]
  after:content-['']
  after:absolute
  after:left-0
  after:-bottom-1
  after:h-[2px]
  after:w-0
  after:bg-[#6893C4]
  after:transition-all
  after:duration-300
  hover:after:w-full
`;

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 py-4 sm:px-12 fixed top-0 z-[1] bg-transparent">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className={navItemClass}>Home</a>
            </li>
            <li>
              <a className={navItemClass}>About Us</a>
            </li>
            <li>
              <a className={navItemClass}>Products</a>
            </li>
            <li>
              <a className={navItemClass}>Industries</a>
            </li>
            <li>
              <a className={navItemClass}>Exhibition</a>
            </li>
            <li>
              <a className={navItemClass}>Download</a>
            </li>
          </ul>
        </div>
        <img
          src="middle-logo.png"
          alt="middle-east-logo"
          className="hidden sm:inline-block"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <a className={navItemClass}>Home</a>
          </li>
          <li>
            <a className={navItemClass}>About Us</a>
          </li>
          <li>
            <a className={navItemClass}>Products</a>
          </li>
          <li>
            <a className={navItemClass}>Industries</a>
          </li>
          <li>
            <a className={navItemClass}>Exhibition</a>
          </li>
          <li>
            <a className={navItemClass}>Download</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button
          className="
    relative
    p-[2px]
    rounded-3xl
    bg-gradient-to-r from-[#81A5CE] via-[#43B88D] to-[#05B24C]
    transition-all duration-300
    hover:bg-none
    cursor-pointer
  "
        >
          <span
            className="
      flex items-center justify-center
      px-6 py-2.5
      rounded-3xl
      bg-gradient-to-r from-[#81A5CE] via-[#43B88D] to-[#05B24C]
      text-white font-medium text-2xl
      transition-all duration-300
      hover:bg-transparent
      hover:shadow-[0_0_12px_rgba(5,178,76,0.6)]
    "
          >
            Contact Us
          </span>
        </button>
      </div>
    </div>
  );
}
