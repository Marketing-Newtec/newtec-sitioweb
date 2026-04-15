import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

export const ProductSection: React.FC = () => {
  const [index, setIndex] = useState(-1);
  const [hoveredProduct, setHoveredProduct] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const products = [
    { id: 1, name: "Ampi Sulba Newtec", line: "Beta-lactam Antibiotic", type: "Ampicillin 1 g + Sulbactam 500 mg", icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ampisulba-newtec-laboratorio-iberoamericano.png" },
    { id: 2, name: "Ceftriaxone Newtec", line: "Beta-lactam Antibiotic", type: "Ceftriaxone as sodium salt 1 g", icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ceftriaxona-newtec-laboratorio-ibero-americano.png" },
    { id: 3, name: "Ampicillin Newtec", line: "Beta-lactam Antibiotic", type: "Ampicillin as sodium salt 1 g", icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ampicilina.png" },
    { id: 4, name: "Cefazolin Newtec", line: "Beta-lactam Antibiotic", type: "Cefazolin as sodium salt 1 g", icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/cefazolina.png" },
    { id: 5, name: "Ceftazidime Newtec", line: "Beta-lactam Antibiotic", type: "Ceftazidime as pentahydrate 1 g", icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/ceftazidima.png" },
    { id: 6, name: "Cefalotin Newtec", line: "Beta-lactam Antibiotic", type: "Cefalotin as sodium salt 1 g", icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/cefalotina.png" },
    { id: 7, name: "Blood Bag | Tianhe/Hemobag", line: "Hemotherapy Line", type: "Collection of blood and blood components. Five models available", icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/bolsa-de-sangre-newtec.png", hasLogos: true },
    { id: 8, name: "Transfer Bag | Tianhe/Hemobag", line: "Hemotherapy Line", type: "Storage of red blood cells (300/600 ml) and platelets (300 ml)", icon: "https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/bolsa-transferencia-newtec.png", hasLogos: true }
  ];

  useEffect(() => {
    if (isMobile && index !== -1 && buttonRefs.current[index]) {
      buttonRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [index, isMobile]);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile && index === -1) setIndex(0);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [index]);

  const activeProduct = hoveredProduct || (index >= 0 ? products[index] : null);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (!isMobile) return;
    const threshold = 50;
    if (info.offset.x < -threshold && index < products.length - 1) setIndex(index + 1);
    else if (info.offset.x > threshold && index > 0) setIndex(index - 1);
  };

  return (
    <section id="portafolio" className="py-24 md:py-40 px-6 overflow-hidden bg-white/5 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div className="text-center mb-16 md:mb-24">
          <h2 className="text-[9vw] md:text-5xl lg:text-7xl font-brand font-black mb-6 md:mb-8 uppercase tracking-tighter leading-[0.9]">
            Flagship products <br className="hidden md:block" /> 
            <span className="text-purple-400">from our portfolio</span>
          </h2>
          <p className="text-lg md:text-xl text-purple-100/60 font-light max-w-3xl mx-auto leading-relaxed px-4">
            We begin with excellence. We continue with innovation.
          </p>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-[1fr,1fr] gap-10 lg:gap-16 items-start">
          
          <div ref={scrollContainerRef} className="w-full overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 scrollbar-hide snap-x">
            <div className="flex lg:flex-col gap-3 lg:gap-4 min-w-max lg:min-w-0 px-[10vw] lg:px-0">
              {products.map((prod, i) => (
                <motion.button
                  key={prod.id}
                  ref={el => buttonRefs.current[i] = el}
                  onMouseEnter={() => !isMobile && setHoveredProduct(prod)}
                  onMouseLeave={() => !isMobile && setHoveredProduct(null)}
                  onClick={() => setIndex(i)}
                  className={`px-6 py-4 lg:py-5 lg:px-8 rounded-2xl border transition-all duration-300 flex items-center gap-4 snap-center ${
                    activeProduct?.id === prod.id 
                      ? 'bg-white border-white/20 shadow-xl scale-[1.02]' 
                      : 'bg-white/5 border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full shrink-0 ${prod.line === "Beta-lactam Antibiotic" ? 'bg-purple-400' : 'bg-red-500'}`} />
                  <h3 className={`text-[10px] md:text-sm font-brand font-black uppercase tracking-[0.1em] whitespace-nowrap ${activeProduct?.id === prod.id ? 'text-purple-900' : 'text-white'}`}>
                    {prod.name}
                  </h3>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col items-center lg:sticky lg:top-40 min-h-[450px] md:min-h-[550px]">
            <AnimatePresence mode="wait">
              {activeProduct ? (
                <motion.div 
                  key={activeProduct.id}
                  drag={isMobile ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDragEnd}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="w-full max-w-[400px] bg-white rounded-[3rem] p-10 md:p-12 text-purple-900 shadow-2xl relative flex flex-col items-center text-center border border-white/10 cursor-grab active:cursor-grabbing"
                >
                  <div className="w-40 h-40 bg-purple-50 rounded-full flex items-center justify-center mb-8 overflow-hidden relative">
                    <img 
                      src={activeProduct.icon} 
                      alt={activeProduct.name} 
                      className={`object-contain drop-shadow-xl transition-transform duration-500 ${activeProduct.line === "Hemotherapy Line" ? 'scale-[1.35] w-full h-full' : 'scale-100 p-4 w-full h-full'}`} 
                    />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-brand font-black mb-2 uppercase leading-tight">{activeProduct.name.split('|')[0]}</h3>
                  
                  {activeProduct.hasLogos && (
                    <div className="flex items-center justify-center gap-6 md:gap-10 mb-6 mt-3 bg-purple-50/70 py-3 px-6 md:px-10 rounded-full">
                      <img src="https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/TIANHE.png" alt="Tianhe" className="h-4 md:h-7 object-contain opacity-90" />
                      <div className="w-[1px] h-5 md:h-8 bg-purple-200" />
                      <img src="https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/hemobag.png" alt="Hemobag" className="h-4 md:h-7 object-contain opacity-90" />
                    </div>
                  )}

                  <p className="text-[10px] font-black text-purple-400 mb-6 tracking-widest uppercase">{activeProduct.line}</p>
                  <p className="text-sm md:text-base leading-relaxed text-purple-900/60 font-medium px-2">
                    {activeProduct.type}. {activeProduct.line === "Beta-lactam Antibiotic" ? "Highest purity sterile powder." : "Latex-free."}
                  </p>
                </motion.div>
              ) : (
                <motion.div key="placeholder" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-[400px] rounded-[3rem] border-2 border-dashed border-white/10 h-[450px] flex flex-col items-center justify-center text-center p-12">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-20 mb-8">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <h3 className="text-xl font-brand font-black uppercase text-white/30 tracking-tight">Preview</h3>
                  <p className="text-white/20 font-light text-sm mt-4 px-6">Select a product from the list to view its technical specifications.</p>
                </motion.div>
              )}
            </AnimatePresence>

            {isMobile && (
              <div className="mt-8 flex gap-2">
                {products.map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-purple-400' : 'w-1.5 bg-white/20'}`} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
