import React from "react";
import styled from "@emotion/styled/macro";
import { COLORS } from "../constants/COLORS";
import { FONT_SIZE, FONT_WEIGHT } from "../constants/FONTS";

const TermAndPolicyItem = styled.li`
  display: inline-block;
  color: ${COLORS.GRAY_2};
  font-size: ${FONT_SIZE.SMALL};
  font-weight: ${FONT_WEIGHT.NORMAL};
  line-height: 22px;
  vertical-align: top;
  cursor: pointer;

  &:not(:last-of-type) {
    &:after {
      content: "";
      display: inline-block;
      background: ${COLORS.GRAY_3};
      vertical-align: top;
      width: 1px;
      height: 12px;
      margin: 5px 8px 0;
    }
  }
`;

const TermAndPolicy = styled.ul`
  margin: 0;
  padding: 0;
`;

const Right = styled.div``;

const Left = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  margin: 0 60px;
`;

const Container = styled.div`
  background: ${COLORS.BLACK_2};
  padding: 20px 0 38px;
`;

const Emphasis = styled.em`
  color: ${COLORS.SCARLET};
  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.SEMI_BOLD};
  line-height: 22px;
`;

const Summary = styled.span`
  color: ${COLORS.GRAY_4};
  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.SEMI_BOLD};
  line-height: 22px;
  text-align: center;
`;

const Statistics = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 62px;
  background: ${COLORS.BLACK_4};
`;

const Section = styled.section`
  background-color: ${COLORS.BLACK_2};
`;

const Base = styled.footer`
  display: block;
  box-sizing: border-box;
  width: 100%;
`;

const Footer: React.FC = () => {
  return (
    <Base>
      <Section>
        <Statistics>
          <Summary>
            지금까지 <Emphasis>★ 644,934,321 개의 평가가</Emphasis> 쌓였어요.
          </Summary>
        </Statistics>
        <Container as="section">
          <ContentWrapper>
            <Left>
              <TermAndPolicy>
                <TermAndPolicyItem>서비스 이용약관</TermAndPolicyItem>
                <TermAndPolicyItem>개인정보 처리방침</TermAndPolicyItem>
                <TermAndPolicyItem>회사 안내</TermAndPolicyItem>
              </TermAndPolicy>
            </Left>
            <Right />
          </ContentWrapper>
        </Container>
      </Section>
    </Base>
  );
};

export default Footer;
