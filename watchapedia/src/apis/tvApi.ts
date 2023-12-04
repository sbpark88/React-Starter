import axiosInstance from "./index";

export const latestTv = () => axiosInstance.get("/tv/latest");

export const airingTodayTv = () => axiosInstance.get("/tv/airing_today");

export const onTheAirTv = () => axiosInstance.get("/tv/on_the_air");

export const topRateTv = () => axiosInstance.get("/tv/top_rate");

export const popularTv = () => axiosInstance.get("/tv/popular");

export const detailTv = () => (tvId: string) =>
  axiosInstance.get(`/tv/${tvId}`);

export const similarTv = (tvId: string) =>
  axiosInstance.get(`/tv/${tvId}/similar`);

export const searchTv = (query: string) =>
  axiosInstance.get(`/search/tv?query=${query}`);
