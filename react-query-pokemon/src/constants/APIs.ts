export const PokemonAPI = {
  main: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon",
  get: function (pokemonIndex: number): string {
    return `${this.main}/${pokemonIndex}.png`;
  },
};
