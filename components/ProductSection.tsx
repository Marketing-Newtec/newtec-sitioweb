import React from 'react';
import { motion } from 'framer-motion';

export const ProductSection: React.FC = () => {
  const products = [
    { 
      name: "Ampi Sulba Newtec", 
      line: "Antibiótico Betalactámico",
      type: "Ampicilina 1 g + Sulbactam 500 mg", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ampisulba-newtec-laboratorio-iberoamericano.png" 
    },
    { 
      name: "Ceftriaxona Newtec", 
      line: "Antibiótico Betalactámico",
      type: "Ceftriaxona como sal sódica 1 g", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ceftriaxona-newtec-laboratorio-ibero-americano.png" 
    },
    { 
      name: "Ampicilina Newtec", 
      line: "Antibiótico Betalactámico",
      type: "Ampicilina como sal sódica 1 g", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ampicilina.png" 
    },
    { 
      name: "Cefazolina Newtec", 
      line: "Antibiótico Betalactámico",
      type: "Cefazolina como sal sódica 1 g", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/cefazolina.png" 
    },
    { 
      name: "Ceftazidima Newtec", 
      line: "Antibiótico Betalactámico",
      type: "Ceftazidima como pentahidrato 1 g", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ceftazidima.png" 
    },
    { 
      name: "Cefalotina Newtec", 
      line: "Antibiótico Betalactámico",
      type: "Cefatolina como sal sódica 1 g", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/cefalotina.png" 
    },
    { 
      name: "Bolsa de sangre", 
      line: "Línea para hemoterapia",
      type: "Recolección de sangre y componentes sanguíneos. Cinco modelos disponibles. Libre de látex", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/bolsa-sangre.png" // Recuerda subir esta imagen
    },
    { 
      name: "Bolsa de transferencia", 
      line: "Línea para hemoterapia",
      type: "Almacenamiento de glóbulos rojos (300/600 ml) y plaquetas (300 ml). Libre de látex", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/bolsa-transferencia.png" // Recuerda subir esta imagen
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

        {/* Grid optimizado para 8 productos: 4 columnas en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((prod, i) => (
            <motion.div 
              key={prod.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-[2.5rem] p-8 text-purple-900 shadow-2xl relative flex flex-col items-center text-center h-full border border-white/10"
            >
              <div className="absolute top-6 right-8 bg-purple-100 px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest text-purple-600 uppercase">
                Disponible
              </div>
              
              <div className="w-28 h-28 md:w-36 md:h-36 bg-purple-50 rounded-full flex items-center justify-center shadow-inner mb-6 md:mb-8 group-hover:rotate-6 transition-all duration-500 p-4">
                <img 
                  src={prod.icon} 
                  alt={prod.name} 
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </div>

              <h3 className="text-lg md:text-xl font-brand font-black mb-2 leading-tight min-h-[3rem] flex items-center justify-center">
                {prod.name}
              </h3>
              
              <p className="text-[9px] md:text-[10px] font-black text-purple-400 mb-4 tracking-widest uppercase">
                {prod.line}
              </p>
              
              <p className="text-xs md:text-sm leading-relaxed text-purple-900/60 font-medium">
                {prod.type}.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
