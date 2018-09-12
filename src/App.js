import React, { Component } from 'react';
import {connect} from 'react-redux';
import {switchDialogue} from './actions/switchDialogue'

import logo from './logo.svg';
import './App.css';


const mapStateToProps = state => ({
  ...state
})

 const mapDispatchToProps = dispatch => ({
  switchDialogue: () => dispatch(switchDialogue())
 })

class App extends Component {

  switchDialogue=(event)=>{
    this.props.switchDialogue();
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
        <button onClick={this.switchDialogue}>Test redux action</button>
        <p>{this.props.count}</p>
      </div>
    );
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);
