import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductSection } from './components/ProductSection';
import { OriginSection } from './components/OriginSection';
import { AboutSection } from './components/AboutSection';
import { HRSection } from './components/HRSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

// Componente interno para las Bases y Condiciones optimizado para móvil y con estilos corregidos
const BasesYCondiciones: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto w-full py-10 md:py-28 px-5 md:px-6 text-purple-100/90 font-light leading-relaxed">
      
      {/* ENCABEZADO 100% BLANCO CON NOMBRE SEPARADO */}
      <div className="text-center md:text-left mb-8 md:mb-16 border-b border-white/5 pb-6 md:pb-8">
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-2 md:mb-3">
          <strong>Laboratorio Ibero Americano S.A.</strong>
        </p>
        <h1 className="text-2xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.1] font-brand">
          Bases y Condiciones <br className="hidden md:block" />
          Sorteo Institucional
        </h1>
      </div>

      <div className="space-y-8 md:space-y-10 text-sm md:text-base antialiased">
        <section>
          <h2 className="text-base md:text-lg font-black uppercase tracking-wider text-white mb-2 md:mb-3 font-brand flex items-center gap-2">
            <span className="text-purple-400 font-mono">01.</span> Organizador
          </h2>
          <p>El presente sorteo es organizado por <strong>Laboratorio Ibero Americano S.A.</strong></p>
        </section>

        <section>
          <h2 className="text-base md:text-lg font-black uppercase tracking-wider text-white mb-2 md:mb-3 font-brand flex items-center gap-2">
            <span className="text-purple-400 font-mono">02.</span> Vigencia
          </h2>
          <p>La participación en el sorteo será válida desde el día <strong>28 de mayo de 2026</strong> hasta el día <strong>30 de mayo de 2026</strong> inclusive.</p>
        </section>

        <section>
          <h2 className="text-base md:text-lg font-black uppercase tracking-wider text-white mb-2 md:mb-3 font-brand flex items-center gap-2">
            <span className="text-purple-400 font-mono">03.</span> Participantes
          </h2>
          <p>Podrán participar únicamente personas mayores de 18 años, asistentes al congreso, residentes en la República Argentina y profesionales o trabajadores vinculados al ámbito hospitalario público y/o privado.</p>
        </section>

        <section>
          <h2 className="text-base md:text-lg font-black uppercase tracking-wider text-white mb-2 md:mb-3 font-brand flex items-center gap-2">
            <span className="text-purple-400 font-mono">04.</span> Mecánica de Participación
          </h2>
          <p>Para participar, los interesados deberán escanear el código QR disponible en el stand y completar correctamente el formulario con los datos solicitados.</p>
        </section>

        <section>
          <h2 className="text-base md:text-lg font-black uppercase tracking-wider text-white mb-2 md:mb-3 font-brand flex items-center gap-2">
            <span className="text-purple-400 font-mono">05.</span> Premios
          </h2>
          <p className="mb-3">Se sorteará una <strong>“Experiencia Tandil by Newtec”</strong>, que incluye:</p>
          <ul className="list-none space-y-2 pl-2 border-l-2 border-purple-500/30 my-4 text-purple-200/90 text-sm md:text-base">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span>Dos (2) noches de estadía para dos personas en la ciudad de Tandil.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span>Alojamiento en hotel o cabaña seleccionados por el organizador.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span>Desayuno incluido.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span>Cena del viernes y cena del sábado.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span>Almuerzo del domingo.</span>
            </li>
          </ul>
          <div className="bg-white/5 p-4 rounded-xl border border-white/5 text-purple-200/80 text-xs md:text-sm leading-relaxed">
            Las fechas disponibles para utilizar el premio serán desde el 15 de junio de 2026 hasta el 30 de noviembre de 2026 inclusive, sujeto a disponibilidad y coordinación con el organizador. El beneficio no podrá utilizarse durante fines de semana largos, feriados ni vacaciones de invierno.
          </div>
          <p className="mt-3 text-xs text-purple-400/80 italic">* El premio no incluye traslados hacia la ciudad de Tandil.</p>
          <p className="mt-4">Además, se estarán sorteando agendas institucionales Newtec.</p>
        </section>

        <section>
          <h2 className="text-base md:text-lg font-black uppercase tracking-wider text-white mb-2 md:mb-3 font-brand flex items-center gap-2">
            <span className="text-purple-400 font-mono">06.</span> Selección de Ganadores
          </h2>
          <p>Los ganadores serán seleccionados de manera aleatoria mediante un sorteo automatizado que se realizará el día <strong>25 de junio de 2026</strong>.</p>
        </section>

        <section>
          <h2 className="text-base md:text-lg font-black uppercase tracking-wider text-white mb-2 md:mb-3 font-brand flex items-center gap-2">
            <span className="text-purple-400 font-mono">07.</span> Notificación a los Ganadores
          </h2>
          <p>Los ganadores serán contactados vía correo electrónico y/o WhatsApp utilizando los datos proporcionados en el formulario de participación.</p>
          <p className="mt-2">Los ganadores tendrán un plazo de <strong>siete (7) días corridos</strong> para responder y confirmar la aceptación. En caso de no obtener respuesta dentro de dicho plazo, el premio quedará vacante y se procederá a realizar un nuevo sorteo.</p>
        </section>

        <section>
          <h2 className="text-base md:text-lg font-black uppercase tracking-wider text-white mb-2 md:mb-3 font-brand flex items-center gap-2">
            <span className="text-purple-400 font-mono">08.</span> Aclaraciones
          </h2>
          <p>El premio es personal, no es transferible bajo ningún concepto ni canjeable por su equivalente en dinero en efectivo u otros bienes.</p>
        </section>

        <section>
          <h2 className="text-base md:text-lg font-black uppercase tracking-wider text-white mb-2 md:mb-3 font-brand flex items-center gap-2">
            <span className="text-purple-400 font-mono">09.</span> Política de Privacidad
          </h2>
          <p>Los datos personales proporcionados por los participantes serán utilizados exclusivamente para la gestión y realización del presente sorteo, así como también para el envío de información institucional, comercial y/o promocional relacionada con Newtec y <strong>Laboratorio Ibero Americano S.A.</strong></p>
          <p className="mt-6 border-t border-white/5 pt-6 text-[10px] md:text-xs text-purple-400/60 font-medium">
            La participación en el sorteo implica la total y absoluta aceptación de las presentes bases y condiciones.
          </p>
        </section>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isBasesPage, setIsBasesPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const params = new URLSearchParams(window.location.search);
    if (params.get('page') === 'bases') {
      setIsBasesPage(true);
    } else {
      setIsBasesPage(false);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen main-gradient flex flex-col selection:bg-purple-300 selection:text-purple-900">
      
      {/* CONDICIONAL: LOGO ACTUALIZADO CLICKABLE SIN MENÚ */}
      {isBasesPage ? (
        <header className="w-full border-b border-white/5 bg-[#0d0a14]/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-5 md:px-6 h-16 md:h-24 flex items-center">
            <a href="/" className="flex items-center gap-2 md:gap-3 transition-opacity hover:opacity-80" style={{ textDecoration: 'none' }}>
              <img 
                src="https://laboratorionewtec.com.ar/wp-content/uploads/2026/03/newtec-logo-blanco.png" 
                alt="Newtec" 
                className="h-6 md:h-8 w-auto object-contain"
              />
            </a>
          </div>
        </header>
      ) : (
        <Header scrolled={scrolled} />
      )}
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {isBasesPage ? (
            <motion.div
              key="bases"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <BasesYCondiciones />
            </motion.div>
          ) : (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero />
              <Features />
              <ProductSection />
              <OriginSection />
              <AboutSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;
