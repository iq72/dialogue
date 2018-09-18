import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'

const Block = styled.section`
    display:flex;
    flex-direction: ${props=>props.actor==='shopkeeper'?'row-reverse':'row'}
    margin:8px;
`


const Paragraph = styled.div`    
    min-height:32px;
    max-width:calc(100% - 96px);
    display:flex;
    flex-direction:column;
    align-items:${props=>'shopkeeper'===props.actor?'flex-end':'flex-start'};
    >p {
        display:inline-flex;
        background-color:rgba(0,0,0,0.1);
        border-radius:32px;
        padding:1em;
        margin:8px;
        word-break:break-all
    }
    >p:nth-child(2n) {
        align-self:${props=>'shopkeeper'===props.actor?'flex-start':'flex-end'};
        color: #666;
        font-size: 0.8em;
        // margin-left:3em;
        background-color: rgba(0,0,0,0.05);

    }

`

class Dialogue extends React.Component{
    componentDidMount(){
        //auto scroll to bottom 
        window.scrollTo(0,document.body.scrollHeight);
    }
    render(){
        return(
            <div ref={(div)=>this.div=div}>
            <Block actor={this.props.actor} >
                <Avatar actor={this.props.actor} />
                <Paragraph actor={this.props.actor}>
                        <p>{this.props.text}</p>
                        {
                            this.props.act&&<p>{this.props.act}</p>
                        }
                </Paragraph>
            </Block>
            </div>
        )
    }
}


export default Dialogue