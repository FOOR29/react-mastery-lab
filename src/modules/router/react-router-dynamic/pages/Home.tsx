import { Link } from "react-router"

const Home = () => {
    return (
        <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
            <h1>🏠 Módulo: Rutas Dinámicas</h1>
            <p style={{ color: "#555", lineHeight: 1.7 }}>
                Este módulo enseña cómo usar <strong>rutas dinámicas</strong> con{" "}
                <code>useParams()</code> en React Router v7.
            </p>

            <div
                style={{
                    background: "#fffbe6",
                    border: "1px solid #ffe58f",
                    borderRadius: "8px",
                    padding: "1rem 1.5rem",
                    marginTop: "1.5rem",
                }}
            >
                <p style={{ margin: 0 }}>
                    👉 Ve a <Link to="/users">la lista de usuarios</Link> y haz clic en alguno.
                    <br />
                    Observa cómo cambia la URL y cómo el mismo componente muestra datos distintos.
                </p>
            </div>

            <div style={{ marginTop: "2rem" }}>
                <h3>¿Qué aprenderás aquí?</h3>
                <ul style={{ lineHeight: 2, color: "#555" }}>
                    <li>Cómo definir rutas dinámicas con <code>:param</code></li>
                    <li>Cómo leer los params con <code>useParams()</code></li>
                    <li>Por qué los params siempre son <code>string</code></li>
                    <li>Cómo manejar el caso de "recurso no encontrado"</li>
                </ul>
            </div>
        </div>
    )
}

export default Home