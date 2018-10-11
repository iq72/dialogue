const dialogues = (state=[],action) =>{
    switch(action.type){
        case 'ADD_DIALOGUE':
            let ns=[...state]; //create a new array
            let dialogue=ns[ns.length-1];
            if (dialogue&&dialogue.actor===action.actor){ // append dialogue
                dialogue.contents.push(action.dialogue)
            }else{ //new dialogue
                ns.push({
                    actor:action.actor,
                    contents:[action.dialogue]
                })
            }
            return ns;
        case 'APPEND_ACT':
            let nas=[...state]; //create a new array
            let dg=nas[nas.length-1];
            if (dg&&dg.actor===action.actor){ // append dialogue
                dg.content.push(action.dialogue)
            }else{ //new dialogue
                nas.push({
                    actor:action.actor,
                    content:[action.dialogue]
                })
            }
        return nas;
        case 'CHANGE_TEXT':
            console.log('redux change_text')
            return state.map((dialogue,index)=>{
                if(action.dKey===index){
                    let nd={
                        ...dialogue
                    };
                    nd.contents[action.cKey].text=action.text;
                    return nd;
                }else{
                    return dialogue;
                }
            })
        case 'START_EDITING':
            console.log('reducer START_EDITING');
            return state.map((dialogue,index)=>{
                if(action.dKey===index){
                    let nc={ ...dialogue };
                    nc.contents[action.cKey].editing= true;
                    return nc;
                }else{
                    return dialogue;
                }
            })
        default:
            return state
    }
}

export default dialogues