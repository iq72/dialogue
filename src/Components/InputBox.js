import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
    display:block;
    margin:auto;
    width: calc(100% - 36px);
    padding:0.5em;
    font-size:1rem;
    border-radius:16px;
    border: solid 2px red;
    overflow:scroll;
    ::after{
        width:16px;
        height:16px;
        background-color:red;
        border-radius:8px;
    }
`

const InputBox = ({detectEnter}) =>(
    <div>
        <StyledInput type='text' placeholder='say something' onKeyUp={(e)=>{detectEnter(e)}} />
    </div>
)

export default InputBox