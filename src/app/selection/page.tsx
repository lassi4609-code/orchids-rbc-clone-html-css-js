"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import PageBanner from "@/components/shared/page-banner";
import { CheckCircle, ArrowRight, ClipboardCheck, Users, Search, Award, TrendingUp, Medal } from "lucide-react";

const selectionSteps = [
  {
    step: "01",
    title: "Registration",
    description: "Submit your digital profile and athletic history via our secure portal. A nominal processing fee applies.",
    color: "#FF7043",
    icon: ClipboardCheck
  },
  {
    step: "02",
    title: "Regional Trials",
    description: "Attend physical evaluations at your nearest hub. Assessments cover speed, strength, and technical fundamentals.",
    color: "#004D40",
    icon: Search
  },
  {
    step: "03",
    title: "Data Analysis",
    description: "Our proprietary scouting software analyzes your trial performance against age-group benchmarks.",
    color: "#FF7043",
    icon: TrendingUp
  },
  {
    step: "04",
    title: "Invitation",
    description: "Top 5% performers receive an invitation to the National Draft Camp within 14 days of regional trials.",
    color: "#004D40",
    icon: Users
  },
  {
    step: "05",
    title: "Draft Camp",
    description: "A 3-day intensive camp involving live gameplay, psychological testing, and interview rounds.",
    color: "#FF7043",
    icon: Award
  },
  {
    step: "06",
    title: "Federation Contract",
    description: "Selected athletes receive a 2-year development contract, including full training and nutrition support.",
    color: "#004D40",
    icon: Medal
  },
];

const criteria = [
  "Cross-disciplinary athletic adaptability",
  "High-pressure decision making capabilities",
  "Exceptional cardiovascular endurance and recovery",
  "Technical mastery in chosen sporting discipline",
  "Commitment to the AMF Code of Conduct",
  "Willingness to relocate for elite training programs",
];

export default function SelectionPage() {
  return (
    <main className="min-h-screen bg-[#f8fcfc]">
      <Header />
      <PageBanner title="Selection Pathway" breadcrumb="Selection" />
      
      <section className="py-[100px]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-[80px]">
            <h4 className="text-[#FF7043] font-bold tracking-[3px] uppercase text-sm mb-4">Merit-Based Growth</h4>
            <h2 className="text-[#004D40] text-[42px] font-black leading-[1.1] mb-8 uppercase italic">
              Our <span className="text-[#FF7043]">Transparent</span> Scouting System
            </h2>
            <p className="text-[#2D3436]/70 text-[18px] max-w-[800px] mx-auto font-medium">
              We eliminate bias through data-driven evaluation. Every athlete is measured on objective performance metrics and potential for professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-[100px]">
            {selectionSteps.map((item, idx) => (
              <div key={idx} className="group bg-white rounded-[20px] p-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden border border-gray-100">
                <div 
                  className="absolute top-0 right-0 w-[100px] h-[100px] flex items-center justify-center text-[48px] font-black text-black/5 -translate-y-4 translate-x-4 group-hover:text-[#FF7043]/10 transition-colors"
                >
                  {item.step}
                </div>
                <div 
                  className="w-[70px] h-[70px] rounded-[18px] flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  style={{ backgroundColor: item.color }}
                >
                  <item.icon size={32} />
                </div>
                <h3 className="text-[#004D40] text-[24px] font-black mb-4 uppercase italic tracking-tighter">{item.title}</h3>
                <p className="text-[#2D3436]/70 text-[15px] leading-[1.7] font-medium">{item.description}</p>
                {idx < selectionSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="text-[#004D40]/10" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
            <div className="bg-white rounded-[30px] p-[50px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100">
              <h3 className="text-[#004D40] text-[28px] font-black mb-8 uppercase italic">Selection Criteria</h3>
              <ul className="space-y-5">
                {criteria.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 rounded-[15px] hover:bg-[#f8fcfc] transition-colors group">
                    <CheckCircle className="text-[#FF7043] mt-1 shrink-0 group-hover:scale-110 transition-transform" size={24} />
                    <span className="text-[#2D3436] text-[17px] font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#004D40] rounded-[30px] p-[50px] shadow-lg text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <h3 className="text-[28px] font-black mb-8 uppercase italic relative z-10">Trial Assessment Weights</h3>
              <div className="space-y-8 relative z-10">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest">
                    <span>Technical Skill Mastery</span>
                    <span className="text-[#FF7043]">40%</span>
                  </div>
                  <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF7043] w-[40%]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest">
                    <span>Physical Fitness & V02 Max</span>
                    <span className="text-[#FF7043]">30%</span>
                  </div>
                  <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF7043] w-[30%]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest">
                    <span>Psychological Resilience</span>
                    <span className="text-[#FF7043]">20%</span>
                  </div>
                  <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF7043] w-[20%]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest">
                    <span>Adaptability & IQ</span>
                    <span className="text-[#FF7043]">10%</span>
                  </div>
                  <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF7043] w-[10%]"></div>
                  </div>
                </div>
              </div>
              <p className="mt-10 text-white/50 text-sm italic relative z-10">
                * Assessment weights are subject to variation based on age category and specific sporting discipline.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
