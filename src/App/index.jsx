import React, { Component } from 'react';
import EventDashboard from '../components/event/EventDashBoard';

class App extends Component {
  render() {
    return (
      <div>
        <h1>DevEvents</h1>
        <EventDashboard />
      </div>
    );
  }
}

export default App;
