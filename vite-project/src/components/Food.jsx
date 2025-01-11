import React, { useState } from 'react';
import './Food.css';
import RestaurantCard from './RestaurantCard';
import Modal from './Modal';

const Food = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (images, description, address, name) => {
    setModalData({ images, description, address, name });
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <main id="main">
        <h2>Food & Beverages in Penang</h2>
        
        {/* Level 1 */}
        <div className="level" id="restaurant-level">
          <RestaurantCard
            imgSrc="Dandy.jpg"
            name="Dandy"
            price="15-20"
            onClick={() => openModal(
              ['Dandy.jpg', 'DD1.jpg', 'DD2.jpg'],
              'A vibrant eatery known for its fusion of Asian flavors, serving fresh, delicious dishes.',
              'Restaurant 1 Address',
              'Dandy'
            )}
          />
          <RestaurantCard
            imgSrc="PadangBrownFoodCourt.jpeg"
            name="Padang Brown Food Court"
            price="10-15"
            onClick={() => openModal(
              ['PadangBrownFoodCourt.jpeg', 'PB1.png', 'PB2.jpg'],
              'A bustling food court offering a variety of local street food, from hawker favorites to Penang specialties.',
              'Restaurant 2 Address',
              'Padang Brown Food Court'
            )}
          />
          <RestaurantCard
            imgSrc="NasiKandarSulaiman.jpg"
            name="Nasi Kandar Sulaiman"
            price="10-15"
            onClick={() => openModal(
              ['NasiKandarSulaiman.jpg', 'NKS1.jpg', 'NKS2.jpg'],
              'A popular spot for hearty nasi kandar meals, featuring flavorful curries and a variety of side dishes.',
              'Restaurant 3 Address',
              'Nasi Kandar Sulaiman'
            )}
          />
        </div>

        {/* Level 2 */}
        <div className="level">
          <RestaurantCard
            imgSrc="HigherGround.jpg"
            name="Higher Ground"
            price="20-25"
            onClick={() => openModal(
              ['HigherGround.jpg', 'HG1.jpg', 'HG2.jpg'],
              'A trendy café offering specialty coffee, delicious brunch options, and a relaxed ambiance with a view.',
              'Restaurant 4 Address',
              'Higher Ground'
            )}
          />
          <RestaurantCard
            imgSrc="ArangCoffee.jpg"
            name="Arang Coffee"
            price="10-15"
            onClick={() => openModal(
              ['ArangCoffee.jpg', 'AC1.jpg', 'AC2.jpg'],
              'A cozy café serving aromatic coffees and delicious pastries, perfect for a quiet morning or afternoon break.',
              'Restaurant 5 Address',
              'Arang Coffee'
            )}
          />
          <RestaurantCard
            imgSrc="SushiMentai.jpg"
            name="Sushi Mentai"
            price="10-15"
            onClick={() => openModal(
              ['SushiMentai.jpg', 'SM1.jpg', 'SM2.jpg'],
              'A cozy café serving aromatic coffees and delicious pastries, perfect for a quiet morning or afternoon break.',
              'Restaurant 6 Address',
              'Sushi Mentai'
            )}
          />
        </div>

      </main>
      {modalOpen && <Modal {...modalData} closeModal={closeModal} />}
    </div>
  );
};

export default Food;
