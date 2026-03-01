// 🗺️ ROUTER — Módulo useNavigate
//
// Nada nuevo en la estructura de rutas respecto al módulo anterior.
// Lo importante aquí está DENTRO de los componentes, no en las rutas.

import { Route, Routes } from "react-router"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/Home"
import CourseList from "../pages/CourseList"
import CourseDetail from "../pages/CourseDetail"
import Enrolled from "../pages/Enrolled"
import NotFound from "../pages/NotFound"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="courses" element={<CourseList />} />
                <Route path="courses/:courseId" element={<CourseDetail />} />

                {/*
                 * /enrolled no tiene :param — es una ruta estática.
                 * Los datos le llegan por STATE (desde navigate), no por URL.
                 * Por eso no necesita ":algo" en el path.
                 */}
                <Route path="enrolled" element={<Enrolled />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter