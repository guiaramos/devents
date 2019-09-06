import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader.jsx';
import EventDetailedInfo from './EventDetailedInfo.jsx/index.jsx';
import EventDetailedChat from './EventDetailedChat.jsx/index.jsx';
import EventDetailedSidebar from './EventDetailedSidebar/index.jsx';
import { connect } from 'react-redux';

// Gets the events info from the store
const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return { event };
};

const EventDetailed = ({ event }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapStateToProps)(EventDetailed);
