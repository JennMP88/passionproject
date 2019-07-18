import React, { Component } from 'react';
import '../styles/mainpage.css';
const defaultuser = require('../assets/default.png')

class Mainpage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText:''
    }
  }

  handleTextInput=(e)=>{
    const inputText=e.target.value;
    console.log(inputText)
    this.setState=({inputText:e.target.value})
  }

  onSubmitClicker=(e)=>{
    console.log('clicked',e.target.value)
  }

  render() {
   const {inputText}=this.state
    console.log('texting',inputText)
    return (
      <>

        <div className='holdsAll'>
        <div className='holdsTag'>
        <h1>Plotwist</h1>
        </div>
        <div className='row'>

          <div className='col col-4'>
          <img src={defaultuser} alt="..." class="rounded-circle" height="200" width="200" />
          <h2>Name:jennifer</h2>      
          </div>
          
          <div className='commentaries col col-8'>
         
        
        <input type="text" onChange={this. handleTextInput} placeholder={"story..."} />
        <button type="button"  onClick={this.onSubmitClicker}>Submit</button>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
            <h3>Post Comment</h3>  
            <h3>View Comments</h3> 
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          </div>


          <div className='row'>
            
          </div>
        </div>
        {/* <div className='row'>
          <div className='col col-12 black'>
            <h1>Plotwist</h1>
            <div className='row height-800px'>
              <div className='col col-3 green'>

              </div>

              <div className='col col-3 red'>

              </div>
              <div className='col col-6 pink'>
                
              </div>
            </div>
          </div>
        </div> */}

        {/* <div class='row'>
      <div class='col col-12 yellow'></div>
    </div> */}


      </>
    )
  }
}

export default Mainpage;