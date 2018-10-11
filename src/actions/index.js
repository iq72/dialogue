// let i=0
let k=1


export const switchType = ()=>{
    k*=-1
    return({
        type:'SWITCH_TYPE',
        t:k>0?'talk':'act'
    })
}

export const switchDialogue = (actor)=>{

    return({
        type: 'SWITCH_DIALOGUE',
        actor
    })
}
export const changeText = (node)=>({
    type: 'CHANGE_TEXT',
    node
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
                editing:false,
                text:dialogue.text
            }
        }
)}