import React from 'react'
import { connect } from 'react-redux'
import Dialogue from '../Components/Dialogue'

const Dialogues = ({dialogues}) =>(
    <div>
        {dialogues.map((dialogue,index)=>{
            return (
                <Dialogue key={index} {...dialogue} />
            )
        })}
    </div>
)


const mapStateToProps = state =>({
    dialogues : state.dialogues
})



export default connect(mapStateToProps)(Dialogues)