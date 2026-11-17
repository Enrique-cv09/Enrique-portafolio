import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ExternalLink, Code, BarChart3, Mail, Film, ShoppingCart } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  highlight: string;
}

const projectsList: Project[] = [
  {
    title: 'E-Commerce Store & Stripe',
    category: 'Pasarela de Pagos & Mock Store',
    description: 'Simulación de comercio electrónico con catálogo dinámico mediante REST API, carrito de compras interactivo y pasarela de pago integrada con Stripe.',
    icon: <ShoppingCart size={24} className="2xl:w-8 2xl:h-8 text-emerald-400" />,
    imageUrl: '/stripe.png',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Stripe API', 'Vite'],
    liveUrl: 'https://ecommerce-stripe-ashy.vercel.app',
    githubUrl: 'https://github.com/Enrique-cv09/ecommerce-stripe',
    highlight: 'Stripe & Mock API'
  },
  {
    title: 'SaaS Analytics Dashboard',
    category: 'Dashboard & Business Intelligence',
    description: 'Panel de análisis de métricas en tiempo real enfocado en productos SaaS, con visualización de datos limpia, diseño responsivo y rendimiento optimizado.',
    icon: <BarChart3 size={24} className="2xl:w-8 2xl:h-8 text-indigo-400" />,
    imageUrl: '/sas.png',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://saas-analytics-dashboard-lyart.vercel.app',
    githubUrl: 'https://github.com/Enrique-cv09/saas-analytics-dashboard',
    highlight: 'Métricas & UI Pro'
  },
  {
    title: 'Invitaciones Digitales Interactivas',
    category: 'Aplicación Web Dinámica',
    description: 'Plataforma web dinámica para invitaciones de eventos personalizados con gestión de parámetros por URL, diseño elegante y fluidez total.',
    icon: <Mail size={24} className="2xl:w-8 2xl:h-8 text-purple-400" />,
    imageUrl: '/invitaciones.png',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://mis15ximena.vercel.app/?id=c94f3cab-412d-4c2f-b216-a4ba42e535c0',
    githubUrl: 'https://github.com/Enrique-cv09/invitaciones-digitales',
    highlight: 'Dinámico & Responsive'
  },
  {
    title: 'TMDB Movie App',
    category: 'Consumo de APIs & Multimedia',
    description: 'Aplicación web interactiva conectada a la base de datos de películas de TMDB para búsqueda, exploración de catálogos y visualización en tiempo real.',
    icon: <Film size={24} className="2xl:w-8 2xl:h-8 text-pink-400" />,
    imageUrl: '/appmovies.png',
    tags: ['TypeScript', 'React', 'REST APIs', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://tmdb-movie-app-pied.vercel.app',
    githubUrl: 'https://github.com/Enrique-cv09/tmdb-movie-app',
    highlight: 'REST API & Async'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="pt-2 sm:pt-4 pb-16 sm:pb-24 2xl:pt-8 2xl:pb-36 px-6 sm:px-12 md:px-20 2xl:px-28 3xl:px-36 w-full max-w-none relative overflow-hidden">
      {/* Luz ambiental de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Cabecera */}
      <div className="max-w-3xl 2xl:max-w-4xl mb-8 sm:mb-12 2xl:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 2xl:px-5.5 2xl:py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs 2xl:text-base font-semibold mb-3 sm:mb-3.5">
          <Layers size={14} className="2xl:w-5 2xl:h-5" />
          <span>Portafolio</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl 2xl:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Proyectos Destacados
        </h2>
        <p className="mt-2.5 sm:mt-3 2xl:mt-6 text-sm sm:text-base lg:text-lg 2xl:text-2xl text-slate-600 dark:text-gray-400 leading-relaxed">
          Aplicaciones reales desarrolladas con arquitecturas limpias, tipado estricto e integración de servicios y APIs.
        </p>
      </div>

      {/* Grid de Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 2xl:gap-10 w-full max-w-7xl mx-auto">
        {projectsList.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/80 dark:bg-[#121218]/90 border border-slate-200/80 dark:border-white/10 rounded-3xl shadow-xl shadow-slate-950/5 dark:shadow-black/40 backdrop-blur-xl flex flex-col relative group overflow-hidden hover:border-indigo-500/50 transition-all duration-300"
          >
            {/* Gradiente sutil en el hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />

            {/* Vista previa del proyecto */}
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-slate-200/80 dark:border-white/10">
              <img 
                src={project.imageUrl} 
                alt={`Vista previa de ${project.title}`}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121218]/80 via-transparent to-transparent p-4 sm:p-6 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <div className="p-2 sm:p-2.5 2xl:p-4 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 backdrop-blur-sm text-indigo-400">
                    {project.icon}
                  </div>
                  <span className="text-[10px] sm:text-[11px] 2xl:text-sm font-semibold px-2.5 sm:px-3 2xl:px-4 2xl:py-1.5 rounded-full bg-indigo-500/15 text-indigo-400 backdrop-blur-sm border border-indigo-500/30">
                    {project.highlight}
                  </span>
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="p-5 sm:p-6 2xl:p-10 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl 2xl:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm 2xl:text-lg font-semibold text-indigo-500 dark:text-indigo-400 mt-1 mb-2.5 2xl:mb-4">
                  {project.category}
                </p>
                
                <p className="text-xs sm:text-sm 2xl:text-base text-slate-600 dark:text-gray-300 leading-relaxed mb-5 2xl:mb-8">
                  {project.description}
                </p>

                {/* Tags de tecnologías */}
                <div className="flex flex-wrap gap-2 mb-5 2xl:mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] sm:text-xs 2xl:text-sm font-semibold px-2.5 py-1 2xl:px-3.5 2xl:py-1.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enlaces inferiores */}
              <div className="pt-3.5 sm:pt-4 2xl:pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs sm:text-sm 2xl:text-base font-semibold">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Code size={15} className="2xl:w-5 2xl:h-5" />
                  <span>Código Fuente</span>
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <span>Ver Demo</span>
                    <ExternalLink size={14} className="2xl:w-5 2xl:h-5" />
                  </a>
                )}
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};