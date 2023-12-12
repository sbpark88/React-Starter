import React from "react";
import styled from "@emotion/styled/macro";
import useSimilarMovie from "./useSimilarMovie";
import { getMovieRate } from "../../../utils/StringAndNumberUtils";
import { RatingStar } from "../../../components/Images";
import { COLORS } from "../../../constants/COLORS";
import { FONT_SIZE, FONT_WEIGHT } from "../../../constants/FONTS";

const SimilarSection = styled.section`
  padding: 11px 15px;
  border-bottom: 1px solid ${COLORS.WHITE_5};
`;

const SimilarHeaderWrapper = styled.div``;

const SimilarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SimilarTitle = styled.h2`
  color: ${COLORS.WHITE_0};
  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.BOLD};
  margin: 8px 0;
`;

const SimilarContentsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  margin-top: 15px;
  row-gap: 24px;
`;

type Props = {
  movieId: string;
};
const SimilarMovie: React.FC<Props> = ({ movieId }) => {
  const { isLoading, data } = useSimilarMovie(movieId);

  return (
    <SimilarSection>
      <SimilarHeaderWrapper>
        <SimilarHeader>
          <SimilarTitle>비슷한 작품</SimilarTitle>
        </SimilarHeader>
      </SimilarHeaderWrapper>
      <SimilarContentsWrapper>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.results.map((movieDetail) => (
            <Card
              key={movieDetail.id}
              movieId={movieDetail.id}
              posterPath={movieDetail.poster_path}
              title={movieDetail.title}
              voteAverage={movieDetail.vote_average}
            />
          ))
        )}
      </SimilarContentsWrapper>
    </SimilarSection>
  );
};

export default SimilarMovie;

const CardLink = styled.a``;

const CardContainer = styled.div`
  max-width: 140px;
`;

const CardPosterWrapper = styled.div`
  width: 140px;
  height: 204px;
  border: 1px solid ${COLORS.WHITE_0};
`;

const CardPoster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  vertical-align: top;
  //object-fit: initial;
  object-fit: cover;
`;

const CardInfo = styled.div`
  margin: 5px 10px 0 0;
`;

const CardTitle = styled.h2`
  color: ${COLORS.BLACK_5};
  font-size: ${FONT_SIZE.ITEMS};
  font-weight: ${FONT_WEIGHT.SEMI_BOLD};
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardVoteAverage = styled.div`
  margin-top: 2px;
  color: ${COLORS.GRAY_0};
  font-size: ${FONT_SIZE.SMALL};
  font-weight: ${FONT_WEIGHT.NORMAL};
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

type CardProps = {
  movieId: number;
  posterPath: string;
  title: string;
  voteAverage: number;
};

const Card: React.FC<CardProps> = ({
  movieId,
  posterPath,
  title,
  voteAverage,
}) => {
  return (
    <CardLink href={`/movie/${movieId}`}>
      <CardContainer>
        <CardPosterWrapper>
          <CardPoster
            src={`${process.env.REACT_APP_TMDB_IMAGE_PREFIX}/w300/${posterPath}`}
          />
        </CardPosterWrapper>
        <CardInfo>
          <CardTitle>{title}</CardTitle>
          <CardVoteAverage>
            평균 <RatingStar /> {getMovieRate(voteAverage)}
          </CardVoteAverage>
        </CardInfo>
      </CardContainer>
    </CardLink>
  );
};
