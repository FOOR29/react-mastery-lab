# 🧭 Módulo: useNavigate — Navegación Programática

> Navegar desde código, no solo desde links.

---

## 📁 Estructura de carpetas

```
modules/react-router-navigate/
│
├── 📂 data/
│   └── courses.ts            → Mock data de cursos + getCourseById()
│
├── 📂 pages/
│   ├── Home.tsx              → navigate() básico y navigate() con replace
│   ├── CourseList.tsx        → navigate() con STATE ⭐
│   ├── CourseDetail.tsx      → navigate(-1), useLocation(), replace ⭐⭐
│   ├── Enrolled.tsx          → useLocation() para leer state recibido ⭐
│   └── NotFound.tsx          → navigate con replace al 404
│
├── 📂 components/
│   └── Navbar.tsx            → navigate en el logo (elemento no-link)
│
├── 📂 layout/
│   └── MainLayout.tsx        → Navbar + Outlet (igual que módulos anteriores)
│
├── 📂 router/
│   └── AppRouter.tsx         → Definición de rutas
│
└── AppNavigate.tsx           → Componente raíz del módulo
```

---

## 🧠 Conceptos clave

### 1. ¿Por qué useNavigate si ya tenemos `<Link>`?

`<Link>` solo funciona en JSX. `useNavigate` funciona en **cualquier parte del código**.

```tsx
// ✅ Link — solo sirve en el return del componente
<Link to="/courses">Ver cursos</Link>

// ✅ navigate — sirve en lógica, eventos, condicionales, etc.
const handleSubmit = async () => {
    const ok = await loginUser(email, password)
    if (ok) navigate("/dashboard")   // ← después de una acción
}
```

---

### 2. Las 4 formas de usar navigate

```tsx
const navigate = useNavigate()

// Forma 1: Navegar a una ruta
navigate("/courses")

// Forma 2: Volver atrás (como el botón ← del navegador)
navigate(-1)
// También: navigate(-2) para dos páginas atrás, navigate(1) para adelante

// Forma 3: Navegar reemplazando la entrada del historial
navigate("/courses", { replace: true })

// Forma 4: Navegar enviando datos extra (state)
navigate("/courses/1", {
    state: { from: "home", userId: 42 }
})
```

---

### 3. `replace: true` — ¿Para qué sirve?

Sin `replace`: el historial crece con cada página visitada.
```
historial: [Home] → [Cursos] → [Detalle] → [Inscrito]
                                             ↑ atrás lleva a Detalle
```

Con `replace`: la página actual REEMPLAZA la anterior en el historial.
```
navigate("/inscrito", { replace: true })
historial: [Home] → [Cursos] → [Inscrito]
                                ↑ atrás lleva a Cursos, no a Detalle
```

**Cuándo usar replace:**
- Después de login exitoso (no queremos volver al formulario)
- Después de completar un pago (no queremos doble cobro)
- En páginas de confirmación

---

### 4. State — enviar datos entre páginas

Los datos van "dentro del sobre" — no aparecen en la URL.

**Quien envía (CourseList.tsx):**
```tsx
navigate(`/courses/${id}`, {
    state: {
        from: "lista de cursos",
        timestamp: Date.now()
    }
})
```

**Quien recibe (CourseDetail.tsx):**
```tsx
import { useLocation } from "react-router"

const location = useLocation()
const fromPage = location.state?.from  // "lista de cursos"
```

> ⚠️ Siempre usa `?.` (optional chaining) porque si el usuario
> llega directo por URL, `location.state` será `null`.

**Limitaciones del state:**
- No aparece en la URL (no se puede compartir como link)
- Se pierde si el usuario recarga la página
- Solo existe mientras dura la sesión del navegador

---

### 5. useLocation — qué contiene

```tsx
const location = useLocation()

console.log(location)
// {
//   pathname: "/courses/1",         ← ruta actual
//   search: "?categoria=frontend",  ← query params (próximo módulo)
//   hash: "",                       ← el #ancla de la URL
//   state: { from: "home" },        ← lo que enviaste con navigate
//   key: "a1b2c3"                   ← id único de esta entrada del historial
// }
```

---

## 🔄 Flujo completo del módulo

```
Home
  │
  │  navigate("/courses")
  ↓
CourseList
  │
  │  navigate(`/courses/${id}`, { state: { from: "lista" } })
  ↓
CourseDetail
  │  ← useLocation() lee state.from → muestra "← Volver a lista de cursos"
  │
  │  navigate("/enrolled", { replace: true, state: { courseName, instructor } })
  ↓
Enrolled
  │  ← useLocation() lee state.courseName y state.instructor
  │
  │  navigate("/courses", { replace: true })
  ↓
CourseList  (el historial quedó limpio, sin páginas de confirmación)
```

---

## 📊 Resumen de hooks usados

| Hook | Para qué | Archivo |
|---|---|---|
| `useNavigate()` | Navegar programáticamente | Todos |
| `useLocation()` | Leer URL actual + state recibido | CourseDetail, Enrolled |
| `useParams()` | Leer :params de la URL | CourseDetail |

---

## 🚀 Cómo activar

```tsx
// App.tsx
import AppNavigate from "./modules/react-router-navigate/AppNavigate"

function App() {
    return <AppNavigate />
}
```

---

## 🎯 Ejercicio para practicar

Sin ver el código, crea en tu proyecto de villanos/películas:

1. Un botón "Ver ficha completa" en la lista que use `navigate` (en vez de `<Link>`)
2. Que al navegar, envíe por `state` el nombre de la lista desde donde venías
3. En el detalle, muestra "← Volver a {nombreLista}" usando `useLocation()`
4. Simula una "acción" (ej: "Agregar a favoritos") que navegue a `/favoritos` con `replace: true`

Si logras hacer eso solo, **dominas useNavigate**. ✅

---

## ➡️ Siguiente módulo

**Search Params** — `useSearchParams()`:
- Filtros en la URL: `/courses?level=basico&category=frontend`
- Búsquedas: `/search?q=react`
- Paginación: `/courses?page=2`
- Datos que SÍ se comparten por URL (a diferencia del state)