import axios from "axios";

export const PokeImageAPI = {
  url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon",
  get: function (pokemonIndex: number): string {
    return `${this.url}/${pokemonIndex}.png`;
  },
};

export const PokeAPI = {
  url: "https://pokeapi.co/api/v2/pokemon",
  get: function (pokemonId?: string) {
    return axios.get(`${this.url}/${pokemonId ?? ""}`, {
      params: { limit: 151 },
    });
  },
};
