import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'

const StyledInput = styled.textarea`
    height:2em;
    line-height:2;
    font-size:1rem;
    overflow:auto;
    appearance:none;
    -webkit-appearance:none;
    resize:none;
    margin: 0 1em;
    flex:1 1 auto;
    // border:solid;
    border-color:${props=>props.actor==='shopkeeper'?'#09c6da':'#f582e1'};
    border-width:0;
    background:none;
    ${props=>{
        if (props.mode==='act'){
            return(
                `
                border-bottom-width: 2px ;
                margin-left:0;
                padding-left:1em;
                `
            )
        }}}
    :focus {
        outline: none
    }
    
`

const Box = styled.div`
    display:flex;
    align-items:flex-end;
    position:fixed;
    padding:1em;
    bottom:1em;
    width: calc(100% - 2em - 20px);
    left:8px;
    border-radius:32px;
   
    // background-color:${props=>props.mode==='dialogue'?'rgba(0,0,0,0.1)':'rgba(0,0,0,0.05)'};
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    
    >span:hover{
        cursor:pointer;
        // transform:scale(1.2)
    }
`

class InputBox extends React.Component{
    detectEnter= (e)=>{
        if(13===e.keyCode){
            if(e.shiftKey){
                console.log("shift+enter")
                e.preventDefault();
                if(this.props.mode==='dialogue'){// in dialogue mode
                    this.props.addDialogue(e.target.value);
                    this.props.switchMode();
                }else{// act mode
                    this.props.appendAct(e.target.value);
                    this.props.switchMode();
                    this.props.switchDialogue();
                }
            }else if (e.ctrlKey){
                console.log("control+enter")
            }else{
                e.preventDefault();
                if(e.target.value!=0){
                    if(this.props.mode==='dialogue'){
                        this.props.addDialogue( e.target.value);
                        this.props.switchDialogue();
                    }else{
                        this.props.appendAct(e.target.value);
                        this.props.switchMode();
                        this.props.switchDialogue();
                    }
                }else{//empty just switch 
                    this.props.switchDialogue()
                }
                e.target.value='';
                e.target.style.height='2em';
            }
        }
    };

    render(){
    return (
        <Box mode={this.props.mode}>
            <Avatar 
                actor={this.props.actor} 
                onClick={(e)=>{
                    e.preventDefault();
                    this.props.switchDialogue()
                }}
            />
            {
                this.props.mode==='act'&&
                <span style={{
                    'display':'inline-block',
                    'background-color': this.props.actor==='shopkeeper'?'#09c6da':'#f582e1',
                    'border-radius': '4px 4px 0 4px',
                    'color': 'white',
                    'font-size': '0.4em',
                    'font-weight': '600',
                    'letter-spacing': '0.1em',
                    'padding': '0 0.4em',
                    'margin-left': '1em',
                    // 'opacity': '0.6'
                }}>act</span>
            }
            <StyledInput 
                placeholder='say something'
                actor={this.props.actor} 
                mode={this.props.mode}
                onKeyDown={(e)=>{this.detectEnter(e)}} 
                onScroll={(e)=>{
                    e.target.style.height=e.target.scrollHeight+'px' //auto resize textarea
                }}
                ref={(textarea)=>this.textarea=textarea}
            />
        </Box>
    )}

}

export default InputBox