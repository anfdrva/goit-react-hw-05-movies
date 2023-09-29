import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout";
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home/>} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>} />
            <Route path="review" element={<Reviews/>} />  
          </Route>
      </Route>
      </Routes>
  );
}



// export const App = () => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to='/'>Home</Link>
//         </li>
//         <li>
//           <Link to='/movies'>Movies</Link>
//         </li>
//       </ul>
//       <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="movies" element={<Movie/>} />
//           <Route path="movies/:id" element={<MovieDetails/>}>
//             <Route path="cast" element={<Cast/>} />
//             <Route path="review" element={<Reviews/>} />  
//           </Route>
//       </Routes>
//     </div>
//   );
// }




















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
