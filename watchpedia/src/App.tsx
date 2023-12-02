import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TvPage from "./pages/TvPage";
import TvDetail from "./pages/TvDetail";
import MovieDetail from "./pages/MovieDetail";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

const newRouter = (path: string, element: React.ReactElement): object => ({
  path: path,
  element: element,
  errorElement: <ErrorPage />,
});

const router = createBrowserRouter([
  newRouter("/", <MainPage />),
  newRouter("/tv", <TvPage />),
  newRouter("/tv/:id", <TvDetail />),
  newRouter("/movie/:id", <MovieDetail />),
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
