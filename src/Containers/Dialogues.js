import React from 'react'
import { connect } from 'react-redux'
import Dialogue from '../Components/Dialogue'
import InputBox from './InputBox'
import Block from '../Components/Block'

const Dialogues = ({dialogues}) =>(
    <div>
        {dialogues.map((dialogue,index)=>{
            return (
                <Dialogue key={index} {...dialogue} />
            )
        })}
        {dialogues.length===0&&
        <Block>
            <InputBox cKey={0} dKey={0}/>
        </Block>
        }
    </div>
)


const mapStateToProps = state =>({
    dialogues : state.dialogues
})



export default connect(mapStateToProps)(Dialogues)