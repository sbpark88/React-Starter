import React from "react";
import Card, { CardContainer } from "../../../components/Card";
import useLatestTv from "./useLatestTv";

const LatestTvSection: React.FC = () => {
  const { data: response, isLoading } = useLatestTv();

  return (
    <CardContainer title="신규 프로그램">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        response && (
          <Card
            linkUrl={`/tv/${response.id}`}
            title={response.name}
            year={response.first_air_date}
            posterPath={`${process.env.REACT_APP_TMDB_IMAGE_PREFIX}/w300/${response.poster_path}`}
            voteAverage={response.vote_average}
          />
        )
      )}
    </CardContainer>
  );
};

export default LatestTvSection;
