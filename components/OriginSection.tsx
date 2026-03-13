
import React from 'react';
import { motion } from 'framer-motion';

export const OriginSection: React.FC = () => {
  return (
    <section id="alianza" className="py-48 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-purple-500/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 relative z-10">
        <div className="lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-6 mb-12"
          >
            {/* Argentina Flag representation */}
            <motion.div 
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex flex-col w-24 h-14 rounded-xl overflow-hidden shadow-2xl border border-white/20 aura-glow"
            >
              <div className="bg-[#74ACDF] h-1/3"></div>
              <div className="bg-white h-1/3 flex items-center justify-center text-xs">☀️</div>
              <div className="bg-[#74ACDF] h-1/3"></div>
            </motion.div>

            {/* Spain Flag representation */}
            <motion.div 
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex flex-col w-24 h-14 rounded-xl overflow-hidden shadow-2xl border border-white/20 aura-glow"
            >
              <div className="bg-[#C60B1E] h-1/4"></div>
              <div className="bg-[#FFC400] h-1/2 flex items-center justify-center">
                <img 
                  src="URL_DE_TU_IMAGEN_EN_WORDPRESS" 
                  alt="Escudo de España" 
                  className="h-full w-auto py-0.5 object-contain"
                />
              </div>
              <div className="bg-[#C60B1E] h-1/4"></div>
            </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-brand font-black mb-10 leading-[0.9] tracking-tighter uppercase"
          >
            Una alianza <br /><span className="text-purple-300/80">sin fronteras.</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <p className="text-2xl text-purple-100/90 font-light leading-relaxed italic">
              Orgullosamente impulsados por capitales argentinos y españoles.
            </p>
            <p className="text-lg text-purple-100/60 font-normal leading-relaxed max-w-xl">
              Esta sinergia nos permite combinar la visión estratégica europea con la pujanza y el talento profesional argentino. Newtec es la materialización de un compromiso compartido por elevar la calidad farmacéutica en toda la región.
            </p>
          </motion.div>
        </div>

        <div className="lg:w-1/2 relative group">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-10 aura-glow rounded-[4rem] overflow-hidden border border-white/10"
          >
            {/* High-quality laboratory visualization with "aura" */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#592B82]/80 via-transparent to-transparent z-10"></div>
            <img 
              src="https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/laboratorio-ibero-americano-newtec.png" 
              alt="Instalaciones de vanguardia Newtec-laboratorio" 
              className="w-full h-[600px] object-cover transition-transform duration-[3s] group-hover:scale-110" 
            />
            {/* Stylized flag mast representation in overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/40 backdrop-blur-sm">
               <div className="text-center">
                  <div className="text-6xl mb-4">🇦🇷 🇪🇸</div>
                  <p className="text-white font-brand font-black tracking-widest uppercase">Calidad Global</p>
               </div>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -bottom-16 -right-10 bg-white p-12 rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] z-20 hidden md:block"
          >
            <p className="text-[#592B82] font-brand font-black text-4xl italic leading-none">
              "Tecnología <br />y Calidad"
            </p>
          </motion.div>
          
          {/* Aura effect behind image */}
          <div className="absolute -inset-10 bg-purple-500/20 blur-[100px] -z-10 group-hover:bg-purple-500/30 transition-colors"></div>
        </div>
      </div>
    </section>
  );
};
