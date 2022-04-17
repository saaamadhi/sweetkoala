import { combineReducers } from 'redux';
import { reducer1, reducer2 } from './welcome';

const allReducers = combineReducers({
  reducer1,
  reducer2,
});

export default allReducers;
