import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProductSection: React.FC = () => {
  // Estado para rastrear qué producto está en hover
  const [hoveredProduct, setHoveredProduct] = useState<any>(null);

  const products = [
    { 
      id: 1,
      name: "Ampi Sulba Newtec", 
      line: "Antibiótico Betalactámico",
      type: "Ampicilina 1 g + Sulbactam 500 mg", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ampisulba-newtec-laboratorio-iberoamericano.png" 
    },
    { 
      id: 2,
      name: "Ceftriaxona Newtec", 
      line: "Antibiótico Betalactámico",
      type: "Ceftriaxona como sal sódica 1 g", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ceftriaxona-newtec-laboratorio-ibero-americano.png" 
    },
    { 
      id: 3,
      name: "Ampicilina Newtec", 
      line: "Antibiótico Betalactámico",
      type: "Ampicilina como sal sódica 1 g", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ampicilina.png" 
    },
    { 
      id: 4,
      name: "Cefazolina Newtec", 
      line: "Antibiótico Betalactámico",
      type: "Cefazolina como sal sódica 1 g", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/cefazolina.png" 
    },
    { 
      id: 5,
      name: "Ceftazidima Newtec", 
      line: "Antibiótico Betalactámico",
      type: "Ceftazidima como pentahidrato 1 g", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ceftazidima.png" 
    },
    { 
      id: 6,
      name: "Cefalotina Newtec", 
      line: "Antibiótico Betalactámico",
      type: "Cefatolina como sal sódica 1 g", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/cefalotina.png" 
    },
    { 
      id: 7,
      name: "Bolsa de sangre", 
      line: "Línea para hemoterapia",
      type: "Recolección de sangre y componentes sanguíneos. Cinco modelos disponibles.", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/bolsa-de-sangre-newtec.png" 
    },
    { 
      id: 8,
      name: "Bolsa de transferencia", 
      line: "Línea para hemoterapia",
      type: "Almacenamiento de glóbulos rojos (300/600 ml) y plaquetas (300 ml).", 
      icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/bolsa-transferencia-newtec.png" 
    }
  ];

  return (
    <section id="portafolio" className="py-24 md:py-40 px-6 overflow-hidden bg-white/5 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-20 md:mb-32 max-w-4xl"
        >
          <h2 className="text-[9vw] md:text-5xl lg:text-6xl xl:text-7xl font-brand font-black mb-6 md:mb-8 uppercase tracking-tighter leading-[0.9]">
            Los productos insignia <br className="hidden md:block" /> 
            <span className="text-purple-400">de nuestro portfolio</span>
          </h2>
          <p className="text-lg md:text-xl text-purple-100/60 font-light max-w-3xl leading-relaxed">
            Comenzamos con la excelencia. Continuamos con la innovación. Explora nuestro listado técnico.
          </p>
        </motion.div>

        {/* ESTRUCTURA INNOVADORA: LISTA + CARD DINÁMICA */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-16 items-start">
          
          {/* PANEL IZQUIERDO: LISTADO TÉCNICO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            {products.map((prod, i) => (
              <motion.button
                key={prod.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onMouseEnter={() => setHoveredProduct(prod)}
                onMouseLeave={() => setHoveredProduct(null)}
                className={`w-full text-left p-6 md:p-8 rounded-3xl border transition-all duration-300 flex items-center justify-between group h-full ${
                  hoveredProduct?.id === prod.id 
                    ? 'bg-white border-white/20 shadow-xl' 
                    : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-6">
                  {/* Indicador visual de Línea de Producto */}
                  <div className={`w-3 h-3 rounded-full ${
                    prod.line === "Antibiótico Betalactámico" ? 'bg-purple-400' : 'bg-red-500'
                  }`}></div>
                  <h3 className={`text-lg md:text-xl font-brand font-black uppercase tracking-tight transition-colors ${
                    hoveredProduct?.id === prod.id ? 'text-purple-900' : 'text-white'
                  }`}>
                    {prod.name}
                  </h3>
                </div>
                
                {/* Flecha indicadora que aparece en hover */}
                <span className={`text-2xl transition-all ${
                  hoveredProduct?.id === prod.id ? 'text-purple-600 translate-x-0' : 'text-white/20 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                }`}>
                  →
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* PANEL DERECHO: VISUALIZACIÓN DINÁMICA DE LA CARD */}
          <div className="sticky top-40 h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {hoveredProduct ? (
                // LA CARD APARECE AQUÍ CUANDO HAY HOVER
                <motion.div 
                  key={hoveredProduct.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -20 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  className="w-full max-w-[420px] bg-white rounded-[3rem] p-10 md:p-12 text-purple-900 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative flex flex-col items-center text-center h-full border border-white/10"
                >
                  <div className="absolute top-8 right-10 bg-purple-100 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest text-purple-600 uppercase">
                    Disponible
                  </div>
                  
                  <div className="w-40 h-40 bg-purple-50 rounded-full flex items-center justify-center shadow-inner mb-10 p-4">
                    <img 
                      src={hoveredProduct.icon} 
                      alt={hoveredProduct.name} 
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>

                  <h3 className="text-2xl font-brand font-black mb-4 leading-tight min-h-[3.5rem] flex items-center justify-center">
                    {hoveredProduct.name}
                  </h3>
                  
                  <p className="text-[11px] font-black text-purple-400 mb-6 tracking-widest uppercase">
                    {hoveredProduct.line}
                  </p>
                  
                  <p className="text-base leading-relaxed text-purple-900/60 font-medium">
                    {hoveredProduct.type}. {hoveredProduct.line === "Antibiótico Betalactámico" ? "Polvo estéril para solución inyectable de máxima pureza." : "Libre de látex."}
                  </p>
                </motion.div>
              ) : (
                // ESTADO VACÍO (Placeholder)
                <motion.div 
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full max-w-[420px] rounded-[3rem] border-2 border-dashed border-white/10 h-full flex flex-col items-center justify-center text-center p-12"
                >
                  <div className="text-6xl mb-8 opacity-20">🔬</div>
                  <h3 className="text-2xl font-brand font-black uppercase text-white/30 tracking-tight mb-4">Visualización Técnica</h3>
                  <p className="text-white/20 font-light text-lg">Pasa el cursor sobre un producto de la lista para ver sus especificaciones y presentación.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};
