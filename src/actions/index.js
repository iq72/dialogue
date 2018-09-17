

export const switchDialogue = ()=>({
    type: 'SWITCH_DIALOGUE',
    payload: 'result_of_switch_dialogue' 
})

export const editText = (text)=>({
    type: 'EDIT_TEXT',
    text
})

export const addDialogue = (dialogue) =>({
    type:'ADD_DIALOGUE',
    dialogue
})