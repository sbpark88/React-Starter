export const getCardYear = (releaseDate: string): string =>
  releaseDate.split("-")[0];

export const getMovieRate = (voteAverage: number): string =>
  voteAverage === 0 ? "평가 전" : voteAverage.toFixed(2);
