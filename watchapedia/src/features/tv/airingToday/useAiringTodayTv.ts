import { airingTodayTv } from "../../../apis/tvApi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, TVDetail, UseQueryListResponse } from "../../../types";

const useAiringTodayTv = (): UseQueryListResponse<TVDetail> => {
  const { isLoading, isError, data } = useQuery<
    AxiosResponse<ListResponse<TVDetail>>,
    AxiosError
  >("airingTodayTv", airingTodayTv);

  return {
    isLoading,
    isError,
    data: data?.data,
  };
};

export default useAiringTodayTv;
