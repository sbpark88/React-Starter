import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import UseFormExample from "./pages/UseFormExample";
import WatchComponent from "./pages/WatchComponent";
import ValidateComponent from "./pages/ValidateComponent";
import ErrorHandlingComponent from "./pages/ErrorHandlingComponent";
import ControllerComponent from "./pages/ControllerComponent";
import "./style.scss";

const PAGES = {
  index: "/",
  useForm: "/",
  watch: "/watch",
  validate: "/validate",
  errorHandling: "/error-handling",
  controller: "/controller",
};

function App() {
  return (
    <div>
      <h1>React hook form register examples</h1>

      <Layout />
      <Routes>
        {/*<Route index element={<Layout />} />*/}
        <Route index element={<UseFormExample />} />
        <Route path={PAGES.watch} element={<WatchComponent />} />
        <Route path={PAGES.validate} element={<ValidateComponent />} />
        <Route
          path={PAGES.errorHandling}
          element={<ErrorHandlingComponent />}
        />
        <Route path={PAGES.controller} element={<ControllerComponent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={PAGES.useForm}>useForm</Link>
          </li>
          <li>
            <Link to={PAGES.watch}>watch</Link>
          </li>
          <li>
            <Link to={PAGES.validate}>validate</Link>
          </li>
          <li>
            <Link to={PAGES.errorHandling}>errorHandling</Link>
          </li>
          <li>
            <Link to={PAGES.controller}>controller</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "80px",
          minHeight: "300px",
          height: "100%",
        }}
      >
        Page not found...
      </h1>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
        }}
      >
        <Link to={PAGES.index}>Go to the home page</Link>
      </p>
    </div>
  );
}
