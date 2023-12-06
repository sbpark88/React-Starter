import React, { ReactNode } from "react";
import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { COLORS } from "../constants/COLORS";
import { FONT_SIZE, FONT_WEIGHT } from "../constants/FONTS";
import { AiFillStar } from "react-icons/ai";
import { getCardYear, getMovieRate } from "../utils/StringAndNumberUtils";

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
        {isAvailablePoster(posterPath) ? (
          <Poster posterPath={posterPath} title={title} />
        ) : (
          <Placeholder />
        )}
        <Info>
          <Title>{title}</Title>
          <Keyword>{getCardYear(year)}</Keyword>
          <Average>
            {voteAverage === 0 ? (
              <span>평가 전</span>
            ) : (
              <>
                <span>평균</span>
                <span>
                  {" "}
                  <AiFillStar style={{ transform: "translateY(2px)" }} />
                </span>
                <span>{getMovieRate(voteAverage)}</span>
              </>
            )}
          </Average>
        </Info>
      </Base>
    </StyledLink>
  );
};

export default Card;

const TMDB_ICON =
  "https://www.themoviedb.org/assets/2/apple-touch-icon-cfba7699efe7a742de25c28e08c38525f19381d31087c69e89d6bcb8e3c0ddfa.png";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const ImageWrapper = styled.div<{ defaultImage?: boolean }>`
  width: 100%;
  height: 300px;
`;

const Placeholder: React.FC = () => (
  <ImageWrapper
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    }}
  >
    <Image
      src={TMDB_ICON}
      alt="TMDB 아이콘"
      style={{
        objectFit: "contain",
        minWidth: "100px",
        minHeight: "100px",
        width: "150px",
        height: "150px",
        marginBottom: "10px",
      }}
    />
    <span>이미지 등록 전 입니다.</span>
  </ImageWrapper>
);

const Poster: React.FC<{ posterPath: string; title: string }> = ({
  posterPath,
  title,
}) => (
  <ImageWrapper>
    <Image src={posterPath} alt={`${title} 의 포스터`} />
  </ImageWrapper>
);

const isAvailablePoster = (posterPath: string): boolean =>
  posterPath.split("/").pop() !== "null";

export const CardContainer: React.FC<{
  title: string;
  children: ReactNode;
}> = ({ title, children }) => (
  <div style={{ marginBottom: "42px" }}>
    <h4
      style={{
        fontSize: FONT_SIZE.SLIDER_TITLE,
        fontWeight: FONT_WEIGHT.BOLD,
        lineHeight: "30px",
        padding: "12px 0 14px",
      }}
    >
      {title}
    </h4>
    {children}
  </div>
);
