import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'

const StyledInput = styled.textarea`
    position:fixed;
    bottom:8px;
    display:block;
    width: calc(100% - 2em - 20px);
    left:8px;
    height:2em;
    padding:1em;
    font-size:1rem;
    border-radius:32px;
    border: solid 2px red;
    overflow:auto;
    appearance:none;
    -webkit-appearance:none;
    warp:hard;
    resize:none;

    ::after{
        width:16px;
        height:16px;
        background-color:red;
        border-radius:8px;
    }
`

const InputBox = ({actor,detectEnter}) =>(
    <div>
        <Avatar 
            actor={actor} 
            />
        <StyledInput 
            placeholder='say something'
            onKeyUp={(e)=>{detectEnter(e)}} 
            onScroll={(e)=>{
                e.target.style.height=e.target.scrollHeight+'px' //auto resize textarea
        }}/>
    </div>
)

export default InputBox