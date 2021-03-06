import React, { Component } from 'react';
import axios from 'axios';
import firebase from 'firebase';
import { Redirect, withRouter } from 'react-router-dom';

class Mainpage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: '',
      prayers: []
    }
  }

  //This function is for the input box that allows user to post a story 
  handleTextInput = (e) => {
    this.setState({ inputText: e.target.value })
  }

  onSubmitClicker = async (e)=>{
    e.preventDefault();
    const {prayers,inputText}=this.state;    

    await axios({
      method:'post',
      url:'http://localhost:8080/stories/newstory',
      data:{
        stories_displayed: inputText,
        user_id: 1
      }
    })
    await axios.get('http://localhost:8080/stories')
    .then(res => {
      const prayers=res.data;
      this.setState({prayers, inputText:''})
      
    })
    
  }

  
  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.history.push('/')
      }
      else {
        this.props.history.push('/opening')
      }
    })
    axios.get('http://localhost:8080/stories')
    .then(res => {
      const prayers = res.data;
      this.setState({prayers})
      
    }) 
  }

  render() {
    const { prayers, inputText } = this.state
    return (
      <>

        <div className="jumbotron">

          <h1 className="display-4">Welcome to my page!</h1>
          <div className="input-group mb-3">

            <input type="text" value={this.state.inputText} className="form-control" onChange={this.handleTextInput} placeholder="prayer request" />
            <div className="input-group-append">
              <button className="input-group-text" onClick={this.onSubmitClicker}>Pray</button>

            </div>
          </div>

     <hr className="my-4" />

     <div >
          <ul className="overflow-auto" style={{ height: 300 }}>

          
          {
            prayers.map((e,i)=>{
              return (
                <>
                <p>{e.stories_displayed}</p>
                <hr className="my-4"></hr>
                </>
              )
      
            })
          }
          </ul>
      </div>
        </div>
      </>
    )
  }
}

export default withRouter(Mainpage);