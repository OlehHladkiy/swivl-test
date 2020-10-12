import React from 'react';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';

import store from 'store/configureStore';

import routes from './routes';

const App = () => (
  <>
    <Provider store={store}>{routes}</Provider>
  </>
);

export default App;
