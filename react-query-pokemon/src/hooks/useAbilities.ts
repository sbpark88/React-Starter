import { Ability, AbilityResponse } from "../types";
import { useQueries, UseQueryResult } from "react-query";
import { AxiosResponse } from "axios";
import { PokeInfoAPI } from "../apis/APIs";

export type UseAbilitiesResponse = Array<
  UseQueryResult<AxiosResponse<AbilityResponse>, Error>
>;
const useAbilities = (abilities: Array<Ability>): UseAbilitiesResponse => {
  const queries = abilities.map(({ ability }, index) => ({
    queryKey: ["ability", index],
    queryFn: () => PokeInfoAPI.getAbilities(ability.url),
  }));

  return useQueries(queries) as UseAbilitiesResponse;
};

export default useAbilities;
