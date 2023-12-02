import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import App from "../App";
import MovieDetail from "../pages/MovieDetail";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
      <ComponentPreview path="/MovieDetail">
        <MovieDetail />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
