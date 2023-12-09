import React from "react";
import usePopularMovie from "./usePopularMovie";
import Card, { CardContainer } from "../../../components/Card";
import CardSlider from "../../../components/CardSlider";

const PopularMovieSection: React.FC = () => {
  const { data: response, isLoading } = usePopularMovie();

  return (
    <CardContainer title="인기 상영작">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <CardSlider>
          {response?.results.map((movieDetail) => (
            <Card
              key={movieDetail.id}
              linkUrl={`/movie/${movieDetail.id}`}
              title={movieDetail.title}
              year={movieDetail.release_date}
              posterPath={`${process.env.REACT_APP_TMDB_IMAGE_PREFIX}/w300/${movieDetail.poster_path}`}
              voteAverage={movieDetail.vote_average}
            />
          ))}
        </CardSlider>
      )}
    </CardContainer>
  );
};

export default PopularMovieSection;
