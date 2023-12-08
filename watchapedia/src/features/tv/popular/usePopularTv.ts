import { popularTv } from "../../../apis/tvApi";
import { useQuery, UseQueryResult } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, TVDetail } from "../../../types";

const usePopularTv = (): UseQueryResult<
  AxiosResponse<ListResponse<TVDetail>>,
  AxiosError
> =>
  useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "popularTv",
    popularTv,
  );

export default usePopularTv;
