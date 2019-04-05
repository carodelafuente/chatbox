import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../styles/Chatroom.scss';
import {query, mutation} from '../db.js'
import store from '../store.js'
import { observer } from 'mobx-react'

@observer
class Chatroom extends Component {
  constructor(props) {
    super(props);

    this.message = React.createRef();
    this.sendMessage = this.sendMessage.bind(this)
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

  sendMessage = (e) => {
    e.preventDefault();
    const user = store.user;
    const text = this.message.current.value;
    const mutationQuery = `createMessage(user: "${user}", text: "${text}") {
      id,
      user,
      text
    }`;
    mutation(mutationQuery, user, text);
  }


  render() {
    if (store.user) {
      return (
      <div className="Chatroom">
        <h3> Chatbox </h3>
        <div className="chatroomContainer">
          <ul>
          </ul>
        </div>
        <form onSubmit={this.sendMessage}>
        <input ref={this.message} type='text' />
        </form>
      </div>
    );
    } else {
      <Redirect to="/" />
    }
  }
}

export default Chatroom;
