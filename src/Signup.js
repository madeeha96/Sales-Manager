import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Signup extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }
  
    getUserInfo(event) {
        event.preventDefault();
        this.props.getUser(this.state);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

  render() {
    return (
      <div>
        <form onSubmit={this.getUserInfo.bind(this)}>
            <input type="text" name="name" placeholder="name" onChange={this.handleChange.bind(this)}/>
            <input type="email" name="email" placeholder="email" onChange={this.handleChange.bind(this)}/>
            <input type="password" name="password" placeholder="password" onChange={this.handleChange.bind(this)}/>
            <input type="submit" value="Create Account"/>
        </form>
      </div>
    )
  }
}
