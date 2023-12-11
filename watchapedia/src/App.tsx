import React from "react";
import MainPage from "./pages/MainPage";
import TvPage from "./pages/TvPage";
import TvDetail from "./pages/TvDetail";
import MovieDetail from "./pages/MovieDetail";
import ErrorPage from "./pages/ErrorPage";
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
        <Route index element={<MainPage />} errorElement={<ErrorPage />} />
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
