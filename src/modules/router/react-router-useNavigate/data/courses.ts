// 📦 DATOS QUEMADOS — Catálogo de cursos
// Usamos cursos porque nos permite simular casos reales de useNavigate:
// - Ir al detalle de un curso (ruta dinámica)
// - "Inscribirse" a un curso (simular login/acción → redirigir)
// - Volver atrás desde el detalle

export interface Course {
  id: number;
  title: string;
  instructor: string;
  category: string;
  level: "Básico" | "Intermedio" | "Avanzado";
  duration: string;
  rating: number;
  description: string;
  cover: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "React desde cero",
    instructor: "Carlos Mendoza",
    category: "Frontend",
    level: "Básico",
    duration: "12h",
    rating: 4.9,
    description:
      "Aprende React partiendo de cero. Componentes, hooks, estado y mucho más en un curso práctico y directo al punto.",
    cover: "https://picsum.photos/seed/react/400/220",
  },
  {
    id: 2,
    title: "TypeScript Profesional",
    instructor: "Laura Gómez",
    category: "Lenguajes",
    level: "Intermedio",
    duration: "8h",
    rating: 4.7,
    description:
      "Domina TypeScript para escribir código más robusto, escalable y fácil de mantener en proyectos reales.",
    cover: "https://picsum.photos/seed/typescript/400/220",
  },
  {
    id: 3,
    title: "Node.js y APIs REST",
    instructor: "Diego Ríos",
    category: "Backend",
    level: "Intermedio",
    duration: "15h",
    rating: 4.8,
    description:
      "Construye APIs REST desde cero con Node.js, Express y buenas prácticas de arquitectura backend.",
    cover: "https://picsum.photos/seed/nodejs/400/220",
  },
  {
    id: 4,
    title: "CSS Avanzado y Animaciones",
    instructor: "María Vargas",
    category: "Frontend",
    level: "Avanzado",
    duration: "10h",
    rating: 4.6,
    description:
      "Lleva tus interfaces al siguiente nivel con CSS Grid, animaciones y técnicas avanzadas de diseño web.",
    cover: "https://picsum.photos/seed/css/400/220",
  },
  {
    id: 5,
    title: "Git y GitHub para equipos",
    instructor: "Andrés Torres",
    category: "Herramientas",
    level: "Básico",
    duration: "5h",
    rating: 4.5,
    description:
      "Trabaja en equipo como un profesional. Domina Git, ramas, pull requests y flujos de trabajo colaborativos.",
    cover: "https://picsum.photos/seed/git/400/220",
  },
];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find((course) => course.id === Number(id));
};
