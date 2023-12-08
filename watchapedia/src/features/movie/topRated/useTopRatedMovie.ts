import { topRatedMovie } from "../../../apis/movieAPi";
import { useQuery, UseQueryResult } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, MovieDetail } from "../../../types";

const useTopRatedMovie = (): UseQueryResult<
  AxiosResponse<ListResponse<MovieDetail>>,
  AxiosError
> =>
  useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "topRatedMovie",
    topRatedMovie,
  );

export default useTopRatedMovie;
