import { latestMovie } from "../../../apis/movieAPi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { MovieDetail } from "../../../types";

const useLatestMovie = () =>
  useQuery<AxiosResponse<MovieDetail>, AxiosError>("latestMovie", latestMovie);

export default useLatestMovie;
