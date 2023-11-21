import axios from "axios";

export const PokeImageAPI = {
  url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon",
  get: function (pokemonIndex: number): string {
    return `${this.url}/${pokemonIndex}.png`;
  },
};

export const PokeThumbnailImageAPI = {
  url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world",
  get: function (pokemonIndex: number): string {
    return `${this.url}/${pokemonIndex}.svg`;
  },
};

export const PokeInfoAPI = {
  url: "https://pokeapi.co/api/v2/pokemon",
  get: function (pokemonId?: string) {
    return axios.get(`${this.url}/${pokemonId ?? ""}`, {
      params: { limit: 151 },
    });
  },
};
