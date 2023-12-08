import { topRatedTv } from "../../../apis/tvApi";
import { useQuery, UseQueryResult } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, TVDetail } from "../../../types";

const useTopRatedTv = (): UseQueryResult<
  AxiosResponse<ListResponse<TVDetail>>,
  AxiosError
> =>
  useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "topRatedTv",
    topRatedTv,
  );

export default useTopRatedTv;
