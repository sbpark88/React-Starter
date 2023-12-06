import React from "react";
import { Main, SectionContainer } from "./MainPage";
import LatestTvSection from "../features/tv/latest";
import AiringTodayTvSection from "../features/tv/airingToday";
import PopularTvSection from "../features/tv/popular";
import TopRatedTvSection from "../features/tv/topRate";
import OnTheAirTvSection from "../features/tv/onTheAir";

const TvPage: React.FC = () => {
  return (
    <Main>
      <SectionContainer>
        <LatestTvSection />
        <OnTheAirTvSection />
        <AiringTodayTvSection />
        <PopularTvSection />
        <TopRatedTvSection />
      </SectionContainer>
    </Main>
  );
};

export default TvPage;
