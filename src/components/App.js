import Home from "pages/Home/Home";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Movie from "pages/Movies/Movies";
import { Link, Route, Routes } from "react-router-dom"
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";


export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/movies'>Movies</Link>
        </li>
      </ul>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="movies" element={<Movie/>} />
          <Route path="movies/:id" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>} />
            <Route path="review" element={<Reviews/>} />  
          </Route>
      </Routes>
    </div>
  );
}




















// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
