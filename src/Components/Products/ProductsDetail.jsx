import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsUi from './ProductsUi'; // Your product data 
import Navbar from '../Navbar/Navbar';

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

const ProductDetail = () => {
  const { id } = useParams();
  const product = ProductsUi.find((p) => p.id === id);

  const relatedProducts = ProductsUi.filter((p) => p.id !== product?.id).slice(0, 4);

  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [showDescription, setShowDescription] = useState(true);

  if (!product) {
    return <div className="text-center text-lg text-red-500 py-10">Product not found</div>;
  }

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const finalPrice = product.discountPrice * quantity;
 
  return ( 
    <> 
    <Navbar/>
    <div className="max-w-7xl mx-auto mt-10 px-4 py-10 text-gray-800 font-sans">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Image Gallery */}
        <div className="lg:w-1/2 space-y-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-xl shadow-md"
          />
          {/* Thumbnails */}
          <div className="flex gap-4 justify-center">
            {[0, 1, 2].map((i) => (
              <img
                key={i}
                src={product.image}
                alt={`${product.name} thumbnail ${i + 1}`}
                className="h-20 w-20 object-cover rounded-md"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2 space-y-6">
          <div className="text-sm text-gray-500">Man Fashion</div>
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <div className="text-xl font-bold text-gray-900">
            ₹{finalPrice.toFixed(2)}{' '}
            <span className="line-through text-gray-400 text-sm ml-2">
              ₹{(product.originalPrice * quantity).toFixed(2)}
            </span>
          </div>

          {/* Countdown */}
          <div className="text-xs text-gray-400">
            Order in <span className="font-semibold text-black">02:30:25</span> to get next day delivery
          </div>

          {/* Size Selector */}
          <div>
            <p className="font-medium mb-1">Select Size</p>
            <div className="flex gap-2 ml-[10rem] mb-4">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 border  rounded-full text-sm font-semibold ${
                    selectedSize === size
                      ? 'bg-black text-white'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                  aria-pressed={selectedSize === size}
                  aria-label={`Select size ${size}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <p className="font-medium mb-1">Quantity</p>
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={decreaseQty}
                className="w-8 h-8 ml-[14.5rem] mt-2 rounded-full bg-gray-200 text-lg font-bold hover:bg-gray-300"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="text-lg" aria-live="polite" aria-atomic="true">
                {quantity}
              </span>
              <button
                onClick={increaseQty}
                className="w-8 h-8 rounded-full bg-gray-200 text-lg font-bold hover:bg-gray-300"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <button
            className="w-full bg-black text-white py-3 rounded-md text-sm font-semibold hover:bg-gray-900 transition"
            aria-label={`Add ${quantity} items of ${product.name} size ${selectedSize} to cart`}
          >
            Add to Cart - ₹{finalPrice.toFixed(2)}
          </button>

          {/* Like Icon */}
          <div className="text-center mt-3">
            <button
              className="text-gray-500 hover:text-black text-xl"
              aria-label="Add to wishlist"
            >
              ♡
            </button>
          </div>

          {/* Description */}
          <div className="border-t  pt-6">
            <button
              onClick={() => setShowDescription(!showDescription)}
              className="w-full ml-[15rem] flex justify-between items-center font-semibold text-sm mb-2"
              aria-expanded={showDescription}
              aria-controls="description-content"
            >
              Description & Fit
              <span>{showDescription ? '−' : '+'}</span>
            </button>
            {showDescription && (
              <p id="description-content" className="text-sm text-gray-600">
                {product.description}
              </p>
            )}
          </div>

          {/* Shipping Info */}
          <div className="border-t pt-6 grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Discount</span>
              <span>Disc 50%</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium">Package</span>
              <span>Regular Package</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium">Delivery Time</span>
              <span>3–4 Working Days</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium">Est. Arrival</span>
              <span>10–12 October 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ratings & Reviews - in the same row */}
      <div className="mt-20 border-t pt-10">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Rating summary */}
          <div className="md:w-1/3 flex flex-col items-center md:items-start">
            <div className="text-5xl font-bold text-black">4.5</div>
            <div className="text-gray-500 text-sm">(50 New Reviews)</div>
            <div className="mt-4 w-full space-y-3">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-3">
                  <span className="w-6 text-sm">{star}★</span>
                  <div className="flex-1 bg-gray-100 h-2 rounded">
                    <div className="bg-yellow-400 h-2 rounded" style={{ width: `${star * 15}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review content */}
          <div className="md:w-2/3 overflow-x-auto">
            <div className="flex gap-6 min-w-[600px]">
              {reviewsData.map(({ id, name, rating, date, avatar, comment }) => (
                <div key={id} className="flex flex-col gap-3 bg-white p-4 rounded-lg shadow-sm w-[300px]">
                  <div className="flex gap-3 items-center">
                    <img
                      src={avatar}
                      alt={`${name} avatar`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-sm">{name}</div>
                      <div className="text-yellow-500 text-sm">
                        {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 flex-grow">{comment}</p>
                  <div className="text-xs text-gray-400">{date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20 border-t pt-10">
        <h2 className="text-2xl font-semibold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition cursor-pointer"
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

export default ProductDetail;
