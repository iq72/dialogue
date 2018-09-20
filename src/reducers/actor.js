const actor=(state='customer',action)=>{
    switch(action.type){
        case "SWITCH_DIALOGUE":
            return action.actor
        default:
            return state
    }
}
export default actor