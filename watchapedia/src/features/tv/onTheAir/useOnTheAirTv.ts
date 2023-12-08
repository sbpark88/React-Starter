import { onTheAirTv } from "../../../apis/tvApi";
import { useQuery, UseQueryResult } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, TVDetail } from "../../../types";

const useOnTheAirTv = (): UseQueryResult<
  AxiosResponse<ListResponse<TVDetail>>,
  AxiosError
> =>
  useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "onTheAirTv",
    onTheAirTv,
  );

export default useOnTheAirTv;
