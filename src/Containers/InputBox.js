// import React from 'react'
import { connect } from 'react-redux'
import InputBox from '../Components/InputBox'
import {addDialogue} from '../actions'

const mapStateToProps = (state)=>({
    ...state
})

const mapDispatchToProps = (dispatch)=>({
    detectEnter: (e)=>{
        if(13===e.keyCode){
            console.log('switch')
            dispatch(addDialogue({
                actor:'customer',
                text: e.target.value
            }))
            e.target.value=''
        }
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(InputBox)