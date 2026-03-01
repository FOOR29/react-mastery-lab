// 📄 LISTA DE CURSOS
//
// Aquí vemos navigate con state:
// Al hacer clic en un curso, enviamos datos EXTRA por navigate
// que la página de detalle puede leer con useLocation().
//
// ¿Por qué? Para que el detalle sepa "desde dónde vine"
// y pueda mostrar un botón de volver más inteligente.

import { useNavigate } from "react-router"
import { courses } from "../data/courses"

const CourseList = () => {
  const navigate = useNavigate()

  const handleCourseClick = (courseId: number) => {
    /*
     * 🌟 navigate con STATE
     *
     * Puedes enviar datos extra al navegar, como un "sobre sellado".
     * La ruta de destino abre ese sobre con useLocation().
     *
     * El state NO aparece en la URL — es invisible para el usuario.
     * Se pierde si el usuario recarga la página (no es persistente).
     *
     * Analogía: es como pasar una nota en clase.
     * La URL es lo que todos ven en la pizarra,
     * el state es la nota que solo recibe quien tú quieres.
     */
    navigate(`/courses/${courseId}`, {
      state: {
        from: "lista de cursos",   // ← dato que enviamos
        timestamp: Date.now(),     // ← otro dato de ejemplo
      },
    })
  }

  const levelColor: Record<string, string> = {
    "Básico": "#22c55e",
    "Intermedio": "#f59e0b",
    "Avanzado": "#ef4444",
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "0.25rem" }}>🎓 Catálogo de Cursos</h2>
      <p style={{ color: "#888", marginBottom: "2rem" }}>
        Haz clic en cualquier curso para ver el detalle.
      </p>

      <div style={{ display: "grid", gap: "1rem" }}>
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => handleCourseClick(course.id)}
            style={{
              display: "flex",
              gap: "1rem",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "box-shadow 0.2s",
              background: "#fff",
            }}
            onMouseEnter={(e) =>
            ((e.currentTarget as HTMLDivElement).style.boxShadow =
              "0 4px 16px rgba(0,0,0,0.1)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLDivElement).style.boxShadow = "none")
            }
          >
            <img
              src={course.cover}
              alt={course.title}
              style={{ width: 140, height: 100, objectFit: "cover", flexShrink: 0 }}
            />
            <div style={{ padding: "0.75rem", flex: 1 }}>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.4rem" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: levelColor[course.level],
                    background: levelColor[course.level] + "20",
                    padding: "0.1rem 0.6rem",
                    borderRadius: "20px",
                  }}
                >
                  {course.level}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#888",
                    background: "#f3f4f6",
                    padding: "0.1rem 0.6rem",
                    borderRadius: "20px",
                  }}
                >
                  {course.category}
                </span>
              </div>
              <strong style={{ fontSize: "1rem" }}>{course.title}</strong>
              <p style={{ margin: "0.2rem 0 0", fontSize: "0.85rem", color: "#666" }}>
                {course.instructor} · {course.duration} · ⭐ {course.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseList