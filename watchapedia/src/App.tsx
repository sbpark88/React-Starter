import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TvPage from "./pages/TvPage";
import TvDetail from "./pages/TvDetail";
import MovieDetail from "./pages/MovieDetail";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;

const newRouter = (path: string, element: React.ReactElement): object => ({
  path: path,
  element: element,
  errorElement: <ErrorPage />,
});

export const PAGES = {
  index: "/",
  tv: "/tv",
  tvId: "/tv/:id",
  movieId: "/movie/:id",
};

const router = createBrowserRouter([
  newRouter(PAGES.index, <MainPage />),
  newRouter(PAGES.tv, <TvPage />),
  newRouter(PAGES.tvId, <TvDetail />),
  newRouter(PAGES.movieId, <MovieDetail />),
]);

/*
import { BrowserRouter, Route, Routes } from "react-router-dom";

const PAGES = {
  index: "/",
  tv: "/tv",
  tvId: "/tv/:id",
  movieId: "/movie/:id",
};

function App() {
  return (
      <BrowserRouter>
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
      </BrowserRouter>
  );
}
*/
