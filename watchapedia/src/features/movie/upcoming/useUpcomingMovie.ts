import { upcomingMovie } from "../../../apis/movieAPi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import {
  ListResponse,
  MovieDetail,
  UseQueryListResponse,
} from "../../../types";

const useUpcomingMovie = (): UseQueryListResponse<MovieDetail> => {
  const { isLoading, isError, data } = useQuery<
    AxiosResponse<ListResponse<MovieDetail>>,
    AxiosError
  >("upcomingMovie", upcomingMovie);

  return {
    isLoading,
    isError,
    data: data?.data,
  };
};

export default useUpcomingMovie;
