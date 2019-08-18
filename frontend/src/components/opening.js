import React, { Component } from 'react';
import "../styles/opening.css"
const cover1 = require('../assets/praying.jpg')


class Opening extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  submitButton=(e)=>{
    
  }
  render() {
    return (
      <>
        <form class="wrapper ">
          <div className="boxme">
            <div className="form-group ">
              <label for="exampleDropdownFormEmail2">Email address</label>
              <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
            </div>
            <div className="form-group">
              <label for="exampleDropdownFormPassword2">Password</label>
              <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
              <label className="form-check-label" for="dropdownCheck2">
                Remember me
            </label>
            </div>
            <button type="button" className="btn btn-dark">Sign in</button>
            <button type="button" className="btn btn-dark">Register</button>
          </div>
        </form>
      </>
    )

  }
}
export default Opening;