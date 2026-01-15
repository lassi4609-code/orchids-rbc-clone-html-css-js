"use client";

import { useState } from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import PageBanner from "@/components/shared/page-banner";
import { ChevronDown, Plus, Minus, Search, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What sports are included in the AMF program?",
    answer: "Currently, we focus on three core disciplines: Cricket, Football, and Tennis. We plan to expand into athletics and swimming by 2026."
  },
  {
    question: "What is the minimum age for registration?",
    answer: "The minimum age is 12 years. We have categories for U-14, U-17, U-19, and U-23 athletes."
  },
  {
    question: "Are there any registration fees for trials?",
    answer: "Yes, there is a nominal processing fee of $25 (or regional equivalent) to cover administrative costs, facility rentals, and assessment data processing."
  },
  {
    question: "Can I register for multiple sports?",
    answer: "Yes, AMF encourages multi-sport participation. However, if selected for elite development, you will eventually need to choose a primary discipline for specialized training."
  },
  {
    question: "What happens if I miss my regional trial date?",
    answer: "We allow one rescheduling per season provided you notify us at least 48 hours in advance. No-shows without prior notice will forfeit their registration fee."
  },
  {
    question: "Does the federation provide scholarships?",
    answer: "Yes, the top 2% of performers at the National Draft Camp receive full-tuition and training scholarships. Partial scholarships are also available based on socio-economic need."
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#f8fcfc]">
      <Header />
      <PageBanner title="Common Questions" breadcrumb="FAQs" />
      
      <section className="py-[100px]">
        <div className="container mx-auto px-4 max-w-[900px]">
          <div className="text-center mb-[60px]">
             <div className="inline-flex items-center gap-3 bg-[#004D40]/5 px-6 py-2 rounded-full mb-6">
                <HelpCircle size={20} className="text-[#004D40]" />
                <span className="text-[#004D40] font-black uppercase tracking-widest text-xs">Knowledge Base</span>
             </div>
             <h2 className="text-[#004D40] text-[42px] font-black leading-[1.1] mb-6 uppercase italic">Need <span className="text-[#FF7043]">Answers?</span></h2>
             <div className="relative max-w-[500px] mx-auto">
                <input 
                  type="text" 
                  placeholder="Search for a question..." 
                  className="w-full bg-white border border-gray-100 rounded-[20px] py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-[#FF7043]/20 focus:border-[#FF7043] transition-all shadow-sm"
                />
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
             </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`group bg-white rounded-[25px] overflow-hidden transition-all duration-300 border border-gray-100 ${activeIndex === idx ? 'shadow-[0_15px_40px_rgba(0,0,0,0.06)] ring-1 ring-[#FF7043]/10' : 'hover:border-[#FF7043]/30'}`}
              >
                <button 
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  className="w-full px-[40px] py-[30px] flex items-center justify-between text-left"
                >
                  <span className={`text-[18px] font-black uppercase italic tracking-tight transition-colors ${activeIndex === idx ? 'text-[#FF7043]' : 'text-[#004D40]'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-[32px] h-[32px] rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === idx ? 'bg-[#FF7043] text-white rotate-180' : 'bg-[#004D40]/5 text-[#004D40]'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <div 
                  className={`px-[40px] transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === idx ? 'max-h-[500px] pb-[40px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-[#2D3436]/70 text-[16px] leading-[1.8] font-medium border-t border-gray-50 pt-[30px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[80px] bg-[#004D40] rounded-[30px] p-[50px] text-center text-white relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-[28px] font-black uppercase italic mb-4">Still have questions?</h3>
                <p className="text-white/60 mb-8 max-w-[500px] mx-auto font-medium">
                  Our support team is available 24/7 to help you with your registration or program queries.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                   <button className="bg-[#FF7043] hover:bg-white hover:text-[#004D40] text-white px-8 py-4 rounded-[15px] font-black uppercase tracking-widest text-sm transition-all shadow-lg">
                      Contact Support
                   </button>
                   <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-[15px] font-black uppercase tracking-widest text-sm transition-all border border-white/10">
                      Live Chat
                   </button>
                </div>
             </div>
             <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#FF7043] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
