import React from "react";
import Card, { CardContainer } from "../../../components/Card";
import useAiringTodayTv from "./useAiringTodayTv";
import CardSlider from "../../../components/CardSlider";

const AiringTodayTvSection: React.FC = () => {
  const { data: response, isLoading } = useAiringTodayTv();

  return (
    <CardContainer title="오늘 방영">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <CardSlider>
          {response?.results.map((tvDetail) => (
            <Card
              key={tvDetail.id}
              linkUrl={`/tv/${tvDetail.id}`}
              title={tvDetail.name}
              year={tvDetail.first_air_date}
              posterPath={`${process.env.REACT_APP_TMDB_IMAGE_PREFIX}/w300/${tvDetail.poster_path}`}
              voteAverage={tvDetail.vote_average}
            />
          ))}
        </CardSlider>
      )}
    </CardContainer>
  );
};

export default AiringTodayTvSection;
