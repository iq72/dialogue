import React from 'react'
import styled from 'styled-components'
import {text,minor,beforeAct} from './ShareStyle'


let s = [...text,minor,beforeAct]


const SP = styled.p(...s)

export default class SingleP extends React.Component{
    
    onClick(e){
        this.props.startEditing({
            dKey:this.props.dKey,
            cKey:this.props.cKey,
            type:this.props.type,
            text:e.target.innerText
        })
        document.querySelector('textarea').focus()
    }
    render(){
        return (
        <SP 
            {...this.props}
            onClick={e=>this.onClick(e)}
        >{this.props.children}</SP>
        )
    }
}