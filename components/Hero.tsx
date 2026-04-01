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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center max-w-7xl pt-10"
      >
        {/* Título Institucional con Línea Divisoria */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
          <h1 className="font-brand text-[10vw] md:text-[4rem] lg:text-[5.5rem] font-black uppercase leading-none tracking-tighter text-white/90">
            Laboratorio
          </h1>
          
          {/* Línea Divisoria Fina */}
          <div className="hidden md:block w-[1px] h-20 lg:h-28 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
          <div className="block md:hidden w-20 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

          <h1 className="font-brand text-[10vw] md:text-[4rem] lg:text-[5.5rem] font-black uppercase leading-none tracking-tighter text-white">
            Ibero Americano
          </h1>
        </div>

        {/* ESTRUCTURA: Logo Newtec Completo con Efecto de Brillo */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center justify-center mb-16"
        >
          <div className="relative group cursor-pointer">
            {/* Resplandor de fondo al hacer hover */}
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 scale-150"></div>
            
            {/* Contenedor del Logo con Efecto Shine */}
            <div className="relative overflow-hidden group">
              <img 
                src="https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/04/blanco-newtec-logo-completo.png" 
                alt="Newtec Logo Completo" 
                className="h-10 xs:h-12 md:h-16 lg:h-20 object-contain relative z-10 transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              />
              
              {/* Brillo que recorre el logo (Efecto Atrapante) */}
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 2 }}
                className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 pointer-events-none"
              />
            </div>

            {/* Slogan debajo del logo */}
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="mt-6 block text-[3.5vw] md:text-xl font-light italic tracking-[0.3em] text-purple-200/60 uppercase"
            >
              Tecnología & calidad
            </motion.span>
          </div>
        </motion.div>

        {/* Bajada */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-[18px] md:text-xl font-light text-purple-100/70 max-w-3xl mx-auto mb-16 leading-relaxed px-4"
        >
          Llegamos para redefinir los estándares de la industria farmacéutica hospitalaria con la tecnología más moderna de la región.
        </motion.p>

        {/* Botón */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
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
