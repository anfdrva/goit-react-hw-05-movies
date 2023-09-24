import Home from "pages/Home/Home";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Movie from "pages/Movies/Movies";
import { Link, Route, Routes } from "react-router-dom"


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
            <Route path="cast" element={<div>Movies</div>} />
            <Route path="reviews" element={<div>Movies</div>} />  
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
