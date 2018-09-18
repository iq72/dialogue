const avatar=(state='customer',action)=>{
    switch(action.type){
        case "SWITCH_DIALOGUE":
            console.log (action)
            return action.actor
        default:
            return state
    }
}
export default avatar