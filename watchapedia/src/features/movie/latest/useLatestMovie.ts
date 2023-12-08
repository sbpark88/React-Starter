import { latestMovie } from "../../../apis/movieAPi";
import { useQuery, UseQueryResult } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { MovieDetail } from "../../../types";

const useLatestMovie = (): UseQueryResult<
  AxiosResponse<MovieDetail>,
  AxiosError
> =>
  useQuery<AxiosResponse<MovieDetail>, AxiosError>("latestMovie", latestMovie);

export default useLatestMovie;
