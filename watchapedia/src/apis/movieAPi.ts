import axiosInstance from "./index";

export const latestMovie = () => axiosInstance.get("/movie/latest");

export const upcomingMovie = () => axiosInstance.get("/movie/upcoming");

export const nowPlayingMovie = () => axiosInstance.get("/movie/now_playing");

export const topRatedMovie = () => axiosInstance.get("/movie/top_rated");

export const popularMovie = () => axiosInstance.get("/movie/popular");

export const detailMovie = (movieId: string) =>
  axiosInstance.get(`/movie/${movieId}`);

export const similarMovie = (movieId: string) =>
  axiosInstance.get(`/movie/${movieId}/similar`);

export const searchMovie = (query: string) =>
  axiosInstance.get(`/search/movie?query=${query}`);
