import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  const values = [
    { id: 1, title: "Personas y clima de trabajo", desc: "Ponemos a las personas en el centro, promoviendo un clima laboral respetuoso, colaborativo y profesional." },
    { id: 2, title: "Equipo humano y técnico", desc: "Integrando talento técnico y calidad humana para construir un grupo profesional comprometido." },
    { id: 3, title: "Calidad y procesos", desc: "Procesos de calidad rigurosos y eficientes, asegurando altos estándares en cada etapa." },
    { id: 4, title: "Instalaciones y tecnología", desc: "Equipamiento alineado a los más altos estándares vigentes de la industria farmacéutica mundial." },
    { id: 5, title: "Integridad y confiabilidad", desc: "Actuamos con responsabilidad y transparencia, sosteniendo la calidad como fundamento." },
    { id: 6, title: "Innovación con propósito", desc: "Generar mejoras clínicas reales y aportar valor concreto al sistema de salud." },
    { id: 7, title: "Sustentabilidad empresarial", desc: "Rentabilidad para impulsar el crecimiento tecnológico y el bienestar de los colaboradores." }
  ];

  return (
    <section id="nosotros" className="py-24 md:py-40 px-6 relative overflow-hidden bg-white/5">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* NIVEL 1: MISIÓN Y VISIÓN */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Tarjeta Misión */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-14 rounded-[3rem] border border-white/10 group transition-all duration-500 hover:bg-white/10"
          >
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-purple-400 mb-6 block">Institucional</span>
            <h3 className="text-4xl md:text-5xl font-brand font-black mb-8 uppercase text-white group-hover:text-purple-300 transition-colors duration-500">
              Misión
            </h3>
            <p className="text-purple-100/70 text-lg md:text-xl font-light leading-relaxed">
              Nuestra misión es desarrollar, producir y comercializar medicamentos de alta calidad para el mercado hospitalario, a precios justos, con procesos rigurosos de control de calidad, un fuerte compromiso con las personas y una innovación enfocada en generar mejoras clínicas reales.
            </p>
          </motion.div>

          {/* Tarjeta Visión */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-14 rounded-[3rem] border border-white/10 group transition-all duration-500 hover:bg-white/10"
          >
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-purple-400 mb-6 block">Estrategia</span>
            <h3 className="text-4xl md:text-5xl font-brand font-black mb-8 uppercase text-white group-hover:text-purple-300 transition-colors duration-500">
              Visión
            </h3>
            <p className="text-purple-100/70 text-lg md:text-xl font-light leading-relaxed">
              Ser un laboratorio de referencia nacional en el mercado hospitalario, reconocido por la calidad de sus productos y capacidad de innovar en Tandil, consolidándonos como una organización destacada que aporta mejoras concretas al uso racional de medicamentos.
            </p>
          </motion.div>
        </div>

        {/* NIVEL 2: VALORES */}
        <div className="pt-16 border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center md:text-left"
          >
            <h3 className="text-3xl md:text-4xl font-brand font-black uppercase text-white tracking-tighter">
              Valores <span className="text-purple-400">Fundamentales</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div 
                key={val.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all duration-300 group h-full"
              >
                <div className="text-purple-400 font-brand font-black text-2xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  {val.id}
                </div>
                <h4 className="text-white font-bold mb-4 leading-tight group-hover:text-purple-200 transition-colors">
                  {val.title}
                </h4>
                <p className="text-purple-100/50 text-sm font-light leading-relaxed group-hover:text-purple-100/80 transition-colors">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
