"use client";

import { useState } from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import PageBanner from "@/components/shared/page-banner";
import { CreditCard, User, Mail, ShieldCheck, CheckCircle2, Trophy, MapPin, Calendar } from "lucide-react";

export default function PayFeePage() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <main className="min-h-screen bg-[#f8fcfc]">
      <Header />
      <PageBanner title="Registration Portal" breadcrumb="Pay & Register" />
      
      <section className="py-[100px]">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <div className="bg-white rounded-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Sidebar Info */}
              <div className="bg-[#004D40] p-[50px] text-white">
                <h3 className="text-[24px] font-black uppercase italic mb-8">Registration Guide</h3>
                <div className="space-y-8">
                  <div className={`flex items-start gap-4 transition-opacity ${step === 1 ? 'opacity-100' : 'opacity-40'}`}>
                    <div className={`w-[32px] h-[32px] rounded-full border-2 flex items-center justify-center font-black ${step === 1 ? 'bg-[#FF7043] border-[#FF7043]' : 'border-white/30'}`}>1</div>
                    <div>
                      <h4 className="font-black uppercase text-sm tracking-widest">Profile Details</h4>
                      <p className="text-white/50 text-xs mt-1">Basic athlete information and sport selection.</p>
                    </div>
                  </div>
                  <div className={`flex items-start gap-4 transition-opacity ${step === 2 ? 'opacity-100' : 'opacity-40'}`}>
                    <div className={`w-[32px] h-[32px] rounded-full border-2 flex items-center justify-center font-black ${step === 2 ? 'bg-[#FF7043] border-[#FF7043]' : 'border-white/30'}`}>2</div>
                    <div>
                      <h4 className="font-black uppercase text-sm tracking-widest">Regional Hub</h4>
                      <p className="text-white/50 text-xs mt-1">Selecting your trial location and date.</p>
                    </div>
                  </div>
                  <div className={`flex items-start gap-4 transition-opacity ${step === 3 ? 'opacity-100' : 'opacity-40'}`}>
                    <div className={`w-[32px] h-[32px] rounded-full border-2 flex items-center justify-center font-black ${step === 3 ? 'bg-[#FF7043] border-[#FF7043]' : 'border-white/30'}`}>3</div>
                    <div>
                      <h4 className="font-black uppercase text-sm tracking-widest">Secure Payment</h4>
                      <p className="text-white/50 text-xs mt-1">Processing your administrative fee.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-[100px] p-[25px] bg-white/5 rounded-[20px] border border-white/10">
                   <div className="flex items-center gap-3 mb-4">
                      <ShieldCheck className="text-[#FF7043]" size={24} />
                      <span className="font-black uppercase text-xs tracking-widest">Data Secure</span>
                   </div>
                   <p className="text-xs text-white/50 leading-[1.6]">
                      Your personal data and payment information are encrypted using bank-grade 256-bit SSL protocols.
                   </p>
                </div>
              </div>

              {/* Form Area */}
              <div className="lg:col-span-2 p-[50px]">
                {step === 1 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="mb-8">
                       <h2 className="text-[#004D40] text-[28px] font-black uppercase italic tracking-tighter mb-2">Step 1: Athlete Profile</h2>
                       <p className="text-[#2D3436]/60 text-sm font-medium">Please provide accurate personal and athletic information.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[2px] text-[#004D40]">Full Name</label>
                          <div className="relative">
                             <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                             <input type="text" placeholder="Athlete Name" className="w-full bg-[#f8fcfc] border border-gray-100 rounded-[12px] py-4 pl-12 pr-4 focus:ring-2 focus:ring-[#FF7043]/20 focus:border-[#FF7043] outline-none transition-all" />
                          </div>
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[2px] text-[#004D40]">Email Address</label>
                          <div className="relative">
                             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                             <input type="email" placeholder="athlete@example.com" className="w-full bg-[#f8fcfc] border border-gray-100 rounded-[12px] py-4 pl-12 pr-4 focus:ring-2 focus:ring-[#FF7043]/20 focus:border-[#FF7043] outline-none transition-all" />
                          </div>
                       </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[2px] text-[#004D40]">Primary Sport</label>
                          <select className="w-full bg-[#f8fcfc] border border-gray-100 rounded-[12px] py-4 px-4 focus:ring-2 focus:ring-[#FF7043]/20 focus:border-[#FF7043] outline-none transition-all appearance-none font-bold">
                             <option>Cricket</option>
                             <option>Football</option>
                             <option>Tennis</option>
                          </select>
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[2px] text-[#004D40]">Age Category</label>
                          <select className="w-full bg-[#f8fcfc] border border-gray-100 rounded-[12px] py-4 px-4 focus:ring-2 focus:ring-[#FF7043]/20 focus:border-[#FF7043] outline-none transition-all appearance-none font-bold">
                             <option>Under 14</option>
                             <option>Under 17</option>
                             <option>Under 19</option>
                             <option>Under 23</option>
                          </select>
                       </div>
                    </div>
                    <button onClick={nextStep} className="w-full bg-[#004D40] hover:bg-[#FF7043] text-white py-5 rounded-[15px] font-black uppercase tracking-widest text-sm transition-all shadow-lg flex items-center justify-center gap-3 mt-10">
                       Continue to Next Step
                       <Calendar size={18} />
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="mb-8">
                       <h2 className="text-[#004D40] text-[28px] font-black uppercase italic tracking-tighter mb-2">Step 2: Trial Selection</h2>
                       <p className="text-[#2D3436]/60 text-sm font-medium">Choose your preferred evaluation center.</p>
                    </div>
                    <div className="space-y-6">
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[2px] text-[#004D40]">Regional Hub</label>
                          <div className="relative">
                             <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                             <select className="w-full bg-[#f8fcfc] border border-gray-100 rounded-[12px] py-4 pl-12 pr-4 focus:ring-2 focus:ring-[#FF7043]/20 focus:border-[#FF7043] outline-none transition-all appearance-none font-bold">
                                <option>East Coast Hub - New York</option>
                                <option>West Coast Hub - Los Angeles</option>
                                <option>Central Hub - Chicago</option>
                                <option>Southern Hub - Miami</option>
                             </select>
                          </div>
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[2px] text-[#004D40]">Preferred Date</label>
                          <div className="grid grid-cols-2 gap-4">
                             <button className="bg-[#f8fcfc] border-2 border-[#FF7043] p-4 rounded-[12px] text-center">
                                <span className="block text-[18px] font-black text-[#004D40]">OCT 15</span>
                                <span className="text-[10px] font-black uppercase text-[#FF7043]">Limited Slots</span>
                             </button>
                             <button className="bg-[#f8fcfc] border border-gray-100 p-4 rounded-[12px] text-center opacity-40 grayscale">
                                <span className="block text-[18px] font-black text-[#004D40]">OCT 16</span>
                                <span className="text-[10px] font-black uppercase text-red-500">Sold Out</span>
                             </button>
                          </div>
                       </div>
                    </div>
                    <div className="flex gap-4 mt-10">
                       <button onClick={prevStep} className="flex-1 bg-gray-100 text-[#004D40] py-5 rounded-[15px] font-black uppercase tracking-widest text-sm transition-all">Back</button>
                       <button onClick={nextStep} className="flex-[2] bg-[#004D40] hover:bg-[#FF7043] text-white py-5 rounded-[15px] font-black uppercase tracking-widest text-sm transition-all shadow-lg">Proceed to Payment</button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="mb-8 text-center">
                       <div className="w-[80px] h-[80px] bg-[#FF7043]/10 text-[#FF7043] rounded-full flex items-center justify-center mx-auto mb-6">
                          <Trophy size={40} />
                       </div>
                       <h2 className="text-[#004D40] text-[28px] font-black uppercase italic tracking-tighter mb-2">Final Step: Secure Payment</h2>
                       <div className="text-[48px] font-black text-[#004D40] mb-2">$25.00</div>
                       <p className="text-[#2D3436]/60 text-sm font-medium">Processing Fee for National Trials 2024</p>
                    </div>
                    <div className="space-y-4">
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[2px] text-[#004D40]">Card Details</label>
                          <div className="relative">
                             <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                             <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-[#f8fcfc] border border-gray-100 rounded-[12px] py-4 pl-12 pr-4 focus:ring-2 focus:ring-[#FF7043]/20 focus:border-[#FF7043] outline-none transition-all" />
                          </div>
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <input type="text" placeholder="MM/YY" className="bg-[#f8fcfc] border border-gray-100 rounded-[12px] py-4 px-4 focus:ring-2 focus:ring-[#FF7043]/20 focus:border-[#FF7043] outline-none transition-all" />
                          <input type="text" placeholder="CVC" className="bg-[#f8fcfc] border border-gray-100 rounded-[12px] py-4 px-4 focus:ring-2 focus:ring-[#FF7043]/20 focus:border-[#FF7043] outline-none transition-all" />
                       </div>
                    </div>
                    <button onClick={() => alert('Payment Processed!')} className="w-full bg-[#FF7043] hover:bg-[#004D40] text-white py-6 rounded-[15px] font-black uppercase tracking-widest text-sm transition-all shadow-xl flex items-center justify-center gap-3 mt-10">
                       Complete Registration
                       <CheckCircle2 size={22} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
