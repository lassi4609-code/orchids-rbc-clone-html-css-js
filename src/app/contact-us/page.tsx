"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import PageBanner from "@/components/shared/page-banner";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8fcfc]">
      <Header />
      <PageBanner title="Get in Touch" breadcrumb="Contact Us" />
      
      <section className="py-[100px]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px]">
            <div className="lg:col-span-1 space-y-[30px]">
              <div className="bg-[#004D40] rounded-[30px] p-[40px] text-white relative overflow-hidden">
                <h3 className="text-[24px] font-black uppercase italic mb-8">Contact Information</h3>
                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="w-[48px] h-[48px] bg-white/10 rounded-[15px] flex items-center justify-center shrink-0">
                      <Phone size={24} className="text-[#FF7043]" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">Call Us</span>
                      <span className="text-[18px] font-bold">+1 (555) 000-8888</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-[48px] h-[48px] bg-white/10 rounded-[15px] flex items-center justify-center shrink-0">
                      <Mail size={24} className="text-[#FF7043]" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">Email Us</span>
                      <span className="text-[18px] font-bold">contact@amf-sports.org</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-[48px] h-[48px] bg-white/10 rounded-[15px] flex items-center justify-center shrink-0">
                      <MapPin size={24} className="text-[#FF7043]" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">Visit Us</span>
                      <span className="text-[18px] font-bold">123 Federation Plaza, Elite District, NY 10001</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-[150px] h-[150px] bg-white/5 rounded-full translate-y-1/2 translate-x-1/2"></div>
              </div>

              <div className="bg-white rounded-[30px] p-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100">
                 <h4 className="text-[#004D40] text-[20px] font-black uppercase italic mb-6">Operation Hours</h4>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-50">
                       <span className="text-[#2D3436]/60 font-bold uppercase text-xs tracking-widest">Mon - Fri</span>
                       <span className="text-[#004D40] font-black">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-50">
                       <span className="text-[#2D3436]/60 font-bold uppercase text-xs tracking-widest">Saturday</span>
                       <span className="text-[#004D40] font-black">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                       <span className="text-[#2D3436]/60 font-bold uppercase text-xs tracking-widest">Sunday</span>
                       <span className="text-[#FF7043] font-black uppercase">Closed</span>
                    </div>
                 </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-[30px] p-[60px] shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-gray-100">
                <div className="mb-[40px]">
                  <h2 className="text-[#004D40] text-[32px] font-black uppercase italic tracking-tighter mb-4">Send Us a <span className="text-[#FF7043]">Message</span></h2>
                  <p className="text-[#2D3436]/70 font-medium">Have a specific question about your registration? Fill out the form below and our team will get back to you within 24 hours.</p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-[#004D40]">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-[#f8fcfc] border border-gray-100 rounded-[15px] py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#FF7043]/20 focus:border-[#FF7043] transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-[#004D40]">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full bg-[#f8fcfc] border border-gray-100 rounded-[15px] py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#FF7043]/20 focus:border-[#FF7043] transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-[#004D40]">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+1 (555) 000-0000" 
                        className="w-full bg-[#f8fcfc] border border-gray-100 rounded-[15px] py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#FF7043]/20 focus:border-[#FF7043] transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-[#004D40]">Subject</label>
                      <select className="w-full bg-[#f8fcfc] border border-gray-100 rounded-[15px] py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#FF7043]/20 focus:border-[#FF7043] transition-all font-medium appearance-none">
                        <option>General Inquiry</option>
                        <option>Registration Support</option>
                        <option>Sponsorship Opportunity</option>
                        <option>Technical Issue</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#004D40]">Your Message</label>
                    <textarea 
                      rows={5} 
                      placeholder="Tell us how we can help..." 
                      className="w-full bg-[#f8fcfc] border border-gray-100 rounded-[15px] py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#FF7043]/20 focus:border-[#FF7043] transition-all font-medium resize-none"
                    ></textarea>
                  </div>

                  <button className="w-full md:w-auto bg-[#004D40] hover:bg-[#FF7043] text-white px-12 py-5 rounded-[20px] font-black uppercase tracking-[2px] text-sm transition-all shadow-lg flex items-center justify-center gap-3">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
