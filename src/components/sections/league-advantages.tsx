import React from 'react';
import Image from 'next/image';

const ADVANTAGES = [
  {
    id: 1,
    img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/0125100841389086CHANCE_20TO_20MEET_20_22_-21.png",
    alt: "Grow Your Cricketing Skill"
  },
  {
    id: 2,
    img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/0125100846104306CHANCE_20TO_20MEET_20_23_-22.png",
    alt: "Chance to Meet Cricketer and Qualified Coach"
  },
  {
    id: 3,
    img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/0125100846163546CHANCE_20TO_20MEET_20_24_-23.png",
    alt: "Low Registration Fee"
  },
  {
    id: 4,
    img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/0125100846217274CHANCE_20TO_20MEET_20_25_-24.png",
    alt: "Most Trusted League in India"
  },
  {
    id: 5,
    img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/0125100849023493CHANCE_20TO_20MEET_20_26_-25.png",
    alt: "Providing 4 League Match"
  },
  {
    id: 6,
    img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/0125100849088572CHANCE_20TO_20MEET_20_27_-26.png",
    alt: "Receive Certificate After Every Match"
  },
  {
    id: 7,
    img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/0125100849123835CHANCE_20TO_20MEET_20_28_-27.png",
    alt: "Chance to Meet Legends"
  },
  {
    id: 8,
    img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/0125100900453276CHANCE_20TO_20MEET_20_29_-28.png",
    alt: "Providing 15 Lakh Sponsorship"
  }
];

const LeagueAdvantages = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background with Stadium Lit Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url('https://myrbcl.com/img/stadium-bg.jpg')`, // Fallback or inferred from visual context
          backgroundColor: '#0D214F' // Primary navy for dark theme consistency
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="container relative z-10 py-[80px]">
        {/* Section Heading */}
        <div className="text-center mb-[50px]">
          <h2 className="text-[36px] font-black uppercase text-white tracking-[0.05em] leading-[1.2]">
            RBCL ADVANTAGES
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-[80px] h-[3px] bg-[#EE3231]" />
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-[40px] gap-x-[30px] lg:px-10">
          {ADVANTAGES.map((advantage) => (
            <div 
              key={advantage.id} 
              className="flex justify-center items-center group"
            >
              <div className="relative w-[180px] h-[180px] lg:w-[220px] lg:h-[220px] bg-white rounded-full p-2 flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-105">
                {/* Silver/Chrome Inner Border Effect */}
                <div className="absolute inset-0 rounded-full border-[8px] border-gray-200 pointer-events-none" />
                
                <div className="relative w-full h-full flex items-center justify-center p-4">
                  <Image
                    src={advantage.img}
                    alt={advantage.alt}
                    width={200}
                    height={200}
                    className="object-contain"
                    priority={advantage.id <= 4}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Slanted Cut (Visual Motif) */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[20px] bg-[#F2F4F8]"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
      />
    </section>
  );
};

export default LeagueAdvantages;