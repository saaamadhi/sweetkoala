import { Types } from './actionTypes';

export const ActionCreators = {
  setAuthToken: (token) => ({
    type: Types.SET_AUTH_TOKEN,
    payload: token,
  }),
  setUserRole: (role) => ({
    type: Types.SET_USER_ROLE,
    payload: role,
  }),
  setCatalog: (data) => ({
    type: Types.SET_CATALOG,
    payload: data,
  }),
};
