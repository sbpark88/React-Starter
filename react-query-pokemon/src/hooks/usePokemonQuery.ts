import { useQueries, useQuery, UseQueryResult } from "react-query";
import { AxiosResponse } from "axios";
import { PokeInfoAPI } from "../apis/APIs";
import { PokemonListResponse, PokemonResponse } from "../types";

// id 가 있을 때
export type UsePokemonQueryResponse = UseQueryResult<
  AxiosResponse<PokemonResponse, Error>,
  Error
>;

// id 가 없을 때
export type UsePokemonQueryListResponse = UseQueryResult<
  AxiosResponse<PokemonListResponse, Error>,
  Error
>;

type Response = UseQueryResult<
  AxiosResponse<PokemonResponse | PokemonListResponse, Error>,
  Error
>;

const usePokemonQuery = (id?: string): Response => {
  const queryKey = id ? ["pokemon", id] : "pokemon";
  const queryFn = () => PokeInfoAPI.getInfo(id);

  return useQuery(queryKey, queryFn);
};

export type UsePokemonQueriesResponse = Array<UsePokemonQueryResponse>;

export const usePokemonQueries = (
  names: string[],
): UsePokemonQueriesResponse => {
  const queries = names.map((id, index) => ({
    queryKey: ["evolution", `${id}_${index}`],
    queryFn: () => PokeInfoAPI.getInfo(id),
  }));

  return useQueries(queries) as UsePokemonQueriesResponse;
};

export default usePokemonQuery;
