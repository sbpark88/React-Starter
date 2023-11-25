import React from "react";
import styled from "@emotion/styled/macro";
import { Ability, Color, Type } from "../../../types";
import { colorNameToHexColor } from "../../../utils/hexColor";
import Colors from "../../../constants/Colors";
import { Title } from "../Tabs";
import Loading from "../../common/Loading";
import Abilities from "./Abilities";

// Base
const FlavorText = styled.p`
  margin: 0 auto;
  word-break: break-word;
  font-size: 14px;
  color: ${Colors.GRAY};
`;

const Base = styled.article`
  padding: 20px;
`;

// TypeList
const TypeImage = styled.img`
  height: 12px;
`;

const TypeLabel = styled.span`
  margin-left: 4px;
  color: ${Colors.PURE_WHITE};
  font-size: 10px;
`;

const TypeWrapper = styled.div<{ color: string }>`
  backdrop-filter: ${({ color }) => color};
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const TypeList = styled.div`
  display: flex;
  margin-top: 8px;
  ${TypeWrapper} + ${TypeWrapper} {
    margin-left: 8px;
  }
`;

// InfoContainerWrapper
const InfoItemLabel = styled.span`
  font-weight: bold;
  color: ${Colors.GRAY};
  font-size: 12px;
`;

const InfoItemValue = styled.span<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 12px;
`;

const InfoItem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 20px;
  row-gap: 12px;
`;

const InfoContainerWrapper = styled.div`
  margin-top: 32px;
`;

interface Params {
  label: string;
  color?: Color;
  value?: string;
}

const Info: React.FC<Params> = ({ label, color, value }) => {
  return (
    <InfoItem>
      <InfoItemLabel>{label}</InfoItemLabel>
      {value && (
        <InfoItemValue color={colorNameToHexColor(color?.name)}>
          {value}
        </InfoItemValue>
      )}
    </InfoItem>
  );
};

type Props = {
  isLoading: boolean;
  color?: Color;
  growthRate?: string;
  flavorText?: string;
  genderRate?: number;
  isLegendary?: boolean;
  isMythical?: boolean;
  types?: Array<Type>;
  weight?: number;
  height?: number;
  baseExp?: number;
  abilities?: Array<Ability>;
};

const About: React.FC<Props> = ({
  isLoading,
  color,
  growthRate,
  flavorText,
  genderRate,
  isLegendary,
  isMythical,
  types,
  weight,
  height,
  baseExp,
  abilities,
}) => {
  const rarity = isLegendary ? "Legendary" : isMythical ? "Mythical" : "Normal";

  return (
    <Base>
      <FlavorText>{flavorText}</FlavorText>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <TypeList>
            {types?.map(({ type }, index) => (
              <TypeWrapper key={index} color={colorNameToHexColor(color?.name)}>
                <TypeImage src={`/assets/${type.name}.svg`} />
                <TypeLabel>{type.name.toUpperCase()}</TypeLabel>
              </TypeWrapper>
            ))}
          </TypeList>

          <InfoContainerWrapper>
            <Title color={colorNameToHexColor(color?.name)}>Pokédex Data</Title>
            <InfoContainer>
              <Info
                label="Height"
                color={color}
                value={height === undefined ? undefined : `${height / 10}m`}
              />
              <Info
                label="Weight"
                color={color}
                value={weight === undefined ? undefined : `${weight / 10}kg`}
              />
              <Info
                label="Gender"
                color={color}
                value={`${genderRate === -1 ? "Unknown" : "Male / Female"}`}
              />
              <Info label="Growth Rate" color={color} value={growthRate} />
              <Info
                label="Base Exp"
                color={color}
                value={baseExp === undefined ? undefined : `${baseExp}`}
              />
              <Info label="Rarity" color={color} value={rarity} />
            </InfoContainer>
          </InfoContainerWrapper>
          {abilities && <Abilities abilities={abilities} color={color} />}
        </>
      )}
    </Base>
  );
};

export default About;
