import React from "react";
import styled from "@emotion/styled/macro";
import { PokemonAPI } from "../constants/APIs";
import Colors from "../constants/Colors";

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

const Base = styled.div`
  margin-top: 24px;
`;

const getImageUrl = (index: number): string => PokemonAPI.get(index);

const PokemonList: React.FC = () => {
  return (
    <Base>
      <List>
        <ListItem>
          <Image src={getImageUrl(1)} />
          <Name>고라파덕</Name>
          <Index>#001</Index>
        </ListItem>
      </List>
    </Base>
  );
};

export default PokemonList;
