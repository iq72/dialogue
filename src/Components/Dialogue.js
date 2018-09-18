import React from 'react'
import styled from 'styled-components'

// const Name = styled.span`
//     display:block;
//     font-size:0.6rem;
//     line-height:36px;
//     color:#666
// `
const Block = styled.section`
    display:flex;
    flex-direction: ${props=>props.actor==='shopkeeper'?'row-reverse':'row'}
    margin:8px;
`
const Avatar = styled.span`
    width: 32px;
    height: 32px;
    flex:none;
    border-radius: 16px;
    background-color: ${props=>props.actor==='shopkeeper'?'#09c6da':'#f582e1'}
    
`

const Paragraph = styled.div`    
    min-height:32px;
    max-width:calc(100% - 96px);
    display:flex;
    flex-direction:column;
    align-items:flex-end;
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

const Dialogue =({actor,text,act})=>(
    <Block actor={actor}>
        <Avatar actor={actor} />
        <Paragraph actor={actor}>
                <p>{text}</p>
                {
                    act&&<p>{act}</p>
                }
        </Paragraph>
    </Block>
)

export default Dialogue