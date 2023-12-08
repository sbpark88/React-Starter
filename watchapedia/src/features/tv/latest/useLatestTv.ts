import { latestTv } from "../../../apis/tvApi";
import { useQuery, UseQueryResult } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { TVDetail } from "../../../types";

const useLatestTv = (): UseQueryResult<AxiosResponse<TVDetail>, AxiosError> =>
  useQuery<AxiosResponse<TVDetail>, AxiosError>("latestTv", latestTv);

export default useLatestTv;
