import React, { useMemo } from "react";
import styled from "@emotion/styled/macro";
import { css, keyframes } from "@emotion/react";

interface Props {
  width?: number;
  height?: number;
  circle?: boolean; // 원형 스켈레톤
  rounded?: boolean; // 둥근 모서리
  count?: number; // inline 으로 선언 시, 글자 수
  unit?: string; // width, height 단위
  animation?: boolean; // 애니메이션 유무
  color?: string; // 스켈레톤 색상
  style?: React.CSSProperties; // 추가 스타일
}

const pulseKeyframe = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const pulseAnimation = css`
  animation: ${pulseKeyframe} 1.5s ease-in-out infinite;
`;

const Base = styled.span<Props>`
  ${({ color }) => color && `background-color: ${color}`};
  ${({ rounded }) => rounded && `border-radius: 8px`};
  ${({ circle }) => circle && `border-radius: 50%`};
  ${({ width, height }) => (width || height) && `display: block`};
  ${({ animation }) => animation && pulseAnimation};
  width: ${({ width, unit }) => width && unit && `${width}${unit}`};
  height: ${({ height, unit }) => height && unit && `${height}${unit}`};
`;

const Content = styled.span`
  opacity: 0;
`;

const Skeleton: React.FC<Props> = ({
  animation = true,
  width,
  height,
  circle,
  rounded,
  count,
  unit = "px",
  color = "#AAA",
  style,
}) => {
  const content = useMemo(
    () => [...Array({ length: count })].map(() => "-").join(""),
    [count],
  );

  return (
    <Base
      style={style}
      rounded={rounded}
      circle={circle}
      width={width}
      height={height}
      animation={animation}
      unit={unit}
      color={color}
    >
      <Content>{content}</Content>
    </Base>
  );
};

export default Skeleton;
