import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import Add from "./pages/Add";
import Signin from "./pages/Signin";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/Error";
function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route
            path={PAGES.HOME}
            element={<Home />}
            errorElement={<Error />}
          />
          <Route
            path={PAGES.EDIT}
            element={<Edit />}
            errorElement={<Error />}
          />
          <Route
            path={PAGES.DETAIL}
            element={<Detail />}
            errorElement={<Error />}
          />
          <Route path={PAGES.ADD} element={<Add />} errorElement={<Error />} />
          <Route
            path={PAGES.SIGNIN}
            element={<Signin />}
            errorElement={<Error />}
          />
          <Route path={PAGES.NOTFOUND} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;

export const PAGES = {
  HOME: "/",
  EDIT: "/edit/:id",
  DETAIL: "/book/:id",
  ADD: "/add",
  SIGNIN: "/signin",
  NOTFOUND: "*",
};
