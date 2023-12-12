import React from "react";
import styled from "@emotion/styled/macro";
import { HEADER_HEIGHT } from "../../constants/STYLES";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
};

const MainPage: React.FC<Props> = ({ children }) => {
  return (
    <Main>
      <SectionContainer>{children}</SectionContainer>
    </Main>
  );
};

export default MainPage;

const SectionContainer = styled.div`
  padding: 0 20px;
`;

export const ContainerWithHeader = styled.main`
  margin-top: ${HEADER_HEIGHT};
`;

const Main = styled(ContainerWithHeader)`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
