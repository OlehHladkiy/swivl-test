import React from 'react';
import { Provider } from 'react-redux';

import UsersContainer from 'modules/user/containers/UsersContainer';
import store from 'store/configureStore';

const App = () => (
  <>
    <Provider store={store}>
      <UsersContainer />
    </Provider>
  </>
);

export default App;
