import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Success = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center py-32 text-center px-4">
        <h1 className="text-4xl font-bold text-green-600">🎉 Payment Successful!</h1>
        <p className="text-lg text-gray-700 mt-4">
          Thank you for your purchase. A confirmation has been sent to your email.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Back to Home
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Success;
