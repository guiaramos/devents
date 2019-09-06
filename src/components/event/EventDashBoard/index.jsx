import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../eventList/EventList';
import EventForm from '../EventForm';
import cuid from 'cuid';
import { connect } from 'react-redux';
import { createEvent, updateEvent, deleteEvent } from '../eventActions';

// Retrieves the events from the store
const mapState = state => ({
  events: state.events
});

//
const actions = {
  createEvent,
  updateEvent,
  deleteEvent
};

class EventDashboard extends Component {
  // States for the Dashboard

  state = {
    isOpen: false,
    selectedEvent: null
  };

  // Turns on/off the form "Create Event"
  // handleIsOpenToggle = () => {
  //   this.setState(({ isOpen }) => ({
  //     isOpen: !isOpen
  //   }));
  // };

  // Opens the form "Create Event"
  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };

  // Closes the form "Create Event"
  handleFormCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  // Adds a new event to the state
  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = './assets/images/user.png';
    this.props.createEvent(newEvent);
    this.setState(() => ({
      isOpen: false
    }));
  };

  // Handle the selected events from the user
  handleSelectEvent = event => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    });
  };

  // Updates the event information
  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent);
    this.setState(() => ({
      isOpen: false,
      selectedEvent: null
    }));
  };

  // Deletes the selected event
  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { isOpen, selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            selectEvent={this.handleSelectEvent}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleCreateFormOpen}
            positive
            content='Create Event'
          />
          {isOpen && (
            <EventForm
              key={selectedEvent ? selectedEvent.id : 0}
              updateEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              cancelFormOpen={this.handleFormCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(EventDashboard);
