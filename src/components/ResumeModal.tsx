import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Fondo difuminado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-md"
          />

          {/* Ventana Modal Adaptativa */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-lg bg-white dark:bg-[#121218] border border-black/10 dark:border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl z-10 overflow-hidden transition-colors duration-300"
          >
            {/* Botón Cerrar (Más pequeño y mejor posicionado en móvil para evitar choques con el título) */}
            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 sm:top-6 sm:right-6 p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X size={16} className="sm:w-5 sm:h-5" />
            </button>

            {/* Cabecera */}
            <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8 pr-6 sm:pr-0">
              <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/20 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 shrink-0">
                <FileText size={24} className="sm:w-7 sm:h-7" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight truncate">Selecciona tu idioma</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 mt-0.5 sm:mt-1">Elige la versión de mi currículum.</p>
              </div>
            </div>

            {/* Opciones de Idioma */}
            <div className="space-y-3 sm:space-y-4">
              {/* Versión Español */}
              <a
                href="/CV_Enrique_Copado_Vargas_full.pdf"
                target="_blank"
                rel="noreferrer"
                download="CV_Enrique_Copado_ES.pdf"
                onClick={onClose}
                className="flex items-center justify-between p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/5 dark:hover:bg-indigo-500/10 transition-all group cursor-pointer"
              >
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Español</h4>
                  <p className="text-[11px] sm:text-sm text-slate-600 dark:text-gray-400 mt-0.5">Formato PDF profesional</p>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/20 dark:border-indigo-500/30 text-[11px] sm:text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <span>Descargar</span>
                  <Download size={14} />
                </div>
              </a>

              {/* Versión Inglés */}
              <a
                href="/CV_Enrique_Copado_Vargas_full_ingles.pdf"
                target="_blank"
                rel="noreferrer"
                download="CV_Enrique_Copado_EN.pdf"
                onClick={onClose}
                className="flex items-center justify-between p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/5 dark:hover:bg-indigo-500/10 transition-all group cursor-pointer"
              >
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">English</h4>
                  <p className="text-[11px] sm:text-sm text-slate-600 dark:text-gray-400 mt-0.5">Optimized PDF format</p>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/20 dark:border-indigo-500/30 text-[11px] sm:text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <span>Download</span>
                  <Download size={14} />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};