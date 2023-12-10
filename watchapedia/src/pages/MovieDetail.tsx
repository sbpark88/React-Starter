import React from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled/macro";
import { COLORS } from "../constants/COLORS";
import { ContainerWithHeader } from "./MainPage";
import { FONT_SIZE, FONT_WEIGHT } from "../constants/FONTS";
import useMovieDetail from "../features/movie/useMovieDetail";
import {
  getCardYear,
  getGenre,
  getMovieRate,
} from "../utils/StringAndNumberUtils";
import { RatingStar } from "../components/Images";
import { AiFillEye, AiOutlinePlus } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { Rating } from "@mui/material";
import DefaultInfo from "../features/movie/detail/DefaultInfo";
import { yellow } from "@mui/material/colors";
import Similar from "../features/movie/detail/Similar";

// Top > 포스터 영역
const GRADIENT_WIDTH = "150px";

const Gradient = styled.div`
  width: ${GRADIENT_WIDTH};
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
`;

const RightGradient = styled(Gradient)`
  right: 0;
  background-image: linear-gradient(
    90deg,
    ${COLORS.OPAQUE_GRAY_5_000} 0%,
    ${COLORS.GRAY_5} 100%
  );
`;

const LeftGradient = styled(Gradient)`
  left: 0;
  background-image: linear-gradient(
    -90deg,
    ${COLORS.OPAQUE_GRAY_6_000} 0%,
    ${COLORS.GRAY_6} 100%
  );
`;

const BackdropImage = styled.div<{ imageUrl: string }>`
  background: url(${({ imageUrl }) => imageUrl}) center center / cover no-repeat;
  width: 80vw;
  position: relative;
  top: auto;
  left: auto;
  height: 100%;
  filter: none;
`;

const RightBlur = styled.div`
  flex: 1 1 0;
  background: ${COLORS.GRAY_5};
`;

const LeftBlur = styled.div`
  flex: 1 1 0;
  background: ${COLORS.GRAY_6};
`;

const Backdrop = styled.div`
  display: flex;
  width: 100%;
  height: 394px;
  background-image: linear-gradient(
    -180deg,
    ${COLORS.OPAQUE_BLACK_035} 2%,
    ${COLORS.OPAQUE_BLACK_020} 70%,
    ${COLORS.OPAQUE_BLACK_050} 100%
  );
  overflow: hidden;
`;

const PosterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

// Top > 메인
const Main = styled.main`
  padding: 14px 16px 22px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: ${FONT_SIZE.DETAIL_TITLE};
  font-weight: ${FONT_WEIGHT.NORMAL};
  margin-top: 4px;
  color: ${COLORS.OPAQUE_BLACK_050};
`;

const Keyword = styled.div``;

const AverageRate = styled.div`
  font-size: ${FONT_SIZE.STAR_RATE};
  font-weight: ${FONT_WEIGHT.NORMAL};
  line-height: 22px;
  padding: 8px 0;
  margin-top: 14px;
  border-top: 1px solid ${COLORS.WHITE_5};
  border-bottom: 1px solid ${COLORS.WHITE_5};
`;

// Top > 메인 > 액션
const Action = styled.div`
  margin-top: 20px;
  height: 58px;
  display: flex;
  align-items: center;
`;

const StarRate = styled.div`
  width: 238px;
  height: 57px;
  margin: 0;
  text-align: center;
`;

const StarRateText = styled.div`
  font-size: ${FONT_SIZE.EXTRA_SMALL};
`;

const RatingWrapper = styled.div`
  margin-top: 8px;
`;

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background: ${COLORS.WHITE_5};
  float: left;
`;

const ActionButton = styled.button`
  border: none;
  background: transparent;
  font-size: ${FONT_SIZE.LOGO};
  margin: 0 16px;
  display: flex;
  align-items: center;
  cursor: pointer;

  > svg {
    margin-right: 7px;

    & :hover {
      transform: scale(1.4);
    }
  }
`;

const ActionButtonContainer = styled.div`
  width: 100%;
  padding: 0 30px;
  margin: 0 -16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
`;

const ContentWrapper = styled.div`
  margin: 0 0 0 191px;
  text-align: left;
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: initial;
`;

const PosterWrapper = styled.div`
  position: absolute;
  width: 166px;
  height: 238px;
  border-bottom: solid 2px ${COLORS.WHITE_0};
  top: -48px;
  left: 0;
  border-radius: 3px;
  box-shadow: 0 0 2px ${COLORS.OPAQUE_BLACK_030};
  background: ${COLORS.WHITE_0};
`;

const Container = styled.div`
  max-width: calc(80vw - ${GRADIENT_WIDTH} * 2);
  margin: 0 auto;
  position: relative;
`;

// Top
const TopInfo = styled.div`
  border-bottom: 1px solid ${COLORS.WHITE_4};
  background: ${COLORS.WHITE_0};
`;

// Bottom
const ContentSectionContainer = styled.div`
  border-top: 1px solid;
  border-right: 1px solid;
  border-left: 1px solid;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background: ${COLORS.WHITE_0};
  border-color: ${COLORS.WHITE_4};
`;

const BottomInfo = styled.div`
  padding: 28px 0 48px;
  max-width: calc(70vw - ${GRADIENT_WIDTH} * 2);
  margin: 0 auto;
`;

const Base = styled(ContainerWithHeader)`
  position: relative;
  background: ${COLORS.WHITE_3};
`;

type Params = {
  id: string;
};

const MovieDetail: React.FC = () => {
  const { id: movieId } = useParams<Params>();

  const { isLoading, data } = useMovieDetail(movieId ?? "");

  return (
    <Base>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data && (
          <>
            <TopInfo>
              <PosterContainer>
                <Backdrop>
                  <LeftBlur />
                  <BackdropImage
                    imageUrl={`${process.env.REACT_APP_TMDB_IMAGE_PREFIX}/original/${data.backdrop_path}`}
                  >
                    <LeftGradient />
                    <RightGradient />
                  </BackdropImage>
                  <RightBlur />
                </Backdrop>
              </PosterContainer>

              <Main>
                <Container>
                  <PosterWrapper>
                    <Poster
                      src={`${process.env.REACT_APP_TMDB_IMAGE_PREFIX}/w300/${data.poster_path}`}
                    />
                  </PosterWrapper>

                  <ContentWrapper>
                    <Title>{data.title}</Title>
                    <Keyword>
                      {getCardYear(data.release_date)} ﹒{" "}
                      {getGenre(data.genres)}
                    </Keyword>
                    <AverageRate>
                      평균 <RatingStar /> {getMovieRate(data.vote_average)}(
                      {data.vote_count} 명)
                    </AverageRate>
                    <Action>
                      <StarRate>
                        <StarRateText>평가하기</StarRateText>
                        <RatingWrapper>
                          <Rating precision={0.5} />
                        </RatingWrapper>
                      </StarRate>

                      <Divider />

                      <ActionButtonContainer>
                        <ActionButton>
                          <AiOutlinePlus />
                          보고싶어요
                        </ActionButton>
                        <ActionButton>
                          <FaPen />
                          코멘트
                        </ActionButton>
                        <ActionButton>
                          <AiFillEye />
                          보는중
                        </ActionButton>
                        <ActionButton>
                          <FiMoreHorizontal />
                          더보기
                        </ActionButton>
                      </ActionButtonContainer>
                    </Action>
                  </ContentWrapper>
                </Container>
              </Main>
            </TopInfo>

            <BottomInfo>
              <ContentSectionContainer>
                <DefaultInfo
                  title={data.title}
                  year={getCardYear(data.release_date)}
                  genres={getGenre(data.genres)}
                  runtime={data.runtime}
                  overview={data.overview}
                />
                <Similar movieId={movieId!} />
              </ContentSectionContainer>
            </BottomInfo>
          </>
        )
      )}
    </Base>
  );
};

export default MovieDetail;
