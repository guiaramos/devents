import React, { Component, Fragment } from 'react';
import EventDashboard from '../../components/event/EventDashBoard';
import NavBar from '../../components/nav/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import Home from '../Home';
import EventDetailed from '../EventDetailed';
import PeopleDashboard from '../../components/user/PeopleDashboard';
import SettingsDashboard from '../../components/user/Settings/SettingsDashboard';
import UserDetailed from '../../components/user/UserDetailed';
import EventForm from '../../components/event/EventForm';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path='/' exact component={Home} />
        <Route
          path='/(.+)'
          render={() => (
            <Fragment>
              <NavBar />
              <Container className='main'>
                <Route path='/events' component={EventDashboard} />
                <Route path='/events/:id' component={EventDetailed} />
                <Route path='/people' component={PeopleDashboard} />
                <Route path='/profile/:id' component={UserDetailed} />
                <Route path='/settings' component={SettingsDashboard} />
                <Route path='/createEvent' component={EventForm} />
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
