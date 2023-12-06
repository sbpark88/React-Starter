import React from "react";
import styled from "@emotion/styled/macro";
import useNowPlayingMovie from "./useNowPlayingMovie";
import Card from "../../../components/Card";
import CardSlider from "../../../components/CardSlider";
import { getCardYear } from "../../../utils/StringAndNumberUtils";

const Title = styled.div``;

const Base = styled.div``;

const NowPlayingMovieSection: React.FC = () => {
  const { data: response, isLoading } = useNowPlayingMovie();

  return (
    <Base>
      <Title>현재 상영중</Title>
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
    </Base>
  );
};

export default NowPlayingMovieSection;
