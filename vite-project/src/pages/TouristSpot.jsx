import React from "react";
import Places from "../components/Places";

const TouristSpot = () => {
  return (
    <div>
      <h1 className="font-semibold text-4xl lg:text-8xl text-gray-800 leading-tight mb-20 text-center mt-20">Best Places to Visit</h1>
      <Places />
    </div>
  );
};

export default TouristSpot;
