// 📄 PÁGINA: Lista de usuarios
// Esta es la ruta "/" o "/users" — muestra TODOS los usuarios
// Cada tarjeta tiene un link que lleva al detalle con la ruta dinámica

import { Link } from "react-router"
import { users } from "../data/users"

const UserList = () => {
    return (
        <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
            <h1>👥 Directorio de Usuarios</h1>
            <p style={{ color: "#666", marginBottom: "2rem" }}>
                Haz clic en cualquier usuario para ver su perfil completo.
            </p>

            <div style={{ display: "grid", gap: "1rem" }}>
                {users.map((user) => (
                    /*
                     * 🔑 PUNTO CLAVE:
                     * El Link apunta a `/users/${user.id}`
                     * Eso genera: /users/1, /users/2, /users/3 ...
                     * React Router va a "capturar" ese número como un param llamado :userId
                     */
                    <Link
                        key={user.id}
                        to={`/users/${user.id}`}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            padding: "1rem 1.5rem",
                            background: "#f9f9f9",
                            border: "1px solid #e0e0e0",
                            borderRadius: "8px",
                            textDecoration: "none",
                            color: "inherit",
                            transition: "background 0.2s",
                        }}
                    >
                        <img
                            src={user.avatar}
                            alt={user.name}
                            width={48}
                            height={48}
                            style={{ borderRadius: "50%", background: "#ddd" }}
                        />
                        <div>
                            <strong style={{ fontSize: "1rem" }}>{user.name}</strong>
                            <p style={{ margin: 0, fontSize: "0.85rem", color: "#888" }}>
                                {user.role} · {user.country}
                            </p>
                        </div>
                        <span style={{ marginLeft: "auto", color: "#aaa" }}>→</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default UserList