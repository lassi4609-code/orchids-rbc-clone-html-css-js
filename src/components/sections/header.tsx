"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Ticket, ChevronRight, Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 111) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { title: "HOME", href: "/" },
    {
      title: "ABOUT AMF",
      href: "#",
      dropdown: [
        { title: "WHAT IS AMF", href: "/rbcl-info" },
        { title: "AMF GALLERY", href: "/gallery" },
        { title: "STATE ORGANISERS", href: "/organisers" },
      ],
    },
    {
      title: "ATHLETES",
      href: "#",
      dropdown: [
        { title: "TEAMS & DIVISIONS", href: "/teams" },
        { title: "SELECTION PROCESS", href: "/selection" },
        { title: "REQUIRED DOCUMENTS", href: "/documents" },
      ],
    },
    { title: "LEADERSHIP", href: "/management" },
    {
      title: "GOVERNANCE",
      href: "#",
      dropdown: [
        { title: "ANTI-CORRUPTION", href: "/anti-corruption" },
        { title: "DISCIPLINARY BOARD", href: "/disciplinary" },
      ],
    },
    { title: "FAQS", href: "/faq" },
    { title: "SUPPORT", href: "/contact-us" },
    { title: "REGISTRATION", href: "/pay-fee" },
  ];

  return (
    <>
      {/* --- TOP BAR --- */}
      <div className="bg-[#f0f4f4] h-[111px] relative z-[1000] overflow-hidden">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="block">
              <div className="flex items-center gap-3">
                <div className="w-[60px] h-[60px] bg-[#004D40] rounded-full flex items-center justify-center text-white font-black text-2xl">A</div>
                <div className="hidden sm:block">
                  <span className="block text-[#004D40] font-black text-xl leading-none uppercase">Apex</span>
                  <span className="block text-[#FF7043] font-bold text-xs tracking-[2px] uppercase">Multisport</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex flex-col items-end">
            <div className="flex items-center space-x-4 px-8 py-3 rounded-l-full relative overflow-hidden" 
                 style={{ 
                   background: 'linear-gradient(90deg, #004D40 0%, #004D40 85%, #FF7043 85%, #FF7043 100%)',
                   clipPath: 'polygon(5% 0, 100% 0, 100% 100%, 0 100%)'
                 }}>
              <Link href="/pay-fee" className="text-white text-[14px] font-bold uppercase tracking-wider">
                Registration Deadline: 15 Feb - Inquiries: 1800-APEX-SPORTS
              </Link>
              <div className="flex items-center space-x-3 ml-6 text-white">
                <a href="#" className="hover:text-[#FFD700] transition-colors"><Facebook size={16} /></a>
                <a href="#" className="hover:text-[#FFD700] transition-colors"><Twitter size={16} /></a>
                <a href="#" className="hover:text-[#FFD700] transition-colors"><Instagram size={16} /></a>
                <a href="#" className="hover:text-[#FFD700] transition-colors"><Youtube size={16} /></a>
              </div>
            </div>
          </div>
          
          <button className="lg:hidden text-[#004D40]" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </div>

      {/* --- MAIN NAVIGATION --- */}
      <header 
        className={`w-full bg-[#004D40] z-[999] transition-all duration-300 shadow-lg ${
          isSticky ? "fixed top-0 animate-in fade-in slide-in-from-top-10" : "relative"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-0">
            <ul className="hidden lg:flex items-center">
              {navigationItems.map((item, idx) => (
                <li key={idx} className="group relative">
                  <Link 
                    href={item.href} 
                    className={`flex items-center px-4 py-6 text-white text-[13px] font-medium tracking-[0.5px] uppercase transition-colors hover:text-[#FFD700] ${idx === 0 ? "pl-0" : ""}`}
                  >
                    {item.title}
                    {item.dropdown && <ChevronDown size={14} className="ml-1 opacity-70" />}
                  </Link>

                  {item.dropdown && (
                    <ul className="absolute left-0 top-full w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-[1001] border-t-2 border-[#FF7043]">
                      {item.dropdown.map((subItem, sIdx) => (
                        <li key={sIdx} className="border-b border-gray-100 last:border-none">
                          <Link 
                            href={subItem.href}
                            className="block px-6 py-4 text-[13px] font-medium text-gray-700 hover:bg-[#f0f4f4] hover:text-[#004D40] uppercase transition-all flex items-center justify-between group/sub"
                          >
                            {subItem.title}
                            <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-[#FF7043]" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-4">
              <Link 
                href="/pay-fee" 
                className="bg-[#FF7043] hover:bg-[#E64A19] text-white px-6 py-4 lg:py-[22px] flex items-center space-x-2 text-[14px] font-bold uppercase transition-all btn-transition"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}
              >
                <Ticket size={18} className="mr-2" />
                <span>JOIN THE LEAGUE</span>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* --- MOBILE MENU --- */}
      <div className={`fixed inset-0 z-[2000] bg-black/90 transition-transform duration-500 lg:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full bg-[#004D40] w-[300px] shadow-2xl overflow-y-auto">
          <div className="p-6 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center text-[#004D40] font-black text-xl">A</div>
                <span className="text-white font-black text-lg uppercase">Apex Federation</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                <X size={32} />
              </button>
          </div>
          
          <ul className="flex flex-col p-6 space-y-4">
            {navigationItems.map((item, idx) => (
              <li key={idx} className="border-b border-white/5 pb-2">
                <div className="flex items-center justify-between group">
                  <Link 
                    href={item.href} 
                    className="text-white text-lg font-bold uppercase py-2"
                    onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </div>
                {item.dropdown && (
                  <ul className="pl-4 mt-2 space-y-3">
                    {item.dropdown.map((sub, sIdx) => (
                      <li key={sIdx}>
                        <Link 
                          href={sub.href} 
                          className="text-white/70 text-sm uppercase hover:text-[#FFD700] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-auto p-6 bg-[#00382E]">
            <div className="flex space-x-4 justify-center text-white mb-6">
              <Facebook /> <Twitter /> <Instagram /> <Youtube />
            </div>
            <p className="text-white/50 text-[12px] text-center">© 2025 Apex Multisport Federation</p>
          </div>
        </div>
        <div className="flex-1" onClick={() => setMobileMenuOpen(false)}></div>
      </div>
    </>
  );
};

export default Header;