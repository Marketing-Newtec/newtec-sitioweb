
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[110vh] flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-purple-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center max-w-6xl"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-block px-5 py-2 mb-10 rounded-full border border-white/20 glass-card text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-purple-100"
        >
          Argentina • España • Calidad Superior
        </motion.div>
        
        <h1 className="font-brand text-7xl md:text-9xl lg:text-[10rem] font-black mb-10 leading-[0.85] tracking-tighter">
          NUEVA <br />
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-white/40 inline-block text-glow"
          >
            ERA
          </motion.span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-xl md:text-3xl font-light text-purple-100/80 max-w-4xl mx-auto mb-16 leading-relaxed px-4"
        >
          Llegamos para redefinir los estándares de la industria hospitalaria con la tecnología más moderna de la región.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          <a 
            href="#portafolio" 
            className="group relative px-12 py-6 bg-white text-[#592B82] font-black text-xl rounded-2xl overflow-hidden shadow-2xl transition-all hover:shadow-white/20 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">DESCUBRÍ NEWTEC</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <p className="text-xs font-bold tracking-[0.3em] text-purple-200/50 uppercase border-b border-white/10 pb-1">
            "Tecnología y Calidad"
          </p>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-20 bg-gradient-to-b from-white to-transparent opacity-30"></div>
      </motion.div>
    </section>
  );
};
