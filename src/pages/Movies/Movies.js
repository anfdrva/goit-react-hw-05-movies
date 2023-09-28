import { fetchMovieByQuery } from "api";
import Error from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import MoviesList from "components/MovieList/MovieList";
import SearchForm from "components/SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Movie() { 
    const [search, setSearch] = useSearchParams();
    const [movies, setMovies] = useState(null);
    const [totalResults, setTotalResults] = useState(null);
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(false);
    const query = search.get('query') ?? '';

    useEffect(() => {
        if (query === '') return;
        const startFetching = async () => {
            setLoader(true);
            try {
                const { results, total_results } = await fetchMovieByQuery(query);
                setMovies(results);
                setTotalResults(total_results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoader(false);
            }
        };
        startFetching();
    }, [query]);

    const setParams = query => {
        const params = query !== '' ? { query } : {};
        setSearch(params);
    };

    return (
        <div>
            <SearchForm setParams={setParams} />
            {loader && <Loader/>}
            {movies && !loader && <MoviesList movies={movies} />}
            {totalResults === 0 && (<Error errorText={'Sorry, nothing has been found at your request'} />)}
            {error && (<Error errorText={'Something went wrong... Please try again.'}/>)}
        </div>
    )

}