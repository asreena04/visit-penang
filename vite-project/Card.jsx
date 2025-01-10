import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

function Card({ place }) {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="card-container bg-gray-100 py-16 w-full">
      <div className="relative px-5 md:px-16">
        {/* Slider for Images and Videos */}
        <div className="flex flex-col items-start">
          <Slider ref={sliderRef} {...settings} className="w-full">
            {place.images.map((media, index) => (
              <div key={index}>
                {media.type === "image" ? (
                  <img
                    src={media.src || "fallback-image.jpg"}
                    alt={media.alt || "Default image"}
                    className="w-full h-[80vh] object-cover rounded-lg shadow-lg"
                  />
                ) : (
                  <video
                    controls
                    autoPlay={false} // Disable autoplay for better UX
                    loop
                    muted
                    poster={media.poster || "default-poster.jpg"}
                    src={media.src}
                    className="w-full h-[80vh] object-cover rounded-lg shadow-lg"
                  />
                )}
              </div>
            ))}
          </Slider>

          {/* Static Text Below Images */}
          <div className="mt-6">
            <h1 className="text-center text-3xl lg:text-3xl font-semibold py-4">
              {place.name}
            </h1>
            <p className="text-3xl lg:text-2xl text-gray-600 leading-relaxed text-left">
              {place.description}
            </p>
          </div>

          {/* Website Button */}
          {place.website && (
            <div className="mt-10">
              <a
                href={place.website}
                target="_blank"
                className= "text-black px-10 py-3 rounded-lg text-xl shadow-md "
                rel="noopener noreferrer"
                aria-label={`Visit the official website of ${place.name}`}
              >
                Visit Official Website
              </a>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full"
          onClick={goToPrevSlide}
          aria-label="Previous Slide"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full"
          onClick={goToNextSlide}
          aria-label="Next Slide"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default Card;
