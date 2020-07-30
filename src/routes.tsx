import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

const routes = (): React.ReactElement => (
  <Switch>
    <Route exact path='/' component={() => <div>Home Placeholder</div>} />
    <Route render={() => <Redirect to={{ pathname: '/' }} />} />
  </Switch>
);

export default routes;
