import { topRatedTv } from "../../../apis/tvApi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, TVDetail, UseQueryListResponse } from "../../../types";

const useTopRatedTv = (): UseQueryListResponse<TVDetail> => {
  const { isLoading, isError, data } = useQuery<
    AxiosResponse<ListResponse<TVDetail>>,
    AxiosError
  >("topRatedTv", topRatedTv);

  return {
    isLoading,
    isError,
    data: data?.data,
  };
};

export default useTopRatedTv;
