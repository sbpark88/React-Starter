import { upcomingMovie } from "../../../apis/movieAPi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, MovieDetail } from "../../../types";

const useUpcomingMovie = () =>
  useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "upcomingMovie",
    upcomingMovie,
  );

export default useUpcomingMovie;