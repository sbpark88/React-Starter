import { detailTv } from "../../apis/tvApi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { TVDetail, UseQueryResponse } from "../../types";

const useTvDetail = (query: string): UseQueryResponse<TVDetail> => {
  const queryKey = ["tvDetail", query];
  const queryFn = () => detailTv(query);

  const options = { enabled: Boolean(query) };

  const { isLoading, isError, data } = useQuery<
    AxiosResponse<TVDetail>,
    AxiosError
  >(queryKey, queryFn, options);

  return {
    isLoading,
    isError,
    data: data?.data,
  };
};

export default useTvDetail;
