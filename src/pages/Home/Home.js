import { fetchTrendingMovies } from "api"
import MoviesList from "components/MovieList/MovieList";
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

const Home =() => {

    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetchTrendingMovies().then(data => setMovies(data.results));
    }, []);


    return (
        <MoviesList movies={movies} location={location} />
    )
}

export default Home;