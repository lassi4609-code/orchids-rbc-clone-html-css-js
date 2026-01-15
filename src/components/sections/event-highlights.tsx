import React from 'react';
import Image from 'next/image';

const EventHighlights = () => {
  return (
    <section 
      className="relative bg-[#0D214F] py-[80px] overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at center, rgba(30, 58, 138, 0.4) 0%, transparent 70%)',
      }}
    >
      {/* Sunburst/Lines effect background */}
       <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `repeating-conic-gradient(from 0deg, transparent 0deg, transparent 15deg, rgba(255,255,255,0.1) 16deg, transparent 17deg)`,
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />

      <div className="container relative z-10 max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-4">
            <div className="w-[2px] h-8 bg-blue-500"></div>
            <h2 className="text-white text-[36px] font-bold uppercase tracking-wide">
              Event Highlights
            </h2>
            <div className="w-[2px] h-8 bg-blue-500"></div>
          </div>
        </div>

        {/* Top Feature Card: RBCL Benefits */}
        <div className="bg-white rounded-[5px] mb-[30px] overflow-hidden card-shadow">
          <div className="bg-[#f8f9fa] border-b border-[#E1E1E1] px-6 py-4">
            <h4 className="text-[#0D214F] text-[20px] font-bold uppercase">RBCL Benefits</h4>
          </div>
          <div className="p-8 flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-[4/3] rounded-[5px] overflow-hidden border border-[#E1E1E1]">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/1525090120348408VIZAG_20NEW_20_201080_20_1080_20x_-3.jpg"
                  alt="Trial Details"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">🔹</span>
                  <p className="text-[#222222] text-[15px] leading-relaxed">
                    <strong className="text-[#0D214F]">Trial Details: Skill Assessment:</strong> Each player undergoes an 15 to 18 ball gameplay test, along with fitness evaluations and fielding drills.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">🔹</span>
                  <p className="text-[#222222] text-[15px] leading-relaxed">
                    <strong className="text-[#0D214F]">Professional Supervision:</strong> Trials are conducted under the guidance of qualified coaches and league management.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">🔹</span>
                  <p className="text-[#222222] text-[15px] leading-relaxed">
                    <strong className="text-[#0D214F]">Selection Criteria:</strong> Players are shortlisted purely on performance & potential. Results will be shared via email and official social media handles.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          
          {/* Eligibility Card */}
          <div className="bg-white rounded-[5px] overflow-hidden flex flex-col card-shadow">
            <div className="bg-[#f8f9fa] border-b border-[#E1E1E1] px-6 py-4">
              <h4 className="text-[#0D214F] text-[18px] font-bold uppercase">Eligibility</h4>
            </div>
            <div className="p-6 flex-grow">
              <p className="text-[#737373] text-[15px] mb-6 leading-relaxed">
                The eligibility is very simple. The minimum and maximum age for eligibility will be 12 years and 25 years, every male candidate will be eligible who falls under this criteria. Trials will be conducted according to age groups which are as follows:
              </p>
              <ul className="space-y-2 text-[#222222] font-medium text-[15px]">
                <li className="flex items-center gap-2">- Under 14</li>
                <li className="flex items-center gap-2">- Under 16</li>
                <li className="flex items-center gap-2">- Under 19</li>
                <li className="flex items-center gap-2">- Under 23</li>
                <li className="flex items-center gap-2">- Under 25</li>
              </ul>
            </div>
          </div>

          {/* Selection Process Card */}
          <div className="bg-white rounded-[5px] overflow-hidden flex flex-col card-shadow">
            <div className="bg-[#f8f9fa] border-b border-[#E1E1E1] px-6 py-4">
              <h4 className="text-[#0D214F] text-[18px] font-bold uppercase">Selection Process</h4>
            </div>
            <div className="p-6 flex-grow">
              <div className="space-y-4">
                <p className="text-[#737373] text-[15px] leading-relaxed">
                  <strong className="text-[#0D214F]">Skill Assessment:</strong> Each player undergoes an 15 to 18 ball gameplay test, along with fitness evaluations and fielding drills.
                </p>
                <p className="text-[#737373] text-[15px] leading-relaxed">
                  <strong className="text-[#0D214F]">Professional Supervision:</strong> Trials are conducted under the guidance of qualified coaches and league management.
                </p>
                <p className="text-[#737373] text-[15px] leading-relaxed">
                  <strong className="text-[#0D214F]">Selection Criteria:</strong> Players are shortlisted purely on performance & potential. Results will be shared via email and official social media handles.
                </p>
                <p className="inline-block bg-[#0D214F] text-white px-4 py-2 rounded-sm text-[14px]">
                  Registration Fee: Rs. 599 (non-refundable)
                </p>
              </div>
            </div>
          </div>

          {/* Trial Details Card */}
          <div className="bg-white rounded-[5px] overflow-hidden flex flex-col card-shadow">
            <div className="bg-[#f8f9fa] border-b border-[#E1E1E1] px-6 py-4">
              <h4 className="text-[#0D214F] text-[18px] font-bold uppercase">Trial Details</h4>
            </div>
            <div className="p-6 flex-grow">
              <h5 className="text-[#0D214F] font-bold mb-4 text-[16px]">The trial will be hosted after the registration of players in the undermentioned 24 States of India.</h5>
              <p className="text-[#737373] text-[14px] leading-relaxed mb-4">
                The league trials will be conducted across the following 24 states and UTs, ensuring a comprehensive nationwide talent search:
              </p>
              <div className="space-y-3">
                <div className="text-[14px]">
                  <span className="font-bold text-[#0D214F]">North & West:</span> <span className="text-[#737373]">Jammu & Kashmir, Himachal Pradesh, Punjab, Haryana, Uttarakhand, Delhi, Chandigarh, Rajasthan, Gujarat, Maharashtra.</span>
                </div>
                <div className="text-[14px]">
                  <span className="font-bold text-[#0D214F]">East & Northeast:</span> <span className="text-[#737373]">Bihar, Jharkhand, Orissa (Odisha), West Bengal, Assam.</span>
                </div>
                <div className="text-[14px]">
                  <span className="font-bold text-[#0D214F]">Central:</span> <span className="text-[#737373]">Uttar Pradesh, Madhya Pradesh, Chhattisgarh.</span>
                </div>
                <div className="text-[14px]">
                  <span className="font-bold text-[#0D214F]">South:</span> <span className="text-[#737373]">Andhra Pradesh, Telangana, Karnataka, Kerala, Tamil Nadu.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Other Facilities Card */}
          <div className="bg-white rounded-[5px] overflow-hidden flex flex-col card-shadow">
            <div className="bg-[#f8f9fa] border-b border-[#E1E1E1] px-6 py-4">
              <h4 className="text-[#0D214F] text-[18px] font-bold uppercase">Other Facilities</h4>
            </div>
            <div className="p-0 flex-grow">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead className="bg-[#F2F4F8] text-[#0D214F]">
                    <tr>
                      <th className="px-4 py-3 border-b border-r border-[#E1E1E1] font-bold uppercase">Reward</th>
                      <th className="px-4 py-3 border-b border-[#E1E1E1] font-bold uppercase">Details</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#222222]">
                    <tr className="border-b border-[#E1E1E1]">
                      <td className="px-4 py-3 border-r border-[#E1E1E1] font-semibold">Winning Prize</td>
                      <td className="px-4 py-3">₹1,00,000 (Cash Prize)</td>
                    </tr>
                    <tr className="border-b border-[#E1E1E1]">
                      <td className="px-4 py-3 border-r border-[#E1E1E1] font-semibold">Runners-up</td>
                      <td className="px-4 py-3">₹50,000 (Cash Prize)</td>
                    </tr>
                    <tr className="border-b border-[#E1E1E1]">
                      <td className="px-4 py-3 border-r border-[#E1E1E1] font-semibold">Locations</td>
                      <td className="px-4 py-3">Raipur, Goa, and Mumbai</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-r border-[#E1E1E1] font-semibold">Sponsorship</td>
                      <td className="px-4 py-3">Top 15 players for 2.6 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-[#fcfcfc] border-t border-[#E1E1E1]">
                <p className="text-[#737373] text-[13px] italic uppercase tracking-wider font-bold mb-2">Sponsorship Grades:</p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center p-2 rounded bg-red-50 border border-red-100">
                    <span className="block text-red-600 font-black text-lg leading-tight">A</span>
                    <span className="text-[10px] text-red-800 uppercase font-bold">Res. Academy</span>
                  </div>
                  <div className="text-center p-2 rounded bg-orange-50 border border-orange-100">
                    <span className="block text-orange-600 font-black text-lg leading-tight">B</span>
                    <span className="text-[10px] text-orange-800 uppercase font-bold">City Training</span>
                  </div>
                  <div className="text-center p-2 rounded bg-blue-50 border border-blue-100">
                    <span className="block text-blue-600 font-black text-lg leading-tight">C</span>
                    <span className="text-[10px] text-blue-800 uppercase font-bold">Matches</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventHighlights;