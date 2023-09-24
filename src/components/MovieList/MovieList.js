import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <ul>
            {movies.map(({ id, title, poster_path }) => {
                return (
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={{ from: location }}>
                            {/* <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} /> */}
                            <p>{title}</p>
                        </Link>
                    </li>
                );
            })}
        </ul>
    )
};

export default MoviesList;