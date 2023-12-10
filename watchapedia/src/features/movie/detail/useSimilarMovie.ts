import {
  ListResponse,
  MovieDetail,
  UseQueryListResponse,
} from "../../../types";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { similarMovie } from "../../../apis/movieAPi";

const useSimilarMovie = (
  movieId: string,
): UseQueryListResponse<MovieDetail> => {
  const queryKey = ["similarMovie", movieId];
  const queryFn = () => similarMovie(movieId);

  const { isLoading, isError, data } = useQuery<
    AxiosResponse<ListResponse<MovieDetail>>,
    AxiosError
  >(queryKey, queryFn);

  return {
    isLoading,
    isError,
    data: data?.data,
  };
};

export default useSimilarMovie;
