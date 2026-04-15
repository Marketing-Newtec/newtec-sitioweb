import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] md:min-h-[110vh] flex flex-col justify-center items-center px-4 overflow-hidden bg-transparent">
      {/* Background Dinámico */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-purple-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center max-w-7xl pt-10 md:pt-20"
      >
        {/* BLOQUE CENTRAL: LOGO + LEYENDA SUTIL */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center mb-16 md:mb-20 px-4"
        >
          {/* Logo Newtec */}
          <div className="relative group mb-8 md:mb-10">
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img 
              src="https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/newtec-logo-blanco.png" 
              alt="Newtec" 
              className="h-14 xs:h-16 md:h-24 lg:h-32 xl:h-40 w-auto object-contain relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Leyenda Institucional Refinada */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-brand text-[14px] md:text-[18px] lg:text-[20px] text-white tracking-normal leading-normal text-center"
          >
            <span className="opacity-60">A brand of</span> <br className="md:hidden" />
            <span className="uppercase ml-1">Laboratorio Ibero Americano S.A.</span>
          </motion.h1>
        </motion.div>

        {/* Bajada con CSS de "Nuestra fortaleza..." */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-[18px] md:text-xl lg:text-lg xl:text-xl font-light text-purple-100/70 max-w-3xl mx-auto mb-12 md:mb-20 leading-relaxed px-4 md:px-0"
        >
          We have arrived to redefine the standards of the hospital pharmaceutical industry with the most state-of-the-art technology in the region.
        </motion.p>

        {/* Botón: Descubrí nuestro portfolio */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center"
        >
          <a 
            href="#portafolio" 
            className="group relative px-6 py-4 md:px-12 md:py-6 bg-white text-[#592B82] font-black text-[13px] xs:text-sm md:text-base rounded-2xl overflow-hidden shadow-2xl transition-all hover:shadow-white/20 hover:scale-105 active:scale-95 tracking-[0.15em] uppercase whitespace-nowrap"
          >
            <span className="relative z-10">Discover our portfolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
