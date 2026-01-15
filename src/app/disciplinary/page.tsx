"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import PageBanner from "@/components/shared/page-banner";
import { Gavel, ShieldAlert, Scale, FileText, CheckCircle2 } from "lucide-react";

const disciplinaryProcedures = [
  { step: "01", title: "Incident Report", desc: "Formal submission of a grievance or breach of conduct report by an official or athlete." },
  { step: "02", title: "Preliminary Review", desc: "Initial assessment by the Disciplinary Officer to determine if there's a prima facie case." },
  { step: "03", title: "Hearing", desc: "A formal session where the accused can present evidence and testimony before the committee." },
  { step: "04", title: "Verdict & Sanction", desc: "The committee issues a written decision outlining the findings and any applicable penalties." },
];

export default function DisciplinaryPage() {
  return (
    <main className="min-h-screen bg-[#f8fcfc]">
      <Header />
      <PageBanner title="Disciplinary Committee" breadcrumb="Committees" />
      
      <section className="py-[100px]">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <div className="bg-white rounded-[30px] p-[60px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 mb-[60px]">
            <div className="flex flex-col items-center text-center mb-[50px]">
              <div className="w-[100px] h-[100px] bg-[#004D40] rounded-[25px] flex items-center justify-center text-white mb-8 shadow-xl">
                <Gavel size={50} />
              </div>
              <h2 className="text-[#004D40] text-[36px] font-black uppercase italic tracking-tighter mb-4">Upholding the Standards of Excellence</h2>
              <p className="text-[#2D3436]/70 text-[17px] font-medium max-w-[700px]">
                The AMF Disciplinary Committee ensures that all participants adhere to the highest standards of professional conduct, sportsmanship, and mutual respect.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mb-[60px]">
               <div className="space-y-6">
                  <h3 className="text-[#004D40] text-[24px] font-black uppercase italic">Scope of Authority</h3>
                  <div className="space-y-4">
                     <div className="flex gap-4 p-4 bg-[#f8fcfc] rounded-[15px] border border-gray-100">
                        <CheckCircle2 className="text-[#FF7043] shrink-0" size={20} />
                        <span className="text-sm font-bold text-[#004D40]">On-field misconduct and unsportsmanlike behavior</span>
                     </div>
                     <div className="flex gap-4 p-4 bg-[#f8fcfc] rounded-[15px] border border-gray-100">
                        <CheckCircle2 className="text-[#FF7043] shrink-0" size={20} />
                        <span className="text-sm font-bold text-[#004D40]">Breaches of the Athlete & Staff Code of Conduct</span>
                     </div>
                     <div className="flex gap-4 p-4 bg-[#f8fcfc] rounded-[15px] border border-gray-100">
                        <CheckCircle2 className="text-[#FF7043] shrink-0" size={20} />
                        <span className="text-sm font-bold text-[#004D40]">Social media and public representation violations</span>
                     </div>
                  </div>
               </div>
               <div className="bg-[#004D40] p-8 rounded-[25px] text-white">
                  <h3 className="text-[24px] font-black uppercase italic mb-6">Committee Principles</h3>
                  <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <Scale className="text-[#FF7043] shrink-0" size={24} />
                        <div>
                           <h5 className="font-black uppercase text-xs mb-1">Impartiality</h5>
                           <p className="text-xs text-white/60">Every case is judged solely on evidence and merit.</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <ShieldAlert className="text-[#FF7043] shrink-0" size={24} />
                        <div>
                           <h5 className="font-black uppercase text-xs mb-1">Proportionality</h5>
                           <p className="text-xs text-white/60">Sanctions are matched to the severity of the offense.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="border-t border-gray-50 pt-[50px]">
               <h3 className="text-[#004D40] text-[28px] font-black uppercase italic mb-8 text-center">Due Process & Procedures</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {disciplinaryProcedures.map((proc, idx) => (
                     <div key={idx} className="p-6 bg-[#f8fcfc] rounded-[20px] border border-gray-100 relative group hover:border-[#FF7043]/30 transition-all">
                        <span className="absolute top-4 right-4 text-[24px] font-black text-[#FF7043]/10 group-hover:text-[#FF7043]/20 transition-colors">{proc.step}</span>
                        <h4 className="text-[#004D40] font-black uppercase text-xs mb-3 tracking-widest">{proc.title}</h4>
                        <p className="text-[11px] text-[#2D3436]/60 leading-[1.6]">{proc.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="text-center">
             <button className="inline-flex items-center gap-3 bg-[#FF7043] text-white px-10 py-5 rounded-[20px] font-black uppercase tracking-[2px] text-sm hover:bg-[#004D40] transition-all shadow-lg">
                <FileText size={20} />
                Download Disciplinary Code
             </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
