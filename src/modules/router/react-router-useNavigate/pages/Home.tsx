// 📄 HOME — Primer contacto con useNavigate
//
// Aquí vemos el uso más básico: navegar a otra ruta desde un botón,
// igual que harías con un <Link>, pero desde código JavaScript.
//
// 🤔 "¿Para qué sirve si ya tengo <Link>?"
// <Link> solo funciona en JSX (en el return del componente).
// useNavigate funciona en CUALQUIER parte del código: dentro de un
// if, después de un fetch, después de validar un formulario, etc.

import { useNavigate } from "react-router"

const Home = () => {
  /*
   * useNavigate() te devuelve una función.
   * Esa función es la que usas para navegar.
   * Convención: siempre se llama "navigate".
   */
  const navigate = useNavigate()

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1>📚 Plataforma de Cursos</h1>
      <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "2rem" }}>
        Este módulo enseña <strong>useNavigate()</strong> — la forma de navegar
        programáticamente en React Router v7.
      </p>

      {/* ─── Caja informativa ────────────────────────────────── */}
      <div
        style={{
          background: "#f0f7ff",
          border: "1px solid #b3d4ff",
          borderRadius: "8px",
          padding: "1.25rem 1.5rem",
          marginBottom: "2rem",
        }}
      >
        <h3 style={{ margin: "0 0 0.5rem" }}>🧠 ¿Qué aprenderás aquí?</h3>
        <ul style={{ margin: 0, lineHeight: 2, color: "#444" }}>
          <li><code>navigate("/ruta")</code> — Navegar a una ruta</li>
          <li><code>navigate(-1)</code> — Volver atrás (como el botón del navegador)</li>
          <li><code>navigate("/ruta", {"{ replace: true }"})</code> — Reemplazar historial</li>
          <li><code>navigate("/ruta", {"{ state: { dato } }"})</code> — Enviar datos entre rutas</li>
          <li><code>useLocation()</code> — Leer los datos que llegaron por state</li>
        </ul>
      </div>

      {/* ─── Uso básico de navigate ──────────────────────────── */}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {/*
                 * Caso 1: navigate simple
                 * Es exactamente igual a <Link to="/courses"> pero en un botón.
                 * Útil cuando el elemento no es un link sino un botón de acción.
                 */}
        <button
          onClick={() => navigate("/courses")}
          style={btnStyle("#1a73e8")}
        >
          🎓 Ver todos los cursos
        </button>

        {/*
                 * Caso 2: navigate con replace
                 * Navega a /courses pero BORRA esta página del historial.
                 * Si el usuario presiona "atrás" en el navegador, no vuelve aquí.
                 * Útil en: login exitoso, onboarding completado, etc.
                 *
                 * Analogía: es como un letrero de "entrada sin retorno".
                 * Cruzas la puerta y no puedes volver por ahí.
                 */}
        <button
          onClick={() => navigate("/courses", { replace: true })}
          style={btnStyle("#555")}
        >
          🚪 Ir a cursos (sin retorno)
        </button>
      </div>

      <p style={{ marginTop: "1.5rem", color: "#888", fontSize: "0.85rem" }}>
        Prueba ambos botones y luego presiona "atrás" en el navegador. ¿Ves la diferencia?
      </p>
    </div>
  )
}

const btnStyle = (bg: string) => ({
  background: bg,
  color: "white",
  border: "none",
  padding: "0.75rem 1.5rem",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: 600,
  fontSize: "0.95rem",
})

export default Home