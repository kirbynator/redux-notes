import { combineReducers, } from 'redux';
import notes from './notes';

const rootReducer = combineReducers({
  notes,
  nextID
});

export default rootReducer;