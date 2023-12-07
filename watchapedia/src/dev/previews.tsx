import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import App from "../App";
import MovieDetail from "../pages/MovieDetail";
import Header from "../components/Header";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
      <ComponentPreview path="/MovieDetail">
        <MovieDetail />
      </ComponentPreview>
      <ComponentPreview path="/Header">
        <Header />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
