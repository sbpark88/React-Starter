import React from "react";
import { useParams } from "react-router-dom";

type Params = {
  id: string;
};

const TvDetail: React.FC = () => {
  const { id: tvId } = useParams<Params>();
  return <>TV Detail {tvId}</>;
};

export default TvDetail;
