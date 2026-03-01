import { NavLink, useNavigate } from "react-router"

const Navbar = () => {
  const navigate = useNavigate()

  const link = ({ isActive }: { isActive: boolean }) => ({
    textDecoration: "none",
    color: isActive ? "#1a73e8" : "#555",
    fontWeight: isActive ? 700 : 500,
    padding: "0.25rem 0.5rem",
    borderRadius: "4px",
  })

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1.5rem",
        padding: "1rem 2rem",
        borderBottom: "1px solid #e5e7eb",
        background: "#fff",
      }}
    >
      <span
        onClick={() => navigate("/")}
        style={{ fontWeight: "bold", marginRight: "auto", cursor: "pointer" }}
      >
        🧭 useNavigate
      </span>

      <NavLink to="/" end style={link}>Home</NavLink>
      <NavLink to="/courses" style={link}>Cursos</NavLink>
    </nav>
  )
}

export default Navbar