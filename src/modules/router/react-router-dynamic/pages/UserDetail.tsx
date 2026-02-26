// 📄 PÁGINA: Detalle de un usuario — LA ESTRELLA DE ESTE MÓDULO
// Esta página usa useParams() para leer el ID de la URL
// y buscar el usuario correspondiente en nuestros datos

import { useParams, Link, useNavigate } from "react-router"
import { getUserById } from "../data/users"

const UserDetail = () => {
    /*
     * 🎯 useParams() — El hook más importante de este módulo
     *
     * Analogía: Imagina que la URL es un sobre de carta.
     * La dirección del sobre es "/users/3".
     * useParams() es el cartero que ABRE ese sobre y te dice:
     * "oye, el número que viene después de /users/ es el 3"
     *
     * El nombre "userId" lo definimos NOSOTROS en la ruta: path="users/:userId"
     * Si hubiéramos puesto ":id" entonces sería const { id } = useParams()
     * El nombre del param en la ruta Y en el destructuring DEBEN coincidir.
     */
    const { userId } = useParams()
    const navigate = useNavigate() // lo usaremos para el botón "volver"

    /*
     * ⚠️ IMPORTANTE: userId siempre es string | undefined
     * porque viene de la URL (texto). Por eso en getUserById
     * hacemos Number(id) para convertirlo.
     *
     * Si el usuario pone en la URL: /users/abc → userId = "abc"
     * Si el usuario pone: /users/99999 → userId = "99999" (no existe)
     * Ambos casos hay que manejarlos.
     */
    const user = getUserById(userId!)

    // 🛡️ Guardia: si el usuario no existe, mostramos un mensaje claro
    if (!user) {
        return (
            <div style={{ padding: "2rem", textAlign: "center" }}>
                <h2>🔍 Usuario no encontrado</h2>
                <p style={{ color: "#666" }}>
                    No existe ningún usuario con el ID: <strong>{userId}</strong>
                </p>
                <Link to="/users">← Volver a la lista</Link>
            </div>
        )
    }

    return (
        <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
            {/* Botón volver — usando navigate programáticamente */}
            <button
                onClick={() => navigate(-1)}
                style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#555",
                    fontSize: "0.95rem",
                    marginBottom: "1.5rem",
                    padding: 0,
                }}
            >
                ← Volver
            </button>

            {/* Perfil del usuario */}
            <div
                style={{
                    background: "#f9f9f9",
                    border: "1px solid #e0e0e0",
                    borderRadius: "12px",
                    padding: "2rem",
                    textAlign: "center",
                }}
            >
                <img
                    src={user.avatar}
                    alt={user.name}
                    width={96}
                    height={96}
                    style={{ borderRadius: "50%", background: "#ddd", marginBottom: "1rem" }}
                />

                <h2 style={{ margin: "0 0 0.25rem" }}>{user.name}</h2>
                <p style={{ margin: "0 0 0.5rem", color: "#888", fontSize: "0.9rem" }}>
                    @{user.username}
                </p>

                <span
                    style={{
                        display: "inline-block",
                        background: "#e8f4ff",
                        color: "#1a73e8",
                        padding: "0.2rem 0.8rem",
                        borderRadius: "20px",
                        fontSize: "0.85rem",
                        marginBottom: "1.5rem",
                    }}
                >
                    {user.role}
                </span>

                <p style={{ color: "#555", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    {user.bio}
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "0.75rem",
                        textAlign: "left",
                    }}
                >
                    <div>
                        <small style={{ color: "#aaa" }}>ID</small>
                        <p style={{ margin: 0, fontWeight: "bold" }}>#{user.id}</p>
                    </div>
                    <div>
                        <small style={{ color: "#aaa" }}>Edad</small>
                        <p style={{ margin: 0, fontWeight: "bold" }}>{user.age} años</p>
                    </div>
                    <div>
                        <small style={{ color: "#aaa" }}>Email</small>
                        <p style={{ margin: 0, fontWeight: "bold" }}>{user.email}</p>
                    </div>
                    <div>
                        <small style={{ color: "#aaa" }}>País</small>
                        <p style={{ margin: 0, fontWeight: "bold" }}>{user.country}</p>
                    </div>
                </div>
            </div>

            {/* 
             * 💡 TIP EDUCATIVO: Mira la URL cuando navegues a este componente.
             * Verás algo como: /users/1
             * Ahora intenta cambiar el número manualmente en el navegador.
             * Eso es la magia de las rutas dinámicas: una sola ruta,
             * infinitos recursos distintos.
             */}
        </div>
    )
}

export default UserDetail