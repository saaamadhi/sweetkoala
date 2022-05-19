import { createStore } from 'redux';
import allReducers from '../reducers';

const initialState = {
  user: {
    token: '',
  },
};

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(allReducers, initialState, reduxDevTools);

export { store };
