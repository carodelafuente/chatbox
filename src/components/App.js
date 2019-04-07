import React, { Component } from 'react';
import Home from './Home';
import Chatroom from './Chatroom';
import {query} from '../db.js'
import store from '../store.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../styles/App.scss';

class App extends Component {
  state = {
    messages: []
  }
  componentDidMount() {
    query(`{ allMessages{
      id,
      text,
      user}
    }`).then(({ data }) => {
      store.messages = data.allMessages
      this.setState({messages: data.allMessages})
    })
  }

  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <Route path="/" exact component={Home} />
          <Route path="/chatroom" render={(props) => <Chatroom {...props} messages={this.state.messages} />} />
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
