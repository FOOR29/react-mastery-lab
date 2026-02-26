// 🧭 Navbar del módulo de rutas dinámicas
// Usamos NavLink para tener la clase "active" automática en el link actual

import { NavLink } from "react-router"

const Navbar = () => {
    // Estilo base para todos los links
    const linkStyle = {
        textDecoration: "none",
        color: "#555",
        fontWeight: 500,
        padding: "0.25rem 0.5rem",
        borderRadius: "4px",
        transition: "color 0.2s",
    }

    return (
        <nav
            style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                padding: "1rem 2rem",
                borderBottom: "1px solid #e0e0e0",
                background: "#fff",
            }}
        >
            <span style={{ fontWeight: "bold", marginRight: "auto" }}>
                📍 Dynamic Routes
            </span>

            {/*
             * NavLink recibe una función en su prop "style" (o "className")
             * React Router le pasa { isActive } automáticamente
             * Así puedes cambiar el estilo cuando estás en esa ruta
             */}
            <NavLink
                to="/"
                end  // ← "end" evita que "/" se active también en "/users"
                style={({ isActive }) => ({
                    ...linkStyle,
                    color: isActive ? "#1a73e8" : "#555",
                    fontWeight: isActive ? 700 : 500,
                })}
            >
                Home
            </NavLink>

            <NavLink
                to="/users"
                style={({ isActive }) => ({
                    ...linkStyle,
                    color: isActive ? "#1a73e8" : "#555",
                    fontWeight: isActive ? 700 : 500,
                })}
            >
                Usuarios
            </NavLink>
        </nav>
    )
}

export default Navbar