import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce-stripe',
    title: 'E-Commerce Platform & Checkout',
    description: 'Plataforma e-commerce modular con catálogo interactivo, manejo de estado global y pasarela de pagos con Stripe.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Stripe'],
    githubUrl: 'https://github.com/tu-usuario',
    liveUrl: 'https://tu-proyecto.vercel.app',
    architectureDetails: {
      summary: 'Arquitectura por características (feature-based) enfocada en rendimiento frontend y procesamiento seguro de pagos.',
      highlights: [
        'Manejo de carrito mediante Zustand para estado global atómico.',
        'Integración con Stripe Elements para pagos seguros.',
        'Filtrado dinámico en cliente y notificaciones toast.'
      ]
    }
  }
];