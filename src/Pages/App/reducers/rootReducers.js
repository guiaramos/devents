import { combineReducers } from 'redux';
import {reducer as FormReducer} from 'redux-form'
import testReducer from '../../../components/testarea/testReduces';
import eventReducer from '../../../components/event/eventReducer';

// Adds the reducers to the store
const rootReducer = combineReducers({
  form: FormReducer,
  test: testReducer,
  events: eventReducer
});

export default rootReducer;
