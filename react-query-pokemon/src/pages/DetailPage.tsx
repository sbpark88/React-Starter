import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import Tabs, { TBA_TYPE } from "../components/tabs/Tabs";

type Params = {
  id: string;
};

const DetailPage: React.FC = () => {
  const { id } = useParams<Params>();
  const [selectedTab, setSelectedTab] = useState<TBA_TYPE>("about");

  const onTabsClick = useCallback((tab: TBA_TYPE) => {
    setSelectedTab(tab);
  }, []);

  return (
    <div>
      <Tabs
        tab={selectedTab}
        onClick={onTabsClick}
        color={{ name: "red", url: "" }}
      />
    </div>
  );
};

export default DetailPage;
