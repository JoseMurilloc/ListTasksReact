import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Edit from './pages/Edit';

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/edit/:id" component={Edit} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;