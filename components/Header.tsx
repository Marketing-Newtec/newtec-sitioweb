import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Tecnología', href: '#tecnología' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Alianza', href: '#alianza' },
    { name: 'Nosotros', href: '#nosotros' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'py-3 md:py-4 bg-[#411e63]/90 backdrop-blur-md border-b border-white/10 shadow-xl' 
          : 'py-6 md:py-10 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo: Reducción proporcional en móvil al hacer scroll */}
        <motion.a 
          href="#"
          className="relative z-50 flex items-center"
        >
          <img 
            src="https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/newtec-logo-blanco.png" 
            alt="Newtec Logo" 
            className={`transition-all duration-500 object-contain ${
              scrolled ? 'h-7 md:h-10' : 'h-8 md:h-12'
            }`}
          />
        </motion.a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {menuItems.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 hover:text-white transition-all relative group"
            >
              {item.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Toggle: Alineación centrada verticalmente */}
        <button 
          className="md:hidden relative z-50 text-white p-2 -mr-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#411e63] z-40 flex flex-col items-center justify-center gap-10"
            >
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-brand font-black uppercase tracking-[0.2em] text-white hover:text-purple-300 transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
