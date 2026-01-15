"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import PageBanner from "@/components/shared/page-banner";
import { FileText, Download, ShieldCheck, AlertCircle } from "lucide-react";

const documents = [
  { title: "Athlete Code of Conduct", type: "PDF", size: "1.2 MB" },
  { title: "Anti-Doping Policy 2024", type: "PDF", size: "2.5 MB" },
  { title: "Trial Registration Guide", type: "PDF", size: "850 KB" },
  { title: "Medical Clearance Form", type: "DOCX", size: "45 KB" },
  { title: "Parental Consent (U-18)", type: "PDF", size: "320 KB" },
  { title: "Scholarship Application", type: "PDF", size: "1.1 MB" },
];

export default function DocumentsPage() {
  return (
    <main className="min-h-screen bg-[#f8fcfc]">
      <Header />
      <PageBanner title="Resource Center" breadcrumb="Documents" />
      
      <section className="py-[100px]">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <div className="bg-white rounded-[30px] p-[60px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 mb-[60px]">
            <h2 className="text-[#004D40] text-[32px] font-black uppercase italic tracking-tighter mb-8">Official <span className="text-[#FF7043]">Documentation</span></h2>
            
            <div className="space-y-4">
              {documents.map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between p-6 bg-[#f8fcfc] rounded-[20px] border border-gray-100 group hover:border-[#FF7043]/30 transition-all">
                  <div className="flex items-center gap-5">
                    <div className="w-[50px] h-[50px] bg-white rounded-[12px] flex items-center justify-center text-[#004D40] group-hover:bg-[#004D40] group-hover:text-white transition-all shadow-sm">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h4 className="text-[#004D40] font-black uppercase text-sm mb-1">{doc.title}</h4>
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{doc.type} • {doc.size}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 bg-[#FF7043] text-white px-6 py-3 rounded-[12px] font-black uppercase tracking-widest text-[10px] hover:bg-[#004D40] transition-colors shadow-md">
                    <Download size={14} />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#FF7043]/5 border-2 border-dashed border-[#FF7043]/30 rounded-[30px] p-[40px] flex flex-col md:flex-row items-center gap-8">
             <div className="w-[80px] h-[80px] bg-[#FF7043] rounded-full flex items-center justify-center text-white shrink-0">
                <AlertCircle size={40} />
             </div>
             <div>
                <h3 className="text-[#004D40] text-[20px] font-black uppercase italic mb-2">Mandatory Document Review</h3>
                <p className="text-[#2D3436]/70 text-sm font-medium">
                   All athletes participating in regional trials MUST download and sign the Code of Conduct and Medical Clearance forms. Failure to present these documents at the trial venue will result in disqualification.
                </p>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
