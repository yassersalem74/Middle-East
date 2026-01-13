import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsAPI, CategoriesAPI } from "../../api/api"; 
// adjust path if needed

const statusColors = {
  "IN STOCK": "bg-[#0F3D2E] text-[#15CC63]",
  "LOW STOCK": "bg-[#3D3B0F] text-[#FFCC00]",
  "OUT OF STOCK": "bg-[#261818] text-[#FF3B30]",
};

export default function MaterialCatalog() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("all");

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // ===== Load Data =====
  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      const [prodRes, catRes] = await Promise.all([
        ProductsAPI.getAll(),
        CategoriesAPI.getAll(),
      ]);

      if (mounted) {
        setProducts(prodRes.data);
        setCategories(catRes.data);
      }
    };

    fetchData();
    return () => (mounted = false);
  }, []);

  // ===== Filter Logic =====
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.categoryId == selectedCategory);

  // ===== Pagination Logic =====
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
      <div className="flex justify-between flex-wrap">
        <h2 className="text-[48px] font-medium mb-8">Material Catalog</h2>

        {/* ===== Category Filters ===== */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {/* All */}
          <button
            onClick={() => {
              setSelectedCategory("all");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-md font-medium text-sm transition-all cursor-pointer duration-300 transform ${
              selectedCategory === "all"
                ? "bg-[#044B9D] text-white hover:bg-[#0362C1]"
                : "bg-[#3C575D] text-white hover:bg-[#2f4a57] hover:scale-105"
            }`}
          >
            All Industries
          </button>

          {/* Dynamic Categories */}
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-md font-medium text-sm transition-all cursor-pointer duration-300 transform ${
                selectedCategory == cat.id
                  ? "bg-[#044B9D] text-white hover:bg-[#0362C1]"
                  : "bg-[#3C575D] text-white hover:bg-[#2f4a57] hover:scale-105"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
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
                className={`px-3 py-1 rounded-md font-medium text-[16px] ${
                  statusColors[product.status || "IN STOCK"]
                }`}
              >
                {product.status || "IN STOCK"}
              </span>
            </div>

            <div className="mt-1 text-[#8098C1] font-normal text-[16px] flex justify-between px-1">
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
            className="px-3 py-1 rounded-md bg-[#3C575D] text-white cursor-pointer hover:bg-[#044B9D]"
          >
            &laquo;
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => changePage(i + 1)}
              className={`px-3 py-1 rounded-md cursor-pointer ${
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
            className="px-3 py-1 rounded-md bg-[#3C575D] text-white cursor-pointer hover:bg-[#044B9D]"
          >
            &raquo;
          </button>
        </div>
      )}
    </section>
  );
}
