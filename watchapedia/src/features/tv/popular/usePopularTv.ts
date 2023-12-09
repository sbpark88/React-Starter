import { popularTv } from "../../../apis/tvApi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, TVDetail, UseQueryListResponse } from "../../../types";

const usePopularTv = (): UseQueryListResponse<TVDetail> => {
  const { isLoading, isError, data } = useQuery<
    AxiosResponse<ListResponse<TVDetail>>,
    AxiosError
  >("popularTv", popularTv);

  return {
    isLoading,
    isError,
    data: data?.data,
  };
};

export default usePopularTv;
