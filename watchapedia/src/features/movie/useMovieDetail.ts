import { detailMovie } from "../../apis/movieAPi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { MovieDetail, UseQueryResponse } from "../../types";

const useMovieDetail = (query: string): UseQueryResponse<MovieDetail> => {
  const queryKey = ["movieDetail", query];
  const queryFn = () => detailMovie(query);

  const options = { enabled: Boolean(query) };

  const { isLoading, isError, data } = useQuery<
    AxiosResponse<MovieDetail>,
    AxiosError
  >(queryKey, queryFn, options);

  return {
    isLoading,
    isError,
    data: data?.data,
  };
};

export default useMovieDetail;
