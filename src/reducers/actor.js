const actor=(state='customer',action)=>{
    switch(action.type){
        case "SWITCH_DIALOGUE":
            console.log ("switch actor")
            return action.actor
        default:
            return state
    }
}
export default actor