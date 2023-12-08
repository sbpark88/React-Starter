import React from "react";
import Card, { CardContainer } from "../../../components/Card";
import usePopularTv from "./usePopularTv";
import CardSlider from "../../../components/CardSlider";

const PopularTvSection: React.FC = () => {
  const { data: response, isLoading } = usePopularTv();

  return (
    <CardContainer title="인기 프로그램">
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

export default PopularTvSection;
