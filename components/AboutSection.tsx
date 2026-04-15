import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  const values = [
    { 
      id: 1, 
      title: "PEOPLE AND WORK\nENVIRONMENT", 
      desc: "We put people at the center, promoting a respectful, collaborative, and professional work environment that makes our laboratory an excellent place to work." 
    },
    { 
      id: 2, 
      title: "HUMAN TEAM\nAND TECHNICAL EXCELLENCE", 
      desc: "We believe in the excellence of teams, integrating technical talent and human quality to build a committed and reliable professional group." 
    },
    { 
      id: 3, 
      title: "QUALITY AND\nRIGOROUS PROCESSES", 
      desc: "We work with rigorous and efficient quality processes, ensuring high standards at every stage of development." 
    },
    { 
      id: 4, 
      title: "FACILITIES AND\nTECHNOLOGY", 
      desc: "We have modern and efficient facilities, equipped with technologies aligned with the highest current global pharmaceutical industry standards." 
    },
    { 
      id: 5, 
      title: "INTEGRITY AND\nRELIABILITY", 
      desc: "We act with integrity, responsibility, and transparency, maintaining quality as the foundation of our medicines' reliability." 
    },
    { 
      id: 6, 
      title: "INNOVATION WITH\nCLINICAL PURPOSE", 
      desc: "We drive responsible and applied innovation, aimed at generating real clinical improvements and providing concrete value to the healthcare system." 
    }
  ];

  return (
    <section id="nosotros" className="relative overflow-hidden bg-white/5">
      {/* UPPER SECTION: MISSION & VISION */}
      <div className="py-24 md:py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-14 rounded-[3rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group transition-all duration-500 hover:bg-white/10"
          >
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-purple-400 mb-6 block">Institutional</span>
            <h3 className="text-4xl md:text-5xl font-brand font-black mb-8 uppercase text-white group-hover:text-purple-300 transition-colors">Mission</h3>
            <p className="text-purple-100/70 text-lg font-light leading-relaxed">
              To develop, produce, and market high-quality medicines for the hospital market at fair prices, with rigorous quality control processes, a strong commitment to the people who make up our team, and innovation focused on generating real clinical improvements.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-14 rounded-[3rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group transition-all duration-500 hover:bg-white/10"
          >
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-purple-400 mb-6 block">Strategy</span>
            <h3 className="text-4xl md:text-5xl font-brand font-black mb-8 uppercase text-white group-hover:text-purple-300 transition-colors">Vision</h3>
            <p className="text-purple-100/70 text-lg font-light leading-relaxed">
              To be a leading pharmaceutical laboratory in the hospital market, recognized for the quality of its products, the strength of its processes, and its capacity to innovate, developing solutions that provide concrete improvements in the quality and rational use of medicines, reaching all of Argentina and projecting our expansion abroad.
            </p>
          </motion.div>
        </div>
      </div>

      {/* LOWER SECTION: VALUES */}
      <div className="relative py-24 md:py-40 px-6">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-20"
          style={{ 
            backgroundImage: `url('https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/5H2A4873-scaled.jpg')`,
          }}
        ></div>
        
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#411e63]/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h3 className="text-3xl md:text-5xl font-brand font-black uppercase text-white tracking-tighter">
              Core <span className="text-purple-300/80">Values</span>
            </h3>
          </motion.div>

          {/* Values Grid: 3 columns LG, 2 MD, 1 Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div 
                key={val.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-purple-500/20 hover:border-white/20 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="text-white font-brand font-black text-3xl mb-4 group-hover:text-purple-400 transition-colors">
                  {val.id}
                </div>
                <h4 className="text-white font-brand font-black text-[14px] mb-4 leading-tight uppercase tracking-wider group-hover:text-purple-200 transition-colors whitespace-pre-line">
                  {val.title}
                </h4>
                <p className="text-purple-100/60 text-[16px] font-light leading-relaxed group-hover:text-purple-100/90 transition-colors">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
