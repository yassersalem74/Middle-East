import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

// Sample product data with additional details
const products = [
  {
    id: 1,
    img: "/titanium-dioide1.png",
    title: "Titanium Dioxide",
    cas: "13463-67-7",
    purity: "99.9% Purity",
    status: "IN STOCK",
    stock: 120,
    description:
      "High-quality Titanium Dioxide suitable for paints, plastics, and coatings.",
    grade: "Industrial",
  },
  {
    id: 2,
    img: "/titanium-dioide2.png",
    title: "Titanium Dioxide",
    cas: "13463-67-7",
    purity: "99.9% Purity",
    status: "IN STOCK",
    stock: 0,
    description: "Titanium Dioxide with excellent whiteness and opacity.",
    grade: "Industrial",
  },
  {
    id: 3,
    img: "/titanium-dioide3.png",
    title: "Titanium Dioxide",
    cas: "13463-67-7",
    purity: "99.9% Purity",
    status: "LOW STOCK",
    stock: 20,
    description: "Low-stock Titanium Dioxide for industrial applications.",
    grade: "Industrial",
  },
  {
    id: 4,
    img: "/titanium-dioide4.png",
    title: "Titanium Dioxide",
    cas: "13463-67-7",
    purity: "99.9% Purity",
    status: "IN STOCK",
    stock: 50,
    description: "Premium grade Titanium Dioxide for coatings industry.",
    grade: "Industrial",
  },
  {
    id: 5,
    img: "/titanium-dioide5.png",
    title: "Titanium Dioxide",
    cas: "13463-67-7",
    purity: "99.9% Purity",
    status: "OUT OF STOCK",
    stock: 0,
    description: "Currently out of stock, next batch arriving soon.",
    grade: "Industrial",
  },
  {
    id: 6,
    img: "/titanium-dioide6.png",
    title: "Titanium Dioxide",
    cas: "13463-67-7",
    purity: "99.9% Purity",
    status: "LOW STOCK",
    stock: 15,
    description: "Limited quantity available for urgent orders.",
    grade: "Industrial",
  },
];

// Status badge colors
const statusColors = {
  "IN STOCK": "bg-[#0F3D2E] text-[#15CC63]",
  "LOW STOCK": "bg-[#3D3B0F] text-[#FFCC00]",
  "OUT OF STOCK": "bg-[#261818] text-[#FF3B30]",
};

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [showForm, setShowForm] = useState(false);

  if (!product) {
    return (
      <div className="text-center mt-40 text-white text-2xl">
        Product not found.{" "}
        <Link to="/products" className="underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <section className="py-24 px-6 text-white font-inter min-h-screen flex flex-col items-center">
      {/* Product Card */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Image */}
        <img
          src={product.img}
          alt={product.title}
          className="w-full md:w-1/2 h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
        />

        {/* Details */}
        <div className="flex-1 flex flex-col gap-6">
          <div
            className={`w-[110px] h-[32px] rounded-[8px] flex items-center justify-center font-medium text-[16px] ${
              product.stock > 0
                ? "bg-[#0F3D2E] text-[#15CC63]"
                : "bg-[#261818] text-[#FF3B30]"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </div>

          <h1 className="text-4xl font-semibold text-[#FFFFFF]">
            {product.title}
          </h1>

          <p className="text-[#FFFFFF] text-2xl">{product.description}</p>

          <div className="flex flex-wrap justify-between gap-4 md:gap-6 bg-[#3C575D66] rounded-3xl py-6 px-3 border border-[#B4C9E233]">
            <div className="text-[#FFFFFF]">
              <div className="font-semibold">CAS Number : </div>
              <div className="text-[#5C8ABF]">{product.cas}</div>
            </div>
            <div className="text-[#FFFFFF]">
              <div className="font-semibold">Purity : </div>
              <div className="text-[#5C8ABF]">{product.purity}</div>
            </div>
            <div className="text-[#FFFFFF]">
              <div className="font-semibold">Grade : </div>
              <div className="text-[#5C8ABF]">{product.grade}</div>
            </div>
          </div>

          {/* Send Request Button */}
          <button
            onClick={() => setShowForm(!showForm)}
            className="mt-4 w-full py-3 text-lg font-semibold rounded-xl text-white cursor-pointer bg-gradient-to-r from-[#033F83CC] to-[#044B9D] transition hover:opacity-90"
          >
            Send Request
          </button>
        </div>
      </div>

      {/* Request Form Modal */}
      {/* Request Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Blurred semi-transparent background */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setShowForm(false)} // close modal when clicking outside
          ></div>

          {/* Modal content */}
          <div className="relative w-full max-w-lg rounded-2xl border border-[#E6EDF580] shadow-[0px_0px_6px_0px_white] p-6 bg-white/5 z-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-white">
                Send Request
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-red-500 cursor-pointer text-2xl font-bold"
              >
                &times;
              </button>
            </div>
            <form className="space-y-6">
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
            hover:opacity-90
            transition
          "
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
