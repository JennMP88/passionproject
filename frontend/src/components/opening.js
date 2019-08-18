import React, { Component } from 'react';
import "../styles/opening.css"
const cover1 = require('../assets/praying.jpg')


class Opening extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email:'',
      password:''
    }
  }

handleEmailInput=(e)=>{
    this.setState({ email: e.target.value })
}

handlePasswordInput=(e)=>{
  this.setState({ password: e.target.value })
}

loginButton=(e)=>{
  this.setState({ [e.target.email]: e.target.value },()=>{
        localStorage.setItem('email', this.state.email)
      });
      
  }

  render() {
    console.log('emailing',this.state.email)
    return (
      <>
        <form className="wrapper ">
          <div className="boxme">
            <div className="form-group">
              <label htmlFor="exampleDropdownFormEmail2">Email address</label>
              <input type="email" value={this.state.email} className="form-control"  onChange={this.handleEmailInput} placeholder="email@example.com" />
            </div>

            <div className="form-group">
              <label htmlFor="exampleDropdownFormPassword2">Password</label>
              <input type="password" value={this.state.password} className="form-control" onChange={this.handlePasswordInput} placeholder="Password" />
            </div>

            <div className="form-check">
              <input type="checkbox" className="form-check-input"  />
              <label className="form-check-label" htmlFor="dropdownCheck2">
                Remember me
            </label>
            </div>
            <button type="button" onClick={this.loginButton} className="btn btn-dark">Sign in</button>
            <button type="button" className="btn btn-dark">Register</button>
          </div>
        </form>
      </>
    )

  }
}
export default Opening;