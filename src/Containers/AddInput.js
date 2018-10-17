import React from 'react'
import { connect } from 'react-redux'
import InputBox from './InputBox'
import Block from '../Components/Block'

const AddInput = ({actor,mode})=>(
    <Block actor={actor}>
        {mode==='add'&&
            <InputBox mode='add' />
        }
    </Block>
)

const mapStateToProps = ({inputBox})=>({
    actor:inputBox.actor,
    mode:inputBox.mode
})

export default connect(mapStateToProps)(AddInput)