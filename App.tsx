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

// Componente interno para las Bases y Condiciones con la estética exacta de Newtec
const BasesYCondiciones: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto w-full py-16 md:py-28 px-6 text-purple-100/80 font-light leading-relaxed">
      <div className="text-center md:text-left mb-12 md:mb-16 border-b border-white/5 pb-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-400 mb-3">Laboratorio Iberoamericano S.A.</p>
        <h1 class="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none font-brand">
          Bases y Condiciones <br class="hidden md:block" />
          <span className="text-purple-400/90">Sorteo Institucional</span>
        </h1>
      </div>

      <div className="space-y-10 text-sm md:text-base">
        <section>
          <h2 className="text-lg font-black uppercase tracking-wider text-white mb-3 font-brand flex items-center gap-3">
            <span className="text-purple-400 font-mono">01.</span> Organizador
          </h2>
          <p>El presente sorteo es organizado por <strong>Laboratorio Iberoamericano S.A.</strong></p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-wider text-white mb-3 font-brand flex items-center gap-3">
            <span className="text-purple-400 font-mono">02.</span> Vigencia
          </h2>
          <p>La participación en el sorteo será válida desde el día <strong>28 de mayo de 2026</strong> hasta el día <strong>30 de mayo de 2026</strong> inclusive.</p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-wider text-white mb-3 font-brand flex items-center gap-3">
            <span className="text-purple-400 font-mono">03.</span> Participantes
          </h2>
          <p>Podrán participar únicamente personas mayores de 18 años, asistentes al congreso, residentes en la República Argentina y profesionales o trabajadores vinculados al ámbito hospitalario público y/o privado.</p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-wider text-white mb-3 font-brand flex items-center gap-3">
            <span className="text-purple-400 font-mono">04.</span> Mecánica de Participación
          </h2>
          <p>Para participar, los interesados deberán escanear el código QR disponible en el stand y completar correctamente el formulario con los datos solicitados.</p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-wider text-white mb-3 font-brand flex items-center gap-3">
            <span className="text-purple-400 font-mono">05.</span> Premios
          </h2>
          <p class="mb-4">Se sorteará una <strong>“Experiencia Tandil by Newtec”</strong>, que incluye:</p>
          <ul class="list-none space-y-2 pl-2 border-l-2 border-purple-500/30 my-4 text-purple-200/90">
            <li class="flex items-start gap-2">
              <span class="text-purple-400 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span>Dos (2) noches de estadía para dos personas en la ciudad de Tandil.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-400 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span>Alojamiento en hotel o cabaña seleccionados por el organizador.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-400 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span>Desayuno incluido.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-400 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span>Cena del viernes y cena del sábado.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-400 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span>Almuerzo del domingo.</span>
            </li>
          </ul>
          <p class="mt-4 bg-white/5 p-4 rounded-xl border border-white/5 text-purple-200/80">
            Las fechas disponibles para utilizar el premio serán desde el 15 de junio de 2026 hasta el 30 de noviembre de 2026 inclusive, sujeto a disponibilidad y coordinación con el organizador. El beneficio no podrá utilizarse durante fines de semana largos, feriados ni vacaciones de invierno.
          </p>
          <p class="mt-3 text-xs text-purple-400/80 italic">* El premio no incluye traslados hacia la ciudad de Tandil.</p>
          <p class="mt-4">Además, se estarán sorteando agendas institucionales Newtec.</p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-wider text-white mb-3 font-brand flex items-center gap-3">
            <span className="text-purple-400 font-mono">06.</span> Selección de Ganadores
          </h2>
          <p>Los ganadores serán seleccionados de manera aleatoria mediante un sorteo automatizado que se realizará el día <strong>25 de junio de 2026</strong>.</p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-wider text-white mb-3 font-brand flex items-center gap-3">
            <span className="text-purple-400 font-mono">07.</span> Notificación a los Ganadores
          </h2>
          <p>Los ganadores serán contactados vía correo electrónico y/o WhatsApp utilizando los datos proporcionados en el formulario de participación.</p>
          <p class="mt-2">Los ganadores tendrán un plazo de <strong>siete (7) días corridos</strong> para responder y confirmar la aceptación. En caso de no obtener respuesta dentro de dicho plazo, el premio quedará vacante y se procederá a realizar un nuevo sorteo.</p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-wider text-white mb-3 font-brand flex items-center gap-3">
            <span className="text-purple-400 font-mono">08.</span> Aclaraciones
          </h2>
          <p>El premio es personal, no es transferible bajo ningún concepto ni canjeable por su equivalente en dinero en efectivo u otros bienes.</p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-wider text-white mb-3 font-brand flex items-center gap-3">
            <span className="text-purple-400 font-mono">09.</span> Política de Privacidad
          </h2>
          <p>Los datos personales proporcionados por los participantes serán utilizados exclusivamente para la gestión y realización del presente sorteo, así como también para el envío de información institucional, comercial y/o promocional relacionada con Newtec y Laboratorio Iberoamericano S.A.</p>
          <p class="mt-4 border-t border-white/5 pt-6 text-xs text-purple-400/60 font-medium">
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
    // Escucha el scroll para el Header
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Detecta de forma inteligente si la URL pide las bases (?page=bases)
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
      {/* El Header se mantiene siempre idéntico */}
      <Header scrolled={scrolled} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {isBasesPage ? (
            // Si la URL es ?page=bases muestra solo este componente
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
            // Si la URL es normal muestra la Home completa
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

      {/* El Footer se mantiene siempre al final */}
      <Footer />
    </div>
  );
};

export default App;
