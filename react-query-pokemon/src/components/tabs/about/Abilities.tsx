import React from "react";
import { Ability, Color } from "../../../types";
import styled from "@emotion/styled/macro";
import { Title } from "../Tabs";
import { colorNameToHexColor } from "../../../utils/hexColor";
import Colors from "../../../constants/Colors";

const Label = styled.span`
  flex: 1 0 30%;
  text-transform: capitalize;
  color: ${Colors.GRAY};
  font-size: 12px;
  font-weight: bold;
`;

const Description = styled.span`
  flex: 1 0 70%;
  font-weight: 400;
  font-size: 12px;
  color: ${Colors.GRAY};
  word-wrap: break-word;
`;

const ListItem = styled.li`
  display: flex;
`;

const List = styled.ul`
  margin: 20px 0 0 0;
  padding: 0;
  list-style: none;
  ${ListItem} + ${ListItem} {
    margin-top: 12px;
  }
`;

const Base = styled.div`
  margin-top: 32px;
`;

type Props = {
  abilities: Array<Ability>;
  color?: Color;
};

const Abilities: React.FC<Props> = ({ color }) => {
  return (
    <Base>
      <Title color={colorNameToHexColor(color?.name)}>Abilities</Title>
      <List>
        <ListItem>
          <Label>Label</Label>
          <Description>Description</Description>
        </ListItem>
      </List>
    </Base>
  );
};

export default Abilities;
