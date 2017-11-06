import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login.js'

class App extends Component {

  state = {
     user:
     { name :"Madeeha",
       password: "123"
       }
  }
  
  valid_users = (user,password) => {
    console.log('abc');

    if(user.value === this.state.user.name && password.value === this.state.user.password)
    {
      alert("Login successful");
    }
    
    else{
      alert("Login unsuccessful");
    }

  }
  render() {
    return (
      <div className="App">
       <Login validate_users = {this.valid_users.bind(this)} />
      </div>
    );
  }
}

export default App;
