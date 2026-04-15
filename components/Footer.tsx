import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-24 pb-12 px-6 relative overflow-hidden bg-transparent">
      {/* Grid configured for 4 columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32 relative z-10">
        
        {/* Column 1: Institutional Identity */}
        <div>
          <div className="mb-10">
            <h3 className="font-brand font-black text-[20px] leading-[1.2] tracking-tighter text-white uppercase">
              Laboratorio <br className="hidden md:block" />
              <span className="whitespace-nowrap">Ibero Americano S.A.</span>
            </h3>
          </div>
          <p className="text-purple-100/60 text-base leading-relaxed italic font-light">
            "Technology and Quality: The DNA of a laboratory established to transform Argentine hospital healthcare."
          </p>
          <div className="mt-8">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-purple-200">
              GCP Certified S.A.
            </span>
          </div>
        </div>

        {/* Column 2: Our Partner */}
        <div>
          <h4 className="font-brand font-black text-xs mb-10 tracking-[0.4em] uppercase opacity-40">Our Partner</h4>
          <a 
            href="https://www.distribuidoragamma.com.ar/web/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block group"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src="https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/logo-gamma-3-scaled.png" 
              alt="Distribuidora Gamma" 
              className="h-[2.3rem] w-auto object-contain opacity-80 group-hover:opacity-100 transition-all drop-shadow-lg"
            />
          </a>
        </div>

        {/* Column 3: Navigation */}
        <div>
          <h4 className="font-brand font-black text-xs mb-10 tracking-[0.4em] uppercase opacity-40">Navigation</h4>
          <ul className="space-y-6 text-purple-100/70 text-base font-semibold">
            {[
              { name: 'About Us', id: 'nosotros' },
              { name: 'Technology', id: 'tecnología' },
              { name: 'Portfolio', id: 'portafolio' },
              { name: 'Alliance', id: 'alianza' }
            ].map(item => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-white transition-all hover:translate-x-2 inline-block">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Legal and contact */}
        <div>
          <h4 className="font-brand font-black text-xs mb-10 tracking-[0.4em] uppercase opacity-40">Legal & Contact</h4>
          <ul className="space-y-6 text-purple-100/70 text-base font-semibold">
            <li>
              <a 
                href="mailto:info@laboratorionewtec.com.ar" 
                className="hover:text-white transition-all hover:translate-x-2 inline-block underline decoration-purple-500 underline-offset-8"
              >
                info@laboratorionewtec.com.ar
              </a>
            </li>
            <li className="pt-6 text-white/90 font-black tracking-wider text-sm leading-relaxed">
              Tandil, Buenos Aires,<br />
              Argentina
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black tracking-[0.5em] uppercase opacity-30">
        <p>&copy; {currentYear} LABORATORIO IBERO AMERICANO S.A. - ALL RIGHTS RESERVED.</p>
        <p className="text-center md:text-right">DESIGNED BY IT - LABORATORIO IBERO AMERICANO S.A.</p>
      </div>
    </footer>
  );
};
