import React, { useState } from 'react';

const Modal = ({ images, description, address, name, closeModal }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const changeImage = (direction) => {
    setCurrentImage((prevImage) => {
      const newImage = prevImage + direction;
      return newImage < 0 ? images.length - 1 : newImage % images.length;
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>×</span>
        <div className="restaurant-name-container">
          <div>{name}</div>
        </div>
        <div className="image-container">
          <img src={images[currentImage]} alt={name} />
          <div className="scroll-btn left-btn" onClick={() => changeImage(-1)}>‹</div>
          <div className="scroll-btn right-btn" onClick={() => changeImage(1)}>›</div>
        </div>
        <div className="description">{description}</div>
        <div className="address">{address}</div>
      </div>
    </div>
  );
};

export default Modal;
