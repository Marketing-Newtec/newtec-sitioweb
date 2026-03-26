import React from 'react';
import { motion } from 'framer-motion';

export const OriginSection: React.FC = () => {
  return (
    <section id="alianza" className="py-24 md:py-48 px-6 relative overflow-hidden bg-transparent">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-purple-500/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Contenedor de Banderas */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 md:gap-6 mb-8 md:mb-12 justify-center lg:justify-start"
          >
            {/* Argentina Flag */}
            <motion.div 
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex flex-col w-16 h-10 md:w-24 md:h-14 rounded-lg md:rounded-xl overflow-hidden shadow-2xl border border-white/20 aura-glow bg-white/5"
            >
              <div className="bg-[#74ACDF] h-1/3"></div>
              <div className="bg-white h-1/3 flex items-center justify-center text-[8px] md:text-xs">☀️</div>
              <div className="bg-[#74ACDF] h-1/3"></div>
            </motion.div>

            {/* Spain Flag */}
            <motion.div 
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex flex-col w-16 h-10 md:w-24 md:h-14 rounded-lg md:rounded-xl overflow-hidden shadow-2xl border border-white/20 aura-glow bg-white/5"
            >
              <div className="bg-[#C60B1E] h-1/4"></div>
              <div className="bg-[#FFC400] h-1/2 flex items-center justify-center">
                <img 
                  src="https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/escudo-espana.png" 
                  alt="Alianza estratégica España - Newtec" 
                  className="h-full w-auto py-0.5 object-contain"
                />
              </div>
              <div className="bg-[#C60B1E] h-1/4"></div>
            </motion.div>
          </motion.div>

          {/* Título SEO Optimized */}
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10vw] xs:text-5xl md:text-7xl lg:text-6xl xl:text-8xl font-brand font-black mb-8 md:mb-10 leading-[0.9] tracking-tighter uppercase"
          >
            Una alianza <br /><span className="text-purple-300/80 font-black">sin fronteras.</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6 md:space-y-8 flex flex-col items-center lg:items-start"
          >
            {/* Bajada con estilo Italic */}
            <p className="text-xl md:text-2xl lg:text-xl xl:text-2xl text-purple-100/90 font-light leading-relaxed italic max-w-2xl">
              Orgullosamente impulsados por capitales argentinos y españoles.
            </p>

            {/* Texto Nuevo Puramente Tipográfico */}
            <div className="text-base md:text-lg text-purple-100/60 font-normal leading-relaxed max-w-xl">
              <p className="mb-6">
                Esta sinergia nos permite integrar visión estratégica, capacidad industrial y experiencia técnica.
              </p>
              <p>
                Con los productos <span className="text-white font-bold">Newtec</span> materializamos un compromiso orientado a elevar los estándares de calidad farmacéutica en la región.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bloque de Imagen y Decoración */}
        <div className="lg:w-1/2 w-full relative group">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-10 aura-glow rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#592B82]/80 via-transparent to-transparent z-10"></div>
            <img 
              src="https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/laboratorio-ibero-americano-newtec.png" 
              alt="Instalaciones industriales farmacéuticas Laboratorio Ibero Americano Newtec" 
              className="w-full h-[350px] md:h-[600px] object-cover transition-transform duration-[3s] group-hover:scale-110" 
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/40 backdrop-blur-sm">
               <div className="text-center">
                  <div className="text-4xl md:text-6xl mb-4">🇦🇷 🇪🇸</div>
                  <p className="text-white text-xs md:text-sm font-brand font-black tracking-widest uppercase">Calidad Farmacéutica Global</p>
               </div>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -bottom-8 -right-2 md:-bottom-16 md:-right-10 bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] z-20 hidden xs:block"
          >
            <p className="text-[#592B82] font-brand font-black text-xl md:text-4xl italic leading-none uppercase">
              Tecnología <br />y Calidad
            </p>
          </motion.div>
          
          <div className="absolute -inset-10 bg-purple-500/20 blur-[100px] -z-10 group-hover:bg-purple-500/30 transition-colors"></div>
        </div>
      </div>
    </section>
  );
};
