import React, { Component } from 'react';
import Home from './Home';
import Chatroom from './Chatroom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../styles/App.scss';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <Route path="/" exact component={Home} />
          <Route path="/chatroom" component={Chatroom} />
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
