import { combineReducers } from 'redux';
import { Types } from '../actions/actionTypes';

export const initialState = {
  user: {
    token: '',
    role: '',
  },
  products: [],
  cart: {
    id: '',
    products: [],
  },
  wishList: {
    id: '',
    products: [],
  },
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.SET_AUTH_TOKEN:
      return {
        ...state,

        token: payload,
      };
    case Types.SET_USER_ROLE:
      return {
        ...state,

        role: payload,
      };
    case Types.REMOVE_AUTH_TOKEN:
      return {
        ...state,

        token: '',
      };
    case Types.REMOVE_USER_ROLE:
      return {
        ...state,

        role: '',
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

const cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.ADD_TO_CART:
      state.products.push(payload);

      return {
        ...state,
      };
    default:
      return state;
  }
};

const wishList = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.ADD_TO_WISHLIST:
      state.products.push(payload);

      return {
        ...state,
      };
    default:
      return state;
  }
};

const allReducers = combineReducers({
  user,
  products,
  cart,
  wishList,
});

export default allReducers;
