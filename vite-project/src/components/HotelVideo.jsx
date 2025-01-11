import React, { useState } from 'react';

const HotelVideo = () => {
  const videos = [
    { src: "/video-1.mp4", title: "Mercure Penang Beach Hotel", description: "Reviews of the Mercure Penang Beach Hotel. Credit Youtube Channel: Asian Explorer" },
    { src: "/video-2.mp4", title: "Bayview Hotel Georgetown", description: "Reviews of the Bayview Hotel Georgetown. Credit Youtube Channel: Bayview Hotel Georgetown Penang." },
    { src: "/video-3.mp4", title: "Kimberley Hotel Georgetown", description: "Reviews of the Kimberley Hotel Georgetown. Credit Youtube Channel: Denof Walking Around" },
    { src: "/video-4.mp4", title: "Cititel Hotel Penang", description: "Reviews of the Cititel Hotel Penang. Credit Youtube Channel: VP Vlogs" },
    { src: "/video-5.mp4", title: "Berjaya Penang Hotel", description: "Reviews of the Berjaya Penang Hotel. Credit Youtube Channel: HotelKDM" },
    { src: "/video-6.mp4", title: "Grand Swiss Hotel", description: "Reviews of the Grand Swiss Hotel. Credit Youtube Channel: feelthai" },
    { src: "/video-7.mp4", title: "The Upper House Batu Kawan", description: "Reviews of the Upper House Batu Kawan. Credit Youtube Channel: Casual Logs" },
    { src: "/video-8.mp4", title: "Pearl View Hotel", description: "Reviews of the Pearl View Hotel. Credit Youtube Channel: KhairulVlog" },
    { src: "/video-9.mp4", title: "Tune Hotel Georgetown Penang", description: "Reviews of the Tune Hotel Georgetown Penang. Credit Youtube Channel: Syeni Channel" },
  ];

  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => setShowMore(!showMore);
  const displayedVideos = showMore ? videos : videos.slice(0, 6); // Conditionally slice

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {displayedVideos.map((video, index) => (
          <div key={index} className="overflow-hidden rounded-2xl">
            <div className="flex flex-col items-center">
              <div className="w-[384px] h-[192px] md:w-[512px] md:h-[256px] rounded-2xl">
                <video loop controls muted autoPlay className="object-cover w-full h-full">
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg mb-2">{video.title}</h3>
                <p className="text-sm text-gray-700">{video.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {videos.length > 6 && (
        <div className="w-full flex justify-center mt-4">
          <button
            className="px-4 py-2 rounded-md bg-white text-black hover:bg-gray-200 text-sm"
            onClick={handleShowMore}
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default HotelVideo;