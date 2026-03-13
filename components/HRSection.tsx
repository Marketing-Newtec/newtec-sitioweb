
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const HRSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="sumate" className="py-48 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto glass-card rounded-[4rem] p-16 md:p-24 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-5xl md:text-8xl font-brand font-black mb-10 tracking-tighter uppercase"
            >
              Unite a <br /><span className="text-purple-300">nuestro equipo</span>
            </motion.h2>
            <p className="text-purple-100/60 text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Buscamos talentos que quieran ser parte de la revolución tecnológica en salud. Envianos tu CV y construyamos el futuro juntos.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-10"
              >
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 ml-2">Nombre Completo</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] px-8 py-5 outline-none focus:border-white/40 focus:bg-white/10 transition-all text-lg font-light"
                      placeholder="Ej: Juan Pérez"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 ml-2">Correo Electrónico</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] px-8 py-5 outline-none focus:border-white/40 focus:bg-white/10 transition-all text-lg font-light"
                      placeholder="email@newtec.com.ar"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 ml-2">Adjuntar CV (PDF)</label>
                  <div className="relative group">
                    <input 
                      type="file" 
                      accept=".pdf"
                      required
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                    />
                    <div className="w-full bg-white/5 border-2 border-dashed border-white/10 rounded-[1.5rem] px-10 py-16 flex flex-col items-center justify-center group-hover:bg-white/10 group-hover:border-white/30 transition-all">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="text-6xl mb-4 opacity-30"
                      >
                        📄
                      </motion.div>
                      <span className="text-sm font-bold opacity-40 uppercase tracking-widest">Arrastrá tu archivo aquí o hacé click</span>
                    </div>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  type="submit"
                  className={`w-full py-6 bg-white text-[#592B82] font-black text-xl rounded-[1.5rem] transition-all shadow-2xl flex items-center justify-center gap-4 ${loading ? 'opacity-70' : 'hover:shadow-white/20'}`}
                >
                  {loading ? (
                    <div className="w-6 h-6 border-4 border-[#592B82]/20 border-t-[#592B82] rounded-full animate-spin"></div>
                  ) : 'ENVIAR POSTULACIÓN'}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center"
              >
                <motion.div 
                  initial={{ rotate: -20, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  className="text-9xl mb-10 inline-block"
                >
                  🚀
                </motion.div>
                <h3 className="text-4xl md:text-5xl font-brand font-black mb-6 uppercase tracking-tight">¡Recibido con éxito!</h3>
                <p className="text-purple-100/60 text-xl font-light">Nuestro equipo de RRHH revisará tu perfil en breve.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-purple-200 border-b border-purple-200/20 pb-1 font-bold uppercase tracking-widest hover:text-white transition-colors"
                >
                  Volver a intentar
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

