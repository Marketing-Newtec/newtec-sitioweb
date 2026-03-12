
import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#592B82]/80 backdrop-blur-xl py-3 shadow-2xl' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <a href="#" className="block transition-transform hover:scale-105 active:scale-95">
            <img 
              src="https://storage.googleapis.com/replit/images/1739324072671_6846f48f43063f92ed191ce6b41f71a7.png" 
              alt="Newtec Logo" 
              className="h-9 md:h-11 object-contain filter drop-shadow-lg"
              loading="eager"
            />
          </a>
        </motion.div>
        
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-[0.2em] uppercase"
        >
          {['Tecnología', 'Portafolio', 'Alianza'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="relative group py-2"
            >
              <span className="hover:text-purple-200 transition-colors">{item}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a href="#rrhh" className="px-7 py-2.5 bg-white text-[#592B82] rounded-full hover:bg-purple-100 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-white/10 font-black">
            SUMATE
          </a>
        </motion.nav>
      </div>
    </header>
  );
};
