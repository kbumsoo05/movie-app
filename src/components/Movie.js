import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, image, title, genres, summary }) {
    return (
        <div>
            <img src={image}></img>
            <h1>
                <Link to={`/detail/${id}`}>{title}</Link>
            </h1>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div >
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;