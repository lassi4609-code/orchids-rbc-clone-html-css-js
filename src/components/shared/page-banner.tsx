"use client";

import React from "react";

interface PageBannerProps {
  title: string;
  breadcrumb?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, breadcrumb }) => {
  return (
    <section 
      className="relative h-[200px] md:h-[280px] flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0D214F 0%, #1a3a7a 50%, #0D214F 100%)"
      }}
    >
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#EE3231] via-[#F7941D] to-[#EE3231]" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-white text-[32px] md:text-[48px] font-bold uppercase tracking-wide mb-2">
          {title}
        </h1>
        {breadcrumb && (
          <p className="text-white/70 text-[14px] md:text-[16px] uppercase tracking-wider">
            Home / <span className="text-[#F7941D]">{breadcrumb}</span>
          </p>
        )}
      </div>
    </section>
  );
};

export default PageBanner;
