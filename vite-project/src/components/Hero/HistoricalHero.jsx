import React from 'react';
// Make sure the image is imported properly if it's within the src directory
import HeroImg from "../../assets/Top Places.jpg"; // Adjust the path if needed

const HistoricalHero = () => {
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
            History Place:
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
          Penang's historical sites not only tell the story of the island's colonial past but also reflect its diverse cultural influences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistoricalHero;
