import Signup from './Signup';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    }
  }

  getUser(user) {
    this.setState({user: this.state.user.push(user)});
    console.log("my users", this.state.user);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Signup getUser={this.getUser.bind(this)}/>
      </div>
    );
  }
}

export default App;
