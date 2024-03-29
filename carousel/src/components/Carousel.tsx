import React, { useEffect, useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import styled from "@emotion/styled/macro";
import { css, keyframes } from "@emotion/react";

const Base = styled.div``;

const Container = styled.div`
  position: relative;
`;

const ArrowButton = styled.button<{ pos: "left" | "right" }>`
  position: absolute;
  top: 50%;
  z-index: 1;
  padding: 8px 12px;
  font-size: 48px;
  font-weight: bold;
  background-color: transparent;
  color: #fff;
  border: none;
  margin: 0;
  cursor: pointer;
  ${({ pos }) =>
    pos === "left"
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `};
`;

const CarouselList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  overflow: hidden;
`;

const CarouselListItem = styled.li<{ activeIndex: number }>`
  width: 100%;
  flex: 1 0 100%;
  transform: translateX(-${({ activeIndex }) => activeIndex * 100}%);
  transition: 200ms ease;

  > img {
    width: 100%;
    height: fit-content;
  }
`;

const NavButton = styled.button<{ isActive?: boolean }>`
  width: 4px;
  height: 4px;
  background-color: #000;
  opacity: ${({ isActive }) => (isActive ? 0.8 : 0.1)};
`;

const NavItem = styled.li`
  display: inline-block;
`;

const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  ${NavItem} + ${NavItem} {
    margin-left: 4px;
  }
`;

const banners = [
  "https://via.placeholder.com/600/92c952",
  "https://via.placeholder.com/600/771796",
  "https://via.placeholder.com/600/24f355",
];

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleNext = () =>
    setActiveIndex((prevState) => (prevState + 1) % banners.length);

  const handlePrev = () =>
    setActiveIndex(
      (prevState) => (prevState - 1 + banners.length) % banners.length,
    );

  const handleMouseEnter = () => setIsFocused(true);
  const handleMouseLeave = () => setIsFocused(false);

  const handleGoTo = (index: number) => setActiveIndex(index);

  useEffect(() => {
    let intervalId: NodeJS.Timer;

    if (!isFocused) {
      intervalId = setInterval(handleNext, 3000);
    }

    return () => clearInterval(intervalId);
  }, [isFocused]);

  return (
    <Base onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Container>
        <ArrowButton pos="left" onClick={handlePrev}>
          <RiArrowDropLeftLine />
        </ArrowButton>
        <CarouselList>
          {banners.map((banner, index) => (
            <CarouselListItem key={index} activeIndex={activeIndex}>
              <img
                src={banner}
                alt={"banners_" + index}
                onClick={() => handleGoTo(index)}
              />
            </CarouselListItem>
          ))}
        </CarouselList>
        <ArrowButton pos="right" onClick={handleNext}>
          <RiArrowDropRightLine />
        </ArrowButton>
      </Container>
      <Nav>
        {Array.from({ length: banners.length }).map((_, index) => (
          <NavItem key={index}>
            <NavButton
              isActive={activeIndex === index}
              onClick={() => handleGoTo(index)}
            />
          </NavItem>
        ))}
      </Nav>
    </Base>
  );
};

export default Carousel;
