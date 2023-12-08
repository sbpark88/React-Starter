import { nowPlayingMovie } from "../../../apis/movieAPi";
import { useQuery, UseQueryResult } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, MovieDetail } from "../../../types";

const useNowPlayingMovie = (): UseQueryResult<
  AxiosResponse<ListResponse<MovieDetail>>,
  AxiosError
> =>
  useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "playingMovie",
    nowPlayingMovie,
  );

export default useNowPlayingMovie;
