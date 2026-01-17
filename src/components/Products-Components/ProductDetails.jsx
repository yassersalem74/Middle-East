import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductsAPI } from "../../api/api";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  // ===== Fetch Product by ID =====
  useEffect(() => {
    let mounted = true;

    const fetchProduct = async () => {
      try {
        const res = await ProductsAPI.getById(id);
        if (mounted) setProduct(res.data);
      } catch {
        setProduct(null);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchProduct();
    return () => (mounted = false);
  }, [id]);

  // ===== Loading State =====
  if (loading) {
    return (
      <div className="text-center mt-40 text-white text-2xl">
        Loading...
      </div>
    );
  }

  // ===== Not Found =====
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
      {/* ===== Back Button ===== */}
      <div className="w-full max-w-5xl mb-8">
        <Link to="/products">
          <button className="btn btn-sm mb-8 bg-[#3C575D] text-white hover:bg-[#044B9D]">
            &larr; Go Back
          </button>
        </Link>
      </div>

      {/* ===== Product Card ===== */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-10 md:gap-16">
        
        {/* Image */}
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full md:w-1/2 h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
        />

        {/* Details */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Stock Badge */}
          <div
            className={`w-[110px] h-[32px] rounded-[8px] flex items-center justify-center font-medium text-[16px] ${
              product.quantity > 0
                ? "bg-[#0F3D2E] text-[#15CC63]"
                : "bg-[#261818] text-[#FF3B30]"
            }`}
          >
            {product.quantity > 0 ? "In Stock" : "Out of Stock"}
          </div>

          <h1 className="text-4xl font-semibold text-white">
            {product.title}
          </h1>

          <p className="text-white text-2xl">
            {product.description}
          </p>

          {/* Specifications */}
          <div className="flex flex-wrap justify-between gap-4 md:gap-6 bg-[#3C575D66] rounded-3xl py-6 px-3 border border-[#B4C9E233]">
            <div className="text-white">
              <div className="font-semibold">CAS Number :</div>
              <div className="text-[#5C8ABF]">{product.casNumber}</div>
            </div>

            <div className="text-white">
              <div className="font-semibold">Purity :</div>
              <div className="text-[#5C8ABF]">{product.purity}</div>
            </div>

            <div className="text-white">
              <div className="font-semibold">Grade :</div>
              <div className="text-[#5C8ABF]">{product.grade}</div>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => setShowForm(true)}
            className="mt-4 cursor-pointer w-full py-3 text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-[#033F83CC] to-[#044B9D] transition hover:opacity-90"
          >
            Send Request
          </button>
        </div>
      </div>

      {/* ===== Request Modal ===== */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setShowForm(false)}
          ></div>

          <div className="relative w-full max-w-lg rounded-2xl border border-[#E6EDF580] shadow-[0px_0px_6px_0px_white] p-6 bg-white/5 z-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-white">
                Send Request
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-red-500 text-2xl font-bold"
              >
                &times;
              </button>
            </div>

            <form className="space-y-6">
              {["Name", "Email", "Phone Number"].map((placeholder, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={placeholder}
                  className="w-full bg-[#3C575D] rounded-xl px-5 py-4 text-white placeholder:text-[#CDDBEB] placeholder:text-[22px] focus:outline-none"
                />
              ))}

              <textarea
                rows="4"
                placeholder="Message"
                className="w-full bg-[#3C575D] rounded-lg px-5 py-4 text-white placeholder:text-[#CDDBEB] placeholder:text-[22px] focus:outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full cursor-pointer bg-gradient-to-r from-[#033F83CC] to-[#044B9D] text-white text-lg font-semibold py-4 rounded-lg hover:opacity-90 transition"
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
