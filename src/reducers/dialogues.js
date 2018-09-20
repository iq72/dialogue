const dialogues = (state=[],action) =>{
    switch(action.type){
        case 'ADD_DIALOGUE':
            return ([
                ...state,
                action.dialogue
            ]);
        case 'APPEND_ACT':
            let l=state.length;
            return (state.map((dialogue,index)=>{
                // if(index==0){
                //     let d=dialogue
                //     d.act=action.act
                //     console.log (d)
                //     return d
                // }else{
                //     return dialogue
                // }
                return (
                    (index===l-1)?{
                        ...dialogue,
                        act:action.act
                    }:dialogue
                )
            }));
        default:
            return state
    }
}

export default dialogues