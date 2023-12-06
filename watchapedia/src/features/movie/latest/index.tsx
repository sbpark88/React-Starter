import React from "react";
import styled from "@emotion/styled/macro";
import useLatestMovie from "./useLatestMovie";
import Card from "../../../components/Card";
import { getCardYear } from "../../../utils/StringAndNumberUtils";

const Title = styled.h4``;

const Base = styled.div``;

const LatestMovieSection: React.FC = () => {
  const { data: response, isLoading } = useLatestMovie();

  return (
    <Base>
      <Title>최근 개봉작</Title>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        response?.data && (
          <Card
            linkUrl={`/movie/${response.data.id}`}
            title={response.data.title}
            year={getCardYear(response.data.release_date)}
            posterPath={`${process.env.REACT_APP_TMDB_IMAGE_PREFIX}/${response.data.poster_path}`}
            voteAverage={response.data.vote_average}
          />
        )
      )}
    </Base>
  );
};

export default LatestMovieSection;
