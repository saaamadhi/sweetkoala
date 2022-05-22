import { combineReducers } from 'redux';
import { Types } from '../actions/actionTypes';

export const initialState = {
  user: {
    token: '',
    role: '',
  },
  products: [],
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.SET_AUTH_TOKEN:
      return {
        ...state,
        user: {
          token: payload,
        },
      };
    case Types.SET_USER_ROLE:
      return {
        ...state,
        user: {
          role: payload,
        },
      };
    default:
      return state;
  }
};

const products = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.SET_CATALOG:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

const allReducers = combineReducers({
  user,
  products,
});

export default allReducers;
