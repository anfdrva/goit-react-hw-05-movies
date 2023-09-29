import { fetchMovieById } from "api";
import BackLink from "components/BackLink/BackLink";
import { Loader } from "components/Loader/Loader";
import { Suspense, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { Container, MovieTitle, MovieContent, MovieContentTitle, MovieDetailsList, MovieDetailsLink } from "./MovieDetails.styled";


const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? '/');

    useEffect(() => {
        fetchMovieById(id).then(data => setMovie(data));
    }, [id]);

    const { poster_path, title, vote_average, overview, genres } = movie;
    return (
        <main>
            <BackLink to={backLinkHref.current} />
            <Container>
                <img src={poster_path && `https://image.tmdb.org/t/p/w300${poster_path}`} />
            
                <div>
                    <MovieTitle>{title}</MovieTitle>
                    {vote_average && (<p>User score: {Math.round(vote_average * 10)}%</p>)}
                    <MovieContent>
                        <MovieContentTitle>Overview</MovieContentTitle>
                        {overview}
                    </MovieContent>
                    <MovieContent>
                        <MovieContentTitle>Ganres</MovieContentTitle>
                        {genres?.map(({ name }) => name).join(', ')}
                    </MovieContent>
                </div>
            </Container>
            <div>
                <MovieContentTitle>Additional information</MovieContentTitle>
                <MovieDetailsList>
                    <li>
                        <MovieDetailsLink to="cast">Cast</MovieDetailsLink>
                    </li>
                    <li>
                        <MovieDetailsLink to="review">Review</MovieDetailsLink>
                    </li>
                </MovieDetailsList>
            </div>
            <Suspense fallback={<Loader/>}>
                 <Outlet/>
            </Suspense>
        </main>
    )

};

export default MovieDetails;