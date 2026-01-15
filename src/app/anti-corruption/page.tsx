"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import PageBanner from "@/components/shared/page-banner";
import { ShieldAlert, Gavel, Scale, Eye, FileText, Lock } from "lucide-react";

const codeOfConduct = [
  {
    title: "Zero Match Manipulation",
    desc: "Strict prohibition against any form of match-fixing or influencing the outcome of games for financial gain.",
    icon: ShieldAlert
  },
  {
    title: "Disclosure Requirements",
    desc: "All athletes and officials must disclose any suspicious approach by third parties within 24 hours.",
    icon: Eye
  },
  {
    title: "Conflict of Interest",
    desc: "Clear guidelines on managing personal relationships that may impact professional impartiality.",
    icon: Scale
  },
  {
    title: "Sanction Protocols",
    desc: "Varying degrees of lifetime bans and financial penalties for proven integrity breaches.",
    icon: Gavel
  },
];

export default function AntiCorruptionPage() {
  return (
    <main className="min-h-screen bg-[#f8fcfc]">
      <Header />
      <PageBanner title="Anti-Corruption Unit" breadcrumb="Committees" />
      
      <section className="py-[100px]">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <div className="bg-white rounded-[30px] p-[60px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 mb-[60px]">
            <div className="flex flex-col items-center text-center mb-[50px]">
              <div className="w-[100px] h-[100px] bg-[#004D40] rounded-[25px] flex items-center justify-center text-white mb-8 shadow-xl">
                <ShieldAlert size={50} />
              </div>
              <h2 className="text-[#004D40] text-[36px] font-black uppercase italic tracking-tighter mb-4">Protecting the Integrity of Sport</h2>
              <p className="text-[#2D3436]/70 text-[17px] font-medium max-w-[700px]">
                The AMF Anti-Corruption Unit (ACU) is an independent body dedicated to maintaining the purity of our competitions through education, investigation, and enforcement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-[60px]">
              {codeOfConduct.map((item, idx) => (
                <div key={idx} className="p-[30px] bg-[#f8fcfc] rounded-[20px] border border-gray-100 hover:border-[#FF7043]/30 transition-colors group">
                  <div className="w-[50px] h-[50px] bg-white rounded-[12px] flex items-center justify-center text-[#FF7043] mb-5 shadow-sm group-hover:bg-[#FF7043] group-hover:text-white transition-all">
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-[#004D40] text-[20px] font-black mb-3 uppercase italic">{item.title}</h4>
                  <p className="text-[#2D3436]/70 text-[15px] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#004D40] rounded-[20px] p-[40px] text-white">
              <div className="flex items-center gap-6 mb-6">
                <Lock size={32} className="text-[#FF7043]" />
                <h3 className="text-[24px] font-black uppercase italic">Confidential Integrity Hotline</h3>
              </div>
              <p className="text-white/70 mb-8 font-medium">
                Report any suspicious activity or integrity concerns anonymously. Your identity will be protected under our Whistleblower Policy.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-[12px] border border-white/10">
                  <span className="block text-xs uppercase tracking-widest text-[#FF7043] font-black mb-1">Email Report</span>
                  <span className="text-[18px] font-bold">integrity@amf-sports.org</span>
                </div>
                <div className="bg-white/10 p-4 rounded-[12px] border border-white/10">
                  <span className="block text-xs uppercase tracking-widest text-[#FF7043] font-black mb-1">Secure Call</span>
                  <span className="text-[18px] font-bold">+1-800-AMF-SAFE</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-[40px] items-center">
            <div className="flex-1">
              <h3 className="text-[#004D40] text-[28px] font-black uppercase italic mb-6">Educational Programs</h3>
              <p className="text-[#2D3436]/70 text-[16px] leading-[1.8] mb-8 font-medium">
                Prevention is our primary goal. Every athlete entering the AMF pipeline must complete the "Integrity in Sport" certification program, which covers match-fixing awareness, social media protocols, and regulatory compliance.
              </p>
              <button className="flex items-center gap-3 bg-[#FF7043] text-white px-8 py-4 rounded-[15px] font-black uppercase tracking-widest text-sm hover:bg-[#004D40] transition-colors shadow-lg">
                <FileText size={20} />
                Download Unit Policy
              </button>
            </div>
            <div className="flex-1 bg-white p-[30px] rounded-[30px] shadow-sm border border-gray-100">
               <div className="space-y-6">
                  <div className="flex gap-4">
                     <div className="w-[60px] h-[60px] bg-[#FF7043]/10 rounded-full flex items-center justify-center text-[#FF7043] shrink-0 font-black">100%</div>
                     <div>
                        <h5 className="font-black text-[#004D40] uppercase">Mandatory Compliance</h5>
                        <p className="text-sm text-[#2D3436]/60">All staff and athletes undergo background vetting.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-[60px] h-[60px] bg-[#FF7043]/10 rounded-full flex items-center justify-center text-[#FF7043] shrink-0 font-black">24/7</div>
                     <div>
                        <h5 className="font-black text-[#004D40] uppercase">Monitoring</h5>
                        <p className="text-sm text-[#2D3436]/60">Digital surveillance of competition data feeds.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
