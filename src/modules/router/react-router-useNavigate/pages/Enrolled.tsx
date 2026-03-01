// 📄 PÁGINA DE CONFIRMACIÓN — /enrolled
//
// Esta página solo existe para mostrar el resultado de la "inscripción".
// Demuestra el patrón más común de useNavigate en apps reales:
//
//   Acción (click) → lógica/fetch → navigate a confirmación
//
// También demuestra por qué usamos { replace: true } en el detalle:
// si el usuario presiona "atrás" aquí, NO vuelve al detalle del curso
// sino directamente a la lista. Así evitamos dobles inscripciones.

import { useNavigate, useLocation } from "react-router"

const Enrolled = () => {
  const navigate = useNavigate()
  const location = useLocation()

  /*
   * Leemos el state que nos envió CourseDetail con navigate(..., { state }).
   * Si el usuario llega aquí directamente por URL (sin pasar por el detalle),
   * state será null y mostramos un mensaje genérico.
   */
  const courseName = location.state?.courseName
  const instructor = location.state?.instructor

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎉</div>

      <h2 style={{ marginBottom: "0.5rem" }}>
        {courseName
          ? `¡Te inscribiste a "${courseName}"!`
          : "¡Inscripción exitosa!"}
      </h2>

      {instructor && (
        <p style={{ color: "#666", marginBottom: "2rem" }}>
          Tu instructor será <strong>{instructor}</strong>. ¡A aprender!
        </p>
      )}

      {!courseName && (
        <p style={{ color: "#888", marginBottom: "2rem" }}>
          Llegaste directamente a esta página — el state es null.
        </p>
      )}

      {/*
             * Aquí usamos navigate con replace TAMBIÉN.
             * No queremos que "atrás" desde el catálogo vuelva a esta confirmación.
             * El flujo debe ser limpio: catálogo → detalle → inscripción → catálogo.
             */}
      <button
        onClick={() => navigate("/courses", { replace: true })}
        style={{
          background: "#1a73e8",
          color: "white",
          border: "none",
          padding: "0.75rem 2rem",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: 600,
          fontSize: "1rem",
        }}
      >
        Ver más cursos
      </button>
    </div>
  )
}

export default Enrolled