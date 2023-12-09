import { popularMovie } from "../../../apis/movieAPi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import {
  ListResponse,
  MovieDetail,
  UseQueryListResponse,
} from "../../../types";

const usePopularMovie = (): UseQueryListResponse<MovieDetail> => {
  const { isLoading, isError, data } = useQuery<
    AxiosResponse<ListResponse<MovieDetail>>,
    AxiosError
  >("popularMovie", popularMovie);

  return {
    isLoading,
    isError,
    data: data?.data,
  };
};

export default usePopularMovie;
