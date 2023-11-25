import { useQuery, UseQueryResult } from "react-query";
import { PokeInfoAPI } from "../apis/APIs";
import { AxiosResponse } from "axios";

const useSpeciesQuery = <SpeciesResponse>(
  pokemonId?: string,
): UseQueryResult<AxiosResponse<SpeciesResponse>, Error> => {
  const queryKey = ["species", { id: pokemonId }];
  const queryFn = () => PokeInfoAPI.getSpecies(pokemonId);

  return useQuery(queryKey, queryFn);
};

export default useSpeciesQuery;
