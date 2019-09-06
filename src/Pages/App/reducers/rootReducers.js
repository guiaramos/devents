import { combineReducers } from 'redux';
import testReducer from '../../../components/testarea/testReduces';

// Adds the reducers to the store
const rootReducer = combineReducers({
  test: testReducer
});

export default rootReducer;
