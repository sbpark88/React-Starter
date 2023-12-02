import React from "react";
import { useParams } from "react-router-dom";

type Params = {
  id: string;
};
const MovieDetail: React.FC = () => {
  const { id: movieId } = useParams<Params>();
  return <>Movie Detail {movieId}</>;
};

export default MovieDetail;
