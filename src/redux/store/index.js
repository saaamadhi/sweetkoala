import { createStore } from 'redux';
import allReducers, { initialState } from '../reducers';

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(allReducers, initialState, reduxDevTools);

export { store };
