import React from "react";
import Card, { CardContainer } from "../../../components/Card";
import useOnTheAirTv from "./useOnTheAirTv";
import CardSlider from "../../../components/CardSlider";

const OnTheAirTvSection: React.FC = () => {
  const { data: response, isLoading } = useOnTheAirTv();

  return (
    <CardContainer title="실시간 TV">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <CardSlider>
          {response?.data.results.map((tvDetail) => (
            <Card
              key={tvDetail.id}
              linkUrl={`/tv/${tvDetail.id}`}
              title={tvDetail.name}
              year={tvDetail.first_air_date}
              posterPath={`${process.env.REACT_APP_TMDB_IMAGE_PREFIX}/${tvDetail.poster_path}`}
              voteAverage={tvDetail.vote_average}
            />
          ))}
        </CardSlider>
      )}
    </CardContainer>
  );
};

export default OnTheAirTvSection;
