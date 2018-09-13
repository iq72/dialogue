import React from 'react'



export default class Dialogue extends React.Component{
    render(){
        return(
            <div>
                <span>{this.props.actor}</span>
                <p>{this.props.text}</p>
                <p>{this.props.act}</p>
            </div>
        )
    }
}
