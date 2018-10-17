// import React from 'react'
import { connect } from 'react-redux'
import InputBox from '../Components/InputBox'
import {addDialogue, switchActor,switchType,changeText,editing,clearText} from '../actions'

const mapStateToProps = (state)=>({
    ...state.inputBox
})

const mapDispatchToProps = (dispatch)=>({
    switchActor: (step)=>{dispatch(switchActor(step))},
    switchType: ()=>{dispatch(switchType())},
    addDialogue:(dialogue)=>{dispatch(addDialogue(dialogue))},
    changeText:(node)=>{dispatch(changeText(node))},
    editing:(text)=>{dispatch(editing(text))},
    clearText:()=>{dispatch(clearText())}
})

export default connect(mapStateToProps,mapDispatchToProps)(InputBox)