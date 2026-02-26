# 📍 Módulo: React Router Dynamic

> Aprende a usar **rutas dinámicas** con `useParams()` en React Router v7.

---

## 📁 Estructura de carpetas

```
modules/react-router-dynamic/
│
├── 📂 data/
│   └── users.ts              → Base de datos falsa (mock data) + helper getUserById()
│
├── 📂 pages/
│   ├── Home.tsx              → Página principal "/"
│   ├── UserList.tsx          → Lista de usuarios "/users"
│   ├── UserDetail.tsx        → Detalle de un usuario "/users/:userId" ⭐
│   └── NotFound.tsx          → Página 404 para rutas no encontradas
│
├── 📂 components/
│   └── Navbar.tsx            → Barra de navegación con NavLink
│
├── 📂 layout/
│   └── MainLayout.tsx        → Layout con Navbar + Outlet
│
├── 📂 router/
│   └── AppRouter.tsx         → Definición de todas las rutas ⭐
│
└── AppDynamic.tsx            → Componente raíz del módulo (como App.tsx)
```

---

## 🧠 Conceptos clave

### 1. ¿Qué es una ruta dinámica?

Una ruta **estática** siempre tiene la misma URL:

```
/users         → siempre lleva al mismo sitio
/about         → siempre lleva al mismo sitio
```

Una ruta **dinámica** tiene una parte variable (un parámetro):

```
/users/1       → perfil del usuario con ID 1
/users/2       → perfil del usuario con ID 2
/users/999     → perfil del usuario con ID 999
```

**Un solo componente, infinitos recursos distintos.** Es como una plantilla.

---

### 2. Cómo se define en el router

```tsx
// Los dos puntos ":" indican que es un parámetro dinámico.
// "userId" es el nombre que tú le das. Puede ser cualquier nombre.
<Route path="users/:userId" element={<UserDetail />} />
```

---

### 3. Cómo se lee en el componente (`useParams`)

```tsx
import { useParams } from "react-router";

const UserDetail = () => {
  const { userId } = useParams();
  //        ↑
  //  El nombre DEBE coincidir con lo definido en la ruta (:userId)

  console.log(userId); // "1", "2", "3" ... siempre STRING
};
```

> ⚠️ **IMPORTANTE**: Los params siempre llegan como `string | undefined`.  
> Si necesitas un número, conviértelo: `Number(userId)` o `parseInt(userId!)`.

---

### 4. Árbol de rutas

```
<Routes>
  └── <Route path="/" element={<MainLayout />}>
        ├── index              → /           → <Home />
        ├── path="users"       → /users      → <UserList />
        └── path="users/:userId" → /users/1  → <UserDetail />

  └── <Route path="*" />      → cualquier otra URL → <NotFound />
```

---

### 5. NavLink vs Link

|                           | `Link`              | `NavLink`                |
| ------------------------- | ------------------- | ------------------------ |
| Navega entre rutas        | ✅                  | ✅                       |
| Clase `active` automática | ❌                  | ✅                       |
| Ideal para                | contenido, tarjetas | **barras de navegación** |

```tsx
// NavLink con estilo dinámico según si está activo:
<NavLink
  to="/users"
  style={({ isActive }) => ({
    color: isActive ? "blue" : "gray",
  })}
>
  Usuarios
</NavLink>
```

---

### 6. El prop `end` en NavLink

```tsx
<NavLink to="/" end>
  Home
</NavLink>
```

Sin `end`, el link de "/" se marcaría como activo en TODAS las rutas  
(porque todas empiezan con "/"). El prop `end` le dice:  
_"solo márcarme como activo si la URL es EXACTAMENTE "/"_

---

## 🔗 Flujo completo de navegación

```
Usuario en /users (UserList)
       │
       │  Clic en "María García"
       ↓
Link to="/users/1"
       │
       ↓
React Router: "¿qué ruta aplica para /users/1?"
       │       → path="users/:userId" ✅ match
       ↓
Renderiza UserDetail
       │
       ↓
useParams() → { userId: "1" }
       │
       ↓
getUserById("1") → convierte a Number(1) → encuentra a María
       │
       ↓
Muestra el perfil de María ✅
```

---

## 🚀 Cómo activar este módulo

En tu `App.tsx` principal:

```tsx
import AppDynamic from "./modules/react-router-dynamic/AppDynamic";

function App() {
  return <AppDynamic />;
}
```

---

## 📚 Hooks usados en este módulo

| Hook            | Para qué sirve                      | Archivo          |
| --------------- | ----------------------------------- | ---------------- |
| `useParams()`   | Leer parámetros de la URL           | `UserDetail.tsx` |
| `useNavigate()` | Navegar desde código (botón Volver) | `UserDetail.tsx` |

> 💡 `useNavigate(-1)` es equivalente a pulsar el botón "atrás" del navegador.

---

## ➡️ Siguiente módulo

**Navegación Programática** — `useNavigate()` a fondo:

- Redirigir después de un login exitoso
- Redirigir con datos (state)
- Historial de navegación
- `navigate(-1)`, `navigate("/ruta")`, `navigate("/ruta", { replace: true })`
