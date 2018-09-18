// import React from 'react'
import styled from 'styled-components'

const Avatar = styled.span`
    display:block;
    width: 32px;
    height: 32px;
    flex:none;
    border-radius: 16px;
    background-color: ${props=>props.actor==='shopkeeper'?'#09c6da':'#f582e1'}
    
`
export default Avatar