import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'

const StyledInput = styled.textarea`
    height:2em;
    line-height:2;
    font-size:1rem;
    overflow:auto;
    appearance:none;
    -webkit-appearance:none;
    resize:none;
    margin: 0 1em;
    flex:1 1 auto;
    border: none;
    :focus {
        outline: none
    }
    
`

const Box = styled.div`
    display:flex;
    align-items:flex-end;
    position:fixed;
    padding:1em;
    bottom:1em;
    width: calc(100% - 2em - 20px);
    left:8px;
    border-radius:32px;
    // border: solid 2px;
    background-color:white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);

    // border-color:${props=>props.actor==='shopkeeper'?'#09c6da':'#f582e1'}

    >span:hover{
        cursor:pointer;
        transform:scale(1.2)
    }
`

const InputBox = ({actor,switchDialogue,detectEnter}) =>(
    <Box actor={actor}>
        <Avatar 
            actor={actor} 
            onClick={(e)=>{
                e.preventDefault();
                console.log("clicked")
                switchDialogue()
            }}
        />
        <StyledInput 
            placeholder='say something'
            // onKeyDown={(e)=>{
            //     console.log("keydown")
            //     console.log(e.target.value)
            //     e.preventDefault()
            // }}
            onKeyDown={(e)=>{detectEnter(e)}} 
            onScroll={(e)=>{
                e.target.style.height=e.target.scrollHeight+'px' //auto resize textarea
        }}/>
    </Box>
)

export default InputBox