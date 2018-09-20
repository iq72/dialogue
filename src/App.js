import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import { addDialogue} from './actions/index';


// import logo from './logo.svg';
import './App.css';
import InputBox from './Containers/InputBox'
import Dialogues from './Containers/Dialogues'

let d= {
  actor:'customer',
  text: '有没有55寸的电视',
  act:'进店有没有55有没有55有没有55有没有55有没有55寸'
}

// const mapStateToProps = state => ({
//   ...state
// })

//  const mapDispatchToProps = dispatch => ({
//   addDialogue: (actor,text,act) => dispatch(addDialogue(actor,text,act))
//  })

class App extends Component {

  addDialogue=(event)=>{
      this.props.addDialogue(
      {
        ...d,
        actor:event.target.innerText
      }
    );
  }
  scrollDialogues=(e)=>{
    window.scrollTo(0,document.body.scrollHeight);
  }
  render() {
    return (
      <div className="App" ref={(div)=>{this.app=div}}>
        {/* <button onClick={this.addDialogue}>custom</button>
        <button onClick={this.addDialogue}>shopkeeper</button> */}
        <Dialogues />
        <div className="App-white-space"></div>
        <InputBox scrollDialogues={this.scrollDialogues} />
      </div>
    );
  }
}

// export default connect(
//   mapStateToProps, 
//   mapDispatchToProps
// )(App);
export default App