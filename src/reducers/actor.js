const actor=(state='customer',action)=>{
    switch(action.type){
        case "SWITCH_ACTOR":
            return action.actor
        default:
            return state
    }
}
export default actor