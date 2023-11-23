import React from "react";
import styled from "@emotion/styled/macro";

const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loading = () => {
  return (
    <ImageWrapper>
      <Image src="/assets/loading.gif" />
    </ImageWrapper>
  );
};

export default Loading;
