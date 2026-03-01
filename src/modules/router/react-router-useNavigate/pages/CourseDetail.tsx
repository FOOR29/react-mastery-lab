// 📄 DETALLE DE CURSO — El más completo del módulo
//
// Aquí vemos TRES cosas nuevas juntas:
//   1. navigate(-1)         → volver atrás
//   2. useLocation()        → leer el state que nos enviaron
//   3. navigate con replace → simular "inscripción exitosa"

import { useNavigate, useParams, useLocation } from "react-router"
import { getCourseById } from "../data/courses"

const CourseDetail = () => {
  const { courseId } = useParams()
  const navigate = useNavigate()

  /*
   * 🌟 useLocation() — Lee información de la URL actual
   *
   * Nos da un objeto con:
   *   - pathname: la ruta actual ("/courses/1")
   *   - search: los query params ("?categoria=frontend")
   *   - state: el objeto que enviamos con navigate(..., { state })
   *   - key: identificador único de esta entrada en el historial
   *
   * IMPORTANTE: location.state puede ser null si el usuario
   * llegó directamente a esta URL (escribiéndola en el navegador).
   * Siempre hay que tenerlo en cuenta.
   */
  const location = useLocation()
  const fromPage = location.state?.from ?? "página anterior"
  //                              ↑
  //    Operador "?." por si state es null (llegó directo por URL)
  //    Si state es null, fromPage = "página anterior" (valor por defecto)

  const course = getCourseById(courseId!)

  if (!course) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Curso no encontrado</h2>
        <button onClick={() => navigate("/courses")} style={btnStyle("#1a73e8")}>
          ← Volver al catálogo
        </button>
      </div>
    )
  }

  const handleEnroll = () => {
    /*
     * 🌟 Simulamos una "inscripción exitosa"
     *
     * En una app real aquí harías un fetch a tu API.
     * Cuando la API responde OK, navegas a la página de confirmación.
     *
     * Usamos { replace: true } porque NO queremos que el usuario
     * pueda volver a esta página con el botón "atrás" y
     * inscribirse dos veces por accidente.
     *
     * Analogía: al pagar en una tienda online, si presionas
     * "atrás" no quieres que el pago se procese de nuevo.
     */
    navigate("/enrolled", {
      replace: true,       // ← borra esta página del historial
      state: {
        courseName: course.title,    // ← enviamos el nombre del curso
        instructor: course.instructor, // ← y el instructor
      },
    })
  }

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "2rem" }}>
      {/* ─── Botón volver ──────────────────────────────────── */}
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
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        {/*
                 * navigate(-1) = "ir una página atrás en el historial"
                 * Es equivalente a presionar el botón ← del navegador.
                 * También existe navigate(1) para ir "adelante".
                 * Y navigate(-2) para ir dos páginas atrás.
                 *
                 * Usamos el state para mostrar de dónde viene el usuario.
                 */}
        ← Volver a {fromPage}
      </button>

      {/* ─── Imagen del curso ──────────────────────────────── */}
      <img
        src={course.cover}
        alt={course.title}
        style={{
          width: "100%",
          height: 220,
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "1.5rem",
        }}
      />

      {/* ─── Info del curso ────────────────────────────────── */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ margin: "0 0 0.5rem" }}>{course.title}</h2>
        <p style={{ color: "#666", margin: "0 0 0.25rem" }}>
          👤 {course.instructor}
        </p>
        <p style={{ color: "#666", margin: "0 0 1rem" }}>
          ⏱️ {course.duration} · ⭐ {course.rating} · 📊 {course.level}
        </p>
        <p style={{ lineHeight: 1.7, color: "#444" }}>{course.description}</p>
      </div>

      {/* ─── Botón de inscripción ──────────────────────────── */}
      <button onClick={handleEnroll} style={btnStyle("#1a73e8")}>
        🚀 Inscribirme al curso
      </button>

      {/* ─── Debug: muestra el state que llegó ────────────── */}
      <div
        style={{
          marginTop: "2rem",
          background: "#f8f8f8",
          border: "1px dashed #ccc",
          borderRadius: "8px",
          padding: "1rem",
          fontSize: "0.85rem",
          color: "#666",
        }}
      >
        <strong>🔍 Debug — useLocation().state:</strong>
        <pre style={{ margin: "0.5rem 0 0" }}>
          {JSON.stringify(location.state, null, 2) ?? "null (llegaste directo por URL)"}
        </pre>
        <p style={{ margin: "0.5rem 0 0", fontSize: "0.8rem" }}>
          Elimina este bloque en producción. Es solo para aprender.
        </p>
      </div>
    </div>
  )
}

const btnStyle = (bg: string) => ({
  background: bg,
  color: "white",
  border: "none",
  padding: "0.85rem 2rem",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: 600,
  fontSize: "1rem",
  width: "100%",
})

export default CourseDetail