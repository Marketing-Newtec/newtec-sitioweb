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
        className="relative z-10 text-center max-w-4xl lg:max-w-6xl pt-10 md:pt-20"
      >
        {/* Título Institucional - Restaurado */}
        <h1 className="font-brand text-[9.5vw] xs:text-[2.8rem] md:text-7xl lg:text-[4.5rem] xl:text-[6.5rem] font-black mb-6 leading-[1.2] md:leading-[1.15] tracking-tighter uppercase">
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

        {/* ESTRUCTURA: Newtec + Slogan (Sin la palabra Productos) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center justify-center mb-10 md:mb-16 whitespace-nowrap"
        >
          {/* Fila única: Logo Newtec centrado y con presencia */}
          <div className="flex flex-row items-center justify-center mb-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-white/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img 
                src="https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/newtec-logo-blanco.png" 
                alt="Newtec Logo" 
                className="h-7 xs:h-8 md:h-10 lg:h-11 object-contain relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
              />
            </div>
          </div>
          
          {/* Fila 2: Tecnología & calidad (Debajo, en Italic) */}
          <div className="flex flex-row items-center justify-center">
            <span className="text-[3.5vw] md:text-xl font-light italic tracking-[0.1em] md:tracking-[0.2em] text-purple-200/80">
              Tecnología & calidad
            </span>
          </div>
        </motion.div>

        {/* Bajada: Redefiniendo estándares */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-[18px] md:text-xl lg:text-lg xl:text-xl font-light text-purple-100/70 max-w-3xl mx-auto mb-12 md:mb-20 leading-relaxed px-4 md:px-0"
        >
          Llegamos para redefinir los estándares de la industria farmacéutica hospitalaria con la tecnología más moderna de la región.
        </motion.p>

        {/* Botón */}
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
            <span className="relative z-10">Descubrí nuestro portfolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
