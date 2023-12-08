import React from "react";
import LatestMovieSection from "../features/movie/latest";
import NowPlayingMovieSection from "../features/movie/nowPlaying";
import PopularMovieSection from "../features/movie/popular";
import TopRatedMovieSection from "../features/movie/topRated";
import UpcomingMovieSection from "../features/movie/upcoming";
import styled from "@emotion/styled/macro";
import { HEADER_HEIGHT } from "../constants/STYLES";

export const SectionContainer = styled.div`
  padding: 0 20px;
`;

export const ContainerWithHeader = styled.main`
  margin-top: ${HEADER_HEIGHT};
`;

export const Main = styled(ContainerWithHeader)`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
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
