import { nowPlayingMovie } from "../../../apis/movieAPi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, MovieDetail } from "../../../types";

const useNowPlayingMovie = () =>
  useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "nowPlayingMovie",
    nowPlayingMovie,
  );

export default useNowPlayingMovie;
