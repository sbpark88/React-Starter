import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LatestMovieSection from "../features/movie/latest";
import NowPlayingMovieSection from "../features/movie/nowPlaying";

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <LatestMovieSection />
      <NowPlayingMovieSection />
      <Footer />
    </div>
  );
};

export default MainPage;
