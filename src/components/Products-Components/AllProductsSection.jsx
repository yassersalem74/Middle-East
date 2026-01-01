import React, { useState } from "react";

// Sample product data
const products = [
  {
    img: "/titanium-dioide1.png",
    title: "Titanium Dioxide",
    cas: "13463-67-7",
    purity: "99.9% Purity",
    status: "IN STOCK",
  },
  {
    img: "/titanium-dioide2.png",
    title: "Titanium Dioxide",
    cas: "13463-67-7",
    purity: "99.9% Purity",
    status: "IN STOCK",
  },
  {
    img: "/titanium-dioide3.png",
    title: "Titanium Dioxide",
    cas: "13463-67-7",
    purity: "99.9% Purity",
    status: "LOW STOCK",
  },
  {
    img: "/titanium-dioide4.png",
    title: "Titanium Dioxide",
    cas: "13463-67-7",
    purity: "99.9% Purity",
    status: "IN STOCK",
  },
  {
    img: "/titanium-dioide5.png",
    title: "Titanium Dioxide",
    cas: "13463-67-7",
    purity: "99.9% Purity",
    status: "OUT OF STOCK",
  },
  {
    img: "/titanium-dioide6.png",
    title: "Titanium Dioxide",
    cas: "13463-67-7",
    purity: "99.9% Purity",
    status: "LOW STOCK",
  },
];

// Map status to badge colors
const statusColors = {
  "IN STOCK": "bg-[#0F3D2E] text-[#15CC63]",
  "LOW STOCK": "bg-[#3D3B0F] text-[#FFCC00]",
  "OUT OF STOCK": "bg-[#261818] text-[#FF3B30]",
};

// Filters
const filters = ["All Industries", "Paints", "Construction", "Plastics"];

export default function MaterialCatalog() {
  const [selectedFilter, setSelectedFilter] = useState("All Industries");

  return (
    <section className="py-24 px-6 text-white font-inter">
      <div className="flex justify-between flex-wrap">
        {/* Heading */}
        <h2 className="text-[48px] font-medium mb-8">Material Catalog</h2>

        {/* Filters */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-md font-medium text-sm transition-all cursor-pointer duration-300 transform ${
                selectedFilter === filter
                  ? "bg-[#044B9D] text-white hover:bg-[#0362C1]"
                  : "bg-[#3C575D] text-white hover:bg-[#2f4a57] hover:scale-105"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer  rounded-[8px]"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-[211px] object-cover rounded-[8px]"
            />
            <div className="mt-4 flex items-center justify-between">
              <h3 className="text-white font-medium text-[16px]">
                {product.title}
              </h3>
              <span
                className={`px-3 py-1 rounded-md font-medium text-[16px] ${
                  statusColors[product.status]
                }`}
              >
                {product.status}
              </span>
            </div>
            <div className="mt-1 text-[#8098C1] font-normal text-[16px] flex justify-between px-1">
              <p>CAS: {product.cas}</p>
              <p>{product.purity}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 gap-2 flex-wrap">
        <button className="px-3 py-1 rounded-md bg-[#3C575D] text-white cursor-pointer hover:bg-[#044B9D]">
          &laquo;
        </button>
        <button className="px-3 py-1 rounded-md bg-[#044B9D] text-white cursor-pointer hover:bg-[#044B9D]">
          1
        </button>
        <button className="px-3 py-1 rounded-md bg-[#3C575D] text-white cursor-pointer hover:bg-[#044B9D]">
          2
        </button>
        <button className="px-3 py-1 rounded-md bg-[#3C575D] text-white cursor-pointer hover:bg-[#044B9D]">
          3
        </button>
        <span className="px-3 py-1 text-white">...</span>
        <button className="px-3 py-1 rounded-md bg-[#3C575D] text-white cursor-pointer hover:bg-[#044B9D]">
          10
        </button>
        <button className="px-3 py-1 rounded-md bg-[#3C575D] text-white cursor-pointer hover:bg-[#044B9D]">
          &raquo;
        </button>
      </div>
    </section>
  );
}
