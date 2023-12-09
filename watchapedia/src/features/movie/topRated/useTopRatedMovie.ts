import { topRatedMovie } from "../../../apis/movieAPi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import {
  ListResponse,
  MovieDetail,
  UseQueryListResponse,
} from "../../../types";

const useTopRatedMovie = (): UseQueryListResponse<MovieDetail> => {
  const { isLoading, isError, data } = useQuery<
    AxiosResponse<ListResponse<MovieDetail>>,
    AxiosError
  >("topRatedMovie", topRatedMovie);

  return {
    isLoading,
    isError,
    data: data?.data,
  };
};

export default useTopRatedMovie;
