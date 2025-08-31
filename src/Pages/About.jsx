import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img4 from "../assets/Display/img4.jpg";
import img5 from "../assets/Display/img5.jpg"; 
import img6 from "../assets/Display/img6.jpg";
import img7 from "../assets/Display/img7.jpg";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return ( 
    <> 
    <Navbar/>
    <section className="font-rubik bg-white text-black py-12 px-6 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div data-aos="fade-right">
          <h1 className="text-5xl lg:text-6xl lg:ml-0 ml-12 font-extrabold leading-tight mb-6">
            WE REALLY <br />
            LOVE TO <br />
            CONNECT THROUGH <br />
            CLOTHING
          </h1>
          <p className="font-outfit  lg:ml-0 ml-16 text-lg mt-2">
            <span className="block  text-xl font-semibold mb-2">— Virelle</span>
            Tradition Meets Trend.
          </p>
        </div>

        {/* Image */}
        <div data-aos="fade-left">
          <img
            src={img4}
            alt="Founder or Brand visual"
            className="rounded-lg w-full h-[500px] object-cover"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-2 gap-10 mt-16">
        {/* Description */}
        <div data-aos="fade-up" className="lg:col-span-2">
          <p className="text-gray-700 text-lg leading-relaxed font-outfit">
            <span className="text-2xl font-bold text-black">Virelle</span> is
            more than just a clothing brand — it is a journey through heritage,
            a celebration of identity, and a bold statement of self-expression.
            We believe that fashion should not only be seen but also felt — in
            every stitch, every silhouette, every story told through fabric. Our
            collections are a tribute to cultural richness and artistic legacy.
            By merging age-old techniques with contemporary designs, we aim to
            create garments that transcend trends and speak to the soul of the
            wearer. Every outfit we create is designed with intention — to
            empower, to connect, and to inspire. Whether you are embracing
            tradition or rewriting it, Virelle offers a wardrobe that mirrors
            your roots while moving forward with grace and confidence.
          </p>

          <p className="text-gray-700 mt-6 font-outfit">
            Rooted in legacy and branching into the future, Virelle is more than
            a brand — it's a movement of elegance.
          </p>
        </div>
      </div>

      {/* Image + Text Sections */}
      <div className="mt-20 space-y-20">
        {/* Section 1: Image Left, Text Right */}
        <div
          className="grid lg:grid-cols-2 gap-10 items-center"
          data-aos="fade-up"
        >
          <img
            src={img5}
            alt="Concept 1"
            className="w-full rounded-lg h-[380px] object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Timeless Craftsmanship</h2>
            <p className="text-gray-700 font-outfit">
              True style begins with authenticity. At Virelle, craftsmanship is
              at the core of everything we do. From hand-dyed fabrics to
              meticulous embroidery, our pieces carry the hands and hearts of
              skilled artisans. We collaborate with local craftspeople who bring
              generations of knowledge into every thread, honoring ancient
              techniques such as block printing, zari work, and fine handloom
              weaving — reimagined for the modern wardrobe. Each piece is not
              just worn — it’s lived in, treasured, and passed down like
              heirlooms that hold emotional weight.
            </p>
          </div>
        </div>

        {/* Section 2: Text Left, Image Right */}
        <div
          className="grid lg:grid-cols-2 gap-10 items-center"
          data-aos="fade-up"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">Modern Meets Tradition</h2>
            <p className="text-gray-700 font-outfit">
              In a world where fast fashion dominates, Virelle stands for
              timeless design and conscious creation. Our vision is rooted in
              preserving cultural legacy while reinterpreting it for today’s
              generation. We blend bold structures with soft fabrics,
              traditional motifs with contemporary tailoring. From regal kurtas
              and lehengas to experimental drapes and co-ord sets, every
              silhouette is a bridge between the past and the present. It’s
              fashion that speaks multiple languages — elegance, identity,
              freedom, and strength — all in one voice.
            </p>
          </div>
          <img
            src={img6}
            alt="Concept 2"
            className="w-full rounded-lg h-[500px] object-cover"
          />
        </div>

        {/* Section 3: Image Left, Text Right */}
        <div
          className="grid lg:grid-cols-2 gap-10 items-center"
          data-aos="fade-up"
        >
          <img
            src={img7}
            alt="Concept 3"
            className="w-full rounded-lg h-[380px] object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Worn With Meaning</h2>
            <p className="text-gray-700 font-outfit">
              Clothes carry energy. They hold memories, moods, and moments. At
              Virelle, we design garments meant to be part of your story —
              whether it's a festive gathering, a quiet celebration, or a
              fearless expression of who you are becoming. We believe what you
              wear should feel like home. That’s why every collection is rooted
              in empathy and designed for versatility — adaptable, graceful, and
              deeply personal. This is fashion with a heartbeat. Designed for
              those who wear their heritage on their sleeves and their courage
              in their style.
            </p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-20 flex flex-col gap-3 font-outfit" data-aos="fade-up">
        <p className="text-black font-semibold">Follow Us</p>
        <div className="flex flex-col gap-2 text-gray-800">
          <a href="#" className="hover:text-black transition-all">
            Instagram →
          </a>
          <a href="#" className="hover:text-black transition-all">
            Youtube →
          </a>
        </div>
      </div> 
      {/* Values, Future Goals & Achievements Cards */}
<div className="mt-24 grid lg:grid-cols-3 gap-8" data-aos="fade-up">
  {/* Card 1: Our Values */}
  <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
    <h2 className="text-2xl font-bold mb-4 text-black">Our Values</h2>
    <ul className="list-disc list-inside text-gray-700 font-outfit space-y-2">
      <li><strong>Authenticity:</strong> Real stories, traditions, and craft.</li>
      <li><strong>Inclusivity:</strong> Designed for all identities and backgrounds.</li>
      <li><strong>Sustainability:</strong> Ethical, slow, and conscious fashion.</li>
      <li><strong>Empowerment:</strong> Supporting artisans and cultural pride.</li>
    </ul>
  </div>

  {/* Card 2: Future Goals */}
  <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
    <h2 className="text-2xl font-bold mb-4 text-black">Future Goals</h2>
    <ul className="list-disc list-inside text-gray-700 font-outfit space-y-2">
      <li>Expand artisan networks across rural India.</li>
      <li>Launch inclusive & gender-neutral collections.</li>
      <li>Go global with cultural fashion lines.</li>
      <li>Achieve 100% sustainable production.</li>
    </ul>
  </div>

  {/* Card 3: What We've Achieved */}
  <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
    <h2 className="text-2xl font-bold mb-4 text-black">What We've Achieved</h2>
    <ul className="list-disc list-inside text-gray-700 font-outfit space-y-2">
      <li><strong>10,000+ customers</strong> in 2 years.</li>
      <li>Featured in <em>India Vogue Artisan Special</em>.</li>
      <li><strong>50+ artisans</strong> partnered with across India.</li>
      <li>3 ethical fashion campaigns launched.</li>
      <li>Recognized by <em>Fashion For Future India</em>.</li>
    </ul>
  </div>
</div>

    </section>  
    <Footer/>
    </>
  );
};

export default About;
