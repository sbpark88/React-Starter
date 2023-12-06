import { popularTv } from "../../../apis/tvApi";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, TVDetail } from "../../../types";

const usePopularTv = () =>
  useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "popularTv",
    popularTv,
  );

export default usePopularTv;
