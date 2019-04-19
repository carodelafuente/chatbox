import React, { Component } from 'react';
import { observer } from 'mobx-react'
import {query} from '../db.js'
import store from '../store.js'
import '../styles/Home.scss';

@observer
class Home extends Component {
  constructor(props) {
    super(props);

    this.userName = React.createRef();
  }

  submitUsername = (e) => {
    e.preventDefault();

    const re = /[^A-Za-z0-9]+/;

    if (!re.test(this.userName.current.value)) {
      store.user = this.userName.current.value
      this.props.history.push(`/chatroom`)
    } else {
      alert('You must enter a valid username. Letters and numbers only!')
      return
    }


  }

  render() {
    return (
      <div className="Home">
      <h3 className="homeTitle"> Chatbox </h3>
        <form onSubmit={this.submitUsername}>
          <input ref={this.userName} placeholder="username" type='text' />
        <button>enter chatbox!</button>
      </form>
      </div>
    );
  }
}

export default Home;
