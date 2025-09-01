import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CollectionUi from "./CollectionUi";
import { useCart } from "../../CartContext/CartContext";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Collections = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Filters
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedColors, setSelectedColors] = useState([]);

  // Extract all colors from collection data
  const allColors = [...new Set(CollectionUi.map((item) => item.color))];

  // Toggle selected color
  const toggleColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  // Apply filters
  const filteredCollections = CollectionUi.filter((item) => {
    const inPriceRange =
      item.discountPrice >= priceRange[0] &&
      item.discountPrice <= priceRange[1];
    const matchesColor =
      selectedColors.length === 0 || selectedColors.includes(item.color);
    return inPriceRange && matchesColor;
  });

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-10">
          Brand New Collections
        </h1>

        {/* Filter Panel */}
        <div className="mb-10 p-4 bg-white shadow rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price Filter */}
            <div>
              <h2 className="text-lg font-semibold mb-3 text-gray-700">
                Filter by Price{" "}
              </h2>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([Number(e.target.value), priceRange[1]])
                  }
                  placeholder="Min"
                  className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <span className="text-gray-500">to</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  placeholder="Max"
                  className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
            </div>
            {/* Color Filter */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Filter by Color
              </h2>
              <div className="flex flex-wrap gap-3">
                {allColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => toggleColor(color)}
                    className={`px-4 py-2 rounded-full border text-sm font-medium capitalize transition duration-200 shadow-sm ${
                      selectedColors.includes(color)
                        ? "bg-gray-800 text-white border-gray-800"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCollections.map((collections) => {
            const discountPercentage = Math.round(
              ((collections.originalPrice - collections.discountPrice) /
                collections.originalPrice) *
                100
            );

            return (
              <div
                key={collections.id}
                onClick={() => navigate(`/collections/${collections.id}`)}
                className="cursor-pointer bg-white shadow-lg rounded-xl overflow-hidden relative group transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <img
                  src={collections.image}
                  alt={collections.name}
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {collections.name}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">
                    {collections.brand}
                  </p>
                  <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                    {collections.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm line-through text-gray-400">
                      ₹{collections.originalPrice}
                    </span>
                    <span className="text-base mr-10 font-bold text-red-600">
                      ₹{collections.discountPrice}
                    </span>
                  </div>
                </div>

                {/* Discount Badge */}
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {discountPercentage}% OFF
                </span>

                {/* Add to Cart Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(collections);
                  }}
                  className="absolute bottom-3 right-3 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
                  title="Add to Cart"
                >
                  <FaShoppingCart size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Collections;
