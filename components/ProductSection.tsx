import React from 'react';
import { motion } from 'framer-motion';

export const ProductSection: React.FC = () => {
  const products = [
    { 
      name: "Ampi Sulba Newtec", 
      type: "Ampicilina 1 g + Sulbactam 500 mg", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ampisulba-newtec-laboratorio-iberoamericano.png" 
    },
    { 
      name: "Ceftriaxona Newtec", 
      type: "Ceftriaxona como sal sódica 1 g", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ceftriaxona-newtec-laboratorio-ibero-americano.png" 
    },
    { 
      name: "Ampicilina Newtec", 
      type: "Ampicilina como sal sódica 1 g", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ampicilina.png" 
    },
    { 
      name: "Cefazolina Newtec", 
      type: "Cefazolina como sal sódica 1 g", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/cefazolina.png" 
    },
    { 
      name: "Ceftazidima Newtec", 
      type: "Ceftazidima como pentahidrato 1 g", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ceftazidima.png" 
    },
    { 
      name: "Cefalotina Newtec", 
      type: "Cefatolina como sal sódica 1 g", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/cefalotina.png" 
    }
  ];

  return (
    <section id="portafolio" className="py-24 md:py-40 px-6 overflow-hidden bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-[9vw] md:text-5xl lg:text-6xl xl:text-7xl font-brand font-black mb-6 md:mb-8 uppercase tracking-tighter leading-[0.9]">
            Los productos insignia <br className="hidden md:block" /> 
            <span className="text-purple-400">de nuestro portfolio</span>
          </h2>
          
          <p className="text-lg md:text-xl text-purple-100/60 font-light max-w-3xl mx-auto leading-relaxed px-4">
            Comenzamos con la excelencia. Continuamos con la innovación.
          </p>
        </motion.div>

        {/* Grid robusto: 3 columnas en desktop, 2 en tablet, 1 en móvil */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {products.map((prod, i) => (
            <motion.div 
              key={prod.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 text-purple-900 shadow-2xl relative flex flex-col items-center text-center h-full border border-white/10"
            >
              <div className="absolute top-6 right-8 bg-purple-100 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest text-purple-600 uppercase">
                Disponible
              </div>
              
              <div className="w-32 h-32 md:w-40 md:h-40 bg-purple-50 rounded-full flex items-center justify-center shadow-inner mb-8 md:mb-10 group-hover:rotate-6 transition-all duration-500 p-4">
                <img 
                  src={prod.icon} 
                  alt={prod.name} 
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-brand font-black mb-3 leading-tight min-h-[3.5rem] flex items-center justify-center">
                {prod.name}
              </h3>
              
              <p className="text-[10px] md:text-[11px] font-black text-purple-400 mb-4 md:mb-6 tracking-widest uppercase">
                Antibiótico Betalactámico
              </p>
              
              <p className="text-sm md:text-base leading-relaxed text-purple-900/60 font-medium">
                {prod.type}. Polvo estéril para solución inyectable de máxima pureza.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
