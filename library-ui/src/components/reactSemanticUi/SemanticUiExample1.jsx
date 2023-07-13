import 'semantic-ui-css/semantic.min.css';
import {
  Button,
  Divider,
  Form,
  Grid,
  Icon,
  Label,
  Segment,
} from 'semantic-ui-react';

function SemanticUiExample1() {
  return (
    <>
      <div style={{ margin: '20px' }}>
        <Button color='orange'>I'm orange button</Button>
      </div>
      <div style={{ margin: '20px' }}>
        Ordinary Way : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button as='div' labelPosition='right'>
          <Button color='red'>
            <Icon name='heart' />
            Like
          </Button>
          <Label as='a' basic color='red' pointing='left'>
            2,134
          </Label>
        </Button>
        <br />
        <br />
        Shorthand Way : &nbsp;&nbsp;&nbsp;
        <Button
          color='red'
          content='Like'
          icon='heart'
          label={{
            as: 'a',
            color: 'red',
            pointing: 'left',
            content: '2,134',
          }}
        />
      </div>
      <hr />
      <div style={{ margin: '20px' }}>
        <Segment placeholder>
          <Grid columns={2}>
            <Grid.Column>
              <Form>
                <Form.Input
                  icon='user'
                  iconPosition='left'
                  label='ID'
                  placeholder='Your ID'
                />
                <Form.Input
                  icon='lock'
                  iconPosition='left'
                  label='Password'
                  placeholder='********'
                />
              </Form>
            </Grid.Column>
            <Grid.Column verticalAlign='middle'>
              <Button content='Sing up' icon='signup' size='huge' />
            </Grid.Column>
          </Grid>
          <Divider vertical content='OR' />
        </Segment>
      </div>
      <hr />
      <div>
        <Button color='facebook'>
          <Icon name='facebook' /> Facebook
        </Button>
        <Button color='twitter'>
          <Icon name='twitter' /> Twitter
        </Button>
        <Button color='linkedin'>
          <Icon name='linkedin' /> LinkedIn
        </Button>
        <Button color='instagram'>
          <Icon name='instagram' /> Instagram
        </Button>
        <Button color='youtube'>
          <Icon name='youtube' /> YouTube
        </Button>
      </div>
    </>
  );
}

export default SemanticUiExample1;
