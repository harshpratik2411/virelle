import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer'; 
import Products from '../../Components/Products/Products';
import img1 from '../../assets/Mens/img1.jpg'
import img2 from '../../assets/Mens/img2.jpg'
import img3 from '../../assets/Mens/img3.jpg'
import img4 from '../../assets/Mens/img4.jpg'
import img5 from '../../assets/Mens/img5.jpg'
import img6 from '../../assets/Mens/img6.jpg'

const images = [
  {
    src: img1,
    title: "Elegant Red  Summer Dress"
  },
  {
    src: img2,
    title: "Chic Urban Blazer"
  },
  {
    src: img3,
    title: "Casual Cotton Daywear"
  },
  {
    src: img4,
    title: "Silk Evening Gown"
  },
  {
    src: img5,
    title: "Vintage-Inspired t shirts"
  },
  {
    src: img6,
    title: "Boho Floral Max Dress"
  }
];

const Mens = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (  
    <> 
    <Navbar/>
    <section className="py-16 px-4 bg-gray-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="lg:text-6xl text-4xl font-rubik font-bold text-center mb-8 text-lime-bright" data-aos="fade-down">
          Virelle Men’s Collection
        </h2>
        <p
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12 font-outfit"
          data-aos="fade-up"
        >
          Discover the elegance and power of modern fashion. Explore our latest styles tailored for confident women.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md bg-white"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-[30rem] object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center font-outfit">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>   
    <Products/>
    <Footer/>
    </>
  );
};
 
export default Mens;
