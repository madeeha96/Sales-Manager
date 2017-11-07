import React, { Component } from "react";
import logo from "./logo.svg";
import "./login.css";


class Login extends Component {
  state = {
    obj: {
      name: "Madeeha",
      pass: "123"
    }
  };

  update_Info() {
    let user = document.getElementById("name");
    let password = document.getElementById("pass");
    this.props.validate_users(user, password);
  }

  render() {
    return (
      <div>
        <span className="boxSep">
          <h1 className="login">User Login</h1>
          Username: <input type="text" id="name" /> &nbsp; &nbsp; <br /> <br />
          Password: <input type="password" id="pass" />
        <div>
          <br /> <br />
          <button onClick={this.update_Info.bind(this)}>Login </button>  
          &nbsp; &nbsp; &nbsp; 
          <button>Sign Up </button>
        </div>
        </span>
      </div>
    );
  }
}

export default Login;
