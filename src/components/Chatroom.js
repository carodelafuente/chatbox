import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import {query, mutation} from '../db.js'
import store from '../store.js'
import { observer } from 'mobx-react'
import '../styles/Chatroom.scss';

@observer
class Chatroom extends Component {
  constructor(props) {
    super(props);

    this.message = React.createRef();
    this.sendMessage = this.sendMessage.bind(this)
    this.renderMessages = this.renderMessages.bind(this)
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
    mutation(mutationQuery, user, text).then(({ data }) => {
      store.messages.push(data.allMessages)
      console.log(store.messages)
    })
  }

  renderMessages() {
    console.log(store.messages)
    store.messages.map((msgObj) => {
     return <li key={msgObj.id}>@{msgObj.user}: {msgObj.text}</li>
    })
  }



  render() {
      return (
      <div className="Chatroom">
        <h3> Chatbox </h3>
        <div className="chatroomContainer">
        <ul> {store.messages.map((msgObj) => {
          return <li key={msgObj.id}>@{msgObj.user}: {msgObj.text}</li>
        })}
          </ul>
        </div>
        <form onSubmit={this.sendMessage}>
        <input ref={this.message} placeholder={`@` + `${store.user}` + `:`} type='text' />
        </form>
      </div>
    );
  }
}

export default Chatroom;
