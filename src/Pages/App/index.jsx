import React, { Component, Fragment } from 'react';
import EventDashboard from '../../components/event/EventDashBoard';
import NavBar from '../../components/nav/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from '../Home';
import EventDetailed from '../EventDetailed';
import PeopleDashboard from '../../components/user/PeopleDashboard';
import SettingsDashboard from '../../components/user/Settings/SettingsDashboard';
import UserDetailed from '../../components/user/UserDetailed';
import EventForm from '../../components/event/EventForm';
import TestComponent from '../../components/testarea/TestComponent';

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
                <Switch key={this.props.location.key}>
                  <Route exact path='/events' component={EventDashboard} />
                  <Route path='/events/:id' component={EventDetailed} />
                  <Route exact path='/people' component={PeopleDashboard} />
                  <Route path='/profile/:id' component={UserDetailed} />
                  <Route path='/settings' component={SettingsDashboard} />
                  <Route
                    path={['/createEvent', '/manage/:id']}
                    component={EventForm}
                  />
                  {/* ! TEST */}
                  <Route path='/test' component={TestComponent} />
                  {/* ! TEST */}
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
