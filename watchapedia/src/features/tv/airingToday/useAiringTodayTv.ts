import { airingTodayTv } from "../../../apis/tvApi";
import { useQuery, UseQueryResult } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, TVDetail } from "../../../types";

const useAiringTodayTv = (): UseQueryResult<
  AxiosResponse<ListResponse<TVDetail>>,
  AxiosError
> =>
  useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "airingTodayTv",
    airingTodayTv,
  );

export default useAiringTodayTv;
