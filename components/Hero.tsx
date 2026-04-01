import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center items-center px-4 overflow-hidden bg-transparent pt-20">
      {/* Background Dinámico - Optimizado */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center max-w-7xl mx-auto"
      >
        {/* TÍTULO PRINCIPAL: Jerarquía Máxima */}
        <h1 className="font-brand text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[6rem] xl:text-[7.5rem] font-black leading-[0.95] tracking-tighter uppercase mb-8 md:mb-10">
          Laboratorio <br />
          <span className="text-white">Ibero Americano</span>
        </h1>

        {/* ESTRUCTURA CENTRAL: Newtec + Slogan */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col items-center gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {/* Logo Newtec: Ahora como protagonista central */}
          <div className="relative group">
            <div className="absolute inset-0 bg-purple-400/20 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <img 
              src="https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/newtec-logo-blanco.png" 
              alt="Newtec" 
              className="h-7 xs:h-8 md:h-10 lg:h-12 w-auto object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            />
          </div>

          {/* Slogan: Tecnología & calidad */}
          <div className="overflow-hidden">
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-[3.5vw] xs:text-[14px] md:text-lg lg:text-xl font-light italic tracking-[0.2em] md:tracking-[0.4em] text-purple-200/60 uppercase block"
            >
              Tecnología & calidad
            </motion.span>
          </div>
        </motion.div>

        {/* BAJADA: Redefiniendo estándares */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="text-[16px] xs:text-[18px] md:text-xl lg:text-xl font-light text-purple-100/70 max-w-2xl lg:max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed px-4"
        >
          Llegamos para redefinir los estándares de la industria farmacéutica hospitalaria con la tecnología más moderna de la región.
        </motion.p>

        {/* CTA: Botón */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6 }}
          className="flex justify-center"
        >
          <a 
            href="#portafolio" 
            className="group relative px-8 py-4 md:px-14 md:py-6 bg-white text-[#411e63] font-black text-xs md:text-sm lg:text-base rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all hover:shadow-white/20 hover:scale-105 active:scale-95 tracking-[0.2em] uppercase"
          >
            <span className="relative z-10">Descubrí nuestro portfolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </motion.div>
      </motion.div>

      {/* Decoración de scroll sutil */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 hidden md:block"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};
