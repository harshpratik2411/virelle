import React, { useEffect } from 'react';
import video1 from '../../assets/Hero/video1.mp4';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="lg:-mt-16 mt-4 lg:p-28 p-5 relative">
      <section className="w-[92rem] lg:h-[40rem] h-[30rem] relative mx-auto max-w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="inset-0 bg-black bg-opacity-25 z-10 absolute"></div>

        {/* Content */}
        <div className="flex flex-col h-full text-center px-4 relative z-20">
          <h1
            data-aos="fade-up"
            className="text-white lg:-ml-6 -ml-8  lg:mt-20 mt-3 text-right  text-3xl md:text-6xl font-bold font-rubik max-w-full"
          >
            Welcome to Virelle
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white lg:block hidden text-right lg:text-xl justify-center lg:-ml-0 -ml-2 text-lg mt-4 font-outfit max-w-full"
          >
            We deliver high-quality solutions with immersive experiences.
          </p>
          <button
            className="mt-6 lg:px-6 px-4 lg:py-3 py-2 lg:w-[12rem] w-[10rem] lg:ml-[52rem] ml-24 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition max-w-full"
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
   