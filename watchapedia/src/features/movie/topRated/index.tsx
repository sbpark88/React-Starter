import React from "react";
import useTopRatedMovie from "./useTopRatedMovie";
import Card, { CardContainer } from "../../../components/Card";
import CardSlider from "../../../components/CardSlider";
import { getCardYear } from "../../../utils/StringAndNumberUtils";

const TopRatedMovieSection: React.FC = () => {
  const { data: response, isLoading } = useTopRatedMovie();

  return (
    <CardContainer title="높은 평점">
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

export default TopRatedMovieSection;
