import React, { useCallback, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Tabs, { TBA_TYPE } from "../components/tabs/Tabs";
import useSpeciesQuery, {
  UseSpeciesQueryResponse,
} from "../hooks/useSpeciesQuery";
import { SpeciesResponse } from "../types";
import PokemonInfo from "../components/PokemonInfo";
import usePokemonQuery, {
  UsePokemonQueryResponse,
} from "../hooks/usePokemonQuery";
import About from "../components/tabs/about/About";
import Stats from "../components/tabs/stats/Stats";
import Evolution from "../components/tabs/evolution/Evolution";
import styled from "@emotion/styled/macro";

const TabsWrapper = styled.div`
  margin: 24px auto 0;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

type Params = {
  id: string;
};

const DetailPage: React.FC = () => {
  const { id } = useParams<Params>();
  const [selectedTab, setSelectedTab] = useState<TBA_TYPE>("about");

  // Pokémon Information
  const {
    isLoading: isPokemonLoading,
    isError: isPokemonError,
    data: pokemonInfo,
  } = usePokemonQuery(id) as UsePokemonQueryResponse;

  const { name, types, height, weight, abilities, baseExp, stats } = useMemo(
    () => ({
      name: pokemonInfo?.data.name,
      types: pokemonInfo?.data.types,
      height: pokemonInfo?.data.height,
      weight: pokemonInfo?.data.weight,
      abilities: pokemonInfo?.data.abilities,
      baseExp: pokemonInfo?.data.base_experience,
      stats: pokemonInfo?.data.stats,
    }),
    [pokemonInfo],
  );

  // Pokémon Species
  const {
    isLoading: isSpeciesLoading,
    isError: isSpeciesError,
    data: pokemonSpecies,
  }: UseSpeciesQueryResponse = useSpeciesQuery(id);

  const {
    color,
    growthRate,
    flavorText,
    genderRate,
    isLegendary,
    isMythical,
    evolutionChainUrl,
  } = useMemo(
    () => ({
      color: pokemonSpecies?.data.color,
      growthRate: pokemonSpecies?.data.growth_rate.name,
      flavorText: pokemonSpecies?.data.flavor_text_entries[0].flavor_text,
      genderRate: pokemonSpecies?.data.gender_rate,
      isLegendary: pokemonSpecies?.data.is_legendary,
      isMythical: pokemonSpecies?.data.is_mythical,
      evolutionChainUrl: pokemonSpecies?.data.evolution_chain.url,
    }),
    [pokemonSpecies],
  );

  const onTabsClick = useCallback((tab: TBA_TYPE) => {
    setSelectedTab(tab);
  }, []);

  const DisplayTab = {
    about: (
      <About
        isLoading={isPokemonLoading || isSpeciesLoading}
        color={color}
        growthRate={growthRate}
        flavorText={flavorText}
        genderRate={genderRate}
        isLegendary={isLegendary}
        isMythical={isMythical}
        types={types}
        weight={weight}
        height={height}
        baseExp={baseExp}
        abilities={abilities}
      />
    ),
    stats: (
      <Stats
        isLoading={isPokemonLoading || isSpeciesLoading}
        stats={stats}
        color={color}
      />
    ),
    evolution: (
      <Evolution
        isLoading={isSpeciesLoading}
        id={id}
        color={color}
        url={evolutionChainUrl}
      />
    ),
  };

  return (
    <Container>
      {id && <PokemonInfo id={id} name={name} types={types} color={color} />}
      <TabsWrapper>
        <Tabs tab={selectedTab} onClick={onTabsClick} color={color} />
      </TabsWrapper>
      {DisplayTab[selectedTab]}
    </Container>
  );
};

export default DetailPage;
