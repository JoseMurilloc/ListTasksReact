import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Edit from './pages/Edit';
import Add from './pages/Add';

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/add" component={Add} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;