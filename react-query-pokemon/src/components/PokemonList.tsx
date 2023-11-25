import React from "react";
import styled from "@emotion/styled/macro";
import { PokeImageAPI } from "../apis/APIs";
import Colors from "../constants/Colors";
import usePokemonQuery from "../hooks/usePokemonQuery";
import { formatSharpNumber } from "../utils/format";
import { ListResponse } from "../types";

const Image = styled.img``;

const Name = styled.p`
  margin: 0;
  padding: 0 0 0 12px;
  flex: 1 1 100%;
  color: ${Colors.GRAY};
  text-transform: capitalize;
  font-size: 16px;
  font-weight: bold;
`;

const Index = styled.p`
  position: absolute;
  margin: 0;
  padding: 0;
  right: 16px;
  bottom: 16px;
  font-size: 24px;
  font-weight: bold;
  color: ${Colors.DARK_WHITE};
`;

const ListItem = styled.li`
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;
  box-shadow: 6px 4px 14px 5px ${Colors.TRANSPARENT_BLACK};
  border-radius: 12px;
  & + & {
    margin-top: 18px;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const Loading = styled.img``;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 180px);
`;

const Base = styled.div`
  margin-top: 24px;
`;

const getImageUrl = (index: number): string => PokeImageAPI.getImage(index);

const PokemonList: React.FC = () => {
  const { isLoading, isError, data } = usePokemonQuery<ListResponse>();

  return (
    <Base>
      {isLoading || isError ? (
        <LoadingWrapper>
          <Loading src="/assets/loading.gif" alt="loading" />
        </LoadingWrapper>
      ) : (
        <List>
          {data?.data.results?.map((pokemon, index) => (
            <ListItem key={pokemon.name}>
              <Image src={getImageUrl(index + 1)} alt={pokemon.name} />
              <Name>{pokemon.name}</Name>
              <Index>{formatSharpNumber(index + 1)}</Index>
            </ListItem>
          ))}
        </List>
      )}
    </Base>
  );
};

export default PokemonList;
