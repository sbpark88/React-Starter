import { popularMovie } from "../../../apis/movieAPi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, MovieDetail } from "../../../types";

const usePopularMovie = () =>
  useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "popularMovie",
    popularMovie,
  );

export default usePopularMovie;