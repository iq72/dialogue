const count = (state=0, action) =>{
    switch (action.type){
        case 'SWITCH_DIALOGUE':
            console.log("Reducer")
            return state+1
        default:
            return state
    }
}

export default count