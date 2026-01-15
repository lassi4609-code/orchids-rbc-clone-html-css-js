"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * MeetPlayers Component
 * 
 * Clones the "Meet The Players" section with a dark blue background,
 * left-aligned headline, and a horizontal responsive card slider.
 */
const MeetPlayers: React.FC = () => {
    // Player data based on screenshot visual cues
    const players = [
        {
            id: 1,
            image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/1525090120348408VIZAG_20NEW_20_201080_20_1080_20x_-3.jpg",
            alt: "Player coaching session"
        },
        {
            id: 2,
            image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/1525090120348408VIZAG_20NEW_20_201080_20_1080_20x_-3.jpg", // Fallback to provided asset
            alt: "Player batting action"
        },
        {
            id: 3,
            image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/1525090120348408VIZAG_20NEW_20_201080_20_1080_20x_-3.jpg", // Fallback to provided asset
            alt: "Players in field"
        },
        {
            id: 4,
            image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/1525090120348408VIZAG_20NEW_20_201080_20_1080_20x_-3.jpg", // Fallback to provided asset
            alt: "Team huddle"
        }
    ];

    return (
        <section className="bg-[#0D214F] py-[80px] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-start lg:items-center">
                    
                    {/* Headline and Navigation Controls */}
                    <div className="w-full lg:w-1/4 mb-10 lg:mb-0 pr-0 lg:pr-8">
                        <h2 className="text-white text-[36px] font-bold leading-[1.2] mb-4 uppercase">
                            Meet The <br className="hidden lg:block" /> Players
                        </h2>
                        <p className="text-white/80 text-[14px] mb-8 font-medium">
                            Don’t Miss Out On Any Important Updates!
                        </p>
                        
                        {/* Navigation Arrows */}
                        <div className="flex gap-3">
                            <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#EE3231] hover:border-[#EE3231] transition-all cursor-pointer">
                                <ChevronLeft size={20} />
                            </button>
                            <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white bg-[#EE3231] border-[#EE3231] hover:bg-[#F7941D] transition-all cursor-pointer">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Horizontal Player Slider Area */}
                    <div className="w-full lg:w-3/4">
                        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x">
                            {players.map((player) => (
                                <div 
                                    key={player.id} 
                                    className="min-w-[280px] md:min-w-[320px] lg:min-w-[350px] aspect-[4/3] relative rounded-[5px] overflow-hidden snap-start card-shadow group"
                                >
                                    <Image
                                        src={player.image}
                                        alt={player.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Subtle overlay for styling consistency */}
                                    <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                                    
                                    {/* Bottom border indicator seen in screenshots */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#EE3231] transform scale-x-0 transition-transform group-hover:scale-x-100" />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Background decorative elements matching branding */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
                <div 
                    className="w-full h-full"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #FFFFFF 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}
                />
            </div>
            
            {/* Red accent ribbon element typically found in these designs */}
            <div className="absolute top-1/2 -right-4 w-8 h-32 bg-[#EE3231] -translate-y-1/2 transform rotate-12 hidden lg:block" />
        </section>
    );
};

export default MeetPlayers;