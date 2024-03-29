import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

class NavBar extends Component {
  //! FAKE STATE TO SIMULATE LOGIN/LOGOUT
  state = {
    authenticated: true
  };

  // Change the state when signed in
  handleSignIn = () => this.setState({ authenticated: true });

  // Change the state when signed out
  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push('/');
  };

  render() {
    const { authenticated } = this.state;

    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item as={NavLink} exact to='/' header>
            <img src='./assets/images/logo.png' alt='logo' />
            DevEvents
          </Menu.Item>
          <Menu.Item name='Events' as={NavLink} exact to='/events' />
          <Menu.Item name='People' as={NavLink} to='/people' />
          {/* ! TEST */}
          <Menu.Item name='Test' as={NavLink} to='/test' />
          <Menu.Item>
            <Button
              as={Link}
              to='/createEvent'
              floated='right'
              positive
              inverted
              content='Create Event'
            />
          </Menu.Item>
          {authenticated ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
