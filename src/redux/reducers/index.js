import { combineReducers } from 'redux';
import { Types } from '../actions/actionTypes';

const initialState = {
  token: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_AUTH_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    // case Types.LOGIN:
    //   console.log('login', action.payload.user);

    //   return {
    //     ...state,
    //     user: action.payload.user,
    //     // formSubmitted: false, // after update user formsubmition reset
    //   };
    default:
      return state;
  }
};

const reducer2 = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const allReducers = combineReducers({
  user,
  reducer2,
});

export default allReducers;
