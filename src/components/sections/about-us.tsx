import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  // Asset path from the provided assets list
  const logoAsset = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/icons/0325110440284462Untitled_20design_20_17_-3.png";

  return (
    <section className="bg-[#F2F4F8] py-[80px] overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Side: Circular Gradient Logo */}
          <div className="relative flex-shrink-0 w-full max-w-[400px] lg:w-[45%] flex justify-center lg:justify-start">
            <div className="relative">
              {/* Distinctive Circular Gradient Border */}
              <div 
                className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] flex items-center justify-center rounded-full"
                style={{
                  background: 'conic-gradient(from 180deg at 50% 50%, #4FA5C2 0deg, #A855F7 120deg, #38BDF8 240deg, #4FA5C2 360deg)',
                  padding: '12px'
                }}
              >
                {/* Inner White Circle */}
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden shadow-inner">
                  <div className="relative w-[80%] h-[80%]">
                    <Image
                      src={logoAsset}
                      alt="Shivay Sports Management SSM Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
              
              {/* Optional background decorative glow/shadow effect if visible in screenshots */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full bg-blue-500/5 blur-3xl"></div>
            </div>
          </div>

          {/* Right Side: Structured Text Block */}
          <div className="w-full lg:w-[55%]">
            <div className="text-left">
              <h2 className="text-[#0D214F] text-[36px] font-bold mb-6 relative">
                About Us
                <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#EE3231]"></span>
              </h2>
              
              <div className="space-y-5 text-[#222222] text-[16px] leading-[1.7] font-normal">
                <p>
                  Welcome to the <span className="font-semibold">Rising Bharat Cricket League</span>, managed by <span className="font-semibold">Shivay Sports Management Pvt Ltd</span>, a registered entity with the Ministry of Company Affairs. Our league is not just a sporting event; it's a celebration of the game's spirit, uniting communities through thrilling cricket competitions. Committed to fair play and sportsmanship, we provide a platform for both aspiring and seasoned cricketers.
                </p>
                
                <p>
                  Shivay Sports Management Pvt Ltd is dedicated to fostering the growth of sports, with a particular vision to support and promote amateur players in India. The Rising Bharat Cricket League dreams of contributing to this vision.
                </p>
                
                <p>
                  Our Cricket League serves as a platform that celebrates the spirit of the game, creating an inclusive and competitive environment that fosters camaraderie among teams and fans.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;