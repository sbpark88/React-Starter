import { latestMovie } from "../../../apis/movieAPi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { MovieDetail, UseQueryResponse } from "../../../types";

const useLatestMovie = (): UseQueryResponse<MovieDetail> => {
  const { isLoading, isError, data } = useQuery<
    AxiosResponse<MovieDetail>,
    AxiosError
  >("latestMovie", latestMovie);

  return {
    isLoading,
    isError,
    data: data?.data,
  };
};

export default useLatestMovie;
