
import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard: React.FC<{ title: string; desc: string; icon: string; delay: number }> = ({ title, desc, icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    viewport={{ once: true }}
    className="glass-card p-12 rounded-[2.5rem] transition-all hover:-translate-y-4 group hover:border-white/30 hover:bg-white/5 relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-8 text-white/5 text-8xl font-black group-hover:text-white/10 transition-colors uppercase pointer-events-none">
      {title.split(' ')[0]}
    </div>
    <div className="text-5xl mb-10 group-hover:scale-110 transition-transform inline-block drop-shadow-glow">
      {icon}
    </div>
    <h3 className="text-2xl font-brand font-black mb-6 tracking-tight">{title}</h3>
    <p className="text-purple-100/60 leading-relaxed font-normal text-lg">{desc}</p>
  </motion.div>
);

export const Features: React.FC = () => {
  return (
    <section id="tecnología" className="py-40 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-5xl md:text-8xl font-brand font-black mb-8 leading-[0.9] tracking-tighter uppercase">
              EQUIPAMIENTO DE <br /><span className="text-purple-300">ÚLTIMA GENERACIÓN.</span>
            </h2>
            <div className="h-2 w-48 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl text-purple-100/70 max-w-md font-light border-l-2 border-purple-400/30 pl-8"
          >
            Nuestra fortaleza reside en la inversión continua en infraestructura de vanguardia, posicionándonos como el laboratorio más moderno de Argentina.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
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
