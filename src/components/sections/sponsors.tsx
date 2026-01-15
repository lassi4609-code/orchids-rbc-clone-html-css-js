import React from 'react';
import Image from 'next/image';

/**
 * SponsorsSection component
 * 
 * Clones the "OUR SPONSORS" section featuring a light gray background (#F2F4F8) 
 * and a horizontal row of repeating sponsor logos as seen in the screenshots.
 */
const SponsorsSection: React.FC = () => {
  // Mapping the sponsor logo from provided assets
  const sponsorLogoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/svgs/24px-1.svg";

  // Replicating the 6-logo row seen in the screenshot
  const sponsors = Array(6).fill(null);

  return (
    <section className="bg-[#F2F4F8] py-[80px]">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-[40px]">
          <h2 className="text-[#0D214F] text-[36px] font-bold uppercase tracking-tight font-sans">
            OUR SPONSORS
          </h2>
        </div>

        {/* Sponsors Row */}
        <div className="flex flex-wrap justify-center items-center gap-[15px] md:gap-[30px]">
          {sponsors.map((_, index) => (
            <div 
              key={index}
              className="bg-white p-[15px] flex items-center justify-center min-w-[150px] md:min-w-[170px] h-[90px] shadow-sm rounded-sm transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={sponsorLogoUrl}
                  alt="Genitech Solution Sponsor"
                  width={140}
                  height={45}
                  className="object-contain"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;