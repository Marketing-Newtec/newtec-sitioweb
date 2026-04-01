import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center items-center px-4 overflow-hidden bg-transparent">
      {/* Background Dinámico */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-purple-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center max-w-7xl pt-10"
      >
        {/* FILA UNIFICADA: Laboratorio Ibero Americano | Logo Newtec */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12 lg:mb-16">
          
          {/* Nombre Institucional - Tamaño reducido solicitado */}
          <h1 className="font-brand text-[8vw] md:text-[2.5rem] lg:text-[3.2rem] xl:text-[3.8rem] font-black uppercase leading-[1.1] tracking-tighter text-white text-center md:text-right">
            Laboratorio <br />
            <span className="text-white/90">Ibero Americano</span>
          </h1>
          
          {/* Línea Divisoria Fina */}
          <div className="hidden md:block w-[1px] h-20 lg:h-24 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
          <div className="block md:hidden w-24 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

          {/* Logo Newtec - Sin efectos de zoom ni brillo */}
          <div className="relative">
            <img 
              src="https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/04/blanco-newtec-logo-completo.png" 
              alt="Newtec Logo Completo" 
              className="h-9 xs:h-10 md:h-14 lg:h-16 xl:h-18 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            />
          </div>
        </div>

        {/* BAJADA: Estilo unificado (Nuestra fortaleza reside...) */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-[16px] md:text-[18px] lg:text-[20px] font-light tracking-[0.02em] text-white/70 max-w-4xl mx-auto mb-16 leading-relaxed px-4"
        >
          Llegamos para redefinir los estándares de la industria farmacéutica hospitalaria con la tecnología más moderna de la región.
        </motion.p>

        {/* BOTÓN CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center"
        >
          <a 
            href="#portafolio" 
            className="group relative px-10 py-5 md:px-14 md:py-6 bg-white text-[#411e63] font-black text-sm md:text-base rounded-full overflow-hidden shadow-2xl transition-all hover:shadow-white/20 hover:scale-105 active:scale-95 tracking-[0.2em] uppercase"
          >
            <span className="relative z-10">Descubrí nuestro portfolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
