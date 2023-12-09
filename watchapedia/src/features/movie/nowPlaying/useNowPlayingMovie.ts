import { nowPlayingMovie } from "../../../apis/movieAPi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import {
  ListResponse,
  MovieDetail,
  UseQueryListResponse,
} from "../../../types";

const useNowPlayingMovie = (): UseQueryListResponse<MovieDetail> => {
  const { isLoading, isError, data } = useQuery<
    AxiosResponse<ListResponse<MovieDetail>>,
    AxiosError
  >("playingMovie", nowPlayingMovie);

  return {
    isLoading,
    isError,
    data: data?.data,
  };
};

export default useNowPlayingMovie;
