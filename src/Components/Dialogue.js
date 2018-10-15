import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import SingleP from '../Containers/SingleP'
import InputBox from '../Containers/InputBox'
import Block from './Block'
import AddInput from '../Containers/AddInput';


// const Block = styled.section`
//     display:flex;
//     // flex-direction: ${props=>props.actor==='shopkeeper'?'row-reverse':'row'};
//     flex-direction:row;
//     align-items:baseline;
//     margin:8px 16px;
// `

const SDiv = styled.div`    
    // min-height:32px;
    // max-width:calc(100% - 6ch);
    // display:flex;
    // flex-direction:column;
    // align-items:${props=>'shopkeeper'===props.actor?'flex-end':'flex-start'};
    // alig-items:flex-start;
    width:100%;
    border-left-width:4px;
    border-left-style:solid;
    border-left-color:${props=>props.actor==='shopkeeper'?'#09c6da':'#f582e1'};
`

class Dialogue extends React.Component{
    componentDidMount(){
        //auto scroll to bottom 
        window.scrollTo(0,document.body.scrollHeight);
    }
    componentDidUpdate(){
        //auto scroll to bottom 
        window.scrollTo(0,document.body.scrollHeight);
    }
    onClick=(e)=>{
        console.log("get clicked")
    }
    render(){
        return(
            // <div ref={(div)=>this.div=div}>
            <Block actor={this.props.actor} >
                {/* <Avatar actor={this.props.actor} /> */}
                {/* <SDiv actor={this.props.actor}> */}
                        {
                            this.props.contents.map((content,index)=>(
                                content.editing?
                                <InputBox key={index} type='edit' actor={this.props.actor}/>:
                                <SingleP key={index} type={content.type} dKey={parseInt(this._reactInternalFiber.key,10)} cKey={index}>{content.text}</SingleP>
                            ))
                        }
                {/* </SDiv> */}
            </Block>
            // </div>
        )
    }
}


export default Dialogue