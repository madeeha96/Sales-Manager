import Signup from "./Signup";
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  getUser(user) {
    if (!this.existingUser(user)) {
      this.state.users.push(user);
      this.setState({ users: this.state.users });
    } else {
      console.log("this email address is already registered", user.email);
    }
    console.log("my users", this.state.users);
  }

  existingUser(user) {
    return this.state.users.some(item => item.email === user.email);
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
        <Signup getUser={this.getUser.bind(this)} />
      </div>
    );
  }
}

export default App;
