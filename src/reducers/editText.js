const editText = (state,action)=>{
    switch(action.type){
        case 'EDIT_TEXT':
            return {
                ...state,
                text:action.text
            }
        default:
            return state
    }
}

export default editText