import React from "react";
import LatestMovieSection from "../features/movie/latest";
import NowPlayingMovieSection from "../features/movie/nowPlaying";
import PopularMovieSection from "../features/movie/popular";
import TopRatedMovieSection from "../features/movie/topRated";
import UpcomingMovieSection from "../features/movie/upcoming";
import styled from "@emotion/styled/macro";
import { HEADER_HEIGHT } from "../constants/STYLES";

export const SectionContainer = styled.div`
  margin-top: ${HEADER_HEIGHT};
  padding: 0 20px;
`;

export const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const MainPage: React.FC = () => {
  return (
    <Main>
      <SectionContainer>
        <LatestMovieSection />
        <NowPlayingMovieSection />
        <PopularMovieSection />
        <TopRatedMovieSection />
        <UpcomingMovieSection />
      </SectionContainer>
    </Main>
  );
};

export default MainPage;
