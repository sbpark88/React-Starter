import React from "react";
import styled from "@emotion/styled/macro";
import { Color, Type } from "../types";
import { colorNameToHexColor, pokemonTypeToHexColor } from "../utils/hexColor";
import { formatSharpNumber } from "../utils/format";
import { PokeImageAPI } from "../apis/APIs";
import Colors from "../constants/Colors";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 288px;
  height: 288px;
  left: -96px;
  top: -96px;
  opacity: 0.75;
`;

const Name = styled.div`
  color: ${Colors.PURE_WHITE};
  font-size: 30px;
  font-weight: bold;
  text-transform: capitalize;
`;

const Index = styled.div`
  color: ${Colors.PURE_WHITE};
  font-size: 36px;
  font-weight: bold;
  opacity: 0.75;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  object-fit: contain;
`;

const TypeInfo = styled.img`
  height: 12px;
`;

const TypeWrapper = styled.div<{ color?: string }>`
  background-color: ${({ color }) => color};
  padding: 4px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TypeList = styled.div`
  display: flex;
  margin-top: 8px;

  ${TypeWrapper} + ${TypeWrapper} {
    margin-left: 8px;
  }
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ThumbnailImageWrapper = styled.div`
  width: 160px;
  margin-inline: auto;
  margin-block: 24px;
`;

const Base = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color};
  padding: 20px;
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
`;

type Props = {
  id: string;
  name?: string;
  types?: Type[];
  color?: Color;
};

const PokemonInfo: React.FC<Props> = ({ id, name, types, color }) => {
  return (
    <Base color={colorNameToHexColor(color?.name)}>
      <ImageWrapper>
        <Image src="/assets/pocketball.svg" />
      </ImageWrapper>
      <InfoWrapper>
        <Name>{name}</Name>
        <Index>{formatSharpNumber(id)}</Index>
      </InfoWrapper>
      <TypeList>
        {types?.map(({ type }, index) => (
          <TypeWrapper key={index} color={pokemonTypeToHexColor(type.name)}>
            <TypeInfo src={`/assets/${type.name}.svg`} />
          </TypeWrapper>
        ))}
      </TypeList>
      <ThumbnailImageWrapper>
        <ThumbnailImage
          src={PokeImageAPI.getThumbnail(Number(id))}
          alt="thumbnail"
        />
      </ThumbnailImageWrapper>
    </Base>
  );
};

export default PokemonInfo;
