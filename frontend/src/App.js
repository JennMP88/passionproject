import React, {Component} from 'react';
import {Route, HashRouter } from "react-router-dom";
import Opening from './components/opening';
import Header from './components/header';
import Home from './containers/home';
import Signup from './containers/signup';
import Login from './containers/login';
import Logout from './containers/logout'; //----
import Mainpage from '../src/components/mainpage';
import ViewComments from '../src/components/comments';

// import PostComment from '../src/components/postcomment'


class App extends React.Component {
  render(){
    
  return (
    
    <HashRouter>
      <>
      

   
    <Route path='/' component={ Header } />
    <div className='container mt-5'>
    <Route path='/' exact component={ Home } />
    <Route path='/signup' exact component={ Signup } />
    <Route path='/login' exact component={ Login } />
    <Route path='/logout' exact component={ Logout } />
    <Route  path ="/opening" exact component={Opening}/>  
    <Route path ="/mainpage" exact component={Mainpage}/>
    <Route path ="/comments" exact component={ViewComments}/>
    {/* <Route path ="/postcomments" component={PostComment}/> */}
    </div>
    </>
    </HashRouter>
  
  

  )
 }
}

export default App;
