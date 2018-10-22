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
            if(!item.mode!=='text'&&item.text.match(/^\s*$/)){//dumb text, and empty
                console.log('empty')
                d.splice(i,1);
            }

        i--;}

        if (d.length<1){ 
            array.splice(m,1);
        }

    m--;}
    console.log(array)
    return array;
}

const deleteAt = (array,index)=>{
    if(array.length>index){
        array.splice(index,1);
        // return array;
    }else{
        console.log(`
            ERROR: index ${index} is out of range
        `)
    }
}

const addAt = (array, item, index)=>{
    if(index&&(array.length-1)>index){ // add in middle
        array.splice(index,0,item);
    }else{ // add to end
        array.push(DataTransferItem)
    }
    // return array;
}


const dialogues = (state=[],action) =>{
    switch(action.type){
        case 'ADD_DIALOGUE':
            if(action.content.text.match(/^\s*$/)){//text is empty, do nothing
                console.log('empty')
                return state;
            }

            let ns=[...state]; //create a new array
            let dialogue=ns[ns.length-1];
            if (dialogue&&dialogue.actor===action.actor){ // push dialogue
                dialogue.contents.push(action.content);
            }else{ //new dialogue
                ns.push({
                    actor:action.actor,
                    contents:[action.content]
                })
            }
            return ns;
        case 'INSERT_DIALOGUE':
            let nds=[...state];
            if(action.dKey<nds.length){//insert in exist dialogue
                nds[action.dKey].contents.splice(action.cKey,0,action.dialogue)// insert content
            }else{
                nds.push({
                    actor:action.actor,
                    contents:[action.dialogue]
                })
            }
            return nds;
        case 'INSERT_AT':
            if(action.mode==='content'){
                return state.map((dialogue,index)=>{
                    if(action.dKey===index){
                        dialogue.contents.splice(action.cKey+1,0,{
                            mode:'insert',
                            text:'',
                            type:'talk'
                        })
                    }
                    return dialogue    
                });
            }else{
                let nts = [...state];
                let cs = nts[action.dKey].contents;
                if (cs.length-1>action.cKey){ // insert in the middle of contents 
                    let sc = cs.splice(action.cKey+1,(cs.length-action.cKey-1)); //split it
                    nts.splice(action.dKey+1,0,{              // and add a new  contents array to dialogue
                        actor:nts[action.dKey].actor,
                        contents:sc
                    })
                }
                nts.splice(action.dKey+1,0,{  // insert Inputbox
                    actor:action.actor,
                    contents:[{
                        mode:'insert',
                        text:'',
                        type:'talk'
                    }]
                })
                return nts
            }
        case 'CHANGE_TEXT':
            let dialogues = state.map((dialogue,index)=>{
                if(action.node.dKey===index){
                    let nd={
                        ...dialogue
                    };
                    nd.contents[action.node.cKey].text=action.node.text;
                    nd.contents[action.node.cKey].mode='text';
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
                    nc.contents.map((item)=>{ //all edit set to false
                        item.mode='text'
                    });
                }
                if(action.node.dKey===index){
                    nc.contents[action.node.cKey].mode= 'edit';
                }
                return nc;
            })
        default:
            return state
    }
}

export default dialogues