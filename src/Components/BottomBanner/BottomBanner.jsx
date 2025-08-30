// src/components/BottomBanner.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';

gsap.registerPlugin(ScrollTrigger);

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const statVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const BottomBanner = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      );
    }

    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
          },
        }
      );
    }
  }, []);

  return (
    <>
      {/* === Hero Banner Section === */}
      <section
        className="bg-black lg:w-[92rem] rounded-lg lg:-ml-[8rem] text-white py-12 px-4 md:px-16 font-rubik"
        ref={sectionRef}
      >
        <motion.div
          className="w-full mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariant}
          custom={0}
          data-aos="fade-up"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-outfit mb-4"
            variants={textVariant}
            custom={1}
          >
            Step Into Style with Virelle
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl font-light font-rubik"
            variants={textVariant}
            custom={2}
          >
            Redefining fashion for the bold and confident. <br className="hidden md:inline" />
            Discover curated collections, timeless essentials, and a community that celebrates individuality.
          </motion.p>
        </motion.div>
      </section>

      {/* === Virelle Brand Stats Section === */}
      <section
        className="bg-black lg:w-[92rem] lg:-ml-[8rem] text-white py-12 px-4 md:px-16 font-rubik"
        ref={statsRef}
      >
        <motion.div
          className="w-full mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          data-aos="fade-up"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold font-outfit mb-8"
            variants={textVariant}
            custom={1}
          >
            Virelle at a Glance
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: '150K+', label: 'Happy Customers' },
              { value: '500+', label: 'Unique Styles' },
              { value: '25', label: 'Countries Served' },
              { value: '99%', label: 'Satisfaction Rate' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="hover:scale-105 transition-transform duration-300"
                variants={statVariant}
                custom={index}
              >
                <p className="text-3xl md:text-4xl font-bold font-outfit">{item.value}</p>
                <p className="text-sm md:text-base font-light">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default BottomBanner;
