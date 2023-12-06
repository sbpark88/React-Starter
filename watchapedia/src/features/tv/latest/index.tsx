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
        response?.data && (
          <Card
            linkUrl={`/tv/${response.data.id}`}
            title={response.data.name}
            year={response.data.first_air_date}
            posterPath={`${process.env.REACT_APP_TMDB_IMAGE_PREFIX}/${response.data.poster_path}`}
            voteAverage={response.data.vote_average}
          />
        )
      )}
    </CardContainer>
  );
};

export default LatestTvSection;
