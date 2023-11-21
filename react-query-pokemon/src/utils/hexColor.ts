import { PokemonColors } from "../constants/Colors";

export const colorNameToHexColor = (color?: string): string =>
  PokemonColors.POKEMONS[
    (color as keyof typeof PokemonColors.POKEMONS) ?? "default"
  ];

export const pokemonTypeToHexColor = (type?: string): string =>
  PokemonColors.TYPES[(type as keyof typeof PokemonColors.TYPES) ?? "default"];
