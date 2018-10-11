import styled from 'styled-components'

const Block = styled.section`
    // width:100%;
    display:flex;
    max-width:960px;
    flex-direction:row;
    align-items:flex-start;
    margin:${props=>props.mode==='edit'?'0 ':'0.5rem 1rem'};
`

export default Block