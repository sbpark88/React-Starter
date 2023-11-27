import { useQuery, UseQueryResult } from "react-query";
import { AxiosResponse } from "axios";
import { EvolutionChainResponse } from "../types";
import { PokeInfoAPI } from "../apis/APIs";

export type UseEvolutionChainQueryResponse = UseQueryResult<
  AxiosResponse<EvolutionChainResponse, Error>,
  Error
>;
const useEvolutionChainQuery = (
  url?: string,
): UseEvolutionChainQueryResponse => {
  const queryKey = ["evolution", { url }];
  const queryFn = () => (url ? PokeInfoAPI.getEvolutionChain(url) : null);

  return useQuery(queryKey, queryFn);
};

export default useEvolutionChainQuery;
