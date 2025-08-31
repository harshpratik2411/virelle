import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProductsUi from "./ProductsUi";

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl lg:-mt-16 mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {ProductsUi.map((product) => {
          const discountPercentage = Math.round(
            ((product.originalPrice - product.discountPrice) /
              product.originalPrice) *
              100
          );

          return (
            <div
              key={product.id}
              onClick={() => navigate(`/products/${product.id}`)}
              className="cursor-pointer bg-white shadow-lg rounded-xl overflow-hidden relative group transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
                <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm line-through text-gray-400">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-base mr-10 font-bold text-red-600">
                    ₹{product.discountPrice}
                  </span>
                </div>
              </div>

              {/* Discount Badge */}
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                {discountPercentage}% OFF
              </span>

              {/* Add to Cart Icon */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent navigation on cart button click
                  // Add to cart logic here
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
  );
};

export default Products;
