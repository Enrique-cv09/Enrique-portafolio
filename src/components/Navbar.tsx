import React, { useState } from 'react';
import { 
  Code2, 
  Home, 
  User, 
  Cpu, 
  FolderGit2, 
  Share2, 
  Sun, 
  Moon, 
  Download 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ResumeModal } from './ResumeModal';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <>
      {/* Navbar Superior estilizado para laptop y imponente en 4K */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#0a0a0c]/80 backdrop-blur-md border-b border-black/10 dark:border-white/10 px-6 sm:px-12 md:px-20 2xl:px-28 3xl:px-36 py-3 sm:py-3.5 2xl:py-6 transition-colors duration-300">
        <div className="w-full flex justify-between items-center">
          {/* Logo y Marca */}
          <div className="flex items-center gap-2.5 sm:gap-3 2xl:gap-5">
            <div className="p-2 sm:p-2.5 2xl:p-4 bg-indigo-600/10 dark:bg-indigo-600/20 rounded-xl sm:rounded-2xl border border-indigo-500/30 text-indigo-600 dark:text-indigo-400">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-9 2xl:h-9" />
            </div>
            <span className="font-bold text-base sm:text-xl 2xl:text-3xl 3xl:text-4xl tracking-wide text-slate-900 dark:text-white">
              Gomis<span className="text-indigo-600 dark:text-indigo-500">.dev</span>
            </span>
          </div>

          {/* Menú Superior */}
          <div className="flex items-center gap-2.5 sm:gap-4 2xl:gap-8">
            <button
              onClick={toggleTheme}
              className="p-2 sm:p-2.5 2xl:p-4 text-slate-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl sm:rounded-2xl transition-colors cursor-pointer"
              aria-label="Cambiar tema"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-9 2xl:h-9 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-9 2xl:h-9" />
              )}
            </button>

            {/* Botón Currículum */}
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="flex items-center gap-2 text-xs sm:text-sm 2xl:text-xl 3xl:text-2xl bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 py-2 sm:px-5 sm:py-2.5 2xl:px-9 2xl:py-4 rounded-xl sm:rounded-2xl font-medium transition-all shadow-lg shadow-indigo-600/20 cursor-pointer"
              aria-label="Currículum"
            >
              <span className="hidden min-[350px]:inline">Currículum</span>
              <Download className="w-4 h-4 sm:w-4.5 sm:h-4.5 2xl:w-7 2xl:h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* Dock Inferior para Móvil y Tablets */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-white/95 dark:bg-[#121218]/95 backdrop-blur-lg border-t border-black/10 dark:border-white/10 px-2 py-2 flex items-center justify-around transition-colors duration-300 shadow-2xl">
        <a href="#" className="flex flex-col items-center text-slate-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-1 px-2">
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-1 font-medium">Inicio</span>
        </a>
        <a href="#about" className="flex flex-col items-center text-slate-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-1 px-2">
          <User className="w-5 h-5" />
          <span className="text-[10px] mt-1 font-medium">Sobre Mí</span>
        </a>
        <a href="#architecture" className="flex flex-col items-center text-slate-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-1 px-2">
          <Cpu className="w-5 h-5" />
          <span className="text-[10px] mt-1 font-medium">Stack</span>
        </a>
        <a href="#projects" className="flex flex-col items-center text-slate-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-1 px-2">
          <FolderGit2 className="w-5 h-5" />
          <span className="text-[10px] mt-1 font-medium">Proyectos</span>
        </a>
        <a href="#contact" className="flex flex-col items-center text-slate-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-1 px-2">
          <Share2 className="w-5 h-5" />
          <span className="text-[10px] mt-1 font-medium">Contacto</span>
        </a>
      </div>

      {/* Modal de Selección de CV */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </>
  );
};