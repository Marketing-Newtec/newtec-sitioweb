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
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-[#411e63] shadow-2xl' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a href="#" className="relative z-[110]">
          <img 
            src="https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/newtec-logo-blanco.png" 
            alt="Newtec Logo" 
            className={`transition-all duration-500 object-contain ${scrolled ? 'h-7' : 'h-8'}`}
          />
        </motion.a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
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

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-[110] text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span className={`h-0.5 bg-white transition-all ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`h-0.5 bg-white transition-all ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
          </div>
        </button>

        {/* Mobile Menu Overlay Corregido */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#411e63] z-[105] flex flex-col items-center justify-center gap-12"
            >
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-brand font-black uppercase tracking-widest text-white active:text-purple-300"
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
