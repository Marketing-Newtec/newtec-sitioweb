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
        {/* BLOQUE PRINCIPAL: TÍTULO | LOGO */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-10 md:mb-14 px-4">
          {/* Nombre Institucional */}
          <h1 className="font-brand text-[8vw] xs:text-[2.5rem] md:text-5xl lg:text-[4rem] xl:text-[5rem] font-black leading-[1.1] tracking-tighter uppercase text-white text-center md:text-right">
            Laboratorio <br className="hidden md:block" />
            Ibero Americano
          </h1>

          {/* Línea Divisoria Vertical (Solo en Desktop) */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "120px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hidden md:block w-[1.5px] bg-white/20 self-center"
          />

          {/* Línea Divisoria Horizontal (Solo en Móvil) */}
          <div className="md:hidden w-20 h-[1.5px] bg-white/20" />

          {/* Logo Newtec Nivelado */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img 
              src="https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/04/blanco-newtec-logo-completo.png" 
              alt="Newtec Logo Institucional" 
              className="h-10 xs:h-12 md:h-16 lg:h-20 xl:h-24 w-auto object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Bajada: Inter 20px - Texto actualizado */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="font-sans text-[18px] md:text-[20px] font-light text-purple-100/80 max-w-4xl mx-auto mb-12 md:mb-20 leading-relaxed px-6 md:px-0"
        >
          Llegamos para redefinir los estándares de la industria farmacéutica hospitalaria con la tecnología más moderna de la región.
        </motion.p>

        {/* Botón de Acción */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center"
        >
          <a 
            href="#portafolio" 
            className="group relative px-8 py-4 md:px-14 md:py-6 bg-white text-[#592B82] font-black text-sm md:text-base rounded-2xl overflow-hidden shadow-2xl transition-all hover:shadow-white/20 hover:scale-105 active:scale-95 tracking-[0.15em] uppercase"
          >
            <span className="relative z-10">Explorar Portfolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
