import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import SingleP from '../Containers/SingleP'

const Block = styled.section`
    display:flex;
    flex-direction: ${props=>props.actor==='shopkeeper'?'row-reverse':'row'}
    margin:8px 16px;
`

// const SP = styled.p`
//     font-family:system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
//     "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
//     "Droid Sans", "Helvetica Neue", sans-serif;
//     display:inline-flex;
//     color:rgba(0,0,0,0.75);
//     font-size:${props=>props.type==='act'?'0.8em':'1em'};
//     background-color:${props=>props.type==='act'?'rgba(0,0,0,0.08)':'rgba(0,0,0,0.04)'};
//     border-radius:32px;
//     padding:1em;
//     margin:4px 8px;
//     word-break:break-all;
// `


const SDiv = styled.div`    
    min-height:32px;
    max-width:calc(100% - 96px);
    display:flex;
    flex-direction:column;
    align-items:${props=>'shopkeeper'===props.actor?'flex-end':'flex-start'};
    // >p.act {
    //     // align-self:${props=>'shopkeeper'===props.actor?'flex-start':'flex-end'};
    //     color:rgba(0,0,0,0.75);
    //     font-size: 0.8em;
    //     // margin-left:3em;
    //     background-color: rgba(0,0,0,0.04);

    // }

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
                <Avatar actor={this.props.actor} />
                <SDiv actor={this.props.actor}>
                        {
                            this.props.contents.map((content,index)=>(
                                <SingleP key={index} type={content.type} dKey={parseInt(this._reactInternalFiber.key)} cKey={index}>{content.text}</SingleP>
                            ))
                        }
                </SDiv>
            </Block>
            // </div>
        )
    }
}


export default Dialogue