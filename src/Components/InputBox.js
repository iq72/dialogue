import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import Block from './Block'


const StyledTextarea = styled.textarea`
    line-height:1.5;
    font-size:${props=>props.type==='talk'?'1rem':'0.875rem'};
    font-family:system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
    font-weight:400;
    color:${props=>props.type==='talk'?'rgba(0,0,0,0.8)':'rgba(0,0,0,0.6)'};
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
        console.log("mounted");
        this.textarea.focus();
    }

    componentDidUpdate(){//keep textbox in viewport
        console.log("updated");
        this.textarea.focus();
        let bottom = this.textarea.offsetTop+this.textarea.offsetHeight;
        let viewBottom = window.pageYOffset + window.innerHeight ;
        if(viewBottom<bottom){
            console.log("bellow");
            window.scrollTo(0,bottom+(3*this.textarea.offsetHeight)-window.innerHeight)
        }
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
                    e.target.style.height='1.5em';
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
                    e.target.style.height='1.5em';
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
                    // 'backgroundColor': this.props.actor==='shopkeeper'?'#09c6da':'#f582e1',
                    'backgroundColor': 'rgba(0,0,0,0.1)',
                    'color': 'rgba(0,0,0,0.8)',
                    'fontSize': '0.5em',
                    'fontWeight': '400',
                    'letterSpacing': '2px',
                    'padding': '0 0.5em',
                    'margin': '3px 0 0 0.5rem',
                    'height':'18px',
                    'opacity': '0.8'
                }}>act</span>
            }
            <StyledTextarea 
                value={this.props.text}
                innerRef={(textarea)=>this.textarea=textarea}
                placeholder='say something'
                actor={this.props.actor} 
                mode={this.props.mode}
                type={this.props.type}
                onKeyDown={(e)=>{this.onKeyDown(e)}}
                onKeyUp={(e)=>{this.onKeyUp(e)}} 
                onScroll={(e)=>{
                    e.target.style.height=e.target.scrollHeight+'px' //auto resize textarea
                }}
                onChange={(e)=>{this.props.editing(e.target.value)}}
                rows={'1'}
            ></StyledTextarea>
        </Block>
    )}

}

export default InputBox