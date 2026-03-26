import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] md:min-h-[110vh] flex flex-col justify-center items-center px-6 overflow-hidden bg-transparent">
      {/* Background Dinámico */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-purple-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl lg:max-w-6xl pt-20"
      >
        {/* Título Institucional: Reducido un 15% respecto al original */}
        <h1 className="font-brand text-[10vw] xs:text-5xl md:text-7xl lg:text-[4.5rem] xl:text-[6.5rem] font-black mb-4 leading-[1.1] md:leading-[0.9] tracking-tighter uppercase">
          Laboratorio <br />
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-white inline-block"
          >
            Ibero Americano
          </motion.span>
        </h1>

        {/* Línea de Producto y Logo: 34px en Desktop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12"
        >
          <span className="text-2xl md:text-[34px] font-brand font-black uppercase tracking-tighter text-white/90">
            Productos
          </span>
          <img 
            src="https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/newtec-logo-blanco.png" 
            alt="Newtec Logo" 
            className="h-7 md:h-10 lg:h-12 object-contain"
          />
          <span className="text-2xl md:text-[34px] font-light tracking-tighter text-purple-200/80">
            — Tecnología & calidad
          </span>
        </motion.div>

        {/* Bajada con texto farmacéutico actualizado */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-lg md:text-xl lg:text-lg xl:text-xl font-light text-purple-100/70 max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed"
        >
          Llegamos para redefinir los estándares de la industria farmacéutica hospitalaria con la tecnología más moderna de la región.
        </motion.p>

        {/* Botón con texto corregido y fuente optimizada */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center"
        >
          <a 
            href="#portafolio" 
            className="group relative px-8 py-4 md:px-12 md:py-5 bg-white text-[#592B82] font-black text-sm md:text-base rounded-2xl overflow-hidden shadow-2xl transition-all hover:shadow-white/20 hover:scale-105 active:scale-95 tracking-widest uppercase"
          >
            <span className="relative z-10">Descubrí los productos Newtec</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
