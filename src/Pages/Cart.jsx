import React, { useState } from 'react';
import { useCart } from '../CartContext/CartContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { FaTrashAlt } from 'react-icons/fa';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();
  const [customAmount, setCustomAmount] = useState('');

  const getSubtotal = () =>
    cartItems.reduce((sum, item) => sum + item.discountPrice * item.quantity, 0);

  const deliveryCharge = 12.99;
  const discount = 0;
  const total = getSubtotal() + deliveryCharge - discount;

  const handleUPIPayment = () => {
  const upiLink = 'upi://pay?pa=merchant@upi&pn=Demo%20Merchant&am=500.00&cu=INR&tn=Order%20Payment';
  window.location.href = upiLink;

  // Ask for manual confirmation after a few seconds
  setTimeout(() => {
    const confirmed = window.confirm('Have you completed the UPI payment?');
    if (confirmed) {
      navigate('/success');
    } else {
      alert('Payment not completed.');
    }
  }, 3000);
};

  if (!cartItems.length) {
    return (
      <>
        <Navbar />
        <div className="text-center py-32 text-gray-600">
          <h2 className="text-3xl font-semibold">🛒 Your Cart is Empty</h2>
          <p className="text-sm mt-2">Add something to get started.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-6 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Continue Shopping
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT: CART ITEMS */}
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Cart</h1>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="w-28 h-28 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-lg border"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-500">Varient: {item.brand}</p>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
                <p className="text-sm text-gray-500">Color: {item.color}</p>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="p-1 bg-gray-100 hover:bg-gray-200 rounded-full transition"
                    >
                      <AiOutlineMinus size={18} />
                    </button>
                    <span className="text-lg font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 bg-gray-100 hover:bg-gray-200 rounded-full transition"
                    >
                      <AiOutlinePlus size={18} />
                    </button>
                  </div>

                  <p className="text-lg font-semibold text-gray-800">
                    ${(item.discountPrice * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 transition"
              >
                <FaTrashAlt size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT: ORDER SUMMARY */}
        <div className="bg-white border mt-20 border-gray-200 rounded-xl shadow-sm p-6 h-fit">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${getSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery</span>
              <span>${deliveryCharge.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Discount</span>
              <span>-</span>
            </div>
            <hr />
            <div className="flex justify-between text-lg font-bold text-gray-800">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Amount Input (optional) */}
          <input
            type="number"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            placeholder={`Enter amount (Default: ${total.toFixed(2)})`}
            className="mt-6 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
          />

          <button
            onClick={handleUPIPayment}
            className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Pay with UPI
          </button>

          <p className="text-sm text-gray-500 mt-4 text-center cursor-pointer hover:underline">
            Use a promo code
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
