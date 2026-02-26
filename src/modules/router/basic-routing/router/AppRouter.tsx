import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import NotFound from "../pages/NotFound"
import MainLayout from "../layout/MainLayout"
import Contac from "../pages/Contac"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contac" element={<Contac />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter