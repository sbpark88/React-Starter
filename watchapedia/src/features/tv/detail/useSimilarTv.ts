import { ListResponse, TVDetail, UseQueryListResponse } from "../../../types";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { similarTv } from "../../../apis/tvApi";

const useSimilarTv = (tvId: string): UseQueryListResponse<TVDetail> => {
  const queryKey = ["similarTv", tvId];
  const queryFn = () => similarTv(tvId);

  const { isLoading, isError, data } = useQuery<
    AxiosResponse<ListResponse<TVDetail>>,
    AxiosError
  >(queryKey, queryFn);

  return {
    isLoading,
    isError,
    data: data?.data,
  };
};

export default useSimilarTv;
