import React from 'react'
import { connect } from 'react-redux'
import InputBox from './InputBox'

const AddInput = ({mode})=>(
    <div>
        {mode==='add'&&
            <InputBox mode='add' />
        }
    </div>
)

const mapStateToProps = ({inputBox})=>({
    mode:inputBox.mode
})

export default connect(mapStateToProps)(AddInput)