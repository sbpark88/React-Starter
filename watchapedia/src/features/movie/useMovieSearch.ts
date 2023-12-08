import { useQuery } from "react-query";
import { searchMovie } from "../../apis/movieAPi";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, Movie, UseQueryListResponse } from "../../types";

const useMovieSearch = (query: string): UseQueryListResponse<Movie> => {
  const queryKey = ["searchMovie", query];
  const queryFn = () => searchMovie(query);

  const options = { enabled: Boolean(query) };

  const { isLoading, isError, data } = useQuery<
    AxiosResponse<ListResponse<Movie>>,
    AxiosError
  >(queryKey, queryFn, options);

  return {
    isLoading,
    isError,
    data: data?.data,
  };
};

export default useMovieSearch;
