import React, {Component} from 'react';
import {Route, HashRouter } from "react-router-dom";
import Mainpage from '../src/components/mainpage'
import Opening from './components/opening';


class App extends React.Component {
  render(){
    
  return (
    <>
    <HashRouter>
    <Route path ="/opening" component={Opening}/>  
    <Route path ="/mainpage" component={Mainpage}/>
    </HashRouter>
    {/* <h1>hello</h1> */}
    </>

  )
 }
}

export default App;
