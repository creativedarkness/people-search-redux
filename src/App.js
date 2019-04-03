import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import PeopleSearch from './components/PeopleSearch/PeopleSearch';
import Profile from './components/Profile/Profile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={PeopleSearch} />
          <Route path="/profile" component={Profile} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
