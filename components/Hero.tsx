import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] md:min-h-[110vh] flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-purple-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl lg:max-w-5xl"
      >
        {/* Título: Reducido para laptops de 15" (breakpoint lg y xl) */}
        <h1 className="font-brand text-[12vw] xs:text-6xl md:text-8xl lg:text-[5.5rem] xl:text-[7.5rem] 2xl:text-[9rem] font-black mb-6 md:mb-10 leading-[1.1] md:leading-[0.95] tracking-tighter">
          INNOVACIÓN <br />
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-white/40 inline-block text-glow pt-3 md:pt-4"
          >
            MÉDICA
          </motion.span>
        </h1>

        {/* Bajada: Más compacta para no saturar la pantalla de 15" */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-lg md:text-xl lg:text-lg xl:text-xl font-light text-purple-100/80 max-w-2xl mx-auto mb-10 md:mb-16 leading-relaxed px-2 md:px-4"
        >
          Llegamos para redefinir los estándares de la industria hospitalaria con la tecnología más moderna de la región.
        </motion.p>

        {/* Botón */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center items-center"
        >
          <a 
            href="#portafolio" 
            className="group relative px-8 py-4 md:px-10 md:py-5 lg:px-11 lg:py-5 bg-white text-[#592B82] font-black text-lg rounded-2xl overflow-hidden shadow-2xl transition-all hover:shadow-white/20 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">DESCUBRÍ NEWTEC</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
