import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#411e63] pt-32 pb-12 px-6 mt-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32 relative z-10">
        <div className="lg:col-span-2">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            src="https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/newtec-logo-blanco.png" 
            alt="Newtec Logo" 
            className="h-10 mb-10 object-contain" 
          />
          <p className="text-purple-100/60 text-lg max-w-sm mb-12 leading-relaxed italic font-light">
            "Tecnología y Calidad: El ADN de un laboratorio que llegó para transformar la salud hospitalaria argentina."
          </p>

          {/* Sección: Nuestro Partner con Enlace */}
          <div className="mt-12 mb-12">
            <h5 className="text-[10px] font-black tracking-[0.4em] uppercase opacity-40 mb-6">Nuestro Partner</h5>
            <a 
              href="https://www.distribuidoragamma.com.ar/web/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                src="https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/logo-gamma-3-scaled.png" 
                alt="Distribuidora Gamma" 
                className="h-14 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all"
              />
            </a>
          </div>

          <div className="flex gap-4">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-purple-200">
              GCP Certified S.A.
            </span>
          </div>
        </div>

        <div>
          <h4 className="font-brand font-black text-xs mb-10 tracking-[0.4em] uppercase opacity-40">Navegación</h4>
          <ul className="space-y-6 text-purple-100/70 text-base font-semibold">
            {['Tecnología', 'Portafolio', 'Alianza', 'Sumate'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-all hover:translate-x-2 inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-brand font-black text-xs mb-10 tracking-[0.4em] uppercase opacity-40">Legal & Contacto</h4>
          <ul className="space-y-6 text-purple-100/70 text-base font-semibold">
            <li><a href="#" className="hover:text-white transition-all hover:translate-x-2 inline-block">Ética y Compliance</a></li>
            <li><a href="#" className="hover:text-white transition-all hover:translate-x-2 inline-block">Privacidad</a></li>
            <li><a href="mailto:info@newtec.com.ar" className="hover:text-white transition-all hover:translate-x-2 inline-block underline decoration-purple-500 underline-offset-8">info@newtec.com.ar</a></li>
            <li className="pt-6 text-white/90 font-black tracking-wider text-sm">Buenos Aires, Argentina</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black tracking-[0.5em] uppercase opacity-30">
        <p>&copy; {currentYear} LABORATORIO IBERO AMERICANO S.A. TODOS LOS DERECHOS RESERVADOS.</p>
        <p className="text-center md:text-right">DISEÑADO POR IT - LABORATORIO IBERO AMERICANO S.A.</p>
      </div>
    </footer>
  );
};
