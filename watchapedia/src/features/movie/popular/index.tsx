import React from "react";
import usePopularMovie from "./usePopularMovie";
import Card, { CardContainer } from "../../../components/Card";
import CardSlider from "../../../components/CardSlider";
import { getCardYear } from "../../../utils/StringAndNumberUtils";

const PopularMovieSection: React.FC = () => {
  const { data: response, isLoading } = usePopularMovie();

  return (
    <CardContainer title="인기 상영작">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <CardSlider>
          {response?.data.results.map((movieDetail) => (
            <Card
              key={movieDetail.id}
              linkUrl={`/movie/${movieDetail.id}`}
              title={movieDetail.title}
              year={getCardYear(movieDetail.release_date)}
              posterPath={`${process.env.REACT_APP_TMDB_IMAGE_PREFIX}/${movieDetail.poster_path}`}
              voteAverage={movieDetail.vote_average}
            />
          ))}
        </CardSlider>
      )}
    </CardContainer>
  );
};

export default PopularMovieSection;
