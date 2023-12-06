import { onTheAirTv } from "../../../apis/tvApi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, TVDetail } from "../../../types";

const useOnTheAirTv = () =>
  useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "onTheAirTv",
    onTheAirTv,
  );

export default useOnTheAirTv;
