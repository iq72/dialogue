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
    >p {
        background-color:rgba(0,0,0,0.1);
        border-radius:32px;
        // min-width:8ch; 
        padding:1em;
        margin:8px;
        word-break:break-all
    }
    >p:nth-child(2n) {
        color: #666;
        font-size: 0.8em;
        // margin-left:3em;
        width:calc(100%-24px);
        background-color: rgba(0,0,0,0.05);
    }

`

const Dialogue =({actor,text,act})=>(
    <Block actor={actor}>
        <Avatar actor={actor} />
        <Paragraph>
                <p>{text}</p>
                {
                    act&&<p>{act}</p>
                }
        </Paragraph>
    </Block>
)

export default Dialogue