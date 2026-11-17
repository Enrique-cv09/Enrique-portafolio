import React from 'react';
import { motion } from 'framer-motion';
import { User, Terminal, Sparkles, Code2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-24 lg:pb-28 2xl:py-36 px-6 sm:px-12 md:px-20 2xl:px-28 3xl:px-36 w-full max-w-none relative overflow-hidden">
      {/* Cabecera de la sección con escala 4K */}
      <div className="max-w-3xl 2xl:max-w-4xl mb-10 sm:mb-14 2xl:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 2xl:px-5.5 2xl:py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm 2xl:text-base font-semibold mb-3 sm:mb-4">
          <User size={15} className="2xl:w-5 2xl:h-5" />
          <span>Trayectoria</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Sobre Mí
        </h2>
        <p className="mt-3 sm:mt-4 2xl:mt-6 text-base sm:text-lg 2xl:text-2xl text-slate-600 dark:text-gray-400 leading-relaxed">
          Ingeniero en Desarrollo y Gestión de Software enfocado en crear soluciones digitales robustas, limpias y altamente funcionales.
        </p>
      </div>

      {/* Contenedor principal de la sección */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 2xl:gap-12 items-center w-full">
        {/* Tarjeta de descripción principal (Ocupa 7 columnas en laptop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 bg-white/80 dark:bg-[#121218]/90 border border-slate-200/80 dark:border-white/10 rounded-3xl p-6 sm:p-10 2xl:p-14 shadow-xl shadow-slate-950/5 dark:shadow-black/40 backdrop-blur-xl relative"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 2xl:px-5 2xl:py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm 2xl:text-base font-semibold mb-4 sm:mb-6">
            <Sparkles size={15} className="2xl:w-5 2xl:h-5" />
            <span>Ingeniería & Pasión</span>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4 sm:mb-6 leading-snug">
            Transformando ideas complejas en experiencias web excepcionales.
          </h3>

          <div className="space-y-3.5 sm:space-y-4 2xl:space-y-6 text-slate-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base 2xl:text-xl">
            <p>
              Soy <strong className="text-slate-900 dark:text-white font-semibold">Enrique</strong>, Ingeniero en Desarrollo y Gestión de Software. Me apasiona diseñar y construir aplicaciones web modernas de principio a fin, combinando frontend modular con React y TypeScript, y lógica backend robusta con Node.js, Python y arquitecturas escalables.
            </p>
            <p>
              Disfruto explorando nuevas tecnologías, perfeccionando flujos de trabajo full-stack y cuidando cada detalle de la experiencia de usuario (UX) mediante código limpio y mantenible.
            </p>
          </div>

          {/* Badges inferiores */}
          <div className="mt-6 sm:mt-8 2xl:mt-10 pt-4 sm:pt-6 2xl:pt-8 border-t border-slate-100 dark:border-white/5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs 2xl:text-base font-semibold px-3.5 py-1.5 2xl:px-5 2xl:py-2.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              <Terminal size={14} className="2xl:w-5 2xl:h-5" />
              <span>Clean Code & Arquitectura</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs 2xl:text-base font-semibold px-3.5 py-1.5 2xl:px-5 2xl:py-2.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
              <Code2 size={14} className="2xl:w-5 2xl:h-5" />
              <span>Full-Stack Development</span>
            </span>
          </div>
        </motion.div>

        {/* Contenedor de la foto de perfil circular */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center py-4 lg:py-0"
        >
          <div className="relative group">
            {/* Anillo decorativo con brillo de fondo */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500" />
            
            {/* Marco circular responsivo equilibrado */}
            <div className="relative w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80 2xl:w-[420px] 2xl:h-[420px] rounded-full overflow-hidden border-4 border-white dark:border-[#121218] bg-slate-100 dark:bg-[#121218] shadow-2xl">
              <img
                src="/gomis.jpg"
                alt="Enrique Copado Vargas"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};