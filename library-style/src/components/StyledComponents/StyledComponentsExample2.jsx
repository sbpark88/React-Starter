import React from 'react';
import { ThemeProvider, css, keyframes, styled } from 'styled-components';

function StyledComponentsExample2() {
  return (
    <>
      <section>
        <article>
          <h1>& 는 컴포넌트의 모든 인스턴스를 가리킨다.</h1>
          <Thing>Hello world!</Thing>
          <Thing>How ya doing?</Thing>
          <Thing className='something'>The sun is shining...</Thing>
          <div>Pretty nice day today.</div>
          <Thing>Don't you think?</Thing>
          <div className='something-else'>
            <Thing>Splendid.</Thing>
          </div>
        </article>
        <article>
          <h1>&& 는 컴포넌트 개별 인스턴스를 가리킨다.</h1>
          <Label>
            <Input defaultChecked />
            <LabelText>Foo</LabelText>
          </Label>
          <Label>
            <Input />
            <LabelText $mode='dark'>Foo</LabelText>
          </Label>
          <Label>
            <Input defaultChecked />
            <LabelText>Foo</LabelText>
          </Label>
          <Label>
            <Input defaultChecked />
            <LabelText $mode='dark'>Foo</LabelText>
          </Label>
        </article>
        <article>
          <h1>keyframes</h1>
          <Rotate>🥲</Rotate>
        </article>
        <article>
          <h1>Theme Provider</h1>
          <ThemeProvider theme={theme}>
            <div>
              <Button>Default Theme</Button>
              <ThemeProvider theme={invertTheme}>
                <Button>Inverted Theme</Button>
                <Button theme={{ fg: 'lightblue', bg: 'darkgray' }}>
                  Overridden
                </Button>
              </ThemeProvider>
            </div>
          </ThemeProvider>
        </article>
      </section>
    </>
  );
}

export default StyledComponentsExample2;

const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`;

const Input = styled.input.attrs({ type: 'checkbox' })``;

const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const LabelText = styled.span`
  ${(props) => {
    switch (props.$mode) {
      case 'dark':
        return css`
          background-color: black;
          color: white;
          ${Input}:checked + && {
            color: blue;
          }
        `;
      default:
        return css`
          background-color: white;
          color: black;
          ${Input}:checked + && {
            color: red;
          }
        `;
    }
  }}
`;

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 5rem;
`;

const theme = {
  fg: '#BF4F74',
  bg: 'white',
};

const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
});

const Button = styled.button`
  color: ${(props) => props.theme.fg};
  border: 2px solid ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;
