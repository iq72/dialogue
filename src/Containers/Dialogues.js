import React from 'react'
import { connect } from 'react-redux'
import Dialogue from '../Components/Dialogue'

// const Dialogues = (dialogues)=>{
//     return(
//         <div>
//             {this.props&&this.props.dialogues.length>0&&
//             this.props.dialogues.map((dialogue,index)=>{
//                 return (
//                     <Dialogue key={index} {...dialogue} />
//                 )
//             })}
//         </div>
//     )
// }

class Dialogues extends React.Component{
    render(){
        return(
            <div>
            {this.props.dialogues.map((dialogue,index)=>{
                return (
                    <Dialogue key={index} {...dialogue} />
                )
            })}
        </div>
        )
    }
}

const mapStateToProps = state =>({
    dialogues : state.dialogues
})

export default connect(mapStateToProps)(Dialogues)