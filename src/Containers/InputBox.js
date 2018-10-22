// import React from 'react'
import { connect } from 'react-redux'
import InputBox from '../Components/InputBox'
import {addDialogue,insertDialogue,insertAt,switchMode, switchActor,switchType,changeText,edit,clearText} from '../actions'

const mapStateToProps = (state)=>({
    ...state.inputBox
})

const mapDispatchToProps = (dispatch)=>({
    switchActor: (step)=>{dispatch(switchActor(step))},
    switchType: ()=>{dispatch(switchType())},
    switchMode: (mode)=>{dispatch(switchMode(mode))},
    insertAt: (pos)=>{dispatch(insertAt(pos))},
    addDialogue:(dialogue)=>{dispatch(addDialogue(dialogue))},
    insertDialogue:(dialogue)=>{dispatch(insertDialogue(dialogue))},
    changeText:(node)=>{dispatch(changeText(node))},
    edit:(text)=>{dispatch(edit(text))},
    clearText:()=>{dispatch(clearText())}
})

export default connect(mapStateToProps,mapDispatchToProps)(InputBox)