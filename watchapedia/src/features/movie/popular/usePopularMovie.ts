import { popularMovie } from "../../../apis/movieAPi";
import { useQuery, UseQueryResult } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, MovieDetail } from "../../../types";

const usePopularMovie = (): UseQueryResult<
  AxiosResponse<ListResponse<MovieDetail>>,
  AxiosError
> =>
  useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "popularMovie",
    popularMovie,
  );

export default usePopularMovie;
