import React from "react";
import LatestMovieSection from "../../features/movie/latest";
import NowPlayingMovieSection from "../../features/movie/nowPlaying";
import PopularMovieSection from "../../features/movie/popular";
import TopRatedMovieSection from "../../features/movie/topRated";
import UpcomingMovieSection from "../../features/movie/upcoming";
import MainPage from "../common/MainPage";

const MoviePage: React.FC = () => {
  return (
    <MainPage>
      <LatestMovieSection />
      <NowPlayingMovieSection />
      <PopularMovieSection />
      <TopRatedMovieSection />
      <UpcomingMovieSection />
    </MainPage>
  );
};

export default MoviePage;
