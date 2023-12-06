import { latestTv } from "../../../apis/tvApi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { TVDetail } from "../../../types";

const useLatestTv = () =>
  useQuery<AxiosResponse<TVDetail>, AxiosError>("latestTv", latestTv);

export default useLatestTv;
