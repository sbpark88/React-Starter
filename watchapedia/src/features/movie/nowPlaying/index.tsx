import React from "react";
import useNowPlayingMovie from "./useNowPlayingMovie";
import Card, { CardContainer } from "../../../components/Card";
import CardSlider from "../../../components/CardSlider";

const NowPlayingMovieSection: React.FC = () => {
  const { data: response, isLoading } = useNowPlayingMovie();

  return (
    <CardContainer title="현재 상영중">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <CardSlider>
          {response?.data.results.map((movieDetail) => (
            <Card
              key={movieDetail.id}
              linkUrl={`/movie/${movieDetail.id}`}
              title={movieDetail.title}
              year={movieDetail.release_date}
              posterPath={`${process.env.REACT_APP_TMDB_IMAGE_PREFIX}/${movieDetail.poster_path}`}
              voteAverage={movieDetail.vote_average}
            />
          ))}
        </CardSlider>
      )}
    </CardContainer>
  );
};

export default NowPlayingMovieSection;
