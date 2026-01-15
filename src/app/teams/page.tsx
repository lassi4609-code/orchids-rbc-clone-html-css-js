"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import PageBanner from "@/components/shared/page-banner";
import { ShieldCheck, Trophy, Users, Star, Swords } from "lucide-react";

const ageTeams = [
  { category: "Under 14", title: "Rising Stars", focus: "Foundation & Fundamentals", color: "#FF7043" },
  { category: "Under 17", title: "Elite Juniors", focus: "Tactical Awareness", color: "#004D40" },
  { category: "Under 19", title: "National Prospects", focus: "High-Performance Prep", color: "#FF7043" },
  { category: "Under 23", title: "Pro-Pathway", focus: "Professional Transition", color: "#004D40" },
];

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-[#f8fcfc]">
      <Header />
      <PageBanner title="Elite Squads" breadcrumb="Teams" />
      
      <section className="py-[100px]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center mb-[100px]">
            <div>
               <h4 className="text-[#FF7043] font-bold tracking-[3px] uppercase text-sm mb-4">The AMF Pipeline</h4>
               <h2 className="text-[#004D40] text-[42px] font-black leading-[1.1] mb-8 uppercase italic">Structured for <span className="text-[#FF7043]">Success</span></h2>
               <p className="text-[#2D3436]/70 text-[18px] leading-[1.8] font-medium mb-8">
                 Our team structure is designed to mimic the professional league experience. Athletes are grouped into age-specific squads that receive tailored coaching, nutrition, and psychological support.
               </p>
               <div className="space-y-6">
                  <div className="flex gap-5">
                     <div className="w-[50px] h-[50px] bg-[#004D40]/5 rounded-[12px] flex items-center justify-center text-[#004D40] shrink-0">
                        <Star size={24} />
                     </div>
                     <div>
                        <h5 className="text-[#004D40] font-black uppercase text-sm">Franchise Representation</h5>
                        <p className="text-sm text-[#2D3436]/60">Top performers represent regional franchises in national tournaments.</p>
                     </div>
                  </div>
                  <div className="flex gap-5">
                     <div className="w-[50px] h-[50px] bg-[#004D40]/5 rounded-[12px] flex items-center justify-center text-[#004D40] shrink-0">
                        <Swords size={24} />
                     </div>
                     <div>
                        <h5 className="text-[#004D40] font-black uppercase text-sm">Competitive Exposure</h5>
                        <p className="text-sm text-[#2D3436]/60">Regular match-play against international visiting academies.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {ageTeams.map((team, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-[25px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                     <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">{team.category}</div>
                     <h4 className="text-[22px] font-black text-[#004D40] uppercase italic mb-4">{team.title}</h4>
                     <div className="h-1 w-10 mb-6 group-hover:w-full transition-all duration-500" style={{ backgroundColor: team.color }}></div>
                     <p className="text-sm text-[#2D3436]/60 font-medium">{team.focus}</p>
                  </div>
               ))}
            </div>
          </div>

          <div className="bg-[#004D40] rounded-[40px] p-[60px] text-white text-center relative overflow-hidden">
             <div className="relative z-10">
                <Trophy className="mx-auto text-[#FF7043] mb-8" size={64} />
                <h3 className="text-[32px] font-black uppercase italic mb-6">The Championship Pathway</h3>
                <p className="text-white/60 max-w-[700px] mx-auto text-[18px] leading-[1.8] font-medium mb-10">
                  Every squad participates in the AMF Annual Championship, a month-long tournament where scouts from international leagues and university recruiters identify future stars.
                </p>
                <div className="flex justify-center gap-12">
                   <div className="text-center">
                      <div className="text-[32px] font-black">24</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#FF7043] font-black">Teams</div>
                   </div>
                   <div className="text-center">
                      <div className="text-[32px] font-black">120+</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#FF7043] font-black">Matches</div>
                   </div>
                   <div className="text-center">
                      <div className="text-[32px] font-black">15</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#FF7043] font-black">Venues</div>
                   </div>
                </div>
             </div>
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
