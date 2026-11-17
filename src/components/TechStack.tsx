import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Server, Database, CheckCircle2, Layers, Kanban } from 'lucide-react';

interface TechItem {
  name: string;
  level: 'Avanzado' | 'Intermedio' | 'En desarrollo';
  desc: string;
  tag: string;
}

interface TechCategory {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  spanClass: string;
  skills: TechItem[];
}

const techCategories: TechCategory[] = [
  {
    title: 'Lenguajes de Programación',
    subtitle: 'Bases sólidas para lógica y desarrollo multipropósito.',
    icon: <Terminal size={24} className="text-indigo-400" />,
    spanClass: 'lg:col-span-2 2xl:col-span-2',
    skills: [
      { name: 'TypeScript & JavaScript', level: 'Avanzado', desc: 'Tipado estricto, ES6+, asincronía y desarrollo escalable.', tag: 'Core' },
      { name: 'Python', level: 'Avanzado', desc: 'Estructuras de datos, desarrollo backend y automatización.', tag: 'Backend' },
      { name: 'Java', level: 'Intermedio', desc: 'Programación orientada a objetos, ecosistema empresarial y Spring Boot.', tag: 'Enterprise' },
      { name: 'Kotlin', level: 'En desarrollo', desc: 'Sintaxis moderna, null-safety y desarrollo multiplataforma/Android.', tag: 'Modern JVM' },
    ],
  },
  {
    title: 'Frontend & UI',
    subtitle: 'Interfaces modernas, animaciones fluidas y alto rendimiento.',
    icon: <Code2 size={24} className="text-purple-400" />,
    spanClass: 'lg:col-span-1 2xl:col-span-1',
    skills: [
      { name: 'React & Vite', level: 'Avanzado', desc: 'Componentes modulares, hooks avanzados y UI reactiva.', tag: 'Library' },
      { name: 'Tailwind CSS', level: 'Intermedio', desc: 'Diseño adaptable, estilos utilitarios y diseño limpio.', tag: 'Styling' },
      { name: 'Framer Motion', level: 'Intermedio', desc: 'Animaciones complejas, interacciones fluidas y componentes dinámicos.', tag: 'Animation' },
      { name: 'Angular', level: 'En desarrollo', desc: 'Framework robusto para aplicaciones web de arquitectura empresarial.', tag: 'Framework' },
    ],
  },
  {
    title: 'Backend & APIs',
    subtitle: 'Lógica del servidor y arquitectura de servicios.',
    icon: <Server size={24} className="text-pink-400" />,
    spanClass: 'lg:col-span-1 2xl:col-span-1',
    skills: [
      { name: 'Node.js & Express', level: 'Avanzado', desc: 'Construcción de backends seguros y APIs REST robustas.', tag: 'Services' },
      { name: 'Python (FastAPI & Django)', level: 'Intermedio', desc: 'APIs asíncronas de alto rendimiento y robustez web.', tag: 'API & Web' },
      { name: 'Spring Boot', level: 'En desarrollo', desc: 'Desarrollo de servicios backend empresariales y arquitecturas en Java.', tag: 'Enterprise' },
    ],
  },
  {
    title: 'Bases de Datos',
    subtitle: 'Modelado relacional, NoSQL y persistencia de datos.',
    icon: <Database size={24} className="text-cyan-400" />,
    spanClass: 'lg:col-span-2 2xl:col-span-2',
    skills: [
      { name: 'PostgreSQL & MySQL', level: 'Avanzado', desc: 'Modelado relacional, consultas optimizadas y gestión de datos.', tag: 'SQL' },
      { name: 'Supabase', level: 'Intermedio', desc: 'Backend as a service, autenticación y bases en tiempo real.', tag: 'BaaS' },
      { name: 'Firebase', level: 'Intermedio', desc: 'Firestore, autenticación y servicios en la nube para aplicaciones web.', tag: 'NoSQL / BaaS' },
    ],
  },
  {
    title: 'Metodologías Ágiles & DevOps',
    subtitle: 'Organización de equipos, automatización de despliegues y gestión de proyectos.',
    icon: <Kanban size={24} className="text-emerald-400" />,
    spanClass: 'lg:col-span-3 2xl:col-span-3',
    skills: [
      { name: 'Jira, Trello & SCRUM', level: 'Avanzado', desc: 'Metodologías ágiles, tableros Kanban y gestión de entregas y sprints.', tag: 'Agile & PM' },
      { name: 'Git, GitHub & Postman', level: 'Avanzado', desc: 'Control de versiones colaborativo y pruebas de APIs.', tag: 'Workflow' },
      { name: 'Docker & Vercel', level: 'Intermedio', desc: 'Contenedorización de entornos y despliegues optimizados en producción.', tag: 'DevOps' },
      { name: 'Jenkins', level: 'Intermedio', desc: 'Automatización de pipelines de CI/CD y despliegues continuos.', tag: 'CI/CD' },
      { name: 'n8n & Webhooks', level: 'Intermedio', desc: 'Automatización de procesos de negocio y flujos dinámicos.', tag: 'Automation' },
      { name: 'Softr (Low-Code/MVPs)', level: 'Intermedio', desc: 'Desarrollo rápido de aplicaciones funcionales y prototipos basados en datos.', tag: 'Prototyping' },
      { name: 'AI-Assisted Dev (Claude Code, ChatGPT)', level: 'Avanzado', desc: 'Desarrollo acelerado, refactorización y depuración guiada por IA.', tag: 'AI Tools' },
    ],
  },
];

export const TechStack: React.FC = () => {
  return (
    <section id="architecture" className="pt-2 sm:pt-4 pb-12 sm:pb-20 2xl:pt-8 2xl:pb-32 px-6 sm:px-12 md:px-20 2xl:px-28 3xl:px-36 w-full max-w-none relative overflow-hidden">
      {/* Luz ambiental de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Cabecera de la sección */}
      <div className="max-w-3xl 2xl:max-w-4xl mb-8 sm:mb-12 2xl:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 2xl:px-5.5 2xl:py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm 2xl:text-base font-semibold mb-3 sm:mb-4">
          <Terminal size={15} className="2xl:w-5 2xl:h-5" />
          <span>Ecosistema Técnico</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Stack Tecnológico & Habilidades
        </h2>
        <p className="mt-3 sm:mt-4 2xl:mt-6 text-sm sm:text-base lg:text-lg 2xl:text-2xl text-slate-600 dark:text-gray-400 leading-relaxed">
          Clasificación detallada de los lenguajes, frameworks y herramientas que utilizo para diseñar y desarrollar software de calidad profesional.
        </p>
      </div>

      {/* Grid Asimétrico Bento con escala compacta en laptop y grande en 4K */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 2xl:gap-10 w-full">
        {techCategories.map((cat, index) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${cat.spanClass} bg-white/80 dark:bg-[#121218]/90 border border-slate-200/80 dark:border-white/10 rounded-3xl p-5 sm:p-6 2xl:p-12 shadow-xl shadow-slate-950/5 dark:shadow-black/40 backdrop-blur-xl flex flex-col justify-between relative group hover:border-indigo-500/50 transition-all duration-300`}
          >
            {/* Gradiente sutil en el hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />

            <div>
              {/* Título de la categoría */}
              <div className="flex items-start gap-3.5 mb-4 sm:mb-5 2xl:mb-8">
                <div className="p-3 2xl:p-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl 2xl:text-3xl font-bold text-slate-900 dark:text-white">{cat.title}</h3>
                  <p className="text-xs sm:text-sm 2xl:text-lg text-slate-500 dark:text-gray-400 mt-1 2xl:mt-2 leading-relaxed">{cat.subtitle}</p>
                </div>
              </div>

              {/* Lista de tecnologías compacta en laptop */}
              <div className="grid grid-cols-1 gap-2.5 sm:gap-3 2xl:gap-5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 sm:p-3.5 2xl:p-6 rounded-2xl bg-slate-50 dark:bg-[#0a0a0c]/80 border border-slate-200/60 dark:border-white/5 hover:border-indigo-500/45 transition-all flex items-center justify-between gap-3 group/item"
                  >
                    <div className="space-y-0.5 sm:space-y-1 2xl:space-y-1.5 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-xs sm:text-sm 2xl:text-xl text-slate-900 dark:text-white group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[9px] sm:text-[10px] 2xl:text-sm font-semibold px-2 py-0.5 rounded-md bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-400">
                          {skill.tag}
                        </span>
                      </div>
                      {/* Descripción */}
                      <p className="hidden lg:block text-[11px] sm:text-xs 2xl:text-base text-slate-600 dark:text-gray-300 leading-relaxed">{skill.desc}</p>
                    </div>

                    {/* Badge de Nivel */}
                    <div className="shrink-0">
                      <span className={`inline-flex items-center gap-1 text-[10px] sm:text-[11px] 2xl:text-sm font-semibold px-2.5 py-1 2xl:px-4 2xl:py-2 rounded-full ${
                        skill.level === 'Avanzado'
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                          : skill.level === 'Intermedio'
                          ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20'
                          : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                      }`}>
                        {skill.level === 'Avanzado' ? <CheckCircle2 size={13} /> : <Layers size={13} />}
                        <span>{skill.level}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer indicador */}
            <div className="mt-4 sm:mt-5 2xl:mt-8 pt-3.5 2xl:pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] sm:text-xs 2xl:text-base text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <Layers size={14} className="2xl:w-5 2xl:h-5 text-indigo-500" />
                <span>Stack verificado en producción</span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};