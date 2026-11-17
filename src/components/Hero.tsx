import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-32 sm:pt-36 lg:pt-40 2xl:pt-48 pb-8 sm:pb-12 lg:pb-16 2xl:pb-20 px-6 sm:px-12 md:px-20 2xl:px-28 3xl:px-36 w-full max-w-none relative overflow-hidden flex items-center">
      {/* Luz ambiental de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Grid con separación equilibrada y escalado imponente en 2xl/3xl */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 2xl:gap-16 items-center w-full">
        
        {/* Contenido principal de presentación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 lg:col-span-7 space-y-4 sm:space-y-6 2xl:space-y-8"
        >
          {/* Badge superior unificado */}
          <div className="inline-flex items-center gap-2 px-4 py-2 2xl:px-5.5 2xl:py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm 2xl:text-base font-semibold">
            <Sparkles size={16} className="2xl:w-5 2xl:h-5" />
            <span>Full-Stack & Software Engineer</span>
          </div>

          {/* Título Principal con escala fluida mayor para 4K */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
            Hola, soy <span className="text-indigo-600 dark:text-indigo-400">Enrique</span>. <br />
            Desarrollo software robusto y escalable.
          </h1>

          {/* Subtítulo / Descripción con escala proporcional */}
          <p className="text-sm sm:text-base 2xl:text-xl 3xl:text-2xl text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl 2xl:max-w-3xl">
            Ingeniero en Desarrollo y Gestión de Software especializado en crear experiencias web excepcionales con arquitectura limpia, alto rendimiento y tecnologías modernas.
          </p>
        </motion.div>

        {/* Terminal Visual con tamaño y presencia imponente en pantallas grandes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden lg:block lg:col-span-5 bg-white/80 dark:bg-[#121218]/90 border border-slate-200/80 dark:border-white/10 rounded-3xl p-6 sm:p-8 2xl:p-12 shadow-xl shadow-slate-950/5 dark:shadow-black/40 backdrop-blur-xl relative group hover:border-indigo-500/50 transition-all duration-300"
        >
          <div className="flex items-center justify-between pb-4 mb-4 sm:mb-6 border-b border-slate-100 dark:border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-3.5 h-3.5 2xl:w-5 2xl:h-5 rounded-full bg-red-500/80" />
              <div className="w-3.5 h-3.5 2xl:w-5 2xl:h-5 rounded-full bg-amber-500/80" />
              <div className="w-3.5 h-3.5 2xl:w-5 2xl:h-5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs 2xl:text-base font-mono text-slate-400">gomis-config.ts</span>
          </div>

          <div className="space-y-2.5 2xl:space-y-4 font-mono text-xs sm:text-sm 2xl:text-xl text-slate-700 dark:text-gray-300 leading-relaxed">
            <p><span className="text-purple-400">const</span> <span className="text-indigo-400">developer</span> = &#123;</p>
            <p className="pl-4 sm:pl-6">name: <span className="text-emerald-400">'Enrique'</span>,</p>
            <p className="pl-4 sm:pl-6">role: <span className="text-emerald-400">'Full-Stack Engineer'</span>,</p>
            <p className="pl-4 sm:pl-6">location: <span className="text-emerald-400">'Cuernavaca,Morelos,México'</span>,</p>
            <p className="pl-4 sm:pl-6">status: <span className="text-emerald-400">'Ready for production'</span></p>
            <p>&#125;;</p>
          </div>

          <div className="mt-6 pt-5 2xl:mt-8 2xl:pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs 2xl:text-base text-slate-400">
            <span className="flex items-center gap-2">
              <Terminal size={18} className="2xl:w-6 2xl:h-6 text-indigo-500" />
              <span>Clean Architecture</span>
            </span>
            <span className="px-3 py-1 rounded bg-indigo-500/10 text-indigo-400 font-semibold text-[11px] 2xl:text-sm">v2.6</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};