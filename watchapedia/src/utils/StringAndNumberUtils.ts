import { Genre } from "../types";

export const getCardYear = (releaseDate: string = ""): string =>
  releaseDate.split("-")[0];

export const getMovieRate = (voteAverage: number = 0): string =>
  voteAverage === 0 ? "평가 전" : voteAverage.toFixed(2);

export const getGenre = (genres: Genre[] = []): string =>
  genres.map((genre) => genre.name).join("/");
