import React from 'react';
import { motion } from 'framer-motion';

export const ProductSection: React.FC = () => {
  return (
    <section id="portafolio" className="py-24 md:py-40 px-6 overflow-hidden bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-32"
        >
          {/* Título: Ajustado para Móvil, Laptop (1440px) y Desktop */}
          <h2 className="text-4xl md:text-7xl lg:text-6xl xl:text-8xl font-brand font-black mb-6 md:mb-8 uppercase tracking-tighter leading-none">
            Nuestro <br className="md:hidden" /> Portafolio
          </h2>
          
          {/* Bajada: Más legible en todas las medidas */}
          <p className="text-lg md:text-2xl lg:text-xl xl:text-2xl text-purple-100/60 font-light max-w-2xl mx-auto leading-relaxed px-4">
            Comenzamos con la excelencia. Continuamos con la innovación.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {[
            { 
              name: "Ampi Sulba Newtec", 
              type: "Ampicilina + Sulbactam", 
              icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ampisulba-newtec-laboratorio-iberoamericano.png", 
              isImage: true,
              color: "from-purple-100 to-white" 
            },
            { 
              name: "Ceftriaxona Newtec", 
              type: "Ceftriaxona sódica", 
              icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ceftriaxona-newtec-laboratorio-ibero-americano.png", 
              isImage: true,
              color: "from-blue-100 to-white" 
            }
          ].map((prod, i) => (
            <motion.div 
              key={prod.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 text-purple-900 shadow-2xl relative flex flex-col items-center text-center cursor-default"
            >
              <div className="absolute top-6 right-8 bg-purple-100 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest text-purple-600 uppercase">Disponible</div>
              
              <div className="w-32 h-32 md:w-40 md:h-40 bg-purple-50 rounded-full flex items-center justify-center shadow-inner mb-8 md:mb-10 group-hover:rotate-6 transition-all duration-500 overflow-hidden p-4">
                {prod.isImage ? (
                  <img 
                    src={prod.icon} 
                    alt={prod.name} 
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-6xl">{prod.icon}</span>
                )}
              </div>

              <h3 className="text-xl md:text-2xl font-brand font-black mb-3 leading-tight">{prod.name}</h3>
              <p className="text-[10px] md:text-[11px] font-black text-purple-400 mb-4 md:mb-6 tracking-widest uppercase">ANTIBIÓTICO BETALACTÁMICO</p>
              <p className="text-sm md:text-base leading-relaxed text-purple-900/60 font-medium">{prod.type}. Polvo estéril para solución inyectable de máxima pureza.</p>
            </motion.div>
          ))}

          {/* Mystery Cards Ajustadas */}
          {[1, 2].map((m, i) => (
            <motion.div 
              key={m}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: (i + 2) * 0.2 }}
              viewport={{ once: true }}
              className="group glass-card rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 border-dashed border-white/20 flex flex-col items-center justify-center text-center relative overflow-hidden h-full min-h-[350px] md:min-h-[400px]"
            >
              <div className="shimmer absolute inset-0 opacity-30"></div>
              <div className="text-5xl md:text-6xl mb-6 md:mb-8 opacity-20 grayscale group-hover:grayscale-0 transition-all group-hover:scale-110 duration-700">
                {m === 1 ? '?' : '✨'}
              </div>
              <h3 className="text-xl md:text-2xl font-brand font-black mb-3 opacity-30 uppercase tracking-tight">PRÓXIMAMENTE</h3>
              <p className="text-base md:text-lg opacity-20 italic font-light">"Algo bueno está por llegar..."</p>
              <div className="mt-8 md:mt-10 px-6 py-2 rounded-full border border-white/10 text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase opacity-30">
                Revelado en {m === 1 ? '2026' : '2027'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
