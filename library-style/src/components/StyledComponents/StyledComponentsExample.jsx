import React from 'react';
import { styled } from 'styled-components';

function StyledComponentsExample() {
  return (
    <>
      <section>
        <article>
          <h1>Styled Components</h1>
          <Wrapper>
            <Title>Hello World!</Title>
          </Wrapper>
        </article>
        <article>
          <h1>Styled Components with props</h1>
          <Button>Normal</Button>
          <Button $primary>Primary</Button>
          <TomatoButton>Normal(Tomato)</TomatoButton>
          <TomatoButton $primary>Primary(Tomato)</TomatoButton>
        </article>
        <article>
          <h1>Change Tag(escape hatch)</h1>
          <Button>Normal Button</Button>
          <div>
            <Button as='a' href='#'>
              Link with Button styles
            </Button>
            <TomatoButton as='a' href='#'>
              Link with Tomato Button styles
            </TomatoButton>
          </div>
          <div>
            <Button as={TomatoButton}>Button(as Tomato)</Button>
            <Button as={ReversedButton}>Reversed Button</Button>
            <ReversedButton>Reversed Button</ReversedButton>
          </div>
        </article>
        <article style={{ margin: '0 20px' }}>
          <h1>React Components with Styled Components</h1>
          <p>
            <Link className={'just-link'}>Just Link</Link>
          </p>
          <p>
            <StyledLink className={'styled-link'}>Styled Link</StyledLink>
          </p>
        </article>
      </section>
    </>
  );
}

export default StyledComponentsExample;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  background: ${(props) => (props.$primary ? '#BF4F74' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : '#BF4F74')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const ReversedButton = (props) => (
  <Button {...props} children={props.children.split('').reverse()} />
);

const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

const StyledLink = styled(Link)`
  color: #bf4f74;
  font-weight: bold;
`;
