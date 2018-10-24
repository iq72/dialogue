import React from 'react'
import styled from 'styled-components'
import SingleP from '../Containers/SingleP'
import InputBox from '../Containers/InputBox'
import Block from './Block'

class Dialogue extends React.Component{
    
    onClick=(e)=>{
    }
    render(){
        return(
            <Block actor={this.props.actor} >
                        {
                            this.props.contents.map((content,index)=>(
                                content.mode==='edit'?
                                <InputBox key={index} mode='edit' 
                                actor={this.props.actor}
                                dKey={parseInt(this._reactInternalFiber.key,10)} cKey={index}
                                />:content.mode==='insert'?
                                <InputBox key={index} mode='insert' 
                                actor={this.props.actor}
                                dKey={parseInt(this._reactInternalFiber.key,10)} cKey={index}
                                />:
                                <SingleP actor={this.props.actor} key={index} type={content.type} dKey={parseInt(this._reactInternalFiber.key,10)} cKey={index}>{content.text}</SingleP>
                            ))
                        }
            </Block>
        )
    }
}


export default Dialogue