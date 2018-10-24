// let i=0


export const switchType = (t)=>{
    return({
        type:'SWITCH_TYPE',
        t:t==='talk'?'act':'talk'
    })
}

export const switchActor = (actor)=>{

    return({
        type: 'SWITCH_ACTOR',
        actor
    })
}

export const switchMode = (mode) =>{
    return({
        type: 'SWITCH_MODE',
        mode
    })
}

export const insertAt = (obj)=>{
    return({
        type:'INSERT_AT',
        ...obj
    })
}

export const changeText = (node)=>({//change text of content
    type: 'CHANGE_TEXT',
    node
})

export const startEditing = (node)=>({
    type: 'START_EDITING',
    node
})

export const edit = (text)=>({
    type: 'EDITING',
    text
})

export const clearText = ()=>({
    type: 'CLEAR_TEXT'
})

export const addDialogue = (dialogue,pos) =>{
    return (
        {
            type:'ADD_DIALOGUE',
            actor:dialogue.actor,
            pos:pos,
            content:{
                type:dialogue.type,
                mode:'text',
                text:dialogue.text
            }
        }
)}

export const insertDialogue = (dialogue) =>{
    return(
        {
            type:'INSERT_DIALOGUE',
            actor:dialogue.actor,
            cKey:dialogue.cKey,
            dKey:dialogue.dKey,
            content:{
                type:dialogue.type,
                mode:'text',
                text:dialogue.text
            }
        }
    )
}

export const ex2JSON = () =>({
    type:'EX2JSON'
})