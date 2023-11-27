import { useQuery, UseQueryResult } from "react-query";
import { PokeInfoAPI } from "../apis/APIs";
import { AxiosResponse } from "axios";
import { SpeciesResponse } from "../types";

export type UseSpeciesQueryResponse = UseQueryResult<
  AxiosResponse<SpeciesResponse, Error>,
  Error
>;

const useSpeciesQuery = (pokemonId?: string): UseSpeciesQueryResponse => {
  const queryKey = ["species", { id: pokemonId }];
  const queryFn = () => PokeInfoAPI.getSpecies(pokemonId);

  return useQuery(queryKey, queryFn);
};

export default useSpeciesQuery;
