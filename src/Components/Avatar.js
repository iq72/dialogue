// import React from 'react'
import styled from 'styled-components'

const Avatar = styled.span`
    display:inline-block;
    width: 10px;
    height: 10px;
    flex:none;
    border-radius: 5px;
    margin-top:0.5rem;
    background-color: ${props=>props.actor==='shopkeeper'?'#09c6da':'#f582e1'}
    
`
export default Avatar