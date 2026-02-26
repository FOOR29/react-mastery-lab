# React Router basico

**para el enrutado basico se utiliza esta estrutura de carpetas**

```bash
/src
    /router <- se definen las rutas
    /pages <- se crean las vistas
    /components <- se rean los componentes ejmeplo el nabvar
app.tsx

```

dento de la carpeta Router se define las rutas como Home, not found etc.. de esat manera:

```tsx
const AppRouter = () => {
    return (
        <Routes>

            {/* 
                MainLayout es el "edificio".
                TODAS las rutas que quieran Navbar viven aquí dentro.
                El path="" significa: "este layout aplica desde la raíz /"
            */}
            <Route path="/" element={<MainLayout />}>

                {/* 
                    index = ruta raíz del padre.
                    Como el padre es path="/", esta ruta responde a "/"
                    Es como decir: "cuando estés exactamente en /, muestra Home"
                */}
                <Route index element={<Home />} />

                {/* Responde a "/about" */}
                <Route path="about" element={<About />} />

            </Route>

            {/* 
                NotFound va FUERA del layout principal
                porque queremos una página de error diferente,
                sin el Navbar normal (o con uno distinto)
                El "*" significa "cualquier ruta que no haya hecho match arriba"
            */}
            <Route path="*" element={<NotFound />} />

        </Routes>
    )
}
```

luego se crea el layout:

```tsx
import { Outlet } from "react-router"
import Navbar from "../components/Navbar"

const MainLayout = () => {
    return (
        // Usamos un div o fragment, como prefieras
        // Si quieres estilos globales de layout, usa un div con className
        <div>
            <Navbar />
            {/* 
                Outlet es el "hueco mágico".
                React Router mira qué ruta hizo match y renderiza
                el componente correspondiente exactamente aquí.
            */}
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout
```

para navegar se puede crear un componente navbar de esta manear, llamando las rutas ya definidas en router:

```tsx
import { Link, NavLink } from "react-router"

const Navbar = () => {
    return (
        <nav>
            <ul>
                {/* 
                    Tip pro: usa NavLink en vez de Link para la navbar.
                    NavLink automáticamente agrega la clase "active"
                    cuando estás en esa ruta. Así puedes estilar
                    el link activo fácilmente con CSS.
                */}
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    {/* ✅ minúscula, igual que en la definición de la ruta */}
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
```
> aca se usa el componente link de react router

### 🧠 Concepto clave: ¿Cómo funcionan los Layouts en React Router?

**Analogía:** Piensa en un periódico. Todas las páginas tienen el mismo **encabezado con el nombre del periódico** (eso es tu Layout/Navbar). El contenido cambia en cada página, pero el encabezado siempre está. El `<Outlet />` es exactamente ese **espacio en blanco donde va el contenido de cada página**.
```
┌─────────────────────────────┐
│  🗞️ EL DIARIO (Navbar)      │  ← MainLayout renderiza esto
├─────────────────────────────┤
│                             │
│   <Outlet />                │  ← Aquí React Router inyecta
│   (contenido de la ruta)    │     Home, About, etc.
│                             │
└─────────────────────────────┘
```

Para que esto funcione, **todas tus páginas deben ser hijas del Layout** en el árbol de rutas.

---

## 📁 Estructura de archivos recomendada
```
modules/basic-routing/
├── components/
│   └── Navbar.tsx
├── layout/
│   └── MainLayout.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   └── NotFound.tsx
├── router/
│   └── AppRouter.tsx
└── App.tsx