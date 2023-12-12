import React from "react";
import MoviePage from "./pages/movie/MoviePage";
import TvPage from "./pages/tv/TvPage";
import TvDetail from "./pages/tv/TvDetail";
import MovieDetail from "./pages/movie/MovieDetail";
import ErrorPage from "./pages/common/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const PAGES = {
  index: "/",
  tv: "/tv",
  tvId: "/tv/:id",
  movieId: "/movie/:id",
};

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<MoviePage />} errorElement={<ErrorPage />} />
        <Route
          path={PAGES.tv}
          element={<TvPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={PAGES.tvId}
          element={<TvDetail />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={PAGES.movieId}
          element={<MovieDetail />}
          errorElement={<ErrorPage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
