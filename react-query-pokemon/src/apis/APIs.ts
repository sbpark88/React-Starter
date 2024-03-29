import axios, { AxiosResponse } from "axios";
import {
  AbilityResponse,
  EvolutionChainResponse,
  PokemonResponse,
  SpeciesResponse,
} from "../types";

export const PokeImageAPI = {
  url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon",
  getImage: function (pokemonIndex: number): string {
    return `${this.url}/${pokemonIndex}.png`;
  },
  getThumbnail: function (pokemonIndex: number): string {
    return `${this.url}/other/dream-world/${pokemonIndex}.svg`;
  },
};

export const PokeInfoAPI = {
  url: "https://pokeapi.co/api/v2",
  getInfo: function (
    pokemonId: string = "",
  ): Promise<AxiosResponse<PokemonResponse, Error>> {
    return axios.get(`${this.url}/pokemon/${pokemonId}`, {
      params: { limit: 151 },
    });
  },
  getSpecies: function (
    pokemonId: string = "",
  ): Promise<AxiosResponse<SpeciesResponse, Error>> {
    return axios.get(`${this.url}/pokemon-species/${pokemonId}`);
  },
  getAbilities: function (
    url: string,
  ): Promise<AxiosResponse<AbilityResponse, Error>> {
    const endpoint = "https://pokeapi.co/api/v2/ability/";
    const abilityUrl = url.startsWith(endpoint) ? url : endpoint + url;
    return axios.get(abilityUrl);
  },
  getEvolutionChain: function (
    url: string,
  ): Promise<AxiosResponse<EvolutionChainResponse, Error>> {
    const endpoint = "https://pokeapi.co/api/v2/evolution-chain/";
    const evolutionChainUrl = url.startsWith(endpoint) ? url : endpoint + url;
    return axios.get(evolutionChainUrl);
  },
};
