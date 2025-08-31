import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer"; 
import Products from "../../Components/Products/Products";

// Image imports
import img1 from "../../assets/Display/img1.jpg";
import img2 from "../../assets/Display/img2.jpg";
import img3 from "../../assets/Display/img3.jpg";
import img4 from '../../assets/Products/img4.jpg';
import img8 from '../../assets/Products/img8.jpg';
import img12 from '../../assets/Products/img12.jpg';

const NewArrival = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const images = [img1, img2, img3, img4, img8, img12];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 200,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <Navbar />

      <section
        className="new-arrival  py-16"
        style={{ fontFamily: "'Outfit', 'Rubik', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-center text-lime-bright mb-14 tracking-wide"
            data-aos="fade-up"
          >
            New Arrivals
          </h2>

          {/* Static Image Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-24"
            data-aos="fade-right"
          >
            {images.slice(0, 6).map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-xl transform transition-transform duration-400 hover:scale-110 hover:shadow-2xl cursor-pointer bg-white"
              >
                <img
                  src={img}
                  alt={`Display ${index + 1}`}
                  className="w-full h-72 md:h-80 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Slick Slider */}
          <div data-aos="fade-left">
            <h3 className="text-5xl font-semibold mb-8 text-lime-bright pb-2 w-max mx-auto md:mx-0">
              Explore More
            </h3>

            <Slider {...sliderSettings}>
              {images.map((img, index) => (
                <div key={index} className="px-3">
                  <div className="overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-400 hover:scale-110 hover:shadow-2xl cursor-pointer bg-white">
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-72 md:h-80 object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <Products/>
      <Footer />
    </>
  );
};

export default NewArrival;
