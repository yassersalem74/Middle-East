import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ProductsAPI,
  CategoriesAPI,
  IndustriesAPI,
} from "../../api/api";

const statusColors = {
  "IN STOCK": "bg-[#0F3D2E] text-[#15CC63]",
  "LOW STOCK": "bg-[#3D3B0F] text-[#FFCC00]",
  "OUT OF STOCK": "bg-[#261818] text-[#FF3B30]",
};

export default function MaterialCatalog() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [industries, setIndustries] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedIndustry, setSelectedIndustry] = useState("all");

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // ===== Load Data =====
  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      const [prodRes, catRes, indRes] = await Promise.all([
        ProductsAPI.getAll(),
        CategoriesAPI.getAll(),
        IndustriesAPI.getAll(),
      ]);

      if (mounted) {
        setProducts(prodRes.data);
        setCategories(catRes.data);
        setIndustries(indRes.data);
      }
    };

    fetchData();
    return () => (mounted = false);
  }, []);

  // ===== Filter Logic =====
  const filteredProducts = products.filter((p) => {
    const industryMatch =
      selectedIndustry === "all" || p.industryId == selectedIndustry;

    const categoryMatch =
      selectedCategory === "all" || p.categoryId == selectedCategory;

    return industryMatch && categoryMatch;
  });

  // ===== Pagination =====
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="py-24 px-6 text-white font-inter">

      {/* ===== Header ===== */}
      <h2 className="text-[48px] font-medium mb-8">
        Material Catalog
      </h2>

      {/* ===== FILTERS ===== */}
      <div className="flex flex-wrap gap-6 mb-12 items-center">

        {/* ===== Industry Filter ===== */}
        <div className="flex flex-wrap gap-3 items-center">
          <span className="text-[#B4C9E2] text-sm font-semibold">
            Industry:
          </span>

          <button
            onClick={() => {
              setSelectedIndustry("all");
              setSelectedCategory("all");
              setCurrentPage(1);
            }}
            className={`btn btn-sm ${
              selectedIndustry === "all"
                ? "bg-[#15CC63] text-black"
                : "bg-[#3C575D] text-white hover:bg-[#2f4a57]"
            }`}
          >
            All
          </button>

          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => {
                setSelectedIndustry(ind.id);
                setSelectedCategory("all"); // reset category
                setCurrentPage(1);
              }}
              className={`btn btn-sm ${
                selectedIndustry == ind.id
                  ? "bg-[#15CC63] text-black"
                  : "bg-[#3C575D] text-white hover:bg-[#2f4a57]"
              }`}
            >
              {ind.title}
            </button>
          ))}
        </div>

        {/* ===== Category Filter (Hidden until Industry selected) ===== */}
        {selectedIndustry !== "all" && (
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-[#B4C9E2] text-sm font-semibold">
              Category:
            </span>

            <button
              onClick={() => {
                setSelectedCategory("all");
                setCurrentPage(1);
              }}
              className={`btn btn-sm ${
                selectedCategory === "all"
                  ? "bg-[#044B9D] text-white"
                  : "bg-[#3C575D] text-white hover:bg-[#2f4a57]"
              }`}
            >
              All
            </button>

            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setCurrentPage(1);
                }}
                className={`btn btn-sm ${
                  selectedCategory == cat.id
                    ? "bg-[#044B9D] text-white"
                    : "bg-[#3C575D] text-white hover:bg-[#2f4a57]"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ===== Products Grid ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProducts.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer rounded-[8px]"
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-[211px] object-cover rounded-[8px]"
            />

            <div className="mt-4 flex items-center justify-between">
              <h3 className="text-white font-medium text-[16px]">
                {product.title}
              </h3>

              <span
                className={`px-3 py-1 rounded-md font-medium text-[14px] ${
                  statusColors[product.status || "IN STOCK"]
                }`}
              >
                {product.status || "IN STOCK"}
              </span>
            </div>

            {/* Industry */}
            <p className="text-[#15CC63] text-sm mt-1">
              {product.industry?.title}
            </p>

            {/* Category */}
            <p className="text-[#8098C1] text-sm">
              {product.category?.title}
            </p>

            <div className="mt-1 text-[#8098C1] font-normal text-[15px] flex justify-between px-1">
              <p>CAS: {product.casNumber}</p>
              <p>{product.purity}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* ===== Pagination ===== */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-2 flex-wrap">
          <button
            onClick={() => changePage(currentPage - 1)}
            className="px-3 py-1 rounded-md bg-[#3C575D] text-white hover:bg-[#044B9D]"
          >
            &laquo;
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => changePage(i + 1)}
              className={`px-3 py-1 rounded-md ${
                currentPage === i + 1
                  ? "bg-[#044B9D] text-white"
                  : "bg-[#3C575D] text-white hover:bg-[#044B9D]"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => changePage(currentPage + 1)}
            className="px-3 py-1 rounded-md bg-[#3C575D] text-white hover:bg-[#044B9D]"
          >
            &raquo;
          </button>
        </div>
      )}
    </section>
  );
}
