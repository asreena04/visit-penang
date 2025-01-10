import React from 'react';
import HeroImg from "../../assets/Main_image.jpg";

const Hero = () => {
  return (
    <section className="relative">
      {/* Hero Image as Background */}
      <div
        className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        {/* Text Content */}
        <div className="bg-white/90 rounded-lg p-12 md:p-16 text-center max-w-3xl">
          <h1
            className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-snug"
            style={{ wordSpacing: '0.1em' }}
          >
            Explore Penang: <span className="text-red-500">The Heart of Malaysia</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
            Explore Penang, the vibrant heart of Malaysia, where rich culture, mouthwatering food,
            and stunning sights await at every turn!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
