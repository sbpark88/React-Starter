import React, { useCallback } from "react";
import { Color } from "../../../types";
import styled from "@emotion/styled/macro";
import Colors from "../../../constants/Colors";
import { colorNameToHexColor } from "../../../utils/hexColor";
import {
  usePokemonQueries,
  UsePokemonQueriesResponse,
  UsePokemonQueryResponse,
} from "../../../hooks/usePokemonQuery";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ImageWrapper = styled.div``;

const Text = styled.div<{ color: string }>`
  text-align: center;
  color: ${({ color }) => color};
  font-size: 12px;
`;

const Divider = styled.div`
  background-color: ${Colors.DARK_WHITE};
  border-radius: 12px;
  height: 8px;
  margin-inline: 8px;
  margin-top: 4px;
`;

const DividerWrapper = styled.div``;

const Base = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export type EvolutionChain = {
  from: {
    name: string;
    url: string;
  };
  to: {
    name: string;
    url: string;
  };
  level: number;
};

type Props = EvolutionChain & {
  color?: Color;
};

const EvolutionStage: React.FC<Props> = ({ from, to, level, color }) => {
  const [previous, next]: UsePokemonQueriesResponse = usePokemonQueries([
    from.name,
    to.name,
  ]);

  const getArtwork = useCallback(
    (response: UsePokemonQueryResponse) =>
      response.data?.data.sprites.other["official-artwork"].front_default,
    [],
  );

  return (
    <Base>
      <ImageWrapper>
        <Image src={getArtwork(previous)} />
      </ImageWrapper>
      <DividerWrapper>
        {level && (
          <Text
            color={colorNameToHexColor(color?.name)}
          >{`Level ${level}`}</Text>
        )}
        <Divider />
      </DividerWrapper>
      <ImageWrapper>
        <Image src={getArtwork(next)} />
      </ImageWrapper>
    </Base>
  );
};

export default EvolutionStage;
