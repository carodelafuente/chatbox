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

    this.state = {
      messages: this.props.messages
    }

    this.message = React.createRef();
    this.chatbox = React.createRef();
    this.sendMessage = this.sendMessage.bind(this)
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
      this.setState({messages: this.props.messages.push(data.createMessage)})
    })
  }




  render() {
      if (store.user !== '') {
        return (
      <div className="Chatroom">
        <h3> Chatbox </h3>
        <div ref={this.chatbox} className="chatroomContainer">
        <ul> {this.props.messages.map((msgObj) => {
          return <li key={msgObj.id}>@{msgObj.user}: {msgObj.text}</li>
        })}
          </ul>
        </div>
        <form onSubmit={this.sendMessage}>
        <input ref={this.message} placeholder={`@` + `${store.user}` + `:`} type='text' />
        </form>
      </div>
    );
  } else {
    return <Redirect to="/"/>
  }
      }
}

export default Chatroom;
