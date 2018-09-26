// import React from 'react'
import { connect } from 'react-redux'
import InputBox from '../Components/InputBox'
import {addDialogue, switchDialogue,switchMode} from '../actions'

const mapStateToProps = (state)=>({
    actor:state.actor,
    mode:state.mode
})

const mapDispatchToProps = (dispatch)=>({
    switchDialogue: ()=>{dispatch(switchDialogue())},
    switchMode: ()=>{dispatch(switchMode())},
    addDialogue:(dialogue)=>{dispatch(addDialogue(dialogue))},
})

export default connect(mapStateToProps,mapDispatchToProps)(InputBox)