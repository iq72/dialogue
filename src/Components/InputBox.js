import React from 'react'

class InputBox extends React.Component {
    constructor(props){
        super(props);
    }

    modifyContent=(e)=>{
        let p=e.target
        let text=p.value
        console.log(text)
        
    }

    // detectEnter = (e) =>{
    //     if(13===e.keyCode){

    //     }
    // }
     
    render(){
    return(
        <div >
            <input type="text" placeholder="say something" onKeyUp={(e)=>{this.props.detectEnter(e)}}/>
        </div>
    )}
}

export default InputBox