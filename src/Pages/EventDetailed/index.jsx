import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader.jsx';
import EventDetailedInfo from './EventDetailedInfo.jsx/index.jsx';
import EventDetailedChat from './EventDetailedChat.jsx/index.jsx';
import EventDetailedSidebar from './EventDetailedSidebar/index.jsx';

const EventDetailed = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader />
        <EventDetailedInfo />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar />
      </Grid.Column>
    </Grid>
  );
};

export default EventDetailed;
