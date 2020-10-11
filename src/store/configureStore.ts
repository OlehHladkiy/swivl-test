// @flow
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import promiseMiddleware from './middlewares/promiseMiddleware';
import rootReducer from './rootReducer';

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(promiseMiddleware, thunk)),
);
