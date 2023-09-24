import { fetchMovieById } from "api";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";


const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const location = useLocation();
    const backLink = useRef(location.state?.from ?? '/');

    useEffect(() => {
        fetchMovieById(id).then(data => setMovie(data));
    }, [id]);

    const { poster_path, title, vote_average, overview, genres } = movie;
    return (
        <main>

            <div>
                <img src={poster_path && `https://image.tmdb.org/t/p/w300${poster_path}`} />
            
                <div>
                    <p>{title}</p>
                    {vote_average && (<p>User score: {Math.round(vote_average * 10)}%</p>)}
                    <p>
                        <span>Overview</span>
                        {overview}
                    </p>
                    <p>
                        <span>Ganres</span>
                        {genres?.map(({ name }) => name).join(', ')}
                    </p>
                </div>
            </div>
            <div>
                <p>Additional information</p>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="review">Review</Link>
                    </li>
                </ul>
            </div>

        </main>
    )

};

export default MovieDetails;