import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Target, HardDrive, Lock, Activity, ChevronRight, Zap, Terminal } from 'lucide-react';

type SubTab = 'overview' | 'gear' | 'records' | 'security';

export const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SubTab>('overview');

  const stats = [
    { label: 'ACCURACY', value: '98.4%', icon: Target, color: 'text-[#e9c349]' },
    { label: 'MISSIONS', value: '142', icon: Shield, color: 'text-emerald-500' },
    { label: 'THREAT_LVL', value: 'OMEGA', icon: Activity, color: 'text-rose-500' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-28 pb-32 px-4 md:px-8 max-w-7xl mx-auto"
    >
      {/* Header Section: Tactical Avatar & Clearance */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
        <div className="lg:col-span-4 relative group">
          <div className="aspect-square bg-[#1c1b1b] overflow-hidden relative border border-[#e9c349]/20 group-hover:border-[#e9c349]/50 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <img 
              alt="Tactical portrait" 
              className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-90 group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfsK1JhUXxOHu7u9ywyhW_OFN9_fCg5AJbELwzlh7OGg-j-64iLStgWjqcDJGsGzZV4sUjKrbKjELa5dpug5fKgayutI6_4YtzOCYIn3NsjxQtbz6Uw__8I3ZPyj0gTsTvWXSatmp84y3cg4F9zRuwE-j7-PzpTMnUXmB84Z28TRsiUq70Y8539JKp15ekLrxQl7b5EIVskD32E4BVXaTq348ao2_BYI1G6YhM_Y0UH0BvgjcGYoXBZa1zBppzd-Gn3RH-zgaAL8Y"
            />
            <div className="scan-line opacity-50 group-hover:opacity-100"></div>
            
            {/* HUD Overlay */}
            <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="font-headline text-[8px] text-[#e9c349] tracking-[0.2em] font-black bg-black/60 px-2 py-1 backdrop-blur-sm border-l-2 border-[#e9c349]">
                  FACIAL_ID: VERIFIED
                </div>
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-[#e9c349] animate-[pulse_1s_infinite]"></div>
                  <div className="w-1 h-3 bg-[#e9c349]/30"></div>
                </div>
              </div>
              <div className="font-headline text-[10px] text-[#e9c349] tracking-[0.3em] font-bold text-center bg-black/40 py-1 backdrop-blur-sm border-y border-[#e9c349]/10">
                BIOMETRIC_SCAN: ACTIVE
              </div>
            </div>
            
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#e9c349] m-2 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#e9c349] m-2 opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col justify-between h-full py-2">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-12 bg-[#e9c349]/30"></div>
              <span className="font-headline text-[#e9c349] tracking-[0.4em] font-bold text-[10px] uppercase">Profile Data // S-Class</span>
            </div>
            <h1 className="font-headline text-5xl md:text-8xl font-black uppercase tracking-tight text-white mb-2 leading-none">
              OPERATOR <span className="text-[#e9c349] drop-shadow-[0_0_15px_rgba(233,195,73,0.3)]">ALPHA-ONE</span>
            </h1>
            <p className="font-headline text-[#c0c7d1] tracking-[0.2em] font-medium text-sm max-w-xl opacity-70">
              Assigned to high-risk procurement operations. Specialized in exotic weaponry and tactical asset management within the Outer Rim sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#1c1b1b] border border-white/5 p-4 relative overflow-hidden group hover:border-[#e9c349]/30 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <stat.icon className={`w-5 h-5 ${stat.color} opacity-70 group-hover:opacity-100 transition-all`} />
                  <span className="text-[10px] font-headline font-bold text-[#c0c7d1] opacity-40">{stat.label}</span>
                </div>
                <div className="text-2xl font-headline font-black text-white tracking-widest">{stat.value}</div>
                <div className="absolute bottom-0 left-0 h-1 bg-[#e9c349] transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left w-full opacity-30"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Sub-Navigation */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-white/5 pb-4">
        {[
          { id: 'overview', label: 'OVERVIEW', icon: Activity },
          { id: 'gear', label: 'FIELD GEAR', icon: HardDrive },
          { id: 'records', label: 'RECORDS', icon: Terminal },
          { id: 'security', label: 'SECURITY', icon: Lock },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as SubTab)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-sm font-headline text-[10px] font-black tracking-[0.2em] transition-all duration-300 ${
              activeTab === tab.id 
              ? 'bg-[#e9c349] text-[#131313] shadow-[0_0_20px_rgba(233,195,73,0.2)]' 
              : 'text-[#c0c7d1] hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <tab.icon size={14} strokeWidth={3} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <div className="bg-[#1c1b1b] border border-white/5 p-8 relative overflow-hidden group">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-headline text-lg font-black tracking-widest text-[#e9c349] uppercase">Operator Clearance</h2>
                    <Zap size={20} className="text-[#e9c349] animate-pulse" />
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full border-4 border-[#e9c349]/20 flex items-center justify-center relative">
                      <div className="absolute inset-0 rounded-full border-4 border-[#e9c349] border-t-transparent animate-spin-slow"></div>
                      <span className="font-headline text-3xl font-black text-[#e9c349]">LV5</span>
                    </div>
                    <div>
                      <p className="text-[#c0c7d1] font-medium text-sm mb-2 opacity-80">
                        Higher Clearance granted for direct interaction with Protocol Units. Access to orbital storage is unrestricted.
                      </p>
                      <button className="flex items-center gap-2 text-[10px] font-headline font-black text-[#e9c349] tracking-widest hover:gap-4 transition-all">
                        VIEW_CREDENTIALS <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#1c1b1b] border border-white/5 p-6 group hover:border-[#e9c349]/20 transition-all">
                    <div className="text-[9px] font-headline font-black text-[#c0c7d1] opacity-40 mb-2 tracking-[0.2em] uppercase">Combat Specialty</div>
                    <div className="text-xl font-headline font-black text-white tracking-widest mb-4">HEAVY RECON</div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-headline font-bold mb-1">
                         <span className="text-[#c0c7d1]">PROFICIENCY</span>
                         <span className="text-[#e9c349]">92%</span>
                       </div>
                       <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full bg-[#e9c349] w-[92%]"></div>
                       </div>
                    </div>
                  </div>
                  <div className="bg-[#1c1b1b] border border-white/5 p-6 group hover:border-[#e9c349]/20 transition-all">
                    <div className="text-[9px] font-headline font-black text-[#c0c7d1] opacity-40 mb-2 tracking-[0.2em] uppercase">Global Ranking</div>
                    <div className="text-xl font-headline font-black text-white tracking-widest mb-4">#1,402 / 50K</div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-headline font-bold mb-1">
                         <span className="text-[#c0c7d1]">PERCENTILE</span>
                         <span className="text-[#e9c349]">TOP 2.8%</span>
                       </div>
                       <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full bg-[#e9c349] w-[85%]"></div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-[#1c1b1b] border border-white/5 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Lock size={16} className="text-[#e9c349]" />
                    <h3 className="font-headline text-[10px] font-black tracking-[0.2em] text-[#c0c7d1] uppercase">Security Uplink</h3>
                  </div>
                  <div className="aspect-video bg-black/40 relative overflow-hidden mb-4 rounded-sm border border-white/5">
                    <img 
                       src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNtD2LK6K1E1LKxdVo0XSCK3NthMtN9Td4RQdUc33AfE0AYKaUb4-7C8jd-ArG1ZOn81R-55s8Pd9uAdvM8ZiHdMIca1tTAW4SU26VKpbpYTyJLIm9w4oCom0OgPHatTTRxB1JG6rqOQZclTAC4cLFGLrJL58ZI4o5SWhx0czxYFdYV5SXzl6rwOgiluHRDRwqBE1bhvT1CFAOFVTPc_yR_76lr4rdVjT5oGjAFUzJQ13kMbotwKAshnH0-2_VxYIMAqwUmXlyuP0"
                       className="w-full h-full object-cover opacity-40 grayscale"
                       alt="Security Feed"
                    />
                    <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-red-500/20 px-2 py-0.5 rounded-full border border-red-500/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                      <span className="text-[8px] font-headline font-black text-red-500 tracking-widest">LIVE</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center group cursor-help">
                      <span className="text-[10px] font-headline text-[#c0c7d1]/60 font-bold tracking-widest">LOCAL_ID</span>
                      <span className="text-[10px] font-headline text-white font-bold tracking-widest">192.168.1.104</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-headline text-[#c0c7d1]/60 font-bold tracking-widest">SIGNAL</span>
                      <span className="text-[10px] font-headline text-emerald-500 font-bold tracking-widest">STABLE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gear' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 { name: 'MK-14 ECLIPSE', type: 'CARBINE', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJq-giI-8Bq8WqOgtEAxheRDP8pcwz42dJJTl7KtCQJwTe9qHrLgJUsfoqvSbWc1WkwlU3MztPHcfclCVDNKRQzyfRn4IvKe-16oaxpcjbbsUw4vAlqseHh-s-nwSy60wG8-LGfL302_8LAU4TdWlQi2Sm4OtWUEsD0xYCoYqyjgIdugJR55vmJr-KFa4L7Omu017xpfV9igDIKum7c-MY8xD8BhhE8TiRpV_HjpsmgJaYvc-OwOltgGf7ZvZ0-npjx4dlm5YHpqI', status: 'VAULTED' },
                 { name: 'APX-9 STRIKER', type: 'SIDEARM', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRpnGwOrPHRIrctiebnffJoh0DKEBGXRLjgVFrnAhidEJ27LtrUcGACOCJzQFjALQ4FhLLZ5E_z0gvahkb4ng1hGz6NCs4qghgzCShV9UYHizqqUC-XQmdJFVCfF04_LpBGHQcbg9Feo_2Pk6NhoKYBk7VY8wOn9arK7zGrkiQp8xwBb8gv-7TAdg7yo2X10rzNDIcSrj09LTipzfBJRM1bSxOhnaJ9AiFZCgPETkxl3g5lzvnTWER5Kloeltxxf8gzewZPKFRjGk', status: 'IN_TRANSIT' },
               ].map((asset, i) => (
                  <div key={i} className="bg-[#1c1b1b] border border-white/5 group relative overflow-hidden transition-all hover:border-[#e9c349]/40">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <p className="text-[#e9c349] font-headline text-[9px] font-black tracking-[0.2em] mb-1">{asset.type}</p>
                          <h4 className="font-headline text-xl font-black text-white tracking-widest">{asset.name}</h4>
                        </div>
                        <div className="p-2 bg-white/5 rounded-full">
                           <Target size={16} className="text-[#e9c349]" />
                        </div>
                      </div>
                      <div className="aspect-[16/9] bg-black/40 mb-6 overflow-hidden rounded-sm relative">
                        <img 
                          src={asset.img} 
                          alt={asset.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                          <span className={`text-[9px] font-headline font-black tracking-[0.2em] ${asset.status === 'VAULTED' ? 'text-emerald-500' : 'text-[#e9c349]'}`}>STATUS // {asset.status}</span>
                        </div>
                      </div>
                      <button className="w-full py-4 text-[10px] font-headline font-black text-[#c0c7d1] border border-white/5 tracking-[0.3em] hover:bg-white/5 hover:text-white transition-all">
                        EXPAND_SPEC
                      </button>
                    </div>
                    <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-4 h-4 border-t border-r border-[#e9c349]"></div>
                    </div>
                  </div>
               ))}
               <div className="border-2 border-dashed border-white/5 flex flex-col items-center justify-center p-8 opacity-40 hover:opacity-100 hover:border-[#e9c349]/20 hover:bg-white/5 transition-all text-[#c0c7d1]/40 hover:text-[#e9c349] cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-3xl">add</span>
                  </div>
                  <span className="font-headline text-[10px] font-black tracking-[0.3em] uppercase">Provision Asset</span>
               </div>
            </div>
          )}

          {activeTab === 'records' && (
            <div className="bg-[#1c1b1b] border border-white/5 p-8">
               <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                 <h3 className="font-headline text-lg font-black text-white tracking-widest">TRANSACTION_HISTORY</h3>
                 <Terminal size={20} className="text-[#e9c349] opacity-50" />
               </div>
               <div className="overflow-x-auto">
                 <table className="w-full text-left">
                   <thead>
                     <tr className="text-[10px] text-[#e9c349] tracking-widest uppercase border-b border-white/10 opacity-70">
                       <th className="py-4 font-black">RECORD_ID</th>
                       <th className="py-4 font-black">ASSET_CLASS</th>
                       <th className="py-4 font-black">TIMESTAMP</th>
                       <th className="py-4 font-black text-right">CREDITS</th>
                     </tr>
                   </thead>
                   <tbody className="font-headline text-sm">
                     {[
                       { id: '#TRX-8821-X', asset: 'MK-14 ECLIPSE', date: '22-OCT-2023', price: '12,450.00' },
                       { id: '#TRX-7740-Y', asset: 'VORTEX OPTIC_G3', date: '15-SEP-2023', price: '2,100.00' },
                       { id: '#TRX-1102-A', asset: 'CERAMIC PLATE SET', date: '04-AUG-2023', price: '4,800.00' },
                     ].map((row, i) => (
                       <tr key={i} className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                         <td className="py-5 text-[#c0c7d1] font-bold group-hover:text-white transition-colors">{row.id}</td>
                         <td className="py-5 font-black text-white">{row.asset}</td>
                         <td className="py-5 text-[#c0c7d1] font-bold opacity-60">{row.date}</td>
                         <td className="py-5 text-right font-black text-[#e9c349]">{row.price}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
               <button className="mt-8 text-[10px] font-headline font-black text-[#c0c7d1] tracking-[0.3em] hover:text-[#e9c349] transition-all flex items-center gap-2">
                 GENERATE_FULL_MANIFEST <ChevronRight size={14} />
               </button>
            </div>
          )}
          
          {activeTab === 'security' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-[#1c1b1b] border border-white/5 p-8">
                  <h3 className="font-headline text-xl font-black text-white tracking-widest mb-6">ENCRYPTION_PROTOCOLS</h3>
                  <div className="space-y-6">
                     <div className="flex justify-between items-center p-4 bg-black/40 border border-[#e9c349]/10 rounded-sm">
                        <div className="flex items-center gap-4">
                           <Shield size={24} className="text-[#e9c349]" />
                           <div>
                              <div className="text-[10px] font-headline font-black text-[#e9c349] tracking-widest mb-0.5">VAULT_LOCK</div>
                              <div className="text-xs font-bold text-[#c0c7d1]">AES-256 QUANTUM</div>
                           </div>
                        </div>
                        <div className="text-emerald-500 text-[10px] font-black tracking-widest">ACTIVE</div>
                     </div>
                     <div className="flex justify-between items-center p-4 bg-black/40 border border-white/5 rounded-sm">
                        <div className="flex items-center gap-4">
                           <Activity size={24} className="text-[#c0c7d1] opacity-50" />
                           <div>
                              <div className="text-[10px] font-headline font-black text-[#c0c7d1] tracking-widest mb-0.5 opacity-50">HEARTBEAT_SYNC</div>
                              <div className="text-xs font-bold text-[#c0c7d1] opacity-50">NOT_CONFIGURED</div>
                           </div>
                        </div>
                        <button className="text-[#e9c349] text-[10px] font-black tracking-widest hover:underline uppercase underline-offset-4">Configure</button>
                     </div>
                  </div>
               </div>
               
               <div className="bg-[#1c1b1b] border border-white/5 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline text-xl font-black text-white tracking-widest mb-2">AUTH_LOG</h3>
                    <p className="text-[10px] font-medium text-[#c0c7d1] opacity-60 mb-6 uppercase tracking-widest">RECENT ACCESS ATTEMPTS BY GEOLOCATION</p>
                    <div className="space-y-3 font-headline text-[10px] font-bold">
                       <div className="flex justify-between p-2 hover:bg-white/5 transition-colors">
                          <span className="text-emerald-500 tracking-[0.2em]">SUCCESS // TOKYO_NODE_4</span>
                          <span className="text-[#c0c7d1] opacity-40">2M AGO</span>
                       </div>
                       <div className="flex justify-between p-2 border-l-2 border-[#e9c349] bg-[#e9c349]/5 transition-colors">
                          <span className="text-white tracking-[0.2em]">REAUTHORIZE // ORBITAL_UPLINK</span>
                          <span className="text-[#c0c7d1] opacity-40">15M AGO</span>
                       </div>
                       <div className="flex justify-between p-2 hover:bg-white/5 transition-colors">
                          <span className="text-rose-500 tracking-[0.2em]">BLOCKED // UNKNOWN_PROXY</span>
                          <span className="text-[#c0c7d1] opacity-40">1H AGO</span>
                       </div>
                    </div>
                  </div>
                  <button className="mt-8 bg-white/5 py-4 font-headline text-[10px] font-black tracking-[0.3em] text-[#c0c7d1] hover:bg-red-500/10 hover:text-red-500 transition-all border border-transparent hover:border-red-500/20">
                    TERMINATE_ALL_SESSIONS
                  </button>
               </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

