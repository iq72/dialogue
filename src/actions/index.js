let i=1
let k=1

export const switchMode = ()=>{
    k*=-1
    return({
        type:'SWITCH_MODE',
        mode:k>0?'dialogue':'act'
    })
}

export const switchDialogue = ()=>{
    i*=-1;
    return({
        type: 'SWITCH_DIALOGUE',
        actor:i>0?'customer':'shopkeeper'
    })
}
export const editText = (text)=>({
    type: 'EDIT_TEXT',
    text
})

export const addDialogue = (dialogue) =>{
    return (
        {
            type:'ADD_DIALOGUE',
            actor:dialogue.actor,
            dialogue:{
                type:dialogue.type,
                text:dialogue.text
            }
        }
)}