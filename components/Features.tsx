import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard: React.FC<{ title: string; desc: string; icon: string; delay: number }> = ({ title, desc, icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    viewport={{ once: true }}
    className="glass-card p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] transition-all hover:-translate-y-4 group hover:border-white/30 hover:bg-white/5 relative overflow-hidden flex flex-col items-center text-center md:items-start md:text-left"
  >
    <div className="text-4xl md:text-5xl mb-6 md:mb-10 group-hover:scale-110 transition-transform inline-block drop-shadow-glow">
      {icon}
    </div>
    <h3 className="text-xl md:text-2xl font-brand font-black mb-4 md:mb-6 tracking-tight uppercase">{title}</h3>
    <p className="text-purple-100/60 leading-relaxed font-normal text-base md:text-lg">{desc}</p>
  </motion.div>
);

export const Features: React.FC = () => {
  return (
    <section id="tecnología" className="py-12 md:py-40 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10 md:gap-12 mb-16 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Título: Centrado en móvil */}
            <h2 className="text-[10vw] xs:text-5xl md:text-7xl lg:text-6xl xl:text-8xl font-brand font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter uppercase">
              EQUIPAMIENTO DE <br />
              <span className="text-purple-300">ÚLTIMA GENERACIÓN.</span>
            </h2>
            <div className="h-1.5 md:h-2 w-32 md:w-48 bg-gradient-to-r from-transparent via-white to-transparent lg:from-white lg:to-transparent rounded-full"></div>
          </motion.div>

          {/* Bajada: Centrada en móvil y sin borde lateral izquierdo en móvil */}
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-purple-100/70 max-w-md font-light lg:border-l-2 lg:border-purple-400/30 lg:pl-8 leading-relaxed text-center lg:text-left"
          >
            Nuestra fortaleza reside en la inversión continua en infraestructura de vanguardia, posicionándonos como el laboratorio más moderno de Argentina.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          <FeatureCard 
            icon="🔬"
            title="Polvos Estériles"
            delay={0.2}
            desc="Procesos controlados de llenado de polvos estériles en ambientes ISO-5, garantizando la máxima seguridad para el paciente crítico."
          />
          <FeatureCard 
            icon="⚡"
            title="Alta Tecnología"
            delay={0.4}
            desc="Maquinaria de vanguardia que elimina errores humanos y optimiza la estabilidad química de cada antibiótico betalactámico."
          />
          <FeatureCard 
            icon="✅"
            title="Calidad Certificada"
            delay={0.6}
            desc="Trazabilidad total y rigurosidad analítica. No solo cumplimos la norma, la superamos en cada lote gracias a nuestros procesos modernos."
          />
        </div>
      </div>
    </section>
  );
};
