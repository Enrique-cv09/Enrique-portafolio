import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Terminal, Layers, Mail, Plus } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  angle: number; // Distribución perfecta para 5 elementos en abanico
}

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#', icon: <Home size={20} />, angle: -90 },
  { label: 'Sobre Mí', href: '#about', icon: <User size={20} />, angle: 0 },
  { label: 'Stack', href: '#architecture', icon: <Terminal size={20} />, angle: -40 },
  { label: 'Proyectos', href: '#projects', icon: <Layers size={20} />, angle: 40 },
  { label: 'Contacto', href: '#contact', icon: <Mail size={20} />, angle: 90 },
];

export const RadialNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const radius = 200;

  return (
    /* Oculto en móviles y tablets, visible exclusivamente en laptops/desktop (lg en adelante) */
    <div className="hidden lg:flex fixed top-1/2 left-0 -translate-y-1/2 z-50 items-center pointer-events-none">
      <div className="relative pointer-events-auto">
        
        {/* Botón Central */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.12, filter: 'brightness(1.1)' }}
          whileTap={{ scale: 0.92 }}
          className="w-14 h-36 bg-gradient-to-b from-indigo-500 to-indigo-700 hover:from-indigo-400 hover:to-indigo-600 text-white rounded-r-3xl shadow-2xl shadow-indigo-600/70 flex items-center justify-center pl-2.5 transition-all cursor-pointer border-y border-r border-indigo-300/40"
          aria-label="Menú radial"
        >
          <motion.div animate={{ rotate: isOpen ? 135 : 0 }} transition={{ duration: 0.3, ease: "backOut" }}>
            <Plus size={30} />
          </motion.div>
        </motion.button>

        {/* Botones Desplegados en Abanico de 5 */}
        <AnimatePresence>
          {isOpen && (
            <div className="absolute top-1/2 left-0 -translate-y-1/2">
              {navItems.map((item, index) => {
                const radian = (item.angle * Math.PI) / 180;
                const x = Math.cos(radian) * radius + 20;
                const y = Math.sin(radian) * radius;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: -30 }}
                    animate={{ opacity: 1, scale: 1, x, y, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 30 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.03, 
                      type: 'spring', 
                      stiffness: 320, 
                      damping: 18 
                    }}
                    whileHover={{ scale: 1.08, x: x + 6 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute -top-6 left-0 flex items-center gap-3 bg-white/95 dark:bg-[#16161d]/95 backdrop-blur-md border-2 border-indigo-500/40 dark:border-indigo-500/50 text-slate-900 dark:text-white hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 px-4.5 py-2.5 rounded-2xl shadow-2xl shadow-indigo-500/25 transition-colors whitespace-nowrap group"
                  >
                    <span className="p-2 rounded-xl bg-indigo-600/10 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="text-xs sm:text-sm font-bold tracking-wide">{item.label}</span>
                  </motion.a>
                );
              })}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};