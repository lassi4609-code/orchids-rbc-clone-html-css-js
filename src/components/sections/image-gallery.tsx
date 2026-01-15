import React from 'react';
import Image from 'next/image';

/**
 * ImageGallery component demonstrating a masonry-style grid of tournament posters 
 * and match schedules for the Rising Bharat Cricket League.
 * 
 * Based on the design instructions: 
 * - Masonry-style grid
 * - Promotional posters and match schedules
 * - Centered "VIEW MORE" button at the bottom
 * - Dark theme consistent styles
 */

const galleryImages = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/0125100900575611CHANCE_20TO_20MEET_20_30_-29.png",
    alt: "Gujarat Cricket Trial Rajkot",
    type: "trial",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/0125100901144605CHANCE_20TO_20MEET_20_31_-30.png",
    alt: "Chhattisgarh Cricket Trial Raipur",
    type: "trial",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/0125100901386105CHANCE_20TO_20MEET_20_34_-9.png",
    alt: "Match Schedule Andhra Pradesh and Telangana",
    type: "schedule",
    span: "col-span-1 row-span-2"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/0125100901439124CHANCE_20TO_20MEET_20_35_-10.png",
    alt: "Andhra Pradesh and Telangana Schedule",
    type: "schedule",
    span: "col-span-1 row-span-2"
  },
  {
    /* Fallback image slots based on screenshot visual cues */
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/0125100900575611CHANCE_20TO_20MEET_20_30_-29.png",
    alt: "Telangana Cricket Trial Hyderabad",
    type: "trial",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/0125100901144605CHANCE_20TO_20MEET_20_31_-30.png",
    alt: "West Bengal Cricket Trial Kolkata",
    type: "trial",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/0125100901386105CHANCE_20TO_20MEET_20_34_-9.png",
    alt: "Senior Match Schedule",
    type: "schedule",
    span: "col-span-1 row-span-2"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/0125100901439124CHANCE_20TO_20MEET_20_35_-10.png",
    alt: "Junior Mix Match Schedule",
    type: "schedule",
    span: "col-span-1 row-span-2"
  }
];

export default function ImageGallery() {
  return (
    <section className="bg-white py-[80px]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Section Heading */}
        <div className="text-center mb-[50px]">
          <h2 className="text-[36px] font-bold text-[#0D214F] font-sans uppercase tracking-wider mb-2">
            Gallery
          </h2>
        </div>

        {/* Masonry-Style Grid Container */}
        {/* We use a multi-column layout or a flex/grid setup to mimic the masonry look of the screenshot */}
        <div className="flex flex-col md:flex-row gap-[30px] justify-center items-start">
          
          {/* Column 1: Trials and Posters */}
          <div className="flex flex-col gap-[30px] w-full md:w-[360px]">
            <div className="group overflow-hidden rounded-[5px] card-shadow border border-[#E1E1E1] transition-all duration-300 hover:scale-[1.02]">
              <Image 
                src={galleryImages[0].src} 
                alt={galleryImages[0].alt}
                width={360}
                height={360}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="group overflow-hidden rounded-[5px] card-shadow border border-[#E1E1E1] transition-all duration-300 hover:scale-[1.02]">
              <Image 
                src={galleryImages[7].src} 
                alt={galleryImages[7].alt}
                width={360}
                height={550}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="group overflow-hidden rounded-[5px] card-shadow border border-[#E1E1E1] transition-all duration-300 hover:scale-[1.02]">
              <Image 
                src={galleryImages[4].src} 
                alt={galleryImages[4].alt}
                width={360}
                height={360}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Column 2: Mix of Trials and Schedules */}
          <div className="flex flex-col gap-[30px] w-full md:w-[360px]">
            <div className="group overflow-hidden rounded-[5px] card-shadow border border-[#E1E1E1] transition-all duration-300 hover:scale-[1.02]">
              <Image 
                src={galleryImages[1].src} 
                alt={galleryImages[1].alt}
                width={360}
                height={360}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="group overflow-hidden rounded-[5px] card-shadow border border-[#E1E1E1] transition-all duration-300 hover:scale-[1.02]">
              <Image 
                src={galleryImages[6].src} 
                alt={galleryImages[6].alt}
                width={360}
                height={550}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="group overflow-hidden rounded-[5px] card-shadow border border-[#E1E1E1] transition-all duration-300 hover:scale-[1.02]">
              <Image 
                src={galleryImages[5].src} 
                alt={galleryImages[5].alt}
                width={360}
                height={360}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Column 3: High Density Schedules */}
          <div className="flex flex-col gap-[30px] w-full md:w-[360px]">
            <div className="group overflow-hidden rounded-[5px] card-shadow border border-[#E1E1E1] transition-all duration-300 hover:scale-[1.02]">
              <Image 
                src={galleryImages[2].src} 
                alt={galleryImages[2].alt}
                width={360}
                height={550}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="group overflow-hidden rounded-[5px] card-shadow border border-[#E1E1E1] transition-all duration-300 hover:scale-[1.02]">
              <Image 
                src={galleryImages[3].src} 
                alt={galleryImages[3].alt}
                width={360}
                height={550}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-[60px]">
          <a
            href="gallery.php"
            className="bg-[#0D214F] text-white px-[40px] py-[14px] text-[14px] font-bold uppercase tracking-wider rounded-[3px] transition-all duration-300 hover:bg-[#EE3231] hover:scale-105"
            style={{
              boxShadow: '0px 4px 10px rgba(13, 33, 79, 0.2)'
            }}
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}