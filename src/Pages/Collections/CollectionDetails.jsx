import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CollectionUi from './CollectionUi';
import { useCart } from '../../CartContext/CartContext'
import Collections from './Collections';
import Navbar from '../../Components/Navbar/Navbar';

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

const CollectionDetails = () => {  
  const { addToCart } = useCart();
  const { id } = useParams();
  const navigate = useNavigate();

  const collections = CollectionUi.find((p) => String(p.id) === id); 
  const relatedProducts = CollectionUi.filter((p) => String(p.id) !== id).slice(0, 4);

  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [showDescription, setShowDescription] = useState(true);

  if (!collections) {
    return <div className="text-center text-lg text-red-500 py-10">Product not found</div>;
  }

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const finalPrice = collections.discountPrice * quantity;

  const handleRelatedProductClick = (productId) => {
    navigate(`/collections/${productId}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto lg:mt-10 px-4 py-10 text-gray-800 font-sans">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 space-y-4">
            <img
              src={collections.image}
              alt={collections.name}
              className="w-full h-[300px] sm:h-[500px] object-cover rounded-xl shadow-md"
            />
            <div className="flex gap-4 justify-center">
              {[0, 1, 2].map((i) => (
                <img
                  key={i}
                  src={collections.image}
                  alt={`${collections.name} thumbnail ${i + 1}`}
                  className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-md"
                />
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <div className="text-sm text-gray-500">Man Fashion</div>
            <h1 className="text-3xl font-semibold">{collections.name}</h1>
            <div className="text-xl font-bold text-gray-900">
              ₹{finalPrice.toFixed(2)}{' '}
              <span className="line-through text-gray-400 text-sm ml-2">
                ₹{(collections.originalPrice * quantity).toFixed(2)}
              </span>
            </div>
            <div className="text-xs text-gray-400">
              Order in <span className="font-semibold text-black">02:30:25</span> to get next day delivery
            </div>

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

            <div>
              <p className="font-medium mb-1">Quantity</p>
              <div className="flex items-center mt-4 gap-4 mb-6">
                <button
                  onClick={decreaseQty}
                  className="w-8 h-8 sm:ml-[14.5rem] ml-[6.5rem]  rounded-full bg-gray-200 text-lg font-bold hover:bg-gray-300"
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

            <button
              className="w-full bg-black text-white py-3 rounded-md text-sm font-semibold hover:bg-gray-900 transition"
              onClick={() => {
                addToCart(collections, quantity);
                alert('✅ Product added to cart!');
                navigate('/cart');
              }}
            >
              Add to Cart - ₹{finalPrice.toFixed(2)}
            </button>

            <div className="text-center mt-3">
              <button className="text-gray-500 hover:text-black text-xl">♡</button>
            </div>

            <div className="border-t pt-6">
              <button
                onClick={() => setShowDescription(!showDescription)}
                className="w-full lg:ml-[15rem] ml-[6.5rem] flex justify-between items-center font-semibold text-sm mb-2"
              >
                Description & Fit
                <span>{showDescription ? '−' : '+'}</span>
              </button>
              {showDescription && (
                <p className="text-sm text-gray-600">{collections.description}</p>
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

        {/* Reviews and related products */}
        {/* (Unchanged, as per your instruction) */}

      </div>
    </>
  );
};

export default CollectionDetails;
