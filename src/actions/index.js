let i=1
let k=1

export const switchMode = ()=>{
    k*=-1
    return({
        type:'SWITCH_MODE',
        mode:k>0?'talk':'act'
    })
}

export const switchDialogue = (step)=>{
    i*=-(step||1);
    return({
        type: 'SWITCH_DIALOGUE',
        actor:i>0?'customer':'shopkeeper'
    })
}
export const changeText = (node)=>({
    type: 'CHANGE_TEXT',
    ...node
})

export const startEditing = (node)=>({
    type: 'START_EDITING',
    node
})

export const editing = (text)=>({
    type: 'EDITING',
    text
})

export const clearText = ()=>({
    type: 'CLEAR_TEXT'
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