import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#nosotros' },
    { name: 'Technology', href: '#tecnología' },
    { name: 'Portfolio', href: '#portafolio' },
    { name: 'Alliance', href: '#alianza' },
  ];

  const logoUrl = "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/newtec-logo-blanco.png";

  const LanguageSelector = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`flex items-center gap-4 ${mobile ? 'mt-12 justify-center' : 'ml-8 border-l border-white/20 pl-8'}`}>
      {/* ESPAÑOL - Vuelve al dominio principal .ar forzando la ventana superior */}
      <a 
        href="https://laboratorionewtec.com.ar" 
        target="_top"
        className="flex items-center gap-2 group transition-all cursor-pointer no-underline"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" 
          alt="Spanish" 
          className="w-4 h-4 object-cover rounded-full border border-white/20 group-hover:scale-110 transition-transform opacity-60 group-hover:opacity-100" 
        />
        <span className={`${mobile ? 'text-lg' : 'text-[10px]'} font-black text-white/40 group-hover:text-white tracking-widest`}>ES</span>
      </a>
      
      <span className="text-white/20 font-light select-none">|</span>
      
      {/* INGLÉS - Se mantiene en la versión de Vercel */}
      <a 
        href="https://en-newtec.vercel.app" 
        target="_top"
        className="flex items-center gap-2 group transition-all cursor-pointer no-underline"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg" 
          alt="English" 
          className="w-4 h-4 object-cover rounded-full border border-white/20 group-hover:scale-110 transition-transform" 
        />
        <span className={`${mobile ? 'text-lg' : 'text-[10px]'} font-black text-white group-hover:text-white tracking-widest`}>EN</span>
      </a>
    </div>
  );

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-3 bg-[#411e63] shadow-2xl' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="relative z-[120] flex-shrink-0">
          <a href="#"><img src={logoUrl} alt="Newtec Logo" className={`h-7 md:h-10 w-auto transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`} /></a>
        </motion.div>
        <nav className="hidden md:flex items-center ml-auto">
          <div className="flex items-center gap-10">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="text-[11px] font-black uppercase tracking-[0.22em] text-white/70 hover:text-white transition-all relative group">
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <LanguageSelector />
        </nav>
        <div className="flex md:hidden items-center relative z-[120]">
          <button className="text-white p-2 outline-none" onClick={() => setIsOpen(!isOpen)}>
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2.5' : 'w-6'}`}></span>
              <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
            </div>
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-[#411e63] z-[110] flex flex-col items-center justify-center overflow-hidden">
              <nav className="flex flex-col gap-8 text-center relative z-[115]">
                {menuItems.map((item, i) => (
                  <motion.a key={item.name} href={item.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} onClick={() => setIsOpen(false)} className="text-3xl font-black uppercase tracking-widest text-white active:text-purple-300">
                    {item.name}
                  </motion.a>
                ))}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                  <LanguageSelector mobile={true} />
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
