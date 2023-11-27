import React, { useEffect, useState } from "react";
import { Chain, Color } from "../../../types";
import styled from "@emotion/styled/macro";
import { Title } from "../Tabs";
import { colorNameToHexColor } from "../../../utils/hexColor";
import Loading from "../../common/Loading";
import EvolutionStage, { EvolutionChain } from "./EvolutionStage";
import useEvolutionChainQuery, {
  UseEvolutionChainQueryResponse,
} from "../../../hooks/useEvolutionChainQuery";

const List = styled.ul`
  list-style: none;
  margin: 20px 0 0 0;
  padding: 0;
  > li + li {
    margin-top: 24px;
  }
`;

const Empty = styled.div<{ color: string }>`
  color: ${({ color }) => color};
`;

const EmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 444px);
`;

const Base = styled.div`
  margin-top: 32px;
  padding: 0 20px 20px;
`;

type Props = {
  isLoading: boolean;
  id?: string;
  color?: Color;
  url?: string;
};
const Evolution: React.FC<Props> = ({ isLoading, id, color, url }) => {
  const [evolutionChain, setEvolutionChain] = useState<Array<EvolutionChain>>(
    [],
  );

  const {
    isLoading: isEvolutionLoading,
    isSuccess,
    isError,
    data,
  }: UseEvolutionChainQueryResponse = useEvolutionChainQuery(url);

  useEffect(() => {
    const makeEvolutionChain = (chain: Chain) => {
      if (chain.evolves_to.length) {
        const [evolvesTo] = chain.evolves_to;

        const nextEvolutionchain = {
          from: chain.species,
          to: evolvesTo.species,
          level: evolvesTo.evolution_details[0].min_level,
        };

        setEvolutionChain((prevState) => [...prevState, nextEvolutionchain]);

        makeEvolutionChain(chain.evolves_to[0]);
      }
    };

    isSuccess && data && makeEvolutionChain(data.data.chain);

    return () => setEvolutionChain([]);
  }, [isSuccess, data]);

  return (
    <Base>
      <Title color={colorNameToHexColor(color?.name)}>Evolution</Title>
      {isLoading || isEvolutionLoading ? (
        <Loading />
      ) : evolutionChain.length ? (
        <List>
          {evolutionChain.map(({ from, to, level }, index) => (
            <EvolutionStage
              key={index}
              color={color}
              from={from}
              to={to}
              level={level}
            />
          ))}
        </List>
      ) : (
        <EmptyWrapper>
          <Empty color={colorNameToHexColor(color?.name)}>
            This Pokémon does not evolve.
          </Empty>
        </EmptyWrapper>
      )}
    </Base>
  );
};

export default Evolution;
