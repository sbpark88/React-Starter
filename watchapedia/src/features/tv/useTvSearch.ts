import { ListResponse, TV, UseQueryListResponse } from "../../types";
import { searchTv } from "../../apis/tvApi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

const useTvSearch = (query: string): UseQueryListResponse<TV> => {
  const queryKey = ["searchTv", query];
  const queryFn = () => searchTv(query);

  const options = { enabled: Boolean(query) };

  const { isLoading, isError, data } = useQuery<
    AxiosResponse<ListResponse<TV>>,
    AxiosError
  >(queryKey, queryFn, options);

  return {
    isLoading,
    isError,
    data: data?.data,
  };
};

export default useTvSearch;
