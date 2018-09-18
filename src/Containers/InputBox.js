// import React from 'react'
import { connect } from 'react-redux'
import InputBox from '../Components/InputBox'
import {addDialogue, switchDialogue} from '../actions'

const mapStateToProps = (state)=>({
    actor:state.avatar
})

const mapDispatchToProps = (dispatch)=>({
    detectEnter: (e)=>{
        if(13===e.keyCode){
            console.log('enter')
            console.log(e.target.value)
            if(e.target.value!=0){
               
                dispatch(addDialogue({
                    // actor:'customer',
                    text: e.target.value
                }))
                dispatch(switchDialogue())
            }
            e.target.blur();
            e.target.value='';
            e.target.style.height='2em';
            e.target.focus();
        }
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(InputBox)