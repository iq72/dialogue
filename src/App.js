import React, { Component } from 'react';
import './App.css';
import AddInput from './Containers/AddInput'
import Dialogues from './Containers/Dialogues'

class App extends Component {

 
  // scrollDialogues=(e)=>{
  //   window.scrollTo(0,document.body.scrollHeight);
  // }

  render() {
    return (
      <div className="App" 
      // ref={(div)=>{this.app=div}}
      >
        <Dialogues />
        {/* <div className="App-white-space"></div> */}
        {/* <AddInput /> */}
      </div>
    );
  }
}

export default App