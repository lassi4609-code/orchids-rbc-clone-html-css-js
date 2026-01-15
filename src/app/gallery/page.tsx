"use client";

import { useState } from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import PageBanner from "@/components/shared/page-banner";
import Image from "next/image";
import { Maximize2, PlayCircle, Filter } from "lucide-react";

const galleryItems = [
  { id: 1, type: "image", category: "Cricket", url: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop", title: "National Selection Trials" },
  { id: 2, type: "image", category: "Football", url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop", title: "Regional Finals" },
  { id: 3, type: "image", category: "Tennis", url: "https://images.unsplash.com/photo-1595435062147-f474343e747d?q=80&w=2070&auto=format&fit=crop", title: "Junior Open Championship" },
  { id: 4, type: "video", category: "Training", url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop", title: "Elite Performance Camp" },
  { id: 5, type: "image", category: "Cricket", url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1905&auto=format&fit=crop", title: "Night Tournament" },
  { id: 6, type: "image", category: "Football", url: "https://images.unsplash.com/photo-1510279770292-4b34de9f5c23?q=80&w=2070&auto=format&fit=crop", title: "Stadium Atmosphere" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <main className="min-h-screen bg-[#f8fcfc]">
      <Header />
      <PageBanner title="Visual Records" breadcrumb="Gallery" />
      
      <section className="py-[100px]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-wrap items-center justify-between gap-6 mb-[60px]">
             <div>
                <h2 className="text-[#004D40] text-[32px] font-black uppercase italic tracking-tighter">Memories in <span className="text-[#FF7043]">Motion</span></h2>
             </div>
             <div className="flex flex-wrap gap-3">
                {["All", "Cricket", "Football", "Tennis", "Training"].map((cat) => (
                   <button 
                     key={cat}
                     onClick={() => setFilter(cat)}
                     className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${filter === cat ? 'bg-[#FF7043] text-white shadow-lg' : 'bg-white text-[#004D40] hover:bg-[#004D40] hover:text-white border border-gray-100'}`}
                   >
                      {cat}
                   </button>
                ))}
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative bg-white rounded-[25px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 aspect-[4/3]">
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004D40]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                   <span className="text-[#FF7043] text-[10px] font-black uppercase tracking-widest mb-2">{item.category}</span>
                   <h4 className="text-white text-[20px] font-black uppercase italic mb-4">{item.title}</h4>
                   <div className="flex gap-4">
                      {item.type === "video" ? (
                         <button className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center text-[#FF7043] hover:scale-110 transition-transform">
                            <PlayCircle size={24} />
                         </button>
                      ) : (
                         <button className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center text-[#004D40] hover:scale-110 transition-transform">
                            <Maximize2 size={24} />
                         </button>
                      )}
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
