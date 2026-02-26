// 📦 BASE DE DATOS FALSA (mock data)
// En un proyecto real esto vendría de una API (fetch/axios)
// Por ahora lo "quemamos" aquí para enfocarnos solo en las rutas dinámicas

export interface User {
  id: number;
  name: string;
  username: string;
  age: number;
  role: string;
  email: string;
  bio: string;
  country: string;
  avatar: string;
}

export const users: User[] = [
  {
    id: 1,
    name: "María García",
    username: "mariagarcia",
    age: 28,
    role: "Frontend Developer",
    email: "maria@example.com",
    bio: "Apasionada por React y el diseño UX. Lleva 4 años construyendo interfaces.",
    country: "Colombia",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
  },
  {
    id: 2,
    name: "Carlos Pérez",
    username: "carlosperez",
    age: 34,
    role: "Backend Developer",
    email: "carlos@example.com",
    bio: "Experto en Node.js y bases de datos. Fan del código limpio y los tests.",
    country: "México",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carlos",
  },
  {
    id: 3,
    name: "Sofía Rodríguez",
    username: "sofiarodriguez",
    age: 25,
    role: "UI/UX Designer",
    email: "sofia@example.com",
    bio: "Diseñadora centrada en el usuario. Cree que lo bonito y lo funcional van de la mano.",
    country: "Argentina",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sofia",
  },
  {
    id: 4,
    name: "Andrés Torres",
    username: "andrestorres",
    age: 31,
    role: "DevOps Engineer",
    email: "andres@example.com",
    bio: "Automatiza todo lo que puede. Docker, Kubernetes y café son su combustible.",
    country: "Chile",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=andres",
  },
  {
    id: 5,
    name: "Valentina Cruz",
    username: "valentinacruz",
    age: 29,
    role: "Full Stack Developer",
    email: "valentina@example.com",
    bio: "Desarrolla de principio a fin. React + Node.js son su stack favorito.",
    country: "Venezuela",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=valentina",
  },
];

// 🔍 Función helper para buscar un usuario por ID
// Recibe string porque los params de URL SIEMPRE llegan como string
export const getUserById = (id: string): User | undefined => {
  return users.find((user) => user.id === Number(id));
  //                                        ↑
  //                           Convertimos string → number para comparar
};
