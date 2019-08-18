import React, { Component } from 'react';
import "../styles/opening.css"
import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Redirect, withRouter } from 'react-router-dom';

class Opening extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email:'',
      password:'',
      error: ''
    }
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

 

  handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log('Returns: ', response);
      })
      .catch(err => {
        const { message } = err;
        this.setState({ error: message });
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log('Returns: ', response);
        firebase.auth().onAuthStateChanged((user)=>{
          if(user){
            this.props.history.push('/') //sends it to the main route page
          }
          else{
            //
          }
        })
      })
      .catch(err => {
        const { message } = err;
        this.setState({ error: message });
      })
  }



  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // ..... DO YOUR LOGGED IN LOGIC
        this.props.history.push('/')
      }
      else {
        // ..... The user is logged out
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    console.log('emailing',this.state.email)
    return (
      <>
      
        <form className="wrapper ">
          <div className="boxme">
            <div className="form-group">
              <label htmlFor="exampleDropdownFormEmail2">Email address</label>
              <input type="email" value={this.state.email} className="form-control"  name="email" onChange={this.handleInput} placeholder="email@example.com" />
            </div>

            <div className="form-group">
              <label htmlFor="exampleDropdownFormPassword2">Password</label>
              <input type="password" value={this.state.password} className="form-control" name="password" onChange={this.handleInput} placeholder="Password" />
            </div>

            <div className="form-check">
              <input type="checkbox" className="form-check-input"  />
              <label className="form-check-label" htmlFor="dropdownCheck2">
                Remember me
            </label>
            </div>
            <button type="button" onClick={this.handleLogin} className="btn btn-dark">Sign in</button>
            <button type="button" onClick={this.handleSubmit} className="btn btn-dark">SignUp</button>
          </div>
        </form>
      </>
    )

  }
}
export default withRouter(Opening);