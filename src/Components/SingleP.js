import React from 'react'
import styled from 'styled-components'

const SP = styled.p`
    font-family:system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
    // display:inline-flex;
    color:rgba(0,0,0,0.75);
    // font-size:${props=>props.type==='act'?'0.875em':'1em'};
    font-size:1rem;
    font-weight:300;
    line-height:1.5;
    // background-color:${props=>props.type==='act'?'rgba(0,0,0,0.08)':'rgba(0,0,0,0.04)'};
    background-color:none;
    // border-radius:32px;
    // padding:1em;
    margin:0 0.5rem;
    word-break:break-all;
    float:left;
    clear:both;
    ${props=>{
        if('act'===props.type){
            return(`
                padding-left: 18px;
                border-left: solid 3px rgba(0,0,0,0.4);
                font-style:italic;
                color:rgba(0,0,0,0.6);
                margin: 4px 8px;
            `)
        }
    }}
    text-align:justify;
`

export default class SingleP extends React.Component{
    
    onClick(e){
        console.log("clicked \n "+e.target.innerText)
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