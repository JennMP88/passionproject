import React, {Component} from 'react';
import {Route, HashRouter } from "react-router-dom";
import Header from './components/header';
import Opening from '../src/components/opening';
import Mainpage from '../src/components/mainpage2';



class App extends React.Component {
  render(){
    
  return (
    
    <HashRouter>
    <>
    <Route path ="/opening" exact component={Opening}/>
    {/* <Route path='/' component={ Header } /> */}
    <div className='container mt-5'>
    {/* <Route path ="/opening" exact component={Opening}/> */}
    <Route path ="/" exact component={Mainpage}/>
    </div>
    </>
    </HashRouter>
  
  

  )
 }
}

export default App;
