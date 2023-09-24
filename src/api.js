import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '46d3c1c67907f129d164c71d807d9a06'

//https://api.themoviedb.org/3/movie/157336?api_key=46d3c1c67907f129d164c71d807d9a06&append_to_response=videos,images

export const fetchTrendingMovies = async () => {
    const resp = await axios.get(`/trending/movie/day?api_key=${API_KEY}&append_to_response=videos,images`);
    return resp.data;
};

export const fetchMovieById = async (id) => {
    const resp = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
    return resp.data;
};

export const fetchMovieCast = async (id) => {
    const resp = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}&append_to_response=videos,images`);
    return resp.data;
};

export const fetchMovieReviews = async (id) => {
    const resp = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}&append_to_response=videos,images`);
    return resp.data;
};

export const fetchMovieByQuery = async (query) => {
    const resp = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
    return resp.data;
};

