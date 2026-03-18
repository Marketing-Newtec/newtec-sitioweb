import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  const pillars = [
    { title: "Misión", desc: "Transformar la salud hospitalaria mediante tecnología de vanguardia y procesos de máxima pureza." },
    { title: "Visión", desc: "Ser el referente regional en producción de antibióticos estériles, liderando la innovación farmacéutica." },
    { title: "Valores", desc: "Rigurosidad analítica, compromiso ético y excelencia en cada lote producido." }
  ];

  return (
    <section id="nosotros" className="py-24 md:py-40 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          {pillars.map((item, i) => (
            <div key={item.title} className="relative p-10 glass-card rounded-[3rem] border border-white/10 hover:border-purple-500/50 transition-colors group">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase opacity-30 mb-6 block">0{i + 1}</span>
              <h3 className="text-3xl font-brand font-black mb-6 uppercase text-purple-300 group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-purple-100/60 text-lg font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
