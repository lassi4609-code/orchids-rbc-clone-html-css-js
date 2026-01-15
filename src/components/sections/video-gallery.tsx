import React from 'react';
import { Play } from 'lucide-react';

const videos = [
  {
    url: "https://www.youtube.com/embed/gnH8yEEg2DM?si=PcgQ2XoNsxDkr1el",
    title: "Rising Bharat Cricket League - Youtube Video"
  },
  {
    url: "https://www.youtube.com/embed/5sH4peFUJ-w?si=AdzL0lx3uKyBoirV",
    title: "Rising Bharat Cricket League - Youtube Video"
  },
  {
    url: "https://www.youtube.com/embed/ffBUn_KhW80?si=-Xj0bPOXjiDe8WF6",
    title: "Rising Bharat Cricket League - Youtube Video"
  },
  {
    url: "https://www.youtube.com/embed/gYxHVfdMGxQ?si=G6fujdbEqD07civz",
    title: "Rising Bharat Cricket League - Youtube Video"
  }
];

const VideoGallery = () => {
  return (
    <section className="bg-[#FFFFFF] py-[80px]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Section Header */}
        <div className="text-center mb-[50px]">
          <h2 className="text-[36px] font-bold text-[#0D214F] leading-[1.3] font-sans mb-2">
            Videos Gallery
          </h2>
          <div className="w-[60px] h-[3px] bg-[#EE3231] mx-auto"></div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          {videos.map((video, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[5px] overflow-hidden shadow-[0px_5px_25px_rgba(0,0,0,0.05)] border border-[#E1E1E1]"
            >
              {/* Video Wrapper */}
              <div className="relative pt-[56.25%] w-full bg-black">
                <iframe
                  src={video.url}
                  title={video.title}
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Title & Play Button Overlay Effect Placeholder */}
              <div className="p-[25px] flex flex-col items-center text-center">
                <h3 className="text-[18px] font-semibold text-[#222222] font-sans mb-[15px]">
                  {video.title}
                </h3>
                
                {/* Red Play Button Element */}
                <div className="relative">
                  <div className="w-[45px] h-[45px] bg-[#EE3231] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer">
                    <Play className="text-white fill-current w-5 h-5 ml-1" />
                  </div>
                  {/* Visual Decoration matches screenshot play icon position */}
                  <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-[#EE3231] rounded-full opacity-20 animate-ping pointer-events-none"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;