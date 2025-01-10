import React from 'react';
// Make sure the image is imported properly if it's within the src directory
import HeroImg from "../../assets/HeroPlace2.jpg"; // Adjust the path if needed

const NaturalHero = () => {
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
            Natural and Outdoor Activities:
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
          Penang is a playground for outdoor enthusiasts, offering thrilling adventures and scenic escapes that will excite your senses and leave you with unforgettable memories. Here are some of the best outdoor activities in Penang
          </p>
        </div>
      </div>
    </section>
  );
};

export default NaturalHero;
