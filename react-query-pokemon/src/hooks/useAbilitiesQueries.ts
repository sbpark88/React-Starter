import { Ability, AbilityResponse } from "../types";
import { useQueries, UseQueryResult } from "react-query";
import { AxiosResponse } from "axios";
import { PokeInfoAPI } from "../apis/APIs";

export type UseAbilitiesQueriesResponse = Array<
  UseQueryResult<AxiosResponse<AbilityResponse, Error>, Error>
>;

const useAbilitiesQueries = (
  abilities: Array<Ability>,
): UseAbilitiesQueriesResponse => {
  const queries = abilities.map(({ ability }, index) => ({
    queryKey: ["ability", index],
    queryFn: () => PokeInfoAPI.getAbilities(ability.url),
  }));

  return useQueries(queries) as UseAbilitiesQueriesResponse;
};

export default useAbilitiesQueries;
