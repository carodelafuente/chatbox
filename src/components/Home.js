import React, { Component } from 'react';
import { observer } from 'mobx-react'
import store from '../store.js'

@observer
class Home extends Component {
  constructor(props) {
    super(props);

    this.userName = React.createRef();
  }

  componentWillReact() {
    store.storeMessages();
  }

  submitUsername = (e) => {
    e.preventDefault();
    store.user = this.userName.current.value
    this.props.history.push(`/chatroom`)
  }

  render() {
    return (
      <div className="Home">
        <form onSubmit={this.submitUsername}>
          <input ref={this.userName} type='text' />
        <button>enter chatbox!</button>
      </form>
      </div>
    );
  }
}

export default Home;