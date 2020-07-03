import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import API, { ROUTES } from './api';
import PAGES from './pages';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            {Object.keys(ROUTES).map(name => (<Route
              exact={false}
              {...ROUTES[name]}
              key={name}
              component={PAGES[name] ? PAGES[name] : false}
            />))}
          </Switch>
        </Router>
      </div>
    )
  }
}

export default API.connect(App);
