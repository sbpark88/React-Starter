import React from "react";
import useLatestMovie from "./useLatestMovie";
import Card, { CardContainer } from "../../../components/Card";

const LatestMovieSection: React.FC = () => {
  const { data: response, isLoading } = useLatestMovie();

  return (
    <CardContainer title="신규 개봉작">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        response && (
          <Card
            linkUrl={`/movie/${response.id}`}
            title={response.title}
            year={response.release_date}
            posterPath={`${process.env.REACT_APP_TMDB_IMAGE_PREFIX}/w300/${response.poster_path}`}
            voteAverage={response.vote_average}
          />
        )
      )}
    </CardContainer>
  );
};

export default LatestMovieSection;
