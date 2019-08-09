import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './components/App';
import Privacy from './components/Privacy';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <Route path="/privacy" component={Privacy} />
  </Route>
);