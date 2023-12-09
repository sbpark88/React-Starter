import { onTheAirTv } from "../../../apis/tvApi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, TVDetail, UseQueryListResponse } from "../../../types";

const useOnTheAirTv = (): UseQueryListResponse<TVDetail> => {
  const { isLoading, isError, data } = useQuery<
    AxiosResponse<ListResponse<TVDetail>>,
    AxiosError
  >("onTheAirTv", onTheAirTv);

  return {
    isLoading,
    isError,
    data: data?.data,
  };
};

export default useOnTheAirTv;
