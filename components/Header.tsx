import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '#' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Tecnología', href: '#tecnología' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Alianza', href: '#alianza' },
  ];

  const logoUrl = "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/newtec-logo-blanco.png";

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-[#411e63] shadow-2xl' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        
        {/* Logo Newtec - Alineado a la izquierda */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative z-[120] flex-shrink-0"
        >
          <a href="#">
            <img 
              src={logoUrl} 
              alt="Newtec Logo" 
              className={`h-7 md:h-10 w-auto transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}
            />
          </a>
        </motion.div>

        {/* Desktop Menu - Distribuido hacia la derecha y tipografía +8% */}
        <nav className="hidden md:flex items-center gap-10 ml-auto">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[11px] font-black uppercase tracking-[0.22em] text-white/70 hover:text-white transition-all relative group"
            >
              {item.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center relative z-[120]">
          <button 
            className="text-white p-2 outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2.5' : 'w-6'}`}></span>
              <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay - Fondo sólido y limpio */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#411e63] z-[110] flex flex-col items-center justify-center overflow-hidden"
            >
              {/* Navegación móvil sin logo de fondo */}
              <nav className="flex flex-col gap-10 text-center relative z-[115]">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-black uppercase tracking-widest text-white active:text-purple-300"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
