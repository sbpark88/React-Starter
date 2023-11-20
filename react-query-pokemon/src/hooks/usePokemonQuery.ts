import { PokemonResponse } from "../types";
import { useQueries, useQuery, UseQueryResult } from "react-query";
import { AxiosResponse } from "axios";
import { PokeAPI } from "../apis/APIs";

const usePokemonQuery = <PokemonResponse>(
  id?: string,
): UseQueryResult<AxiosResponse<PokemonResponse>, Error> => {
  const queryKey = id ? ["pokemon", id] : "pokemon";
  const queryFn = () => PokeAPI.get(id);

  return useQuery(queryKey, queryFn);
};

export default usePokemonQuery;
