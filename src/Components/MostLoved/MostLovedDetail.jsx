import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import MostLovedUi from '../MostLoved/MosLovedUi'

const reviewsData = [
  {
    id: 1,
    name: 'Alex Mathio',
    rating: 5,
    date: '13 Oct 2024',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    comment:
      "NextGen's dedication to sustainability and ethical practices resonates strongly with today's consumers, positioning the brand as a responsible choice in the fashion world.",
  },
  {
    id: 2,
    name: 'Emma Watson',
    rating: 4,
    date: '10 Oct 2024',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    comment:
      'Love the quality and the fit! The hoodie is very comfortable and looks even better in person.',
  },
  {
    id: 3,
    name: 'James Lee',
    rating: 5,
    date: '05 Oct 2024',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    comment:
      'Great product and fast shipping. The size options helped me find the perfect fit. Highly recommended!',
  },
];

const MostLovedDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const mostloved = MostLovedUi.find((p) => String(p.id) === id);
  const relatedProducts = MostLovedUi.filter((p) => String(p.id) !== id).slice(0, 4);

  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [showDescription, setShowDescription] = useState(true);

  if (!mostloved) {
    return <div className="text-center text-lg text-red-500 py-10">Product not found</div>;
  }

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const finalPrice = mostloved.discountPrice * quantity;

  const handleRelatedProductClick = (productId) => {
  navigate(`/most-loved/${productId}`);
  window.scrollTo(0, 0);
};


  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto lg:mt-10 px-4 py-10 text-gray-800 font-sans">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 space-y-4">
            <img
              src={mostloved.image}
              alt={mostloved.name}
              className="w-full h-[300px] sm:h-[500px] object-cover rounded-xl shadow-md"
            />
            <div className="flex gap-4 justify-center">
              {[0, 1, 2].map((i) => (
                <img
                  key={i}
                  src={mostloved.image}
                  alt={`${mostloved.name} thumbnail ${i + 1}`}
                  className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-md"
                />
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <div className="text-sm text-gray-500">Man Fashion</div>
            <h1 className="text-3xl font-semibold">{mostloved.name}</h1>
            <div className="text-xl font-bold text-gray-900">
              ₹{finalPrice.toFixed(2)}{' '}
              <span className="line-through text-gray-400 text-sm ml-2">
                ₹{(mostloved.originalPrice * quantity).toFixed(2)}
              </span>
            </div>
            <div className="text-xs text-gray-400">
              Order in <span className="font-semibold text-black">02:30:25</span> to get next day delivery
            </div>

            {/* Size Selector */}
            <div>
              <p className="font-medium mb-1">Select Size</p>
              <div className="flex gap-2 lg:ml-[10rem] ml-[3rem] lg:mt-0 mt-2 mb-4 flex-wrap sm:flex-nowrap">
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 border rounded-full text-sm font-semibold ${
                      selectedSize === size
                        ? 'bg-black text-white'
                        : 'bg-white text-gray-700 border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <p className="font-medium mb-1">Quantity</p>
              <div className="flex items-center mt-4 gap-4 mb-6">
                <button
                  onClick={decreaseQty}
                  className="w-8 h-8 sm:ml-[14.5rem] ml-[6.5rem] rounded-full bg-gray-200 text-lg font-bold hover:bg-gray-300"
                >
                  −
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={increaseQty}
                  className="w-8 h-8 rounded-full bg-gray-200 text-lg font-bold hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-black text-white py-3 rounded-md text-sm font-semibold hover:bg-gray-900 transition">
              Add to Cart - ₹{finalPrice.toFixed(2)}
            </button>

            <div className="text-center mt-3">
              <button className="text-gray-500 hover:text-black text-xl">♡</button>
            </div>

            {/* Description Toggle */}
            <div className="border-t pt-6">
              <button
                onClick={() => setShowDescription(!showDescription)}
                className="w-full lg:ml-[15rem] ml-[6.5rem] flex justify-between items-center font-semibold text-sm mb-2"
              >
                Description & Fit
                <span>{showDescription ? '−' : '+'}</span>
              </button>
              {showDescription && (
                <p className="text-sm text-gray-600">{mostloved.description}</p>
              )}
            </div>

            <div className="border-t pt-6 grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <span className="font-medium">Discount</span>
                <span>Disc 50%</span>
              </div>
              <div>
                <span className="font-medium">Package</span>
                <span>Regular Package</span>
              </div>
              <div>
                <span className="font-medium">Delivery Time</span>
                <span>3–4 Working Days</span>
              </div>
              <div>
                <span className="font-medium">Est. Arrival</span>
                <span>10–12 October 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-20 border-t pt-10 bg-gray-50">
          <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto px-4">
            {/* Rating Summary */}
            <div className="md:w-1/3 flex flex-col items-center md:items-start">
              <div className="text-5xl font-extrabold text-gray-800">4.5</div>
              <div className="text-gray-500 text-sm mt-1">(50 New Reviews)</div>
              <div className="mt-6 w-full space-y-3">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-3">
                    <span className="w-6 text-sm text-gray-700">{star}★</span>
                    <div className="flex-1 bg-gray-200 h-2 rounded-full">
                      <div
                        className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${star * 15}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="md:w-2/3 w-full">
              {/* Mobile View (Scrollable) */}
              <div className="relative block md:hidden">
                <div
                  id="scrollContainer"
                  className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
                >
                  {reviewsData.map(({ id, name, rating, date, avatar, comment }) => (
                    <div
                      key={id}
                      className="flex-shrink-0 snap-center bg-white p-5 rounded-2xl shadow-lg w-full transition-transform duration-300"
                    >
                      <div className="flex gap-3 items-center">
                        <img
                          src={avatar}
                          alt={name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                        />
                        <div>
                          <div className="font-semibold text-sm text-gray-800">{name}</div>
                          <div className="text-yellow-500 text-sm">
                            {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mt-3">{comment}</p>
                      <div className="text-xs text-gray-400 mt-2">{date}</div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() =>
                    document.getElementById('scrollContainer').scrollBy({ left: -320, behavior: 'smooth' })
                  }
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 hover:bg-yellow-400 hover:text-white shadow-md p-2 rounded-full z-10 transition"
                >
                  ◀
                </button>
                <button
                  onClick={() =>
                    document.getElementById('scrollContainer').scrollBy({ left: 320, behavior: 'smooth' })
                  }
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 hover:bg-yellow-400 hover:text-white shadow-md p-2 rounded-full z-10 transition"
                >
                  ▶
                </button>
              </div>

              {/* Desktop View */}
              <div className="hidden md:block overflow-x-auto">
                <div className="flex gap-6 min-w-[600px] pb-2">
                  {reviewsData.map(({ id, name, rating, date, avatar, comment }) => (
                    <div
                      key={id}
                      className="flex flex-col gap-3 bg-stone-200 p-5 lg:mb-8 mb-0 rounded-2xl shadow-md w-[300px] transition hover:shadow-lg"
                    >
                      <div className="flex gap-3 items-center">
                        <img
                          src={avatar}
                          alt={name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                        />
                        <div>
                          <div className="font-semibold text-sm text-gray-800">{name}</div>
                          <div className="text-yellow-500 text-sm">
                            {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700">{comment}</p>
                      <div className="text-xs text-gray-400">{date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 border-t pt-10">
          <h2 className="text-2xl font-semibold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition cursor-pointer"
                onClick={() => handleRelatedProductClick(item.id)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover rounded-md mb-3"
                />
                <h3 className="font-semibold text-base text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.brand}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="line-through text-gray-400 text-sm">₹{item.originalPrice}</span>
                  <span className="text-red-600 font-bold text-sm">₹{item.discountPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MostLovedDetail;
