import React, {Component} from 'react';
import {Route, HashRouter } from "react-router-dom";
import firebase from './firebase';


//--Contexts
import AuthContext from './contexts/auth';


//--Pages
import Header from './components/header';
import Opening from '../src/components/opening';
import Mainpage from '../src/components/mainpage2';
import Logout from '../src/components/logout';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user:null,
    }
  }
  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      console.log(user, this.state)
      
      if (user) {
        this.setState({ user: user.email }); //user shows user is logged in--->passed to auth context
      } 
      else {
        this.setState({ user: null })
      }
    })
  }

  //invoking it to take it off memory
  componentWillUnmount() {
    this.unsubscribe()
  }
  
  render(){
    
  return (
    <>
        <HashRouter>
        <AuthContext.Provider value={this.state.user}>
          <Header/>
        <Route path ="/opening" exact component={Opening}/>
         <Route path ="/" exact component={Mainpage}/>
         <Route path='/logout' exact component={ Logout } />
  
        </AuthContext.Provider>
        </HashRouter>
      
   </>
  

  )
 }
}

export default App;
