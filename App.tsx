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

// Componente para el Blog y Lectura de Entradas con Estilo Visual Integrado
const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<any | null>(null);

  useEffect(() => {
    fetch('https://laboratorionewtec.com.ar/wp-json/wp/v2/posts?_embed')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setPosts(data);
        }
        
        // Verificar si la URL viene directamente con la intención de leer un post específico (?page=blog&id=XX)
        const params = new URLSearchParams(window.location.search);
        const postId = params.get('id');
        if (postId && Array.isArray(data)) {
          const post = data.find(p => p.id === parseInt(postId));
          if (post) setSelectedPost(post);
        }
        
        setLoading(false);
      })
      .catch(error => {
        console.error("Error absorbiendo los artículos:", error);
        setLoading(false);
      });
  }, []);

  // Si el usuario seleccionó un artículo, renderizamos la vista de lectura con la estética Newtec
  if (selectedPost) {
    const featuredImage = selectedPost._embedded?.['wp:featuredmedia']?.[0]?.source_url;

    return (
      <div className="max-w-4xl mx-auto w-full py-20 md:py-32 px-6 text-white">
        {/* Botón Volver con estilo de la marca */}
        <button 
          onClick={() => {
            setSelectedPost(null);
            window.history.pushState({}, '', '?page=blog');
          }}
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-purple-400 hover:text-white transition-colors mb-10"
        >
          ← Volver al Blog
        </button>

        <article className="space-y-8">
          {/* Encabezado del artículo con tipografía brand */}
          <div className="border-b border-white/10 pb-6">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-purple-400 mb-3">
              {new Date(selectedPost.date).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <h1 
              className="text-2xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.1] font-brand"
              dangerouslySetInnerHTML={{ __html: selectedPost.title.rendered }}
            />
          </div>

          {/* Imagen destacada estilizada con bordes redondeados de la interfaz */}
          {featuredImage && (
            <div className="w-full h-64 md:h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-purple-950/20">
              <img src={featuredImage} alt={selectedPost.title.rendered} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Cuerpo del artículo con la misma lectura clara, ligera y espaciada que las bases y condiciones */}
          <div 
            className="text-sm md:text-lg text-purple-100/90 font-light leading-relaxed space-y-6 antialiased pt-4 post-body-content"
            dangerouslySetInnerHTML={{ __html: selectedPost.content.rendered }}
          />
        </article>
      </div>
    );
  }

  // Grilla normal del Blog
  return (
    <div className="max-w-7xl mx-auto w-full py-20 md:py-32 px-6 text-white">
      <div className="text-center md:text-left mb-16 border-b border-white/5 pb-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-400 mb-3">Novedades y Ciencia</p>
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white font-brand">
          Blog <span className="text-purple-400/90">Institucional</span>
        </h1>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white/5 rounded-2xl h-96 animate-pulse border border-white/5"></div>
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-20 text-purple-200/50">
          <p className="text-lg font-light">No se encontraron artículos publicados actualmente.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => {
            const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
              "https://laboratorionewtec.com.ar/wp-content/uploads/2026/03/newtec-logo-blanco.png";

            return (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/[0.03] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all group flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden relative bg-purple-950/20">
                  <img src={featuredImage} alt={post.title.rendered} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a14] to-transparent opacity-60"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-purple-400 mb-2">
                    {new Date(post.date).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <h2 
                    className="text-lg font-bold line-clamp-2 text-white group-hover:text-purple-300 transition-colors mb-3 leading-snug"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div 
                    className="text-sm text-purple-100/70 font-light line-clamp-3 mb-6 flex-grow leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  {/* Evento onClick para abrir la nota dentro de React manteniendo el mismo estilo de la web */}
                  <button 
                    onClick={() => {
                      setSelectedPost(post);
                      window.history.pushState({}, '', `?page=blog&id=${post.id}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 group-hover:text-white transition-colors text-left"
                  >
                    Leer Artículo 
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      )}
    </div>
  );
};

// Componente de las Bases del Sorteo
const BasesYCondiciones: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto w-full py-10 md:py-28 px-5 md:px-6 text-purple-100/90 font-light leading-relaxed">
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
          <p>El presente sorteo es organized por <strong>Laboratorio Ibero Americano S.A.</strong></p>
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
  const [currentPage, setCurrentPage] = useState<'home' | 'bases' | 'blog'>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    if (page === 'bases') {
      setCurrentPage('bases');
    } else if (page === 'blog') {
      setCurrentPage('blog');
    } else {
      setCurrentPage('home');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen main-gradient flex flex-col selection:bg-purple-300 selection:text-purple-900">
      
      {currentPage === 'bases' ? (
        <header className="w-full border-b border-white/5 bg-[#7d55c7] sticky top-0 z-50">
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
          {currentPage === 'bases' && (
            <motion.div
              key="bases"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <BasesYCondiciones />
            </motion.div>
          )}

          {currentPage === 'blog' && (
            <motion.div
              key="blog"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <BlogSection />
            </motion.div>
          )}

          {currentPage === 'home' && (
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
