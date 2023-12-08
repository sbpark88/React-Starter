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
        response?.data && (
          <Card
            linkUrl={`/movie/${response.data.id}`}
            title={response.data.title}
            year={response.data.release_date}
            posterPath={`${process.env.REACT_APP_TMDB_IMAGE_PREFIX}/w300/${response.data.poster_path}`}
            voteAverage={response.data.vote_average}
          />
        )
      )}
    </CardContainer>
  );
};

export default LatestMovieSection;
