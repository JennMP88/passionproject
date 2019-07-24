import React, { Component } from 'react';
import axios from 'axios';
import '../styles/mainpage.css';
const defaultuser = require('../assets/default.png')

class Mainpage extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.
    state = {
      inputText:'',
      stories:[]
    }
  // }
  


  handleTextInput = (e) => {
    this.setState({inputText:e.target.value})
  }

  onSubmitClicker = (e) => {
    e.preventDefault();
    const {stories,inputText}=this.state;    
    console.log('write', inputText)
    console.log('stories',stories)

    // axios.post('http://localhost:8080/stories/newstory', {
      // stories_displayed: inputText,
      // user_id: 1,
    // })
    // .then(response => response.data )
    // .then(data => {
    //   console.log('dataa',data);
    // })
    axios({
      method:'post',
      url:'http://localhost:8080/stories/newstory',
      data:{
        stories_displayed: inputText,
        user_id: 1
      }
      
    })

    this.setState({ stories, inputText: '' })
  }
  
/*
  onSubmitClicker=(e)=>{
    console.log('clicked',e.target.value)
    
    // e.preventDefault();
    const {stories,inputText}=this.state;    
  

    // axios.post(`http://localhost:8080/stories/newstory`, {
    //   stories_displayed:inputText,
    //   user_id:1
    
    // })

    // stories.unshift({
    //   stories_displayed:inputText,
    //   user_id:1
    // })

    this.setState({
      stories:stories,
      inputText:''
    }) 
 
  }
  */

  render() {
   const {stories, inputText}=this.state
    // console.log('texting',inputText)
    console.log('render-clicked',inputText)
    console.log('render-stories',stories)

    return (
      <>

        <div className='holdsAll'>
        <div className='holdsTag'>
        <h1>Plotwist</h1>
        </div>
        <div className='row'>

          <div className='col col-4'>
          <img src={defaultuser} alt="..." className="rounded-circle" height="200" width="200" />
          <h2>Name:jennifer</h2>      
          </div>
          
          <div className='commentaries col col-8'>
         
        
        <textarea type="text" onChange={this.handleTextInput} placeholder={"story..."} />
        <button type="button"  onClick={this.onSubmitClicker}>Submit</button>
            
            {/* map */}
            
            <div className='stories'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
            <h3>Post Comment</h3>  
            <h3>View Comments</h3> 
           </div>
           {/* map */}
           
          </div>
          </div>


          <div className='row'>
            
          </div>
        </div>
    

      </>
    )
  }
}

export default Mainpage;