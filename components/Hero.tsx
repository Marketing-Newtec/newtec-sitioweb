/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center items-center px-4 overflow-hidden bg-transparent pt-10">
      {/* Background Dinámico */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-purple-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center max-w-7xl"
      >
        {/* BLOQUE DE MARCA: Aumentado para mayor impacto en Desktop */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-16 lg:mb-20">
          
          {/* Nombre Institucional */}
          <h1 className="font-brand text-[9vw] md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem] font-black uppercase leading-[1] tracking-tighter text-white text-center md:text-right">
            Laboratorio <br />
            <span className="text-white/95">Ibero Americano</span>
          </h1>
          
          {/* Línea Divisoria Fina - Más alta en desktop */}
          <div className="hidden md:block w-[1.5px] h-24 lg:h-32 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
          <div className="block md:hidden w-24 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

          {/* Logo Newtec - Aumentado un 15% para balancear */}
          <div className="relative">
            <img 
              src="https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/04/blanco-newtec-logo-completo.png" 
              alt="Newtec Logo Completo" 
              className="h-12 xs:h-14 md:h-16 lg:h-20 xl:h-24 object-contain relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            />
          </div>
        </div>

        {/* BAJADA: Aumentada un 10% y con estilo de fortaleza */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-light tracking-wide text-white/70 max-w-5xl mx-auto mb-16 lg:mb-20 leading-relaxed px-4"
        >
          Llegamos para redefinir los estándares de la industria farmacéutica hospitalaria con la tecnología más moderna de la región.
        </motion.p>

        {/* BOTÓN CTA: Puntas menos redondeadas (rounded-lg) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center"
        >
          <a 
            href="#portafolio" 
            className="group relative px-10 py-5 md:px-16 md:py-7 bg-white text-[#411e63] font-black text-sm md:text-base lg:text-lg rounded-lg overflow-hidden shadow-2xl transition-all hover:shadow-white/20 hover:scale-105 active:scale-95 tracking-[0.2em] uppercase"
          >
            <span className="relative z-10">Descubrí nuestro portfolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
