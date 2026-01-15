"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import PageBanner from "@/components/shared/page-banner";
import Image from "next/image";
import { Target, Users, Trophy, Shield, Activity, Globe } from "lucide-react";

export default function AboutPage() {
  const missions = [
    { icon: Globe, title: "Global Standards", desc: "Implementing international training protocols across all sporting disciplines." },
    { icon: Target, title: "Targeted Scouting", desc: "Precision scouting in rural and urban sectors to find hidden athletic potential." },
    { icon: Users, title: "Athlete Support", desc: "Comprehensive life-skills and psychological support for professional growth." },
    { icon: Trophy, title: "Elite Competition", desc: "Organizing high-stakes tournaments that simulate professional league pressure." },
    { icon: Shield, title: "Fair Play", desc: "Zero-tolerance policy towards performance-enhancing drugs and corruption." },
    { icon: Activity, title: "Holistic Health", desc: "Focusing on sports science, nutrition, and injury prevention for long careers." },
  ];

  return (
    <main className="min-h-screen bg-[#f8fcfc]">
      <Header />
      <PageBanner title="About the Federation" breadcrumb="About" />
      
      <section className="py-[100px]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center mb-[100px]">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden shadow-[20px_20px_0px_0px_#FF7043]">
                <Image
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
                  alt="Multi-Sport Athletes"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h4 className="text-[#FF7043] font-bold tracking-[3px] uppercase text-sm mb-4">Established 2024</h4>
              <h2 className="text-[#004D40] text-[42px] font-black leading-[1.1] mb-8 uppercase italic">
                Pioneering the <span className="text-[#FF7043]">Multi-Sport</span> Revolution
              </h2>
              <div className="space-y-6 text-[#2D3436] text-[17px] leading-[1.8] font-medium">
                <p>
                  Apex Multisport Federation (AMF) was founded with a singular goal: to unify the fragmented landscape of amateur sports and create a professional pipeline for Cricket, Football, and Tennis.
                </p>
                <p>
                  We operate as a high-performance ecosystem where talent is met with elite infrastructure. By moving beyond single-sport silos, AMF provides cross-disciplinary training that enhances the agility, mindset, and competitive edge of every athlete in our program.
                </p>
                <p>
                  Today, AMF spans 15 regional hubs, supporting over 2,000 active athletes. Our curriculum is designed by international coaches and sports scientists, ensuring that every AMF participant is prepared for the global stage.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#004D40] rounded-[30px] p-[60px] relative overflow-hidden">
            <h3 className="text-white text-[32px] font-black text-center mb-[60px] uppercase italic tracking-tighter">
              The Six Pillars of Excellence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
              {missions.map((item, idx) => (
                <div key={idx} className="group p-[30px] bg-white/5 border border-white/10 rounded-[20px] hover:bg-white transition-all duration-300">
                  <div className="w-[60px] h-[60px] bg-[#FF7043] rounded-[15px] flex items-center justify-center mb-6">
                    <item.icon className="text-white" size={28} />
                  </div>
                  <h4 className="text-white group-hover:text-[#004D40] text-[20px] font-black mb-3 uppercase">{item.title}</h4>
                  <p className="text-white/60 group-hover:text-[#004D40]/70 text-[15px] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
