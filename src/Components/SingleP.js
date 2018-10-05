import React from 'react'
import styled from 'styled-components'

const SP = styled.p`
    font-family:system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
    display:inline-flex;
    color:rgba(0,0,0,0.75);
    font-size:${props=>props.type==='act'?'0.8em':'1em'};
    background-color:${props=>props.type==='act'?'rgba(0,0,0,0.08)':'rgba(0,0,0,0.04)'};
    border-radius:32px;
    padding:1em;
    margin:4px 8px;
    word-break:break-all;
`

export default class SingleP extends React.Component{
    
    onClick(e){
        console.log("clicked")
        this.props.startEditing({
            dKey:this.props.dKey,
            cKey:this.props.cKey,
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