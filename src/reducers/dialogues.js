const dialogues = (state=[],action) =>{
    switch(action.type){
        case 'ADD_DIALOGUE':
            return [
                ...state,
                {
                    actor:action.actor,
                    act:action.act,
                    text:action.text
                }
            ]
        default:
            return state
    }
}

export default dialogues