import React, {Component} from 'react';
import {Route, HashRouter } from "react-router-dom";
import Opening from './components/opening';
import Mainpage from '../src/components/mainpage';
import ViewComments from '../src/components/comments'
// import PostComment from '../src/components/postcomment'


class App extends React.Component {
  render(){
    
  return (
    <>
    <HashRouter>
    <Route path ="/opening" component={Opening}/>  
    <Route path ="/mainpage" component={Mainpage}/>
    <Route path ="/comments" component={ViewComments}/>
    {/* <Route path ="/postcomments" component={PostComment}/> */}

    </HashRouter>
    {/* <h1>hello</h1> */}
    </>

  )
 }
}

export default App;
