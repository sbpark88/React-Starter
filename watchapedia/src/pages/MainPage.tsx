import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LatestMovieSection from "../features/movie/latest";

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <LatestMovieSection />
      <Footer />
    </div>
  );
};

export default MainPage;
