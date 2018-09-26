import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'

const StyledInput = styled.textarea`
    height:2em;
    line-height:2;
    font-size:16px;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
    color:rgba(0,0,0,0.8);
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
   
    background-color:white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    
    >span:hover{
        cursor:pointer;
        // transform:scale(1.2)
    }
`

class InputBox extends React.Component{
    bs=0
    switchBack = ()=>{
        if(this.props.mode==='act'){
            this.props.switchMode()
        }else{
            this.props.switchDialogue()
        }
    }

    onKeyDown= (e)=>{
        if(8===e.keyCode){//'backspace'
            if(e.target.value!==''){
                this.bs=1
            }
        }
        if(13===e.keyCode){//'enter'
            // if(e.shiftKey){
            //     e.preventDefault();
            //     if(this.props.mode==='dialogue'){// in dialogue mode
            //         this.props.addDialogue({
            //             actor:this.props.actor,
            //             type:'talk',
            //             text:e.target.value
            //         });
            //         this.props.switchMode();
            //     }else{// act mode
            //         this.props.addDialogue({
            //             actor:this.props.actor,
            //             type:'act',
            //             text:e.target.value
            //         });
            //         this.props.switchMode();
            //         this.props.switchDialogue();
            //     }
            // }else{
                e.preventDefault();
                if(e.target.value!=0){
                    this.props.addDialogue({
                        actor:this.props.actor,
                        type:this.props.mode,
                        text:e.target.value
                    });
                    if(e.shiftKey){
                        this.props.switchMode();
                    }else{
                        this.switchBack();
                    }
                }else{//empty just switch 
                    this.switchBack()
                }
            // }
            e.target.value='';
            e.target.style.height='2em';
        }
    };

    onKeyUp = (e)=>{
        if(8===e.keyCode){//'backspace'
            if(''===e.target.value){
                this.bs-=1
                if(this.bs<0){
                    this.props.switchMode()
                    this.bs=0
                }
            }
        }
    }

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
                    'backgroundColor': this.props.actor==='shopkeeper'?'#09c6da':'#f582e1',
                    'borderRadius': '4px 4px 0 4px',
                    'color': 'white',
                    'fontSize': '0.8em',
                    'fontWeight': '600',
                    'letterSpacing': '0.2em',
                    'padding': '0.2em 0.6em',
                    'marginLeft': '1em',
                    // 'opacity': '0.6'
                }}>act</span>
            }
            <StyledInput 
                placeholder='say something'
                actor={this.props.actor} 
                mode={this.props.mode}
                onKeyDown={(e)=>{this.onKeyDown(e)}}
                onKeyUp={(e)=>{this.onKeyUp(e)}} 
                onScroll={(e)=>{
                    e.target.style.height=e.target.scrollHeight+'px' //auto resize textarea
                }}
                // ref={(textarea)=>this.textarea=textarea}
            />
        </Box>
    )}

}

export default InputBox