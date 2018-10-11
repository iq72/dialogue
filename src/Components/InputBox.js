import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'

const StyledTextarea = styled.textarea`
    // height:2em;
    line-height:1.5;
    font-size:1rem;
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
                // border-bottom-width: 2px ;
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
    align-items:baseline;
    // position:fixed;
    padding:1em;
    // bottom:1em;
    width: calc(100% - 2em - 20px);
    // left:8px;
    // border-radius:32px;
    // border:solid 1px rgba(0,0,0,0.06);
    // background-color:white;
    // box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    
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
            this.props.switchDialogue(1)
        }
    }

    onKeyDown= (e)=>{
        switch(this.props.type){
            case 'add':
                if(8===e.keyCode){//'backspace'
                    if(e.target.value!==''){
                        this.bs=1
                    }
                }
                if(13===e.keyCode){//'enter'
                    e.preventDefault();
                    if(e.target.value!=0){
                        this.props.addDialogue({
                            actor:this.props.actor,
                            type:this.props.mode,
                            text:e.target.value
                        });
                        if(e.shiftKey){//'shift enter' to change mode
                            if(this.props.mode==='talk'){
                                this.props.switchMode();
                            }
                        }else{
                            this.switchBack();
                        }
                    }else{//empty just switch 
                        this.switchBack()
                    }
                    this.props.clearText();
                    e.target.style.height='2em';
                }
                break;
            case 'edit':
                if(13===e.keyCode){//'enter'
                    e.preventDefault();
                    this.props.changeText({
                        dKey:this.props.dKey,
                        cKey:this.props.cKey,
                        text:this.props.text
                    })
                    this.props.switchDialogue(-1);
                    this.props.clearText();
                    e.target.style.height='2em';
                }
                break;
            default:
                return
        }
    };

    onKeyUp = (e)=>{
        if('add'===this.props.type){
            if(8===e.keyCode){//'backspace' change mode
                if(''===e.target.value){
                    this.bs-=1
                    if(this.bs<0){
                        this.props.switchMode()
                        this.bs=0
                    }
                }
            }
            if(27===e.keyCode){// 'esc' empty textarea
                if(''===e.target.value){
                    this.props.mode==='act'&&this.props.switchMode()
                }else{
                    this.props.clearText();
                }
            }
        }
    }

    render(){
    return (
        <Box mode={this.props.mode}>
            {'add'===this.props.type&&
            <Avatar 
                actor={this.props.actor} 
                onClick={(e)=>{
                    e.preventDefault();
                    this.props.switchDialogue()
                }}
            />}
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
            <StyledTextarea 
                value={this.props.text}
                placeholder='say something'
                actor={this.props.actor} 
                mode={this.props.mode}
                onKeyDown={(e)=>{this.onKeyDown(e)}}
                onKeyUp={(e)=>{this.onKeyUp(e)}} 
                onScroll={(e)=>{
                    e.target.style.height=e.target.scrollHeight+'px' //auto resize textarea
                }}
                onChange={(e)=>{this.props.editing(e.target.value)}}
            ></StyledTextarea>
        </Box>
    )}

}

export default InputBox