// 🗺️ ROUTER PRINCIPAL DEL MÓDULO
//
// Aquí está el corazón de este módulo.
// Presta atención a cómo se define la ruta dinámica: path="users/:userId"
// El ":userId" es el PARAM — los dos puntos le dicen a React Router
// "lo que venga aquí es variable, guárdalo con el nombre userId"

import { Route, Routes } from "react-router"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/Home"
import UserList from "../pages/UserList"
import UserDetail from "../pages/UserDetail"
import NotFound from "../pages/NotFound"

const AppRouter = () => {
    return (
        <Routes>
            {/*
             * Todo dentro de MainLayout tendrá el Navbar.
             * Recordatorio del módulo anterior: TODAS las páginas
             * que compartan UI deben ser hijas del Layout.
             */}
            <Route path="/" element={<MainLayout />}>

                {/* Ruta raíz → Home */}
                <Route index element={<Home />} />

                {/*
                 * RUTA ESTÁTICA: /users
                 * Muestra la lista de todos los usuarios.
                 * "Estática" porque la URL no cambia.
                 */}
                <Route path="users" element={<UserList />} />

                {/*
                 * 🌟 RUTA DINÁMICA: /users/:userId
                 *
                 * El ":userId" es un PARÁMETRO DINÁMICO.
                 * Significa: "acepta cualquier valor en esta posición".
                 *
                 * Ejemplos de URLs que esta ruta acepta:
                 *   /users/1      → userId = "1"
                 *   /users/2      → userId = "2"
                 *   /users/99     → userId = "99"  (no existe, pero la ruta sí aplica)
                 *   /users/hola   → userId = "hola" (string raro, pero aplica igual)
                 *
                 * Es como tener un molde de galletas:
                 * La ruta es el molde (/users/:userId),
                 * la masa que metes puede ser cualquier cosa (1, 2, abc...),
                 * pero la forma (el componente UserDetail) siempre es la misma.
                 */}
                <Route path="users/:userId" element={<UserDetail />} />

            </Route>

            {/* Ruta comodín — cualquier URL no definida arriba */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter