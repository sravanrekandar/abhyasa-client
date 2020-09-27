/* eslint-disable import/no-named-as-default */
import { Switch, HashRouter } from 'react-router-dom';

import React from 'react';
import { hot } from 'react-hot-loader';
import routes from '../routes';
import Header from './Header';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Header />
        <HashRouter>
          <Switch>
            {routes}
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default hot(module)(App);
