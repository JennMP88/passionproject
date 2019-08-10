import React, {Component} from 'react';
import {Route, HashRouter } from "react-router-dom";
import Header from './components/header';
import Mainpage from '../src/components/mainpage2';



// import PostComment from '../src/components/postcomment'


class App extends React.Component {
  render(){
    
  return (
    
    <HashRouter>
    <>
      
    <Route path='/' component={ Header } />
    <div className='container mt-5'>
    <Route path ="/mainpage" exact component={Mainpage}/>
    </div>
    </>
    </HashRouter>
  
  

  )
 }
}

export default App;
