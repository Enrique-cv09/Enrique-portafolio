import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, ExternalLink, Share2 } from 'lucide-react';

interface SocialCard {
  name: string;
  username: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  colorClass: string;
}

const socialLinks: SocialCard[] = [
  {
    name: 'GitHub',
    username: '@Enrique-cv09',
    description: 'Repositorios de código, proyectos full-stack y open source.',
    icon: (
      <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    url: 'https://github.com/Enrique-cv09',
    colorClass: 'bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 border-slate-700',
  },
  {
    name: 'LinkedIn',
    username: 'Enrique Copado Vargas',
    description: 'Experiencia profesional, trayectoria y conexiones en la industria.',
    icon: (
      <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.239-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    url: 'https://www.linkedin.com/in/enrique-copado-vargas-0614b0312',
    colorClass: 'bg-sky-600 hover:bg-sky-500 border-sky-500',
  },
  {
    name: 'WhatsApp',
    username: '55 1918 8942',
    description: '¿Tienes una propuesta o proyecto rápido? Escríbeme al chat.',
    icon: <MessageCircle size={22} className="text-white" />,
    url: 'https://wa.me/5519188942', 
    colorClass: 'bg-emerald-600 hover:bg-emerald-500 border-emerald-500',
  },
  {
    name: 'Instagram',
    username: '@gomis_cv',
    description: 'Un vistazo más personal a mi día a día y desarrollo tecnológico.',
    icon: (
      <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    url: 'https://www.instagram.com/gomis_cv/',
    colorClass: 'bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 border-pink-500/30',
  },
  {
    name: 'Facebook',
    username: 'Enrique Copado',
    description: 'Comunidad y publicaciones de interés general.',
    icon: (
      <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
      </svg>
    ),
    url: 'https://www.facebook.com/Enrique.copado69/',
    colorClass: 'bg-blue-600 hover:bg-blue-500 border-blue-500',
  },
  {
    name: 'Correo Electrónico',
    username: 'enrique.00.cv@gmail.com',
    description: 'Para colaboraciones formales, ofertas de trabajo o consultas técnicas.',
    icon: <Mail size={22} className="text-white" />,
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=enrique.00.cv@gmail.com',
    colorClass: 'bg-indigo-600 hover:bg-indigo-500 border-indigo-500',
  }
];

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="pt-6 pb-28 sm:pt-10 sm:pb-24 px-6 sm:px-12 md:px-20 w-full max-w-none relative overflow-hidden">
      {/* Luz ambiental de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Cabecera de la sección */}
      <div className="max-w-3xl mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3 sm:mb-4">
          <Share2 size={14} />
          <span>Conectemos</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Redes & Contacto
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
          Encuéntrame en mis redes profesionales o escríbeme directamente para cualquier colaboración o proyecto.
        </p>
      </div>

      {/* Grid: 1 columna compacta en móvil y tablet, 3 columnas completas en laptop (lg) en adelante */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 sm:gap-6 w-full">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${social.colorClass} border rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl text-white flex flex-col justify-between relative group overflow-hidden transition-all duration-300 transform hover:-translate-y-1`}
          >
            {/* Efecto de brillo interior */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-6">
                <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/15 backdrop-blur-md border border-white/20">
                  {social.icon}
                </div>
                <ExternalLink size={16} className="text-white/70 group-hover:text-white group-hover:scale-110 transition-all" />
              </div>

              <h3 className="text-base sm:text-2xl font-bold tracking-tight">{social.name}</h3>
              <p className="text-xs sm:text-sm font-semibold text-white/85 mt-0.5">{social.username}</p>
            </div>

            {/* Descripción visible solo en laptops y escritorio (lg en adelante) */}
            <p className="hidden lg:block text-sm sm:text-base text-white/90 mt-6 leading-relaxed">
              {social.description}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};