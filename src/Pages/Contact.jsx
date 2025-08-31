// src/pages/Contact.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img8 from '../assets/Display/img8.jpg';
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return ( 
    <>  
    <Navbar/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4 py-16">
      <h2
        className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 text-center"
        data-aos="fade-down"
      >
        Get in Touch with <span className="text-violet-deep">Virelle</span>
      </h2>

      <div
        className="flex flex-col md:flex-row bg-gray-light shadow-2xl border border-gray-100 rounded-2xl overflow-hidden max-w-6xl w-full"
        data-aos="zoom-in"
      >
        {/* Left Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={img8}
            alt="Contact Virelle"
            className="object-cover w-full h-[45rem] grayscale hover:grayscale-0 transition duration-700"
          />
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 w-full p-10 md:p-12 bg-white">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <FiUser className="text-indigo-500" />
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <FiMail className="text-indigo-500" />
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <FiMessageSquare className="text-indigo-500" />
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Type your message here..."
                className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium  transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div> 
    <Footer/>
    </>
  );
};

export default Contact;
