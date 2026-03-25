import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProductSection: React.FC = () => {
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

        {/* Layout Adaptativo */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr,1fr] gap-10 lg:gap-16 items-start">
          
          {/* PANEL IZQUIERDO: Listado Compacto */}
          <div className="w-full overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
            <div className="flex lg:flex-col gap-3 lg:gap-4 min-w-max lg:min-w-0">
              {products.map((prod, i) => (
                <motion.button
                  key={prod.id}
                  onMouseEnter={() => setHoveredProduct(prod)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  onClick
