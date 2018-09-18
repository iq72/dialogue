import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addDialogue} from './actions/index';


import logo from './logo.svg';
import './App.css';
import InputBox from './Containers/InputBox'
import Dialogues from './Containers/Dialogues'

let d= {
  actor:'customer',
  text: '有没有55寸的电视',
  act:'进店有没有55有没有55有没有55有没有55有没有55寸'
}

const mapStateToProps = state => ({
  ...state
})

 const mapDispatchToProps = dispatch => ({
  addDialogue: (actor,text,act) => dispatch(addDialogue(actor,text,act))
 })

class App extends Component {

  addDialogue=(event)=>{
      this.props.addDialogue(
      {
        ...d,
        actor:event.target.innerText
      }
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.addDialogue}>custom</button>
        <button onClick={this.addDialogue}>shopkeeper</button>
        <p>{this.props.count}</p>
        <Dialogues />
        <InputBox />
      </div>
    );
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);
