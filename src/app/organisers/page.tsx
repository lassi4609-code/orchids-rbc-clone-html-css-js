"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import PageBanner from "@/components/shared/page-banner";
import { MapPin, User, Mail, Phone, Globe } from "lucide-react";

const regionalOrganisers = [
  { region: "North Zone", lead: "Arthur Miller", phone: "+1 (555) 101-2020", email: "north@amf-sports.org", states: "NY, NJ, PA, CT, MA" },
  { region: "South Zone", lead: "Carlos Mendoza", phone: "+1 (555) 202-3030", email: "south@amf-sports.org", states: "FL, GA, TX, AL, NC" },
  { region: "West Zone", lead: "Sarah Jenkins", phone: "+1 (555) 303-4040", email: "west@amf-sports.org", states: "CA, WA, OR, NV, AZ" },
  { region: "Midwest Zone", lead: "Robert Shaw", phone: "+1 (555) 404-5050", email: "midwest@amf-sports.org", states: "IL, OH, MI, IN, WI" },
];

export default function OrganisersPage() {
  return (
    <main className="min-h-screen bg-[#f8fcfc]">
      <Header />
      <PageBanner title="Regional Hubs" breadcrumb="Organisers" />
      
      <section className="py-[100px]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-[80px]">
             <h2 className="text-[#004D40] text-[42px] font-black uppercase italic tracking-tighter mb-4">Regional <span className="text-[#FF7043]">Administration</span></h2>
             <p className="text-[#2D3436]/70 text-[18px] max-w-[800px] mx-auto font-medium">
               Connect with our regional directors to learn more about upcoming trials and facility tours in your area.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {regionalOrganisers.map((org, idx) => (
              <div key={idx} className="bg-white rounded-[30px] p-[50px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 group hover:border-[#FF7043]/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-[60px] h-[60px] bg-[#004D40] rounded-[15px] flex items-center justify-center text-white group-hover:bg-[#FF7043] transition-colors">
                      <Globe size={28} />
                   </div>
                   <h3 className="text-[#004D40] text-[28px] font-black uppercase italic tracking-tighter">{org.region}</h3>
                </div>
                
                <div className="space-y-6">
                   <div className="flex items-center gap-4 p-4 bg-[#f8fcfc] rounded-[15px]">
                      <User size={20} className="text-[#FF7043]" />
                      <div>
                         <span className="block text-[10px] font-black uppercase tracking-widest text-gray-400">Regional Director</span>
                         <span className="text-[#004D40] font-bold">{org.lead}</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 p-4 bg-[#f8fcfc] rounded-[15px]">
                      <MapPin size={20} className="text-[#FF7043]" />
                      <div>
                         <span className="block text-[10px] font-black uppercase tracking-widest text-gray-400">States Covered</span>
                         <span className="text-[#004D40] font-bold">{org.states}</span>
                      </div>
                   </div>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-4 p-4 bg-[#f8fcfc] rounded-[15px]">
                         <Phone size={20} className="text-[#FF7043]" />
                         <span className="text-[#004D40] font-bold text-sm">{org.phone}</span>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-[#f8fcfc] rounded-[15px]">
                         <Mail size={20} className="text-[#FF7043]" />
                         <span className="text-[#004D40] font-bold text-sm">{org.email}</span>
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
