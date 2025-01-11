import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

export default function HotelImage() {
  const allCards = [
    { image: "/1.jpg", text: "Mercure Penang Beach Hotel", location: "Georgetown, Penang", price: "575", 
      description: "Tanjung Bungah's Mercure Penang Beach is a beachfront resort that's perfect for two tourists looking for action and leisure. Take advantage of beach access, a 24-hour gym, eating by the beach, and pool views of the ocean. Free Wi-Fi is available everywhere to keep you connected. Discover Penang's coastal beauty from a handy position close to the Straits Quay retail mall. Enjoy free Wi-Fi and a tastefully furnished accommodation with contemporary conveniences. From certain rooms, take in captivating views of the city or the ocean. Take exciting trips and see the lively local culture for a romantic retreat that will never be forgotten." },
    { image: "/2.jpg", text: "Bayview Hotel Georgetown", location: "Georgetown, Penang", price: "332", 
      description: "Luxurious waterfront suites with stunning views are available at the Bayview Hotel Georgetown. Take use of a spa, pool, workout center, and rotating restaurant. Book now for a wonderful stay at this conveniently located hotel close to the city center and attractions. Discover Georgetown's rich cultural legacy through its colorful street art and colonial architecture. Take advantage of the Bayview Hotel Georgetown's restaurant, bar, and swimming pool. Take fascinating tours of nearby landmarks. Modern amenities in the rooms include Wi-Fi, air conditioning, and opulent toiletries. There are rooms with great views of the city. well situated in George Town close to Chew's Jetty, Prangin Mall, and Street Art. Enjoy your stay at the Bayview Hotel Georgetown." },
    { image: "/3.jpg", text: "Kimberley Hotel Georgetown", location: "Georgetown, Penang", price: "206", 
      description: "Free WiFi and expedited check-in and check-out are provided by the Kimberley Hotel Georgetown. The apartments' unique décor creates a lively atmosphere. Ideal for exploring the local dining and retail scene, the location is close to restaurants and shopping malls. Explore Georgetown's rich cultural legacy in Penang, which includes a thriving street art scene and quaint colonial architecture. Savor the attentive concierge and breakfast takeout service. With air conditioning, a private balcony or terrace, free Wi-Fi, a revitalizing shower, and basic toiletries, the well-appointed rooms offer comfort and convenience. With its handy location next to George Town's Prangin Mall, Chew's Jetty, and Street Art, the hotel is the ideal starting point for exploring the neighborhood and taking in its contemporary conveniences and fascinating sights." },
    { image: "/4.jpg", text: "Cititel Hotel Penang", location: "Georgetown, Penang", price: "285", 
      description: "In ancient Georgetown, stay at the 4-star Cititel Hotel Penang, which is designed in the Renaissance style. Take advantage of complimentary Wi-Fi, parking, a delectable restaurant cuisine, and breathtaking city views. Discover the rich history of Georgetown by visiting the surrounding sites. Enjoy contemporary conveniences including free Wi-Fi, air conditioning, a safety deposit box, a revitalizing shower, and opulent toiletries. Savor the ease of ordering breakfast to go, unwind by the indoor pool, or revitalize yourself in the sauna. Take part in fascinating tours to learn about Georgetown's rich cultural legacy and the surrounding area. The Cititel Hotel Penang is the ideal option for two tourists looking for a fun and practical stay because of its handy location close to George Town's Prangin Mall, Chew's Jetty, and Street Art." },
    { image: "/5.jpg", text: "Berjaya Penang Hotel", location: "Georgetown, Penang", price: "305", 
      description: "A luxurious retreat for two people at the Berjaya Penang Hotel featuring the Presidential Suite, an outdoor pool, a gym, Georgetown's cultural legacy, fine cuisine, a chic bar, and poolside leisure. features Wi-Fi, air conditioning, and opulent amenities. Make your reservation now for a memorable getaway! The Berjaya Penang Hotel, which is close to well-known retail malls including Gurney Plaza and Gurney Paragon Mall, offers the utmost in luxury and convenience. Discover Penang's culture and savor local cuisine at neighboring landmarks. Enjoy chic, air-conditioned accommodations with free Wi-Fi and breathtaking city views. Make your reservation for your unique experience right now." },
    { image: "/7.jpg", text: "Grand Swiss Hotel", location: "Georgetown, Penang", price: "150", 
      description: "In Penang, stay at the Grand Swiss Hotel, which is close to the Upside Down Museum and Chew's Jetty. Savor the cozy rooms and on-site cuisine. This is where you begin your Penang experience. Discover Georgetown's rich cultural legacy at Penang's Grand Swiss Hotel. It's the ideal starting point for your Penang experience because of its colonial architecture, colorful street art, and near proximity to Prangin Mall, Chew's Jetty, and well-known street art locations. Take use of special features like a vehicle park, 24-hour front desk, and luggage storage. The contemporary rooms include with free Wi-Fi, air conditioning, and opulent toiletries. The Grand Swiss Hotel has everything you need for an unforgettable stay, whether you're traveling alone or with a friend." },
    { image: "/8.jpg", text: "The Upper House Batu Kawan", location: "Georgetown, Penang", price: "287", 
      description: "Located in Penang's business district, the Upper House Batu Kawan is a contemporary business hotel featuring a halal restaurant. Ideal starting point for two tourists who want to explore the lively history, local markets, and street cuisine of Bukit Mertajam. The Upper House Batu Kawan offers a number of conveniences, such as 24-hour check-in for accommodating travel schedules. Eat at the hotel's restaurant and unwind in the pool. The cozy accommodations provide free Wi-Fi and air conditioning. Enjoy free amenities and a revitalizing shower to freshen up. The Upper House Batu Kawan is the ideal option for a great stay in Penang for two travelers because of its ideal location and contemporary amenities." },
    { image: "/9.jpg", text: "Pearl View Hotel", location: "Georgetown, Penang", price: "298", 
      description: "Beautiful views of the Penang Bridge and the Seberang Prai city skyline can be seen from the Pearl View Hotel. It has a full-service Lotus Spa, a fitness facility, and two restaurants. Ideal for tourists looking for an unforgettable Penang experience. Discover Penang's Seberang Perai for its street art, local cuisine, and cultural legacy. Take advantage of the coffee shop and refreshing pool at the Pearl View Hotel. Enjoy contemporary conveniences including Wi-Fi, air conditioning, and an in-room safe. Use the free toiletries to freshen up in the refreshing shower. Two travelers can be sure that their stay will be unforgettable." },
    { image: "/10.jpg", text: "Tune Hotel Georgetown Penang", location: "Georgetown, Penang", price: "192", 
      description: "inexpensive hotel in the UNESCO World Heritage site of Georgetown. Ideal for two convenience-seeking travelers. Free WiFi and quick access to nearby sights. Visit the Tune Hotel Georgetown Penang to get a taste of Penang. Discover Georgetown's rich cultural legacy through its quaint colonial architecture, colorful street art, and practical conveniences. Enjoy free WiFi, air-conditioned accommodations, round-the-clock front desk assistance, and safe luggage storage. Discover neighboring sites such as George Town's Street Art, Chew's Jetty, and Prangin Mall. At the Tune Hotel Georgetown Penang, make lifelong memories." },
  ];

  const [visibleCards, setVisibleCards] = useState(6);

  const handleShowMore = () => {
    setVisibleCards(prevVisibleCards => Math.min(prevVisibleCards + 3, allCards.length));
  };

  const Card = ({ image, text, location, price, description }) => {
    return (
      <div>
        <div className="overflow-hidden relative my-0 mx-auto rounded-t-2xl">
          <img
            src={image}
            alt=""
            className="rounded-2xl w-[300px] h-[300px] box-border hoverImg"
          />
          <p className="bg-white rounded-lg p-1 text-sm absolute top-4 right-4 flex items-center gap-1">
            <FaStar className="text-[#ffc103]" /> 5.0
          </p>
        </div>
        <div className="flex justify-between items-center">
          <span>
            <h5 className="text-xl pt-2 font-semibold">{text}</h5>
            <div className="flex items-center gap-2 py-3">
              <HiLocationMarker size={20} className="text-primary" />
              <p className="text-gray text-light">{location}</p>
            </div>
          </span>
          <p className="font-semibold">
            RM{price} Avg/<span className="font-light">Night</span>
          </p>
        </div>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
      </div>
    );
  };

  return (
    <div>
      <section className="lg:p-16">
        <div className="container mx-auto px-3">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 py-16">
            {allCards.slice(0, visibleCards).map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
          {visibleCards < allCards.length && (
            <div className="flex justify-center">
              <button
                className="shadow-md transition-bg bg-white hover:bg-primary hover:text-white outline-none px-4 py-2 rounded-[10px]"
                onClick={handleShowMore}
              >
                Show more
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}