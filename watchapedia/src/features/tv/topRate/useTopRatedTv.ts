import { topRatedTv } from "../../../apis/tvApi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, TVDetail } from "../../../types";

const useTopRatedTv = () =>
  useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "topRatedTv",
    topRatedTv,
  );

export default useTopRatedTv;
