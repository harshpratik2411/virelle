import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MostLovedUi from "./MosLovedUi";

const MostLoved = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto lg:-mt-12 px-4 py-12">
      <h1 className="text-6xl lg:ml-8 font-bold text-center text-lime-bright mb-10">
        Most Loved & Best-Sellers
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {MostLovedUi.map((mostloved) => {
          const discountPercentage = Math.round(
            ((mostloved.originalPrice - mostloved.discountPrice) /
              mostloved.originalPrice) *
              100
          );

          return (
            <div
              key={mostloved.id}
             onClick={() => navigate(`/most-loved/${mostloved.id}`)}
              className="cursor-pointer bg-white shadow-lg rounded-xl overflow-hidden relative group transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                src={mostloved.image}
                alt={mostloved.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {mostloved.name}
                </h2>
                <p className="text-sm text-gray-500 mb-2">{mostloved.brand}</p>
                <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                  {mostloved.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm line-through text-gray-400">
                    ₹{mostloved.originalPrice}
                  </span>
                  <span className="text-base mr-10 font-bold text-red-600">
                    ₹{mostloved.discountPrice}
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

export default MostLoved;
