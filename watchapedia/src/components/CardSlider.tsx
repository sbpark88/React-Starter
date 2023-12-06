import React, { ReactNode } from "react";
import Slider, { Settings } from "react-slick";
import styled from "@emotion/styled/macro";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { COLORS } from "../constants/COLORS";
import { css } from "@emotion/react/macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArrowButton = styled.button<{ pos?: "left" | "right" }>`
  padding: 16px;
  box-shadow: 0 2px 5px 0 ${COLORS.OPAQUE_BLACK_010};
  border-radius: 50%;
  z-index: 1;
  top: 50%;
  background-color: ${COLORS.WHITE_0};
  ${({ pos }) =>
    pos === "left"
      ? css`
          left: 0;
          transform: translate(-50%, -50%);
        `
      : css`
          right: 0;
          transform: translate(50%, -50%);
        `}

  &:before {
    content: initial;
  }
  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    color: ${COLORS.BLACK_0};
  }
`;

const DEFAULT_SETTINGS: Settings = {
  dots: false, // 하단 인디케이터
  arrows: true, // 좌우 화살표
  infinite: false, // 원통형 반복
  speed: 500, // autoplay 속도
  slidesToShow: 5,
  slidesToScroll: 5,
  swipe: true,
  draggable: true,
  prevArrow: (
    <ArrowButton pos="left">
      <MdArrowBackIos />
    </ArrowButton>
  ),
  nextArrow: (
    <ArrowButton pos="right">
      <MdArrowForwardIos />
    </ArrowButton>
  ),
};

type Props = {
  settings?: Settings;
  children?: ReactNode | [ReactNode];
};

const CardSlider: React.FC<Props> = ({
  settings = DEFAULT_SETTINGS,
  children,
}) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default CardSlider;
