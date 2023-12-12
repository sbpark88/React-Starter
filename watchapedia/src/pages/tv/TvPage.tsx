import React from "react";
import LatestTvSection from "../../features/tv/latest";
import AiringTodayTvSection from "../../features/tv/airingToday";
import PopularTvSection from "../../features/tv/popular";
import TopRatedTvSection from "../../features/tv/topRate";
import OnTheAirTvSection from "../../features/tv/onTheAir";
import MainPage from "../common/MainPage";

const TvPage: React.FC = () => {
  return (
    <MainPage>
      <LatestTvSection />
      <OnTheAirTvSection />
      <AiringTodayTvSection />
      <PopularTvSection />
      <TopRatedTvSection />
    </MainPage>
  );
};

export default TvPage;
