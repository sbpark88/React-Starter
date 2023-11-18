import React from "react";
import PokemonList from "../components/PokemonList";
import styled from "@emotion/styled/macro";
import Colors from "../constants/Colors";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ImageWrapper = styled.div`
  position: fixed;
  width: 288px;
  height: 288px;
  top: 0;
  right: 0;
  opacity: 0.4;
  transform: translate(96px, -96px);
`;

const Description = styled.small`
  color: ${Colors.LIGHT_GRAY};
  padding: 0;
  margin: 16px 0 0 0;
  display: block;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: ${Colors.DARK_CORAL};
  font-weight: bold;
`;

const Container = styled.div`
  padding: 12px 18px;
  overflow: hidden;
`;

const IndexPage: React.FC = () => {
  return (
    <Container>
      <Title>Pokemon Dictionary</Title>
      <Description>Lorem ipsum dolor sit amet.</Description>
      <PokemonList />
      <ImageWrapper>
        <Image src="/assets/pocketball.svg" />
      </ImageWrapper>
    </Container>
  );
};

export default IndexPage;
