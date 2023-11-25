import React from "react";
import { Color } from "../../../types";
import styled from "@emotion/styled/macro";
import { Title } from "../Tabs";
import { colorNameToHexColor } from "../../../utils/hexColor";
import Loading from "../../common/Loading";
import EvolutionStage from "./EvolutionStage";

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
  const from = { name: "", url: "" };
  const to = { name: "", url: "" };
  return (
    <Base>
      <Title color={colorNameToHexColor(color?.name)}>Evolution</Title>
      <Loading />
      <List>
        <EvolutionStage level={0} color={color} from={from} to={to} />
      </List>
      <EmptyWrapper>
        <Empty color={colorNameToHexColor(color?.name)}>
          This Pokémon does not evolve.
        </Empty>
      </EmptyWrapper>
    </Base>
  );
};

export default Evolution;
