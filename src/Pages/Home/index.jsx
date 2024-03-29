import React from 'react';
import {
  Segment,
  Container,
  Button,
  Icon,
  Header,
  Image
} from 'semantic-ui-react';

const Home = ({ history }) => {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container text>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/assets/images/logo.png'
            alt='logo'
            style={{ marginBottom: 12 }}
          />
          DevEvents
        </Header>
        <Button onClick={() => history.push('/events')} size='huge' inverted>
          Get started
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  );
};

export default Home;
