import React from "react";
import HistoricalHero from "./Hero/HistoricalHero";
import Card from "../../Card"; // Make sure this path is correct
import NaturalHero from "./Hero/NaturalHero";
import EntertainmentHero from "./Hero/EntertaintmentHero";

const places = [
  {
    name: "Kek Lok Si Temple",
    description:
      "Built since the year 1891, Kek Lok Si Temple, situated in Penang, Malaysia, is one of the largest and finest temple complexes in Southeast Asia.",
    images: [
      { type: "image", src: "KekLokSi.jpg", alt: "A picture of Kek Lok Si" },
      { type: "image", src: "kek lok si2.jpg", alt: "Second picture of Kek Lok Si" },
      { type: "video", src: "/kek lok si.mp4", poster: "video-poster.jpg" },
    ],
    website: "https://kekloksitemple.com/",
  },
  {
    name: "Penang Peranakan Mansion",
    description: "The Pinang Peranakan Mansion is a beautifully restored 19th century Peranakan mansion, once belonging to a rich Chinese merchant.",
    images: [
      { type: "image", src: "HP2.jpg", alt: "Penang Peranakan Mansion 1" },
      { type: "image", src: "HP2_2.jpg", alt: "Penang Peranakan Mansion 2" },
      { type: "video", src: "/H2.webm", poster: "Penang Peranakan Mansion-poster2.jpg" },
    ],
    website: "http://www.pinangperanakanmansion.com.my/", // Add the official website URL
  },
  {
    name: "Penang City hall",
    description: "The City Hall of George Town or Dewan Bandaraya George Town is a Victorian-style building along Jalan Padang Kota Lama. It was constructed in 1903, and opened in 1906. It holds the distinction as being one of the first buildings in George Town, Penang, to be completely fitted with electric lights and fans.",
    images: [
      { type: "image", src: "HP3_2.jpg", alt: "Penang City hall 1" },
      { type: "image", src: "62ced4efcaee42efb1b3d992_PTH-Front.jpg", alt: "Penang City hall 2" },
      { type: "video", src: "/H3.webm", poster: "Penang City hall3.jpg" },
    ],
    website: "https://www.greenquarter.biz/ideas-stories/sustainability-and-green-consultants-for-unesco-world-heritage-site-penang-town-hall/", // Add the official website URL
  },
  {
    name: "Queen Victoria Memorial Clock Tower",
    description: "The Queen Victoria Memorial Clock Tower, or the Jubilee Clock Tower, is the most recognizable building in Georgetown and a local landmark. It is located at King Edward Place, at the junction of Lebuh Light and Lebuh Pantai (Beach Street). The clock tower was built in 1897.",
    images: [
      { type: "image", src: "HP4_1.jpg", alt: "Penang City hall 1" },
      { type: "image", src: "HP4_2.jpg", alt: "Penang City hall 2" },
      { type: "video", src: "HP4_video.mp4", poster: "Penang City hall3.jpg" },
    ],
    website: "https://myheritagebuildings.blogspot.com/2024/02/queen-victoria-memorial-clock-tower.html", // Add the official website URL
  },
];

const places2 = [
  {
    name: "Penang Hill",
    description:
      "Ready for a challenge with a rewarding view? Penang Hill is a haven for hikers, with multiple trails ranging from beginner to advanced. ",
    images: [
      { type: "image", src: "NP1_1.jpg", alt: "A picture of Penang Hill" },
      { type: "image", src: "NP1_2.jpg", alt: "Second picture of Penang Hill" },
      { type: "video", src: "/NP1_3.mp4", poster: "video-poster.jpg" },
    ],
    website: "https://www.penanghill.gov.my/index.php/en/",
  },
  {
    name: "Entopia Penang Butterfly Farm",
    description: "Entopia by Penang Butterfly Farm is a large butterfly enclave with about 15,000 butterflies, dragonflies, and fireflies.",
    images: [
      { type: "image", src: "NP2_1.jpg", alt: "Entopia Penang Butterfly Farm" },
      { type: "image", src: "NP2_2.jpg", alt: "Entopia Penang Butterfly Farm2" },
      { type: "video", src: "/Np2.webm", poster: "Entopia Penang Butterfly Farm2.jpg" },
    ],
    website: "https://www.entopia.com/", // Add the official website URL
  },
  {
    name: "Penang National Park",
    description: "Formerly known as the Pantai Acheh Forest Reserve, the Penang National Park is home to a massive family of flora and fauna.",
    images: [
      { type: "image", src: "Penang-National-Park-1.jpg", alt: "Penang City hall 1" },
      { type: "image", src: "Penang National Park forest trail.jpg", alt: "Penang City hall 2" },
      { type: "video", src: "/large.mp4", poster: "Penang City hall3.jpg" },
    ],
    website: "https://www.wildlife.gov.my/index.php/en/11-info/154-penang-national-park", // Add the official website URL
  },
  {
    name: "Penang Botanical Gardens",
    description: " Penang Botanic Gardens is where you can ‘escape’ to for a dose of greenery and famous for its flora and fauna",
    images: [
      { type: "image", src: "caption (1).jpg", alt: "Penang City hall 1" },
      { type: "image", src: "caption (2).jpg", alt: "Penang City hall 2" },
      { type: "video", src: "NP.mp4", poster: "Penang City hall3.jpg" },
    ],
    website: "https://botanicalgardens.penang.gov.my/index.php/en/", // Add the official website URL
  },
];

const places3 = [
  {
    name: "The TOP Penang",
    description:
      "Have a never-ending fun on the highest tower in Penang. Eat, Play and Learn at the same time and same place. Spread some joys and enjoy your happy moments together with your friends and loved one! ",
    images: [
      { type: "image", src: "AP1_1.png", alt: "A picture of The TOP Penang" },
      { type: "image", src: "AP1_2.png", alt: "Second picture of The TOP Penang" },
      { type: "video", src: "/AP1_3.mp4", poster: "video-poster.jpg" },
    ],
    website: "https://thetop.com.my/",
  },
  {
    name: "Upside Down Museum",
    description: "Handily located in the heart of George Town, you’ll find the Upside Down Museum on Lebuh Kimberley, just down the road from the Kimberley Street Food Night Market, making it a convenient stop for both fun and food lovers exploring the area.",
    images: [
      { type: "image", src: "AP2_1.webp", alt: "Upside Down Museum" },
      { type: "image", src: "Upsite.jpg", alt: "Upside Down Museum 2" },
      { type: "video", src: "Upsite down.mp4", poster: "Upside Down Museum.Mp4" },
    ],
    website: "https://onpenang.com/penang-upside-down-house/", // Add the official website URL
  },
  {
    name: "ESCAPE Penang",
    description: "A departure from the conventional idea of roller-coaster rides, Escape is an outdoor theme park with challenging activities and games suited for children and adults. Sprawled over 22 acres, the park comprises of Adventureplay, Gravityplay and Waterplay that includes the World's Longest Water Slide.",
    images: [
      { type: "image", src: "AP3_2.jpg", alt: "ESCAPE Penang 1" },
      { type: "image", src: "AP3_1.jpg", alt: "ESCAPE Penang 2" },
      { type: "video", src: "/AP3_3.MOV", poster: "ESCAPE Penang video" },
    ],
    website: "https://www.escape.my/pg", // Add the official website URL
  },
  {
    name: "Tech Dome Penang",
    description: " PTech Dome Penang is Penang’s Science Museum, showcasing 120 interactive science and technology exhibits all under the one roof. This is a superb Penang indoor activity for any science-buffs!Tech Dome aims to introduce younger kids to science and help them explore STEM subjects.",
    images: [
      { type: "image", src: "AP4_1.webp", alt: "Tech Dome Penang" },
      { type: "image", src: "AP4_2.webp", alt: "Tech Dome Penang" },
      { type: "video", src: "P4.mp4", poster: "Tech Dome Penang" },
    ],
    website: "https://www.techdomepenang.org/", // Add the official website URL
  },
];



const Places = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div>
        <HistoricalHero/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {places.map((place, index) => (
          <Card key={index} place={place} />
        ))}
      </div>

      <div>
        <NaturalHero/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {places2.map((place, index) => (
          <Card key={index} place={place} />
        ))}
      </div>

      <div>
        <EntertainmentHero/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {places3.map((place, index) => (
          <Card key={index} place={place} />
        ))}
      </div>

    </div>
  );
};

export default Places;
