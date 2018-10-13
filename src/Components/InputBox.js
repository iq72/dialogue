import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import Block from './Block'


const StyledTextarea = styled.textarea`
    line-height:1.5;
    font-size:1rem;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
    font-weight:400;
    color:rgba(0,0,0,0.8);
    overflow:auto;
    appearance:none;
    -webkit-appearance:none;
    resize:none;
    margin: 0 0.5em;
    width:100%;
    flex:1 1 auto;
    border-color:${props=>props.actor==='shopkeeper'?'#09c6da':'#f582e1'};
    border-width:0;
    padding:0;
    background:none;
    ${props=>{
        if (props.type==='act'){
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

// const Box = styled.div`
//     display:flex;
//     align-items:baseline;
//     // position:fixed;
//     padding:1em;
//     // bottom:1em;
//     width: calc(100% - 2em - 20px);
//     // left:8px;
//     // border-radius:32px;
//     // border:solid 1px rgba(0,0,0,0.06);
//     // background-color:white;
//     // box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    
//     >span:hover{
//         cursor:pointer;
//         // transform:scale(1.2)
//     }
// `

class InputBox extends React.Component{
    bs=0

    componentDidMount(){
        //auto focus
        this.textarea.focus()
    }

    switchBack = ()=>{
        if(this.props.type==='act'){
            this.props.switchType()
        }else{
            this.props.switchDialogue(1)
        }
    }

    onKeyDown= (e)=>{
        switch(this.props.mode){
            case 'add':
                if(8===e.keyCode){//'backspace'
                    if(e.target.value!==''){
                        this.bs=1
                    }
                }
                if(13===e.keyCode){//'enter'
                    e.preventDefault();
                    if(e.target.value!=0){//has text
                        this.props.addDialogue({
                            actor:this.props.actor,
                            type:this.props.type,
                            text:e.target.value
                        });
                        if(e.shiftKey){//'shift enter' to change type
                            if(this.props.type==='talk'){
                                this.props.switchType();
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
        if('add'===this.props.mode){
            if(8===e.keyCode){//'backspace' change type
                if(''===e.target.value){
                    this.bs-=1
                    if(this.bs<0){
                        this.props.switchType()
                        this.bs=0
                    }
                }
            }
            if(27===e.keyCode){// 'esc' empty textarea
                if(''===e.target.value){
                    this.props.type==='act'&&this.props.switchType()
                }else{
                    this.props.clearText();
                }
            }
        }
    }

    render(){
    return (
        <Block 
            mode={this.props.mode}
            actor={this.props.actor} 
            bc={this.props.actor==='shopkeeper'?'#09c6da':'#f582e1'}
        >
            {/* {'add'===this.props.mode&&
            <Avatar 
                actor={this.props.actor} 
                onClick={(e)=>{
                    e.preventDefault();
                    this.props.switchDialogue()
                }}
            />} */}
            {
                this.props.type==='act'&&
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
                innerRef={(textarea)=>this.textarea=textarea}
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
        </Block>
    )}

}

export default InputBox