import React from "react";
import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { COLORS } from "../constants/COLORS";
import { FONT_SIZE, FONT_WEIGHT } from "../constants/FONTS";
import { ImWarning } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { getMovieRate } from "../utils/StringAndNumberUtils";

const Title = styled.h4`
  color: ${COLORS.BLACK_5};
  font-size: ${FONT_SIZE.ITEMS};
  font-weight: ${FONT_WEIGHT.SEMI_BOLD};
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 22px;
  margin-bottom: 3px;
  white-space: nowrap;
  max-width: 200px;
`;

const Keyword = styled.div`
  color: ${COLORS.BLACK_5};
  padding-bottom: 1px;
  font-size: ${FONT_SIZE.INPUT};
  font-weight: ${FONT_WEIGHT.NORMAL};
  line-height: 21px;
`;

const Average = styled.div`
  color: ${COLORS.GRAY_1};
  font-size: ${FONT_SIZE.SMALL};
  font-weight: ${FONT_WEIGHT.NORMAL};
  margin-top: 5px;
  display: flex;
  align-items: center;
  line-height: 1.3;
`;

const Info = styled.div`
  text-align: left;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
`;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const StyledLink = styled(Link)`
  display: block;
  margin-inline: 10px;
`;

type Props = {
  linkUrl: string;
  title: string;
  year: string;
  posterPath: string;
  voteAverage: number;
};

const Card: React.FC<Props> = ({
  linkUrl,
  title,
  year,
  posterPath,
  voteAverage,
}) => {
  return (
    <StyledLink to={linkUrl}>
      <Base>
        <ImageWrapper>
          <Image src={posterPath} alt={`${title} 의 포스터`} />
        </ImageWrapper>
        <Info>
          <Title>{title}</Title>
          <Keyword>{year}</Keyword>
          <Average>
            <span>평균</span>
            <span>
              {" "}
              <AiFillStar style={{ transform: "translateY(2px)" }} />
            </span>
            <span>{getMovieRate(voteAverage)}</span>
          </Average>
        </Info>
      </Base>
    </StyledLink>
  );
};

export default Card;
