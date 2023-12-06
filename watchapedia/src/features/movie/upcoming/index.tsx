import React from "react";
import useUpcomingMovie from "./useUpcomingMovie";
import Card, { CardContainer } from "../../../components/Card";
import CardSlider from "../../../components/CardSlider";
import { getCardYear } from "../../../utils/StringAndNumberUtils";

const UpcomingMovieSection: React.FC = () => {
  const { data: response, isLoading } = useUpcomingMovie();

  return (
    <CardContainer title="개봉 예정작">
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

export default UpcomingMovieSection;
