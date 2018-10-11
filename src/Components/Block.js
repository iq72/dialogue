import styled from 'styled-components'

const Block = styled.section`
    display:flex;
    flex-direction:row;
    align-items:baseline;
    margin:${props=>props.mode==='edit'?'0 ':'0.5rem 1rem'};
`

export default Block