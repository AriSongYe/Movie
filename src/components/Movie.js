import Protypes from 'prop-types';
import { Link } from "react-router-dom"
function Movie({id, img, title, summary, genres}) {
    return (
        <div>
            <img src={img} alt={title}></img>
            <Link to={`/movie/:id`}><h2>{title}</h2></Link>
            <p>{summary}</p>
            <ul>
            {genres && genres.map(g => <li key={g}>{g}</li>)}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id : Protypes.number.isRequired,
    img : Protypes.string.isRequired,
    title : Protypes.string.isRequired,
    genres: Protypes.arrayOf(Protypes.string).isRequired
}


export default Movie;