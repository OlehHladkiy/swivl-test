import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import UsersContainer from 'modules/user/containers/UsersContainer';
import UserDetailsContainer from 'modules/user/containers/UserDetailsContainer';

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={UsersContainer} />
      <Route exact path="/users/:login" component={UserDetailsContainer} />
    </Switch>
  </Router>
);
