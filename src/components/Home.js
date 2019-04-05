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

  componentDidMount() {
    query(`{ allMessages{
      id,
      text,
      user} 
    }`).then(({ data }) => {
      store.messages = data.allMessages
    })
  }

  submitUsername = (e) => {
    e.preventDefault();
    store.user = this.userName.current.value
    this.props.history.push(`/chatroom`)
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