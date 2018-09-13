// import React from 'react'
import { connect } from 'react-redux'
import InputBox from '../Components/InputBox'
import {switchDialogue} from '../actions'

const mapStateToProps = (state)=>({
    ...state
})

const mapDispatchToProps = (dispatch)=>({
    detectEnter: (e)=>{
        if(13===e.keyCode){
            console.log('switch')
            dispatch(switchDialogue())
        }
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(InputBox)