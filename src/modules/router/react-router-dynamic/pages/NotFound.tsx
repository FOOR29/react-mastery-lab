import { Link } from "react-router"

const NotFound = () => {
    return (
        <div style={{ padding: "2rem", textAlign: "center", marginTop: "4rem" }}>
            <h1 style={{ fontSize: "5rem", margin: 0 }}>404</h1>
            <h2>Ruta no encontrada</h2>
            <p style={{ color: "#888" }}>La página que buscas no existe.</p>
            <Link to="/">← Volver al inicio</Link>
        </div>
    )
}

export default NotFound