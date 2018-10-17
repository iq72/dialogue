const deletItemFromArray =(array, item)=>{
    array.splice(array.indexOf(item));
}

const deleteEmpty = (array) =>{
    let d,i,item,m=array.length-1;
    while(m>-1){
         d=array[m].contents;
         i=d.length-1;
        while(i>-1){
            item=d[i]
            if(!item.editing&&item.text==0&&item.text!=='0'){
                d.splice(i,1);
            }

        i--;}

        if (d.length<1){ 
            array.splice(m,1);
        }

    m--;}

    return array;
}

const dialogues = (state=[],action) =>{
    switch(action.type){
        case 'ADD_DIALOGUE':
            if(action.dialogue.text==0&&action.dialogue.text!=='0'){//text is empty, do nothing
                return state;
            }
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
        case 'CHANGE_TEXT':
            let dialogues = state.map((dialogue,index)=>{
                if(action.node.dKey===index){
                    let nd={
                        ...dialogue
                    };
                    nd.contents[action.node.cKey].text=action.node.text;
                    nd.contents[action.node.cKey].editing=false;
                    return nd;
                }else{
                    return dialogue;
                }
            });
            return (deleteEmpty(dialogues)); // delete empty items

            case 'START_EDITING':
            return state.map((dialogue,index)=>{
                let nc={ ...dialogue };
                if(nc.contents.length>0){
                    nc.contents.map((item)=>{ //all editing set to false
                        item.editing=false
                    });
                }
                if(action.node.dKey===index){
                    nc.contents[action.node.cKey].editing= true;
                }
                return nc;
            })
        default:
            return state
    }
}

export default dialogues