import styled from 'styled-components'

const Block = styled.section`
    // width:100%;
    display:${props=>props.mode==='add'?'flex':'block'};
    max-width:960px;
    // flex-direction:row;
    // align-items:flex-start;
    margin:${props=>props.mode==='edit'?'0 ':'1rem 1rem 0.5rem 1rem'};
    clear:both;
    border-left : solid 4px;
    border-left-color:${props=>props.actor==='shopkeeper'?'#09c6da':'#f582e1'};
`

export default Block