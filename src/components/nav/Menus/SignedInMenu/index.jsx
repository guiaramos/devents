import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// User drop list
const SignedInMenu = ({ signOut }) => {
  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='./assets/images/user.png' />
      <Dropdown pointing='top left' text='Username'>
        <Dropdown.Menu>
          <Dropdown.Item text='Create Event' icon='plus' />
          <Dropdown.Item text='My Events' icon='calendar' />
          <Dropdown.Item text='My Network' icon='users' />
          <Dropdown.Item text='My Profile' icon='user' />
          <Dropdown.Item
            text='Settings'
            icon='settings'
            as={Link}
            to='/settings'
          />
          <Dropdown.Item text='Sign Out' icon='power' onClick={signOut} />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
