import Signup from "./Signup";
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./login.js";
import Pikstogram from "./images/logo.jpg";
import Logo from "./images/Pikk.PNG";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          name: "Madeeha",
          password: "123"
        }
      ]
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

  valid_users = (user, password) => {
    for (let item of this.state.users) {
      if (user.value === item.name && password.value === item.password) {
        alert("Login successful");
      } else {
        alert("Login unsuccessful");
      }
    }
  };
  render() {
    return (
      <div>
        {/* <img background-image className="Pikk" src= {bg} /> */}
        <span className="App-header" />
        <div className="App">
          <span>
            <img className="image" src={Pikstogram} />
          </span>
          <img className="Pikk" src={Logo} />
          <Login validate_users={this.valid_users.bind(this)} />
          <Signup getUser={this.getUser.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
