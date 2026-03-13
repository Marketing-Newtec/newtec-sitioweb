import React from 'react';
import { motion } from 'framer-motion';

// Componente de Icono SVG mejorado
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-16 h-16 mb-8 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500">
    <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
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
    <h3 className="text-xl md:text-2xl font-brand font-black mb-4 md:mb-6 tracking-tight uppercase leading-tight">{title}</h3>
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
            Nuestra fortaleza reside en la inversión continua en infraestructura de vanguardia, posicionándonos como el laboratorio más moderno de Argentina.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          <FeatureCard 
            delay={0.2}
            title="Polvos Estériles"
            desc="Procesos controlados de llenado en ambientes ISO-5, garantizando la máxima seguridad para el paciente crítico."
            icon={
              <IconWrapper>
                {/* MICROSCOPIO PROFESIONAL BASADO EN REFERENCIA */}
                <path d="M4 21h16" />
                <path d="M7 21h2c0-3 1-5 4-5h1" />
                <path d="M11 16c4 0 5-2 5-5" />
                <path d="M9 13h5" />
                <path d="M17.5 3.5l-4 7" strokeWidth="2"/>
                <path d="M13 3l1.5-1 4 7-1.5 1z" />
                <circle cx="12" cy="16" r="1" fill="currentColor" />
              </IconWrapper>
            }
          />
          <FeatureCard 
            delay={0.4}
            title="Alta Tecnología"
            desc="Maquinaria de vanguardia que elimina errores humanos y optimiza la estabilidad química del fármaco."
            icon={
              <IconWrapper>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </IconWrapper>
            }
          />
          <FeatureCard 
            delay={0.6}
            title="Calidad Certificada"
            desc="Trazabilidad total y rigurosidad analítica. Superamos la norma en cada lote gracias a procesos modernos."
            icon={
              <IconWrapper>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </IconWrapper>
            }
          />
        </div>
      </div>
    </section>
  );
};
