import { combineReducers } from 'redux';
import testReducer from '../../../components/testarea/testReduces';
import eventReducer from '../../../components/event/eventReducer';

// Adds the reducers to the store
const rootReducer = combineReducers({
  test: testReducer,
  events: eventReducer
});

export default rootReducer;
