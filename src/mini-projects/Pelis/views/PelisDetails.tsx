import { useParams } from "react-router";
import { GetPelisById } from "../helpers/GetPelis";

const PelisDetails = () => {

    const { pelisId } = useParams();
    const movie = GetPelisById(pelisId!);

    return (
        <div>
            <h2>{movie?.title}</h2>
            <p>{movie?.description}</p>
            <img src={movie?.image} alt={movie?.title} />
            <p>{movie?.rating}</p>
        </div>
    )
}

export default PelisDetails