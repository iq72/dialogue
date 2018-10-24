import React, { Component } from 'react';
import './App.css';
import Dialogues from './Containers/Dialogues'
import Json from './Containers/Json'

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
        <div className="App-white-space"></div>
        <Json />
      </div>
    );
  }
}

export default App