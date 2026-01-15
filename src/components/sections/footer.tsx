import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  const policyLinks = [
    { name: "Membership Terms", href: "/documents" },
    { name: "Code of Ethics", href: "/anti-corruption" },
    { name: "Player Safety", href: "/disciplinary" },
    { name: "Privacy Policy", href: "#" },
  ];

  const aboutLinks = [
    { name: "What is AMF?", href: "/rbcl-info" },
    { name: "Leadership", href: "/management" },
    { name: "Media Gallery", href: "/gallery" },
    { name: "Selection Criteria", href: "/selection" },
  ];

  const quickLinks = [
    { name: "Join the League", href: "/pay-fee" },
    { name: "Regional Organisers", href: "/organisers" },
    { name: "Support Center", href: "/contact-us" },
    { name: "Active Divisions", href: "/teams" },
  ];

  return (
    <footer className="bg-[#002B24] text-[#FFFFFF] pt-[80px] pb-[40px] font-sans border-t-[5px] border-[#FF7043]">
      <div className="container mx-auto max-w-[1200px] px-[15px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[40px] mb-[60px]">
          
          {/* Brand and Contact Section */}
          <div className="flex flex-col space-y-[25px]">
            <div className="flex items-center gap-3">
              <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center text-[#004D40] font-black text-2xl">A</div>
              <div>
                <span className="block text-white font-black text-xl leading-none uppercase">Apex</span>
                <span className="block text-[#FF7043] font-bold text-xs tracking-[2px] uppercase">Multisport</span>
              </div>
            </div>
            
            <p className="text-white/70 text-[14px] leading-relaxed">
              Empowering the next generation of athletes across Cricket, Football, and Tennis. Apex Multisport Federation is dedicated to professional excellence and grassroots development.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[14px] text-white/80">
                <MapPin size={16} className="text-[#FF7043]" />
                <span>Sector 15, Sport City, New Delhi</span>
              </div>
              <div className="flex items-center gap-3 text-[14px] text-white/80">
                <Phone size={16} className="text-[#FF7043]" />
                <span>1800-APEX-SPORTS</span>
              </div>
              <div className="flex items-center gap-3 text-[14px] text-white/80">
                <Mail size={16} className="text-[#FF7043]" />
                <span>contact@apexmultisport.org</span>
              </div>
            </div>

            <div className="flex space-x-[15px] pt-2">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="w-[40px] h-[40px] rounded-full bg-[#004D40] flex items-center justify-center hover:bg-[#FF7043] transition-all duration-300 border border-white/10"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Our Policies */}
          <div>
            <h4 className="text-[18px] font-black uppercase mb-[30px] tracking-wider relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-[40px] after:h-[3px] after:bg-[#FF7043]">
              Governance
            </h4>
            <ul className="space-y-[15px]">
              {policyLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-[15px] text-[#FFFFFF]/80 hover:text-[#FF7043] hover:translate-x-1 inline-block transition-all duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-[18px] font-black uppercase mb-[30px] tracking-wider relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-[40px] after:h-[3px] after:bg-[#FF7043]">
              Apex League
            </h4>
            <ul className="space-y-[15px]">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-[15px] text-[#FFFFFF]/80 hover:text-[#FF7043] hover:translate-x-1 inline-block transition-all duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[18px] font-black uppercase mb-[30px] tracking-wider relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-[40px] after:h-[3px] after:bg-[#FF7043]">
              Quick Access
            </h4>
            <ul className="space-y-[15px]">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-[15px] text-[#FFFFFF]/80 hover:text-[#FF7043] hover:translate-x-1 inline-block transition-all duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-[30px] border-t border-[#FFFFFF]/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-[#FFFFFF]/60">
            © 2025 Apex Multisport Federation | Professional League Division | All Rights Reserved
          </p>
          <div className="flex gap-6">
             <Link href="#" className="text-[12px] text-white/40 hover:text-white transition-colors">Anti-Doping Policy</Link>
             <Link href="#" className="text-[12px] text-white/40 hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;