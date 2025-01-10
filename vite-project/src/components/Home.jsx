import React, { useRef } from "react";
import Slider from "react-slick";
import Hero from "./Hero/Hero.jsx";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { div } from "framer-motion/client";


const Home = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true, // Enable dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Disabled autoplay for manual control
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev(); // Move to the previous slide
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext(); // Move to the next slide
  };

  return (
    <div>
      <Hero />
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="relative max-w-4xl px-5 md:px-16 mx-auto">
        {/* Shared Header */}
        <h1 className="font-semibold text-4xl lg:text-5xl text-gray-800 leading-tight mb-6 text-center">
          About Penang
        </h1>

        <Slider ref={sliderRef} {...settings}>
          {/* Slide 1 */}
          <div className="text-center">
            <img
              src="/AboutPenang.jpg"
              alt="A scenic view of Penang's attractions"
              className="w-full h-[80vh] object-cover rounded-lg shadow-lg mb-6" // Added margin-bottom
            />
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-6">
              Penang, known as the 'Pearl of the Orient,' is a vibrant state in Malaysia celebrated
              for its rich cultural heritage, stunning landscapes, and mouth-watering cuisine. Located
              in the northwest of Malaysia, Penang comprises the island of Penang and a portion of
              the mainland, Seberang Perai.
            </p>
          </div>

          {/* Slide 2 */}
          <div className="text-center">
          <img
            src="/caption.jpg"
            alt="Street Art in Penang"
            className="w-full h-[80vh] object-cover rounded-lg shadow-lg mb-6"
          />
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
            Penang is not only famous for its food but also its colorful street art, unique culture, and rich history.
          </p>
        </div>


          {/* Slide 3 */}
          <div className="text-center">
            <img
              src="/batu-ferringhi-beach.jpg"
              alt="Penang Beach"
              className="w-full h-[80vh] object-cover rounded-lg shadow-lg mb-6" // Added margin-bottom
            />
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-6">
              Penang's beautiful beaches are perfect for a relaxing getaway, offering crystal-clear waters and golden sands.
            </p>
          </div>
        </Slider>

        {/* Manual Control Buttons positioned on the sides */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full"
          onClick={goToPrevSlide} // Call the function for previous slide
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full"
          onClick={goToNextSlide} // Call the function for next slide
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default Home;
