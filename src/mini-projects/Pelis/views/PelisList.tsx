import { Link } from "react-router"
import { pelis } from "../data/pelis"

const PelisList = () => {
    return (
        <div>
            <h2>Pelis List</h2>
            <div>
                {
                    pelis.map((peli) => (
                        <Link to={`/pelis/${peli.id}`} key={peli.id}>
                            <img
                            className="w-40 h-40 object-cover" 
                            src={peli.image} alt={peli.title} />
                            <h3>{peli.title}</h3>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default PelisList