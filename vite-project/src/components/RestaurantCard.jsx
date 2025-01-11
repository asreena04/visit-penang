import React from 'react';

const RestaurantCard = ({ imgSrc, name, price, onClick }) => {
  return (
    <div className="restaurant" onClick={onClick}>
      <img src={imgSrc} alt={name} />
      <div className="restaurant-info">
        <div className="restaurant-name">{name}</div>
        <div className="review">Review <span className="stars">⭐⭐⭐⭐</span></div>
      </div>
      <div className="price">RM {price}</div>
    </div>
  );
};

export default RestaurantCard;
