import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from './eventConstants';

/**
 * Events Actions for the store
 */

// Creates a new event
export const createEvent = event => {
  return {
    type: CREATE_EVENT,
    payload: {
      event
    }
  };
};

// Updates the event
export const updateEvent = event => {
  return {
    type: UPDATE_EVENT,
    payload: {
      event
    }
  };
};

// Deletes the event
export const deleteEvent = eventId => {
  return {
    type: DELETE_EVENT,
    payload: {
      eventId
    }
  };
};
