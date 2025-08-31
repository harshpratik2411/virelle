import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../assets/Display/img1.jpg';
import img2 from '../../assets/Display/img2.jpg';
import img3 from '../../assets/Display/img3.jpg';
import video1 from '../../assets/Display/video1.mp4';
import video2 from '../../assets/Display/video2.mp4';
import video3 from '../../assets/Display/video3.mp4';
import { div, h1, span } from 'motion/react-client';

const mediaItems = [
  { type: 'image', src: img1, span: 'sm:row-span-2' },
  { type: 'video', src: video1, span: 'sm:col-span-2 sm:row-span-2' },
  { type: 'image', src: img2, span: 'sm:row-span-2' },
  { type: 'video', src: video2, span: 'sm:col-span-2 sm:row-span-2' },
  { type: 'image', src: img3, span: 'sm:row-span-2' },
  { type: 'video', src: video3, span: 'sm:row-span-2' },
];

const Display = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (  

    <span className='font-bold text-lime-bright lg:ml-[28rem] ml-[3.5rem] lg:text-7xl text-4xl animate-bounce mt-4 '> Our Best Products 
    <div className='lg:p-20 lg:-mt-12 p-4'>
    <div className="p-8 md:p-10 mt-5 bg-[#0f0f0f] min-h-screen font-outfit">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:auto-rows-[250px] md:auto-rows-[200px] gap-4">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`bg-[#1a1a1a] rounded-xl  overflow-hidden ${item.span}`}
            data-aos="fade-up"
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={`Clothing ${index + 1}`}
                className="w-full  h-full object-cover"
              />
            ) : (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>
    </div> 
    </div>
    </span>
  );
};

export default Display;
