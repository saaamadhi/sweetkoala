import { Types } from './actionTypes';

export const ActionCreators = {
  // login: (user) => ({ type: Types.LOGIN, payload: { user } }),

  // registration: (user) => ({
  //   type: Types.REGISTRATION,
  //   payload: { user },
  // }),

  setAuthToken: (token) => ({
    type: Types.SET_AUTH_TOKEN,
    payload: token,
  }),
};
