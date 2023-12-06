import { airingTodayTv } from "../../../apis/tvApi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, TVDetail } from "../../../types";

const useAiringTodayTv = () =>
  useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "airingTodayTv",
    airingTodayTv,
  );

export default useAiringTodayTv;
