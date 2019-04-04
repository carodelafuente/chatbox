import React, { Component } from 'react';
import '../styles/Chatroom.scss';
import {query, mutation} from '../db.js'
import store from '../store.js'
import { observer } from 'mobx-react'

@observer
class Chatroom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: ['heero', 'oh']
    }

    this.message = React.createRef();
    this.appendMessage = this.appendMessage.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
  }

  componentDidMount() {
    console.log(store.messages)
  }

  sendMessage = (e) => {
    e.preventDefault();
    this.state.messages.push(this.message.current.value)
    // appendMessage()
  }

  appendMessage = function() {
    this.state.messages.map((msg, i) => {
      console.log(msg)
      return <li key={i}>you: {msg}</li>
    })
  }


  render() {
    return (
      <div className="Chatroom">
        <h3> It me! </h3>
        <div className="chatroomContainer">
          <ul>
          </ul>
        </div>
        <form onSubmit={this.sendMessage}>
        <input ref={this.message} type='text' />
        </form>
      </div>
    );
  }
}

export default Chatroom;
