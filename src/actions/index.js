let i=1

export const switchDialogue = ()=>{
    i*=-1;
    console.log("action")
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
            dialogue:{
                actor:i>0?'customer':'shopkeeper',
                ...dialogue
            }
        }
)}