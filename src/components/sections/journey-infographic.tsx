import React from 'react';
import Image from 'next/image';

const JourneyInfographic = () => {
  const steps = [
    {
      id: '01',
      title: 'REGISTER',
      subtitle: 'Complete Forms',
      link: 'www.myrbcl.com',
      color: 'bg-[#F7941D]',
      borderColor: 'border-[#F7941D]',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/icons/bat-2.png',
      badge: true,
    },
    {
      id: '02',
      title: 'TRIAL',
      subtitle: 'Meet the team',
      link: 'in your state',
      color: 'bg-[#EE3231]',
      borderColor: 'border-[#EE3231]',
      icon: '/img/ball.png', // Fallback for cricket ball
    },
    {
      id: '03',
      title: 'SELECTION LEAGUE',
      subtitle: '3 TO 4 MATCH',
      link: '',
      color: 'bg-[#0D214F]',
      borderColor: 'border-[#0D214F]',
      icon: '/img/stumps.png', // Fallback for stumps
    },
    {
      id: '04',
      title: 'ONE DAY MATCH',
      subtitle: 'FREE',
      link: '',
      color: 'bg-[#407BBA]',
      borderColor: 'border-[#407BBA]',
      groupIcon: true,
    },
    {
      id: '05',
      title: 'NATIONAL LEAGUE',
      subtitle: '',
      link: '',
      color: 'bg-[#00A99D]',
      borderColor: 'border-[#00A99D]',
      playerIcon: true,
    },
    {
      id: '06',
      title: 'SPONSORSHIP',
      subtitle: 'Goals',
      link: '2.6 Year TO 4 Year',
      color: 'bg-[#8DC63F]',
      borderColor: 'border-[#8DC63F]',
      trophyIcon: true,
    },
  ];

  return (
    <section className="relative py-[80px] overflow-hidden bg-white">
      {/* Background with opacity for watermark effect */}
      <div 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.03]"
        style={{ fontSize: '120px', fontWeight: 900, color: '#222', whiteSpace: 'nowrap' }}
      >
        Rising Bharat Cricket League
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-[1200px]">
        {/* Section Heading */}
        <div className="text-center mb-[50px]">
          <h2 className="text-[32px] md:text-[36px] font-bold text-[#0D214F] uppercase tracking-wide mb-2">
            HOW RBCL PLAYS AN IMPORTANT ROLE FOR A CRICKETER
          </h2>
          <p className="text-[18px] text-[#686868] font-medium">
            Simple tasks to guide the first
          </p>
        </div>

        {/* Infographic Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-[120px] gap-y-4 items-center">
          
          {/* Vertical Divider (Stumps look in middle) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] items-end gap-3 z-10">
            <div className="w-[10px] h-full bg-[#F7941D] rounded-full"></div>
            <div className="w-[10px] h-[90%] bg-[#EE3231] rounded-full relative">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#EE3231] rounded-full shadow-lg border-2 border-white"></div>
            </div>
            <div className="w-[10px] h-full bg-[#F7941D] rounded-full"></div>
          </div>

          {/* Left Column (Steps 1, 2, 3) */}
          <div className="space-y-4">
            {steps.slice(0, 3).map((step) => (
              <div key={step.id} className="relative group">
                <div className={`flex items-center bg-white border-2 ${step.borderColor} rounded-full h-[85px] overflow-visible pr-8 transition-all hover:shadow-xl`}>
                  {/* Circle ID */}
                  <div className={`${step.color} w-[85px] h-[83px] flex items-center justify-center rounded-full shrink-0 -ml-[2px]`}>
                    <span className="text-white text-[28px] font-bold">{step.id}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow pl-6 py-2 border-l-2 border-dashed border-gray-200 ml-4">
                    <h4 className="text-[20px] font-bold text-[#222] leading-tight">
                      {step.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[13px] font-bold text-[#686868] uppercase">{step.subtitle}</span>
                      {step.link && (
                        <span className="text-[12px] text-[#999] lowercase">{step.link}</span>
                      )}
                    </div>
                  </div>

                  {/* Icon Badge */}
                  <div className="shrink-0">
                    {step.id === '01' && (
                      <div className="relative w-14 h-14 bg-white p-1 rounded-full shadow-md border-2 border-[#EE3231]">
                        <Image 
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/icons/bat-2.png" 
                          alt="Register" 
                          width={48} 
                          height={48} 
                          className="object-contain"
                        />
                        <div className="absolute -top-2 -right-2 bg-[#EE3231] text-[8px] text-white p-1 rounded-full font-bold uppercase leading-none text-center">
                          Register<br/>Now!
                        </div>
                      </div>
                    )}
                    {step.id === '02' && (
                       <div className="w-12 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                        <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                       </div>
                    )}
                    {step.id === '03' && (
                      <div className="w-12 h-12 flex items-center justify-center opacity-80">
                         <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 3v18M12 3v18M18 3v18M4 3h16"/></svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Steps 4, 5, 6) */}
          <div className="space-y-4">
            {steps.slice(3).map((step) => (
              <div key={step.id} className="relative group">
                <div className={`flex items-center bg-white border-2 ${step.borderColor} rounded-full h-[85px] overflow-visible pr-8 transition-all hover:shadow-xl`}>
                  {/* Circle ID */}
                  <div className={`${step.color} w-[85px] h-[83px] flex items-center justify-center rounded-full shrink-0 -ml-[2px]`}>
                    <span className="text-white text-[28px] font-bold">{step.id}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow pl-6 py-2 border-l-2 border-dashed border-gray-200 ml-4">
                    <h4 className="text-[20px] font-bold text-[#222] leading-tight">
                      {step.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      {step.subtitle && (
                        <span className="text-[13px] font-bold text-[#686868] uppercase">{step.subtitle}</span>
                      )}
                      {step.link && (
                        <span className="text-[12px] text-[#999]">{step.link}</span>
                      )}
                    </div>
                  </div>

                  {/* Icon Side */}
                  <div className="shrink-0">
                    {step.id === '04' && (
                      <div className="flex items-center gap-x-1 grayscale opacity-70">
                        <svg className="w-8 h-8 text-[#0D214F]" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/></svg>
                        <svg className="w-8 h-8 text-[#0D214F]" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/></svg>
                      </div>
                    )}
                    {step.id === '05' && (
                      <div className="w-14 h-14 flex items-center justify-center opacity-80">
                        <svg className="w-11 h-11 text-teal-600" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.97 4.43c-.16.09-.33.14-.5.14s-.34-.05-.5-.14l-7.97-4.43c-.32-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.43c.16-.09.33-.14.5-.14s.34.05.5.14l7.97 4.43c.32.17.53.5.53.88v9z"/></svg>
                      </div>
                    )}
                    {step.id === '06' && (
                      <div className="w-12 h-12 flex items-center justify-center drop-shadow-sm">
                        <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18M4 22h16M10 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34c0-.28-.11-.54-.31-.74l-1.38-1.38c-.2-.2-.2-.51 0-.71l1.38-1.38c.2-.2.31-.46.31-.74V7c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v2.53c0 .28.11.54.31.74l1.38 1.38c.2.2.2.51 0 .71l-1.38 1.38c-.2.2-.31.46-.31.74z"/></svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default JourneyInfographic;