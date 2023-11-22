import React from "react";
import styled from "@emotion/styled/macro";
import { Color } from "../types";
import { colorNameToHexColor } from "../utils/hexColor";
import Colors from "../constants/Colors";

const TABS_ARRAY = ["about", "stats", "evolution"] as const;
export type TBA_TYPE = (typeof TABS_ARRAY)[number];

const TabButton = styled.button<{ active?: boolean; color: string }>`
  margin: 0;
  border-radius: 8px;
  box-shadow: 6px 4px 14px 5px ${Colors.TRANSPARENT_BLACK};
  padding: 6px 12px;
  background-color: ${Colors.PURE_WHITE};
  border: none;
  font-size: 16px;
  text-transform: capitalize;
  color: ${({ active, color }) => (active ? color : Colors.LIGHT_GRAY)}};
`;

const ListItem = styled.li`
  & + & {
    margin-left: 16px;
  }
`;

type Props = {
  tab: TBA_TYPE;
  onClick: (tab: TBA_TYPE) => void;
  color?: Color;
};

const Tab: React.FC<Props & { active: boolean }> = ({
  active,
  tab,
  onClick,
  color,
}) => {
  return (
    <ListItem onClick={() => onClick(tab)}>
      <TabButton active={active} color={colorNameToHexColor(color?.name)}>
        {tab}
      </TabButton>
    </ListItem>
  );
};

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const Tabs: React.FC<Props> = ({ tab: currentTab, onClick, color }) => {
  return (
    <List>
      {TABS_ARRAY.map((tab) => (
        <Tab
          key={tab}
          active={currentTab === tab}
          tab={tab}
          onClick={onClick}
          color={color}
        />
      ))}
    </List>
  );
};

export default Tabs;
