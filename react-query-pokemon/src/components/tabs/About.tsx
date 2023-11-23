import React from "react";
import styled from "@emotion/styled/macro";
import { Ability, Color, Type } from "../../types";
import { colorNameToHexColor } from "../../utils/hexColor";

// Base
const FlavorText = styled.div``;

const Base = styled.div``;

// ImageWrapper
const ImageWrapper = styled.div``;

const Image = styled.img``;

// TypeList
const TypeImage = styled.img``;

const TypeLabel = styled.div``;

const TypeWrapper = styled.div``;

const TypeList = styled.div``;

// InfoContainerWrapper
const InfoItemLabel = styled.div``;

const InfoItemValue = styled.div``;

const InfoItem = styled.div``;

const InfoContainer = styled.div``;

const Title = styled.div``;

const InfoContainerWrapper = styled.div``;

// Abilities
const Abilities = styled.div``;

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
  growthRage?: string;
  flavorText?: string;
  genderRate?: string;
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
  growthRage,
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
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <TypeList>
        {types?.map(({ type, index }) => (
          <TypeWrapper>
            <TypeImage />
            <TypeLabel></TypeLabel>
          </TypeWrapper>
        ))}
      </TypeList>
      <InfoContainerWrapper>
        <Title></Title>
        <InfoContainer>
          <Info label="Height" color={color} value={""} />
          <Info label="Weight" color={color} value={""} />
          <Info label="Gender" color={color} value={""} />
          <Info label="Growth Rate" color={color} value={""} />
          <Info label="Base Exp" color={color} value={""} />
          <Info label="Rarity" color={color} value={rarity} />
        </InfoContainer>
      </InfoContainerWrapper>
      <Abilities></Abilities>
    </Base>
  );
};

export default About;
