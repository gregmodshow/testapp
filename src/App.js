import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
// You can choose your kind of history here (e.g. browserHistory)
import Home from './components/App';
import Privacy from './components/Privacy';
// Your routes.js file


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/privacy" component={Privacy} />
        </Router>
    </div>
  );
}

export default App;
