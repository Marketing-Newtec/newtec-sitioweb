import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

export const ProductSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState<any>(null);

  const products = [
    { id: 1, name: "Ampi Sulba Newtec", line: "Antibiótico Betalactámico", type: "Ampicilina 1 g + Sulbactam 500 mg", icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ampisulba-newtec-laboratorio-iberoamericano.png" },
    { id: 2, name: "Ceftriaxona Newtec", line: "Antibiótico Betalactámico", type: "Ceftriaxona como sal sódica 1 g", icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ceftriaxona-newtec-laboratorio-ibero-americano.png" },
    { id: 3, name: "Ampicilina Newtec", line: "Antibiótico Betalactámico", type: "Ampicilina como sal sódica 1 g", icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ampicilina.png" },
    { id: 4, name: "Cefazolina Newtec", line: "Antibiótico Betalactámico", type: "Cefazolina como sal sódica 1 g", icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/cefazolina.png" },
    { id: 5, name: "Ceftazidima Newtec", line: "Antibiótico Betalactámico", type: "Ceftazidima como pentahidrato 1 g", icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ceftazidima.png" },
    { id: 6, name: "Cefalotina Newtec", line: "Antibiótico Betalactámico", type: "Cefatolina como sal sódica 1 g", icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/cefalotina.png" },
    { id: 7, name: "Bolsa de sangre", line: "Línea para hemoterapia", type: "Recolección de sangre y componentes sanguíneos. Cinco modelos disponibles.", icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/bolsa-de-sangre-newtec.png" },
    { id: 8, name: "Bolsa de transferencia", line: "Línea para hemoterapia", type: "Almacenamiento de glóbulos rojos (300/600 ml) y plaquetas (300 ml).", icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/bolsa-transferencia-newtec.png" }
  ];

  const activeProduct = hoveredProduct || products[index];

  // Función para manejar el deslizamiento (Swipe)
  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold && index < products.length - 1) {
      setIndex(index + 1);
      setHoveredProduct(null);
    } else if (info.offset.x > threshold && index > 0) {
      setIndex(index - 1);
      setHoveredProduct(null);
    }
  };

  return (
    <section id="portafolio" className="py-24 md:py-40 px-6 overflow-hidden bg-white/5 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Encabezado Centrado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-[9vw] md:text-5xl lg:text-7xl font-brand font-black mb-6 md:mb-8 uppercase tracking-tighter leading-[0.9]">
            Los productos insignia <br className="hidden md:block" /> 
            <span className="text-purple-400">de nuestro portfolio</span>
          </h2>
          <p className="text-lg md:text-xl text-purple-100/60 font-light max-w-3xl mx-auto leading-relaxed px-4">
            Comenzamos con la excelencia. Continuamos con la innovación. <br className="hidden md:block" /> Explora nuestro listado técnico.
          </p>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-[1fr,1fr] gap-10 lg:gap-16 items-start">
          
          {/* PANEL IZQUIERDO: Listado Compacto */}
          <div className="w-full overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
            <div className="flex lg:flex-col gap-3 lg:gap-4 min-w-max lg:min-w-0">
              {products.map((prod, i) => (
                <motion.button
                  key={prod.id}
                  onMouseEnter={() => { setHoveredProduct(prod); setIndex(i); }}
                  onMouseLeave={() => setHoveredProduct(null)}
                  onClick={() => { setIndex(i); setHoveredProduct(null); }}
                  className={`px-6 py-4 lg:py-5 lg:px-8 rounded-2xl border transition-all duration-300 flex items-center gap-4 group ${
                    activeProduct?.id === prod.id 
                      ? 'bg-white border-white/20 shadow-xl scale-[1.02]' 
                      : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full shrink-0 ${
                    prod.line === "Antibiótico Betalactámico" ? 'bg-purple-400' : 'bg-red-500'
                  }`}></div>
                  <h3 className={`text-xs md:text-sm font-brand font-black uppercase tracking-[0.1em] whitespace-nowrap transition-colors ${
                    activeProduct?.id === prod.id ? 'text-purple-900' : 'text-white'
                  }`}>
                    {prod.name}
                  </h3>
                </motion.button>
              ))}
            </div>
          </div>

          {/* PANEL DERECHO: Card Dinámica con Swipe para Móvil */}
          <div className="w-full flex justify-center items-center lg:sticky lg:top-40 min-h-[450px] md:min-h-[550px] touch-none">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeProduct.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="w-full max-w-[400px] bg-white rounded-[3rem] p-10 md:p-12 text-purple-900 shadow-2xl relative flex flex-col items-center text-center border border-white/10 cursor-grab active:cursor-grabbing"
              >
                <div className="w-40 h-40 bg-purple-50 rounded-full flex items-center justify-center mb-8 overflow-hidden relative">
                  <img 
                    src={activeProduct.icon} 
                    alt={activeProduct.name} 
                    className={`object-contain drop-shadow-xl transition-transform duration-500 ${
                      activeProduct.line === "Línea para hemoterapia" 
                      ? 'scale-[1.35] w-full h-full' 
                      : 'scale-100 p-4 w-full h-full'
                    }`} 
                  />
                </div>
                
                <h3 className="text-xl md:text-2xl font-brand font-black mb-2 uppercase leading-tight">{activeProduct.name}</h3>
                <p className="text-[10px] font-black text-purple-400 mb-6 tracking-widest uppercase">{activeProduct.line}</p>
                <p className="text-sm md:text-base leading-relaxed text-purple-900/60 font-medium px-2">
                  {activeProduct.type}. {activeProduct.line === "Antibiótico Betalactámico" ? "Polvo estéril de máxima pureza." : "Libre de látex."}
                </p>

                {/* Indicador de Swipe (solo visible en móvil) */}
                <div className="mt-8 flex gap-1.5 md:hidden">
                  {products.map((_, i) => (
                    <div key={i} className={`h-1 rounded-full transition-all ${i === index ? 'w-4 bg-purple-400' : 'w-1 bg-purple-100'}`} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
