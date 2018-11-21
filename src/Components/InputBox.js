import React from 'react'
import styled from 'styled-components'
import PureContainer from './PureContainer'

const StyledTextarea = styled.textarea`
    line-height:1.5;
    font-size:${props=>props.type==='talk'?'1rem':'0.875rem'};
    font-family:system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
    font-weight:400;
    text-align:justify;
    color:${props=>props.type==='talk'?'rgba(0,0,0,0.8)':'rgba(0,0,0,0.6)'};
    overflow:auto;
    appearance:none;
    -webkit-appearance:none;
    resize:none;
    margin: 0 0.5em;
    // width:calc(100% - 1em);
    flex:1 1 auto;
    border-color:${props=>props.actor==='shopkeeper'?'#09c6da':'#f582e1'};
    border-width:0;
    padding:0;
    background:none;
    :focus {
        outline: none
    }
    
`

class InputBox extends React.Component{
    bs=0

    componentDidMount(){
        //auto focus
        this.textarea.focus();
    }

    componentDidUpdate(){//keep textbox in viewport
        this.textarea.focus();
        let bottom = this.textarea.offsetTop+this.textarea.offsetHeight;
        let viewBottom = window.pageYOffset + window.innerHeight ;
        if(viewBottom<bottom){
            window.scrollTo(0,bottom+(3*this.textarea.offsetHeight)-window.innerHeight)
        }
    }

    switchBack = ()=>{
        if(this.props.type==='act'){//'act' switch to 'talk'
            this.props.switchType(this.props.type)
            return 'content'
        }else if(this.props.mode==='edit'){//not 'act' but 'edit', switch to 'insert'
            this.props.switchMode('insert')
            return 'content'
        }else if(this.props.mode==='insert'){//not 'act' but 'insert', insert in next line
            this.props.switchActor();
            return 'dialogue'
        }else{//'add'
            this.props.switchActor();
        }
    }

    onKeyDown= (e)=>{
        //if text is empty, switchBack


        switch(this.props.mode){
            
            case 'edit':
                if(13===e.keyCode){//'enter
                    e.preventDefault();
                    this.props.changeText({
                        actor:this.props.actor,
                        dKey:this.props.dKey,
                        cKey:this.props.cKey,
                        type:this.props.type,
                        text:this.props.text
                    })
                    // this.props.switchType(this.props.type);
                    // this.props.switchActor();
                    this.props.insertAt({
                        mode:this.switchBack(),
                        actor:this.props.actor,
                        cKey:this.props.cKey,
                        dKey:this.props.dKey
                    });
                    this.props.clearText();
                    e.target.style.height='1.5em';
                }
            break;
            case 'insert':
                if(8===e.keyCode){//'backspace'
                    if(e.target.value!==''){
                            this.bs=1
                    }
                }
                if(13===e.keyCode){//'enter'
                    e.preventDefault();
                    this.props.changeText({
                        actor:this.props.actor,
                        type:this.props.type,
                        dKey:this.props.dKey,
                        cKey:this.props.cKey,
                        text:this.props.text
                    });
                    
                    if(e.shiftKey){//'shift enter' to just insert content
                        this.props.insertAt({
                            mode:'content',
                            actor:this.props.actor,
                            cKey:this.props.cKey,
                            dKey:this.props.dKey
                        })
                    }else{
                        this.props.insertAt({
                            mode:this.switchBack(),
                            actor:this.props.actor==='customer'?'shopkeeper':'customer',
                            cKey:this.props.cKey,
                            dKey:this.props.dKey
                        });
                    }
                
                    this.props.clearText();
                    e.target.style.height='1.5em';
                }
            break;
            default:
                return
        }
    };

    onKeyUp = (e)=>{
        // if('add'===this.props.mode){
        if(8===e.keyCode){//'backspace' change type
                if(''===e.target.value){
                    this.bs-=1
                    if(this.bs<0){
                        this.props.switchType(this.props.type)
                        this.bs=0
                    }
                }
        }
        if(27===e.keyCode){// 'esc' abord edting
                if(''===e.target.value){
                    this.props.clearText();
            }
        }
        // }
    }

    onBlur= (e)=>{
        console.log('blur')
        // console.log(e.target)
        this.props.changeText({
            actor:this.props.actor,
            type:this.props.type,
            dKey:this.props.dKey,
            cKey:this.props.cKey,
            text:this.props.text
        });
    }

    render(){
    return (
        <PureContainer style={{'display':'flex'}}>
            {
                this.props.type==='act'&&
                <span style={{
                    'display':'inline-block',
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
                onBlur={(e)=>this.onBlur(e)}
                onScroll={(e)=>{
                    e.target.style.height=e.target.scrollHeight+'px' //auto resize textarea
                }}
                onChange={(e)=>{this.props.edit(e.target.value)}}
                rows={'1'}
            ></StyledTextarea>
        </PureContainer>

    )}

}

export default InputBox