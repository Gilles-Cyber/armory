import React from 'react';
import { motion } from 'motion/react';

export const Profile: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-32 px-6 max-w-7xl mx-auto"
    >
      {/* Header Section: Tactical Avatar & Clearance */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 items-end">
        <div className="md:col-span-4 relative group">
          <div className="aspect-square bg-surface-container-low overflow-hidden relative border border-outline-variant/20">
            <img 
              alt="Tactical portrait" 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 transition-all duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfsK1JhUXxOHu7u9ywyhW_OFN9_fCg5AJbELwzlh7OGg-j-64iLStgWjqcDJGsGzZV4sUjKrbKjELa5dpug5fKgayutI6_4YtzOCYIn3NsjxQtbz6Uw__8I3ZPyj0gTsTvWXSatmp84y3cg4F9zRuwE-j7-PzpTMnUXmB84Z28TRsiUq70Y8539JKp15ekLrxQl7b5EIVskD32E4BVXaTq348ao2_BYI1G6YhM_Y0UH0BvgjcGYoXBZa1zBppzd-Gn3RH-zgaAL8Y"
              referrerPolicy="no-referrer"
            />
            <div className="scan-line"></div>
            <div className="absolute inset-0 border-[20px] border-background pointer-events-none opacity-50"></div>
            <div className="absolute top-4 left-4 font-headline text-[10px] text-primary tracking-[0.2em] font-bold">BIOMETRIC_SCAN: ACTIVE</div>
          </div>
        </div>
        <div className="md:col-span-8 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h1 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tighter text-on-surface mb-2">OPERATOR ALPHA-ONE</h1>
              <p className="font-headline text-primary tracking-[0.3em] font-bold text-sm">DESIGNATION: S-CLASS SPECIALIST</p>
            </div>
            <div className="bg-primary/10 border border-primary/30 p-4 flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <div>
                <div className="font-headline text-[10px] text-primary tracking-widest font-bold">AUTH_STATUS</div>
                <div className="font-headline text-xl font-bold text-primary">CLEARANCE LEVEL 5</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Security Authorization Widget */}
        <div className="md:col-span-1 bg-surface-container-low p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-sm font-bold tracking-[0.2em] text-secondary uppercase">Security Authorization</h2>
            <span className="material-symbols-outlined text-primary text-sm">hub</span>
          </div>
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-4 py-1">
              <div className="text-[10px] text-outline tracking-widest font-bold uppercase">Encryption Status</div>
              <div className="font-headline text-lg text-on-surface font-bold tracking-tight">AES-256 QUANTUM</div>
            </div>
            <div className="bg-surface-container p-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-tertiary text-sm">location_on</span>
                <span className="text-[10px] font-bold tracking-widest text-outline uppercase">Recent Access</span>
              </div>
              <div className="aspect-video bg-surface-container-highest overflow-hidden mb-3">
                <img 
                  alt="Map View" 
                  className="w-full h-full object-cover opacity-60" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNtD2LK6K1E1LKxdVo0XSCK3NthMtN9Td4RQdUc33AfE0AYKaUb4-7C8jd-ArG1ZOn81R-55s8Pd9uAdvM8ZiHdMIca1tTAW4SU26VKpbpYTyJLIm9w4oCom0OgPHatTTRxB1JG6rqOQZclTAC4cLFGLrJL58ZI4o5SWhx0czxYFdYV5SXzl6rwOgiluHRDRwqBE1bhvT1CFAOFVTPc_yR_76lr4rdVjT5oGjAFUzJQ13kMbotwKAshnH0-2_VxYIMAqwUmXlyuP0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between text-[11px] font-headline font-bold">
                <span className="text-secondary">LAT: 1.3521 N</span>
                <span className="text-secondary">LONG: 103.8198 E</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tactical Assets Section */}
        <div className="md:col-span-2 bg-surface-container-low p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-sm font-bold tracking-[0.2em] text-secondary uppercase">Tactical Assets</h2>
            <span className="font-headline text-[10px] text-primary underline underline-offset-4 cursor-pointer">VIEW_ALL_VAULT</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Asset Card 1 */}
            <div className="bg-surface-container border-l-4 border-primary group cursor-pointer hover:bg-surface-container-high transition-all">
              <div className="p-4 flex gap-4">
                <div className="w-24 h-24 bg-surface-container-lowest flex items-center justify-center overflow-hidden">
                  <img 
                    alt="Firearm 1" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJq-giI-8Bq8WqOgtEAxheRDP8pcwz42dJJTl7KtCQJwTe9qHrLgJUsfoqvSbWc1WkwlU3MztPHcfclCVDNKRQzyfRn4IvKe-16oaxpcjbbsUw4vAlqseHh-s-nwSy60wG8-LGfL302_8LAU4TdWlQi2Sm4OtWUEsD0xYCoYqyjgIdugJR55vmJr-KFa4L7Omu017xpfV9igDIKum7c-MY8xD8BhhE8TiRpV_HjpsmgJaYvc-OwOltgGf7ZvZ0-npjx4dlm5YHpqI"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="text-[10px] text-primary tracking-widest font-bold uppercase">MK-14 ECLIPSE</div>
                  <div className="font-headline text-lg font-bold tracking-tight">PRECISION CARBINE</div>
                  <div className="text-[10px] text-outline font-bold tracking-widest">STATUS: VAULTED</div>
                </div>
              </div>
            </div>
            {/* Asset Card 2 */}
            <div className="bg-surface-container border-l-4 border-outline-variant group cursor-pointer hover:bg-surface-container-high transition-all">
              <div className="p-4 flex gap-4">
                <div className="w-24 h-24 bg-surface-container-lowest flex items-center justify-center overflow-hidden">
                  <img 
                    alt="Firearm 2" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRpnGwOrPHRIrctiebnffJoh0DKEBGXRLjgVFrnAhidEJ27LtrUcGACOCJzQFjALQ4FhLLZ5E_z0gvahkb4ng1hGz6NCs4qghgzCShV9UYHizqqUC-XQmdJFVCfF04_LpBGHQcbg9Feo_2Pk6NhoKYBk7VY8wOn9arK7zGrkiQp8xwBb8gv-7TAdg7yo2X10rzNDIcSrj09LTipzfBJRM1bSxOhnaJ9AiFZCgPETkxl3g5lzvnTWER5Kloeltxxf8gzewZPKFRjGk"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="text-[10px] text-secondary tracking-widest font-bold uppercase">APX-9 STRIKER</div>
                  <div className="font-headline text-lg font-bold tracking-tight">SIDEARM_MOD_1</div>
                  <div className="text-[10px] text-tertiary font-bold tracking-widest">STATUS: IN_TRANSIT</div>
                </div>
              </div>
            </div>
          </div>
          {/* Field Records Table */}
          <div className="mt-8">
            <h3 className="font-headline text-[10px] font-bold tracking-[0.2em] text-outline uppercase mb-4">Field Records // Order History</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] text-primary tracking-widest uppercase border-b border-outline-variant/20">
                    <th className="py-3 font-bold">RECORD_ID</th>
                    <th className="py-3 font-bold">ASSET</th>
                    <th className="py-3 font-bold">TIMESTAMP</th>
                    <th className="py-3 font-bold text-right">CREDITS</th>
                  </tr>
                </thead>
                <tbody className="font-headline text-sm font-medium">
                  <tr className="border-b border-outline-variant/10 hover:bg-white/5 transition-colors">
                    <td className="py-4 text-outline">#TRX-8821-X</td>
                    <td className="py-4">MK-14 ECLIPSE</td>
                    <td className="py-4 text-outline">22-OCT-2023</td>
                    <td className="py-4 text-right text-primary">12,450.00</td>
                  </tr>
                  <tr className="border-b border-outline-variant/10 hover:bg-white/5 transition-colors">
                    <td className="py-4 text-outline">#TRX-7740-Y</td>
                    <td className="py-4">VORTEX OPTIC_G3</td>
                    <td className="py-4 text-outline">15-SEP-2023</td>
                    <td className="py-4 text-right text-primary">2,100.00</td>
                  </tr>
                  <tr className="border-b border-outline-variant/10 hover:bg-white/5 transition-colors">
                    <td className="py-4 text-outline">#TRX-1102-A</td>
                    <td className="py-4">CERAMIC PLATE SET</td>
                    <td className="py-4 text-outline">04-AUG-2023</td>
                    <td className="py-4 text-right text-primary">4,800.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
