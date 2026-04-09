import React from 'react';
import { motion } from 'framer-motion';

// Unificamos el trazo en 1.2 para que los iconos de líneas simples no opaquen al microscopio
const IconWrapper = ({ children, isCustom = false }: { children: React.ReactNode, isCustom?: boolean }) => (
  <div className="w-16 h-16 mb-8 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500">
    <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <svg 
      className="w-full h-full text-white" 
      fill={isCustom ? "currentColor" : "none"} 
      viewBox={isCustom ? "0 0 100 100" : "0 0 24 24"}
      stroke={isCustom ? "none" : "currentColor"}
      strokeWidth={1.2} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {children}
    </svg>
  </div>
);

const FeatureCard: React.FC<{ title: string; desc: string; icon: React.ReactNode; delay: number }> = ({ title, desc, icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    viewport={{ once: true }}
    className="glass-card p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] transition-all hover:-translate-y-4 group hover:border-white/30 hover:bg-white/5 relative overflow-hidden flex flex-col items-center text-center md:items-start md:text-left h-full"
  >
    {icon}
    {/* Ajuste de tamaño para asegurar una sola línea en títulos largos */}
    <h3 className="text-lg md:text-xl lg:text-[22px] font-brand font-black mb-4 md:mb-6 tracking-tight uppercase leading-tight whitespace-nowrap">
      {title}
    </h3>
    <p className="text-purple-100/60 leading-relaxed font-normal text-base md:text-lg">{desc}</p>
  </motion.div>
);

export const Features: React.FC = () => {
  return (
    <section id="tecnología" className="py-12 md:py-40 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10 md:gap-12 mb-16 md:mb-32 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl flex flex-col items-center lg:items-start"
          >
            <h2 className="text-[10vw] xs:text-5xl md:text-7xl lg:text-6xl xl:text-8xl font-brand font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter uppercase">
              <span className="block text-white">Equipamiento</span>
              <span className="block md:inline text-purple-300">de última</span>
              <span className="block md:inline text-purple-300"> generación.</span>
            </h2>
            <div className="h-1.5 md:h-2 w-32 md:w-48 bg-gradient-to-r from-transparent via-white to-transparent lg:from-white lg:to-transparent rounded-full"></div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-purple-100/70 max-w-md font-light lg:border-l-2 lg:border-purple-400/30 lg:pl-8 leading-relaxed"
          >
            Una de nuestras fortalezas reside en la inversión continua en infraestructura de vanguardia, posicionándonos como uno de los laboratorios más modernos de Argentina.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          <FeatureCard 
            delay={0.2}
            title="Polvos Estériles"
            desc="Operamos procesos de llenado aséptico en ambientes clasificados ISO 5, bajo estrictos estándares GMP, asegurando la integridad del producto y la máxima seguridad para el paciente, utilizando materias primas de la más alta calidad."
            icon={
              <IconWrapper isCustom={true}>
                <path d="M39.4,47.9c-0.5,0-1-0.2-1.4-0.6l-8.2-8.2c-0.7-0.7-0.8-1.8-0.2-2.6c0.5-0.7,0.8-1.5,0.8-2.4c0-2.3-1.8-4.2-4.1-4.2 c0,0,0,0,0,0c-0.9,0-1.8,0.3-2.5,0.8c-0.8,0.6-1.9,0.5-2.6-0.2l-4.4-4.4c-0.8-0.8-0.8-2,0-2.8l10.1-10.1c0.4-0.4,0.9-0.6,1.4-0.6h0 c0.5,0,1,0.2,1.4,0.6L51,34.4c0.8,0.8,0.8,2,0,2.8L40.9,47.4C40.5,47.8,40,47.9,39.4,47.9z M33.8,37.5l5.7,5.7l7.3-7.3L28.4,17.5 l-7.3,7.3l1.9,1.9c1-0.5,2.2-0.7,3.4-0.7c4.5,0,8.2,3.7,8.1,8.2C34.5,35.4,34.2,36.5,33.8,37.5z M45.4,51.4L45.4,51.4 c-0.5,0-1-0.2-1.4-0.6l-4.7-4.7c-0.8-0.8-0.8-2,0-2.8l7.6-7.6c0.8-0.8,2.1-0.8,2.8,0l4.7,4.7c0.8,0.8,0.8,2,0,2.8l-7.6,7.6 C46.4,51.2,45.9,51.4,45.4,51.4z M43.5,44.7l1.9,1.9l4.8-4.8l-1.9-1.9L43.5,44.7z M20.9,23.9c-0.5,0-1-0.2-1.4-0.6l-5-5 c-0.8-0.8-0.8-2,0-2.8l4.6-4.6c0.8-0.8,2.1-0.8,2.8,0l5,5c0.4,0.4,0.6,0.9,0.6,1.4s-0.2,1-0.6,1.4l-4.6,4.6 C21.9,23.7,21.4,23.9,20.9,23.9z M18.7,16.9l2.2,2.2l1.8-1.8l-2.2-2.2L18.7,16.9z M26.3,42.4C26.3,42.4,26.2,42.4,26.3,42.4 c-2.3,0-4.3-0.9-5.8-2.5c-1.5-1.6-2.4-3.6-2.3-5.8c0-2.6,1.3-5,3.4-6.5c1.4-1,3.1-1.6,4.9-1.6c4.5,0,8.2,3.7,8.1,8.2c0,0,0,0,0,0 c0,1.7-0.6,3.4-1.6,4.7C31.4,41.1,28.9,42.4,26.3,42.4z M26.3,30c-0.9,0-1.8,0.3-2.5,0.8c-1.1,0.8-1.7,2-1.7,3.3 c0,1.1,0.4,2.2,1.2,3c0.8,0.8,1.8,1.2,3,1.3c0,0,0,0,0,0c1.3,0,2.6-0.6,3.4-1.7c0.5-0.7,0.8-1.5,0.8-2.4C30.5,31.9,28.6,30,26.3,30 C26.3,30,26.3,30,26.3,30z M50,82.6c-6.1,0-12.2-1.6-17.5-4.6c-11-6.3-17.8-18-17.8-30.7c0-7,2.1-13.8,5.9-19.6 c0.3-0.5,0.9-0.8,1.5-0.9c0.6-0.1,1.2,0.2,1.6,0.6l0.4,0.4c0.4,0.4,0.6,1,0.6,1.6c0,0.6-0.3,1.1-0.8,1.5c-1.1,0.8-1.7,2-1.7,3.3 c0,1.1,0.4,2.2,1.2,3c0.8,0.8,1.8,1.2,3,1.3c0,0,0,0,0,0c1.3,0,2.6-0.6,3.4-1.7c0.3-0.5,0.9-0.8,1.5-0.8c0.6,0,1.2,0.2,1.6,0.6 l0.2,0.2c0.6,0.6,0.8,1.5,0.4,2.3c-1.3,2.6-2,5.4-2,8.3c0,10.3,8.3,18.6,18.6,18.6c2.5,0,4.9-0.5,7.2-1.4c0.5-0.2,1-0.2,1.4,0h18.7 c0.7,0,1.4,0.4,1.8,1.1c0.3,0.7,0.3,1.5-0.1,2.1c-3,4.2-6.9,7.8-11.4,10.4C62.2,80.9,56.1,82.6,50,82.6z M19.7,39.1 c-0.7,2.6-1.1,5.4-1.1,8.2c0,11.2,6,21.6,15.8,27.2c4.7,2.7,10.1,4.1,15.5,4.1c5.5,0,10.8-1.4,15.5-4.1c2.8-1.6,5.4-3.7,7.6-6.1H58 c-2.6,1-5.3,1.5-8,1.5c-12.5,0-22.6-10.1-22.6-22.6c0-1.7,0.2-3.4,0.6-5.1c-0.6,0.1-1.1,0.2-1.7,0.2c-2.2,0-4.2-0.9-5.8-2.5 C20.2,39.6,20,39.4,19.7,39.1z M84.2,68.4H57.9c-1.1,0-2-0.9-2-2v-9.7c0-1.1,0.9-2,2-2h26.3c1.1,0,2,0.9,2,2v9.7 C86.2,67.5,85.3,68.4,84.2,68.4z M59.9,64.4h22.3v-5.7H59.9V64.4z M74.1,89.8H25.8c-0.7,0-1.4-0.4-1.8-1c-0.3-0.6-0.3-1.4,0.1-2 l7.6-11.6c0.6-0.9,1.7-1.2,2.7-0.6c4.7,2.7,10.1,4.1,15.5,4.1c5.5,0,10.8-1.4,15.5-4.1c0.9-0.5,2.1-0.2,2.7,0.6l7.6,11.6 c0.4,0.6,0.4,1.4,0.1,2C75.5,89.4,74.8,89.8,74.1,89.8z M29.5,85.8h40.9l-4.6-7c-4.9,2.5-10.3,3.8-15.9,3.8c-5.5,0-11-1.3-15.9-3.8 L29.5,85.8z" />
              </IconWrapper>
            }
          />
          <FeatureCard 
            delay={0.4}
            title="Sistemas automatizados"
            desc="Contamos con tecnología de última generación y sistemas automatizados que minimizan la intervención manual, garantizando precisión, reproducibilidad y estabilidad en cada proceso productivo."
            icon={
              <IconWrapper>
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </IconWrapper>
            }
          />
          <FeatureCard 
            delay={0.6}
            title="Calidad Certificada"
            desc="Nuestro robusto sistema de calidad asegura trazabilidad completa, control analítico riguroso y cumplimiento normativo, respaldando la liberación de cada lote con los más altos estándares de la industria farmacéutica."
            icon={
              <IconWrapper>
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l3 3 5-5" />
              </IconWrapper>
            }
          />
        </div>
      </div>
    </section>
  );
};
