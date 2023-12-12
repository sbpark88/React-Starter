import React from "react";
import styled from "@emotion/styled/macro";
import { COLORS } from "../../../constants/COLORS";
import { FONT_SIZE, FONT_WEIGHT } from "../../../constants/FONTS";

const ContentSection = styled.section`
  padding: 11px 15px;
  border-bottom: 1px solid ${COLORS.WHITE_5};
`;

const ContentHeaderWrapper = styled.div``;

const ContentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentTitle = styled.h2`
  color: ${COLORS.WHITE_0};
  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.BOLD};
  margin: 8px 0;
`;

const Link = styled.a`
  color: ${COLORS.BRAND_COLOR};
`;

const MoreSee = styled.div``;

const Summary = styled.div`
  color: ${COLORS.BLACK_6};
  font-size: ${FONT_SIZE.DEFAULT};
  font-weight: ${FONT_WEIGHT.NORMAL};
  line-height: 24px;
`;

type Props = {
  title: string;
  year: string;
  genres: string;
  runtime?: number;
  overview: string;
};

const DefaultInfo: React.FC<Props> = ({
  title,
  year,
  genres,
  runtime,
  overview,
}) => {
  const hour = runtime && Math.ceil(runtime / 60);
  const minute = runtime && runtime % 60;

  return (
    <ContentSection>
      <ContentHeaderWrapper>
        <ContentHeader>
          <ContentTitle>기본 정보</ContentTitle>
          <Link href="/overview">
            <MoreSee>더보기</MoreSee>
          </Link>
        </ContentHeader>
        <Summary>
          {title}
          <br />
          {year} · {genres}
          <br />
          {runtime && `${hour}시간 ${minute}분`}
          <br />
          <br />
          {overview}
        </Summary>
      </ContentHeaderWrapper>
    </ContentSection>
  );
};

export default DefaultInfo;
