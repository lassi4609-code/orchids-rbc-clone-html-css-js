"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import PageBanner from "@/components/shared/page-banner";
import Image from "next/image";
import { Linkedin, Mail, ShieldCheck, Award, Briefcase } from "lucide-react";

const managementTeam = [
  {
    name: "Dr. Vikram Sethi",
    position: "Executive Chairman",
    bio: "Visionary sports administrator with over 20 years of experience in establishing high-performance centers across Asia. Former advisor to Olympic sports committees.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Sarah Jenkins",
    position: "Chief Operations Officer",
    bio: "Specialist in large-scale sports logistics and franchise management. Previously led operations for international football leagues.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    name: "Coach Marcus Thorne",
    position: "Director of Athlete Development",
    bio: "Elite level coach with a background in sports science. Dedicated to creating sustainable career pathways for emerging talent.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    position: "Head of Sports Science",
    bio: "PhD in Biomechanics. Elena oversees our medical and physiological assessment protocols ensuring peak athlete performance.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
  },
];

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "Upholding the highest ethical standards in scouting and management." },
  { icon: Award, title: "Excellence", desc: "Striving for world-class performance in every aspect of our federation." },
  { icon: Briefcase, title: "Professionalism", desc: "Operating with transparency and accountability at all levels." },
];

export default function ManagementPage() {
  return (
    <main className="min-h-screen bg-[#f8fcfc]">
      <Header />
      <PageBanner title="Our Leadership" breadcrumb="Management" />
      
      <section className="py-[100px]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-[80px]">
            <h4 className="text-[#FF7043] font-bold tracking-[3px] uppercase text-sm mb-4">Steering the Future</h4>
            <h2 className="text-[#004D40] text-[42px] font-black leading-[1.1] mb-8 uppercase italic">
              The <span className="text-[#FF7043]">Visionaries</span> Behind AMF
            </h2>
            <p className="text-[#2D3436]/70 text-[18px] max-w-[800px] mx-auto font-medium">
              Our leadership team brings together decades of global experience in sports administration, elite coaching, and business management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mb-[100px]">
            {managementTeam.map((member, idx) => (
              <div key={idx} className="group bg-white rounded-[30px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col md:flex-row hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500">
                <div className="relative w-full md:w-[240px] aspect-[4/5] md:aspect-auto shrink-0 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004D40]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-[40px] flex flex-col justify-center">
                  <h3 className="text-[#004D40] text-[24px] font-black mb-1 uppercase italic tracking-tighter">{member.name}</h3>
                  <p className="text-[#FF7043] text-[14px] font-black uppercase tracking-[2px] mb-5">{member.position}</p>
                  <p className="text-[#2D3436]/70 text-[15px] leading-[1.7] mb-6 font-medium">{member.bio}</p>
                  <div className="flex gap-4">
                    <a href="#" className="w-[42px] h-[42px] bg-[#004D40] rounded-[12px] flex items-center justify-center text-white hover:bg-[#FF7043] hover:-translate-y-1 transition-all duration-300">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="w-[42px] h-[42px] bg-[#004D40] rounded-[12px] flex items-center justify-center text-white hover:bg-[#FF7043] hover:-translate-y-1 transition-all duration-300">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#004D40] rounded-[40px] p-[60px] text-white relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[60px]">
              {values.map((val, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-[80px] h-[80px] bg-white/10 rounded-[25px] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF7043] transition-colors duration-300">
                    <val.icon size={36} className="text-white" />
                  </div>
                  <h4 className="text-[24px] font-black mb-4 uppercase italic">{val.title}</h4>
                  <p className="text-white/60 text-[16px] leading-[1.6]">{val.desc}</p>
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
