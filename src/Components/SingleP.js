import React from 'react'
import styled from 'styled-components'

const SP = styled.p`
    font-family:system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
    // display:inline-flex;
    color:rgba(0,0,0,0.75);
    // font-size:${props=>props.type==='act'?'0.875em':'1em'};
    font-size:1em;
    font-weight:400;
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
                font-size:0.875em;
                color:rgba(0,0,0,0.6);
                ::before{
                    content: "act";
                    margin-right: 0.5rem;
                    padding: 0 0.5em;
                    display: inline-block;
                    background-color: rgba(0, 0, 0, 0.1);
                    color: rgba(0, 0, 0, 0.6);
                    font-size: 0.5em;
                    font-weight: 400;
                    letter-spacing: 2px;
                }
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