import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  const values = [
    { 
      id: 1, 
      title: "PERSONAS Y CLIMA\nDE TRABAJO", 
      desc: "Ponemos a las personas en el centro, promoviendo un clima laboral respetuoso, colaborativo y profesional, que haga de nuestro laboratorio un excelente lugar para trabajar." 
    },
    { 
      id: 2, 
      title: "EQUIPO HUMANO\nY EXCELENCIA TÉCNICA", 
      desc: "Creemos en la excelencia de los equipos, integrando talento técnico y calidad humana para construir un grupo profesional comprometido y confiable." 
    },
    { 
      id: 3, 
      title: "CALIDAD TOTAL\nY PROCESOS RIGUROSOS", 
      desc: "Trabajamos con procesos de calidad rigurosos y eficientes, asegurando altos estándares en cada etapa del desarrollo." 
    },
    { 
      id: 4, 
      title: "INSTALACIONES Y\nTECNOLOGÍA MODERNA", 
      desc: "Contamos con instalaciones modernas y eficientes, equipadas con tecnologías alineadas a los más altos estándares vigentes de la industria farmacéutica a nivel mundial." 
    },
    { 
      id: 5, 
      title: "INTEGRIDAD Y\nCONFIABILIDAD ABSOLUTA", 
      desc: "Actuamos con integridad, responsabilidad y transparencia, sosteniendo la calidad como fundamento de la confiabilidad de nuestros medicamentos." 
    },
    { 
      id: 6, 
      title: "INNOVACIÓN CON\nPROPÓSITO CLÍNICO", 
      desc: "Impulsamos una innovación responsable y aplicada, orientada a generar mejoras clínicas reales y a aportar valor concreto al sistema de salud." 
    },
    { 
      id: 7, 
      title: "SUSTENTABILIDAD Y\nCRECIMIENTO EMPRESARIAL", 
      desc: "La búsqueda de rentabilidad como factor necesario para impulsar el crecimiento tecnológico, innovativo y de bienestar de los colaboradores y el entorno social." 
    }
  ];

  return (
    <section id="nosotros" className="relative overflow-hidden bg-[#411e63]">
      {/* SECCIÓN SUPERIOR: MISIÓN Y VISIÓN (Fondo Limpio) */}
      <div className="py-24 md:py-32 px-6 relative z-10 bg-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-14 rounded-[3rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group transition-all duration-500 hover:bg-white/10"
          >
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-purple-400 mb-6 block">Institucional</span>
            <h3 className="text-4xl md:text-5xl font-brand font-black mb-8 uppercase text-white group-hover:text-purple-300 transition-colors">Misión</h3>
            <p className="text-purple-100/70 text-lg font-light leading-relaxed">
              Desarrollar, producir y comercializar medicamentos de alta calidad para el mercado hospitalario, a precios justos, con procesos rigurosos de control de calidad, un fuerte compromiso con las personas que integran nuestro equipo y una innovación enfocada en generar mejoras clínicas reales.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-14 rounded-[3rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group transition-all duration-500 hover:bg-white/10"
          >
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-purple-400 mb-6 block">Estrategia</span>
            <h3 className="text-4xl md:text-5xl font-brand font-black mb-8 uppercase text-white group-hover:text-purple-300 transition-colors">Visión</h3>
            <p className="text-purple-100/70 text-lg font-light leading-relaxed">
              Ser un laboratorio farmacéutico de referencia en el mercado hospitalario, reconocido por la calidad de sus productos, la solidez de sus procesos y su capacidad de innovar, desarrollando soluciones que aporten mejoras concretas en la calidad y en el uso racional de los medicamentos.
            </p>
          </motion.div>
        </div>
      </div>

      {/* SECCIÓN INFERIOR: VALORES CON PARALLAX */}
      <div className="relative py-24 md:py-40 px-6">
        {/* Background con Parallax y Overlay Violeta */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-10"
          style={{ 
            backgroundImage: `url('https://lavenderblush-snake-373826.hostingersite.com/wp-content/uploads/2026/03/laboratorio-newtec-fondo.png')`,
          }}
        ></div>
        {/* Capa de sombreado violeta para integración */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#411e63] via-transparent to-[#411e63]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h3 className="text-3xl md:text-5xl font-brand font-black uppercase text-white tracking-tighter">
              Valores <span style={{ color: 'rgb(216 180 254 / 0.8)' }}>Fundamentales</span>
            </h3>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {values.map((val, i) => (
              <motion.div 
                key={val.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px] p-8 rounded-[2.5rem] bg-[#411e63]/60 backdrop-blur-md border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-purple-500/20 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="text-white font-brand font-black text-3xl mb-4 opacity-100 group-hover:text-purple-400 transition-colors">
                  {val.id}
                </div>
                <h4 className="text-white font-brand font-black text-[13px] md:text-[14px] mb-4 leading-tight uppercase tracking-wider group-hover:text-purple-200 transition-colors whitespace-pre-line">
                  {val.title}
                </h4>
                <p className="text-purple-100/60 text-[16px] font-light leading-relaxed group-hover:text-purple-100/90 transition-colors">
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
