import React from 'react';
import HeroImg from "../../assets/HeroPlace3.png"; // Adjust the path if needed

const EntertainmentHero = () => {
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
            Modern and Entertainment Attractions:
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
          Penang is not just about history and nature—it's also a vibrant hub for modern entertainment! Whether you're looking for thrilling theme parks, or lively waterfront spots, there’s something for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EntertainmentHero;
