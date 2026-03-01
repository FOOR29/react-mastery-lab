import { Route, Routes } from "react-router"
import MainLayout from "../layout/MainLayout"
import PelisList from "../views/PelisList"
import PelisDetails from "../views/PelisDetails"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<PelisList />} />
        <Route path="pelis/:pelisId" element={<PelisDetails />} />
      </Route>
    </Routes>
  )
}

export default AppRouter