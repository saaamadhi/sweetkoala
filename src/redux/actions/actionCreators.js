import { Types } from './actionTypes';

export const ActionCreators = {
  setAuthToken: (token) => ({
    type: Types.SET_AUTH_TOKEN,
    payload: token,
  }),
  removeAuthToken: () => ({
    type: Types.REMOVE_AUTH_TOKEN,
  }),
  setUserRole: (role) => ({
    type: Types.SET_USER_ROLE,
    payload: role,
  }),
  removeUserRole: () => ({
    type: Types.REMOVE_USER_ROLE,
  }),
  setCatalog: (data) => ({
    type: Types.SET_CATALOG,
    payload: data,
  }),
  addToCart: (data) => ({
    type: Types.ADD_TO_CART,
    payload: data,
  }),
  addToWishList: (data) => ({
    type: Types.ADD_TO_WISHLIST,
    payload: data,
  }),
};
