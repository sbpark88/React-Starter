import { latestTv } from "../../../apis/tvApi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { TVDetail, UseQueryResponse } from "../../../types";

const useLatestTv = (): UseQueryResponse<TVDetail> => {
  const { isLoading, isError, data } = useQuery<
    AxiosResponse<TVDetail>,
    AxiosError
  >("latestTv", latestTv);

  return {
    isLoading,
    isError,
    data: data?.data,
  };
};

export default useLatestTv;
