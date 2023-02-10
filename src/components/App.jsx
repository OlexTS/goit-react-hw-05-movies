import { Routes, Route } from 'react-router-dom';
import React, { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import MovieDetails from 'pages/MovieDetails';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<div>NotFound</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
