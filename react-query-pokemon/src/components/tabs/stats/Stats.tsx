import React from "react";
import { Color, Stat } from "../../../types";
import styled from "@emotion/styled/macro";
import Colors from "../../../constants/Colors";
import { Title } from "../Tabs";
import { colorNameToHexColor } from "../../../utils/hexColor";
import Loading from "../../common/Loading";

const Gauge = styled.div<{ percentage: number; color: string }>`
  background-color: ${({ color }) => color};
  width: ${({ percentage }) => `${percentage}%`};
  height: 100%;
  border-radius: 12px;
`;

const GaugeWrapper = styled.div`
  grid-column: span 7 / span 7;
  border-radius: 12px;
  background-color: ${Colors.MIDDLE_WHITE};
`;

const Name = styled.div`
  grid-column: span 4 / span 4;
  color: ${Colors.GRAY};
  font-weight: bold;
  text-transform: capitalize;
  font-size: 12px;
`;

const Amount = styled.div`
  grid-column: span 1 / span 1;
  font-size: 12px;
  color: ${Colors.GRAY};
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));

  & + & {
    margin-top: 12px;
  }
`;

const List = styled.ul`
  margin: 20px 0 0 0;
  padding: 0;
  list-style: none;
`;

const Base = styled.div`
  margin-top: 32px;
  padding: 0 20px 20px;
`;

type Props = {
  isLoading: boolean;
  stats?: Array<Stat>;
  color?: Color;
};

const Stats: React.FC<Props> = ({ isLoading, stats, color }) => {
  return (
    <Base>
      <Title color={colorNameToHexColor(color?.name)}>Base Stats</Title>
      {isLoading ? (
        <Loading />
      ) : (
        <List>
          {stats?.map(({ stat, base_stat }, index) => (
            <ListItem key={index}>
              <Name>
                {stat.name === "hp" ? stat.name.toUpperCase() : stat.name}
              </Name>
              <Amount>{base_stat}</Amount>
              <GaugeWrapper>
                <Gauge
                  percentage={(base_stat / 255) * 100}
                  color={colorNameToHexColor(color?.name)}
                />
              </GaugeWrapper>
            </ListItem>
          ))}
        </List>
      )}
    </Base>
  );
};

export default Stats;
