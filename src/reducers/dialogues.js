const dialogues = (state=[],action) =>{
    switch(action.type){
        case 'ADD_DIALOGUE':
            return [
                ...state,
                action.dialogue
            ]
        default:
            return state
    }
}

export default dialogues