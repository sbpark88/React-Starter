import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Accordion,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Stack,
} from 'react-bootstrap';

function BootStrapExample1() {
  return (
    <section style={{ margin: '10px' }}>
      <article>
        <ButtonToolbar aria-label='Toolbar with button groups'>
          <ButtonGroup className='me-2' aria-label='First group'>
            <Button>1</Button> <Button>2</Button> <Button>3</Button>
            <Button>4</Button>
          </ButtonGroup>
          <ButtonGroup className='me-2' aria-label='Second group'>
            <Button>5</Button> <Button>6</Button> <Button>7</Button>
          </ButtonGroup>
          <ButtonGroup aria-label='Third group'>
            <Button>8</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </article>
      <hr />
      <article>
        <Button variant='primary'>Primary</Button>{' '}
        <Button variant='secondary'>Secondary</Button>{' '}
        <Button variant='success'>Success</Button>{' '}
        <Button variant='warning'>Warning</Button>{' '}
        <Button variant='danger'>Danger</Button>{' '}
        <Button variant='info'>Info</Button>{' '}
        <Button variant='light'>Light</Button>{' '}
        <Button variant='dark'>Dark</Button>
        <Button variant='link'>Link</Button>
      </article>
      <hr />
      <article>
        <Stack direction='horizontal' gap={2}>
          <Button as='a' variant='primary'>
            Button as link
          </Button>
          <Button as='a' variant='success'>
            Button as link
          </Button>
        </Stack>
        <br />
        <Stack direction='vertical' gap={2}>
          <Button as='a' variant='primary'>
            Button as link
          </Button>
          <Button as='a' variant='success'>
            Button as link
          </Button>
        </Stack>
      </article>
      <hr />
      <article>
        <Accordion defaultActiveKey='0'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </article>
      ;
    </section>
  );
}

export default BootStrapExample1;
