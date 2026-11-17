import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, CheckCircle2 } from 'lucide-react';
import type { Project } from '../types';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const SystemArchitectureModal: React.FC<Props> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#121218] border border-white/10 rounded-2xl max-w-2xl w-full p-6 relative shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400">
                <Cpu size={22} />
              </div>
              <div>
                <span className="text-xs font-semibold text-indigo-400 tracking-wider uppercase">Arquitectura de Sistema</span>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="space-y-6">
            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
              <h4 className="text-sm font-semibold text-gray-200 mb-2">Resumen Arquitectónico:</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {project.architectureDetails?.summary}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-200 mb-3">Aspectos Técnicos Clave:</h4>
              <ul className="space-y-2.5">
                {project.architectureDetails?.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle2 size={18} className="text-indigo-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-200 mb-3">Tecnologías Involucradas:</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};