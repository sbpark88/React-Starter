import React from "react";
import Card, { CardContainer } from "../../../components/Card";
import useTopRatedTv from "./useTopRatedTv";
import CardSlider from "../../../components/CardSlider";

const TopRatedTvSection: React.FC = () => {
  const { data: response, isLoading } = useTopRatedTv();

  return (
    <CardContainer title="높은 평점">
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
              posterPath={`${process.env.REACT_APP_TMDB_IMAGE_PREFIX}/w300/${tvDetail.poster_path}`}
              voteAverage={tvDetail.vote_average}
            />
          ))}
        </CardSlider>
      )}
    </CardContainer>
  );
};

export default TopRatedTvSection;
