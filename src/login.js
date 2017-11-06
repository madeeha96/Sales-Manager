import React, { Component } from 'react';
import logo from './logo.svg';
import './login.css';

class Login extends Component {
  state = {
    obj: {
      name: "Madeeha",
      pass: "123"
    }
  }
    
    update_Info()
    {
      
      let user = document.getElementById('name');
      let password = document.getElementById('pass')
      this.props.validate_users(user, password);
    }

  render() {
    return (
      <div>
      
          <h1>Login Page</h1>
          Name:<input type="text" id="name"/> &nbsp; &nbsp;
          Password:<input type="password" id="pass"/>
     <div>
         <br/>
         <button onClick ={this.update_Info.bind(this)} >Login </button> 
         &nbsp;
          <button>Sign Up </button>
         </div>
    
      </div>
    );
  }
}

export default Login;
