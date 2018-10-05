// import React from 'react'
import { connect } from 'react-redux'
import InputBox from '../Components/InputBox'
import {addDialogue, switchDialogue,switchMode,changeText,editing,clearText} from '../actions'

const mapStateToProps = (state)=>({
    ...state.inputBox
})

const mapDispatchToProps = (dispatch)=>({
    switchDialogue: (step)=>{dispatch(switchDialogue(step))},
    switchMode: ()=>{dispatch(switchMode())},
    addDialogue:(dialogue)=>{dispatch(addDialogue(dialogue))},
    changeText:(node)=>{dispatch(changeText(node))},
    editing:(text)=>{dispatch(editing(text))},
    clearText:()=>{dispatch(clearText())}
})

export default connect(mapStateToProps,mapDispatchToProps)(InputBox)