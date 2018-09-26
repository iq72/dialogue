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
        font-family:system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
        "Droid Sans", "Helvetica Neue", sans-serif;
        display:inline-flex;
        color:rgba(0,0,0,0.75);
        background-color:rgba(0,0,0,0.08);
        border-radius:32px;
        padding:1em;
        margin:8px;
        word-break:break-all
    }
    >p.act {
        align-self:${props=>'shopkeeper'===props.actor?'flex-start':'flex-end'};
        color:rgba(0,0,0,0.75);
        font-size: 0.8em;
        // margin-left:3em;
        background-color: rgba(0,0,0,0.04);

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
                        {
                            this.props.contents.map(content=>(
                                <p className={content.type}>{content.text}</p>
                            ))
                        }
                </Paragraph>
            </Block>
            </div>
        )
    }
}


export default Dialogue