/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

function EmotionExample() {
  return (
    <>
      <section>
        <article>
          <h1>Syntax</h1>
          <SomeComponent>
            <AnotherComponent />
          </SomeComponent>
          <AnotherComponent />
          <CombinedComponent />
        </article>
        <hr />
        <article>
          <h1>Emotion React</h1>
          <div
            css={css`
              padding: 32px;
              background-color: hotpink;
              font-size: 24px;
              text-align: center;
              border-radius: 4px;
              &:hover {
                color: ${hoverColor};
              }
            `}
          >
            Emotion React
          </div>
        </article>
        <hr />
        <article>
          <h1>Emotion Styled</h1>
          <StyledDiv>Emotion Styled</StyledDiv>
        </article>
        <hr />
        <article>
          <h1></h1>
        </article>
        <hr />
        <article>
          <h1></h1>
        </article>
      </section>
    </>
  );
}

export default EmotionExample;

const style = css`
  color: hotpink;
`;

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
);

const anotherStyle = css({
  textDecoration: 'underline',
});

const AnotherComponent = () => (
  <div css={anotherStyle}>Some text with an underline.</div>
);

const CombinedComponent = () => (
  <div css={[style, anotherStyle]}>Some hotpink text with an underline.</div>
);

const hoverColor = 'white';

const StyledDiv = styled.div`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  text-align: center;
  border-radius: 4px;
  &:hover {
    color: ${hoverColor};
  }
`;
